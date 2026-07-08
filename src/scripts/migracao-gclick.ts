import 'dotenv/config';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/index.js';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function migrarDados() {
  const clientId = process.env.GCLICK_CLIENT_ID!;
  const clientSecret = process.env.GCLICK_CLIENT_SECRET!;

  // ETAPA 1: Gerar o Token de Acesso
  const respostaAuth = await fetch('https://api.gclick.com.br/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // <-- Alterado aqui
    body: new URLSearchParams({                                       // <-- Alterado aqui
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials' 
    })
  });

  if (!respostaAuth.ok) {
    const erroTexto = await respostaAuth.text();
    throw new Error(`Falha Auth HTTP ${respostaAuth.status}: ${erroTexto}`);
  }

  const authDados = await respostaAuth.json();
  const token = authDados.access_token;

  if (!token) {
    throw new Error("Falha na autenticação. Verifique as credenciais.");
  }

  let pagina = 1;
  let extraindo = true;

  while (extraindo) {
    const respostaClientes = await fetch(`https://api.gclick.com.br/v1/clientes?page=${pagina}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!respostaClientes.ok) {
      const erroTexto = await respostaClientes.text();
      throw new Error(`Falha Clientes HTTP ${respostaClientes.status}: ${erroTexto}`);
    }

    const jsonClientes = await respostaClientes.json();
    
    // Variável 'clientes' e condição de parada do loop reinseridas
    const clientes = jsonClientes.data; 

    if (!clientes || clientes.length === 0) {
      extraindo = false;
      break;
    }

    for (const cliente of clientes) {
      await prisma.empresa.upsert({
        where: { 
          cnpj: cliente.cnpj 
        },
        update: {
          razaoSocial: cliente.razao_social,
          nomeFantasia: cliente.nome_fantasia
        },
        create: {
          cnpj: cliente.cnpj,
          razaoSocial: cliente.razao_social,
          nomeFantasia: cliente.nome_fantasia,
          endereco: cliente.endereco || "Não informado",
          produtoOuServico: "A DEFINIR",
          capitalSocial: 0.0,
          ramoAtuacao: "A DEFINIR",
          regimeTributario: cliente.regime_tributario || "A DEFINIR",
        }
      });
    }

    console.log(`Página ${pagina} processada.`);
    pagina++;
  }
}

migrarDados()
  .then(() => console.log("Migração concluída com sucesso."))
  .catch((erro) => console.error("Erro na migração:", erro))
  .finally(async () => {
    await prisma.$disconnect();
  });