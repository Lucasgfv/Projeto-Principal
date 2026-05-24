import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { 
  jsonSchemaTransform, 
  serializerCompiler, 
  validatorCompiler, 
  hasZodSchema,
  ZodTypeProvider
} from 'fastify-type-provider-zod';
import { z } from 'zod';

const fastify = Fastify({ logger: true });

// 1. Configurar o Fastify para usar o Zod como validador e serializador
fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

// 2. Registrar o Swagger para gerar a especificação OpenAPI (v3)
fastify.register(fastifySwagger, {
  openapi: {
    info: { 
      title: 'Minha API Fastify', 
      description: 'Documentação do servidor com Zod e Swagger',
      version: '1.0.0' 
    },
  },
  transform: jsonSchemaTransform,
});

// 3. Registrar a interface gráfica do Swagger
fastify.register(fastifySwaggerUi, { 
  routePrefix: '/docs' 
});

// 4. Criar rotas validadas usando o Type Provider do Zod
fastify.after(() => {
  // Rota de exemplo: Criar Usuário (POST)
  fastify.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        description: 'Cria um novo usuário no sistema',
        tags: ['Usuários'],
        body: z.object({
          name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
          email: z.string().email("E-mail inválido"),
          password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
        }),
        response: {
          201: z.object({
            id: z.string().uuid(),
            message: z.string()
          })
        }
      },
    },
    async (request, reply) => {
      // Aqui os dados já chegam 100% validados e com Intelisense/Tipagem automática!
      const { name, email, password } = request.body;

      // Retorno simulado (deve seguir exatamente o schema de resposta 201)
      return reply.status(201).send({
        id: "e3b0c442-98fc-1c14-9bd4-3a6559304042",
        message: `Usuário ${name} criado com sucesso!`
      });
    }
  );
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Servidor rodando em http://localhost:3000');
    console.log('📝 Documentação disponível em http://localhost:3000/docs');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();