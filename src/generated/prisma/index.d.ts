
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Socio
 * 
 */
export type Socio = $Result.DefaultSelection<Prisma.$SocioPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model AlteracaoContratual
 * 
 */
export type AlteracaoContratual = $Result.DefaultSelection<Prisma.$AlteracaoContratualPayload>
/**
 * Model Alvara
 * 
 */
export type Alvara = $Result.DefaultSelection<Prisma.$AlvaraPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RankingCliente: {
  C: 'C',
  B: 'B',
  A: 'A',
  S: 'S',
  SS: 'SS'
};

export type RankingCliente = (typeof RankingCliente)[keyof typeof RankingCliente]


export const TipoCliente: {
  FIXO: 'FIXO',
  AVULSO: 'AVULSO'
};

export type TipoCliente = (typeof TipoCliente)[keyof typeof TipoCliente]

}

export type RankingCliente = $Enums.RankingCliente

export const RankingCliente: typeof $Enums.RankingCliente

export type TipoCliente = $Enums.TipoCliente

export const TipoCliente: typeof $Enums.TipoCliente

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socio`: Exposes CRUD operations for the **Socio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socios
    * const socios = await prisma.socio.findMany()
    * ```
    */
  get socio(): Prisma.SocioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alteracaoContratual`: Exposes CRUD operations for the **AlteracaoContratual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlteracaoContratuals
    * const alteracaoContratuals = await prisma.alteracaoContratual.findMany()
    * ```
    */
  get alteracaoContratual(): Prisma.AlteracaoContratualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alvara`: Exposes CRUD operations for the **Alvara** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alvaras
    * const alvaras = await prisma.alvara.findMany()
    * ```
    */
  get alvara(): Prisma.AlvaraDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Empresa: 'Empresa',
    Socio: 'Socio',
    Funcionario: 'Funcionario',
    AlteracaoContratual: 'AlteracaoContratual',
    Alvara: 'Alvara'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresa" | "socio" | "funcionario" | "alteracaoContratual" | "alvara"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Socio: {
        payload: Prisma.$SocioPayload<ExtArgs>
        fields: Prisma.SocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findFirst: {
            args: Prisma.SocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findMany: {
            args: Prisma.SocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          create: {
            args: Prisma.SocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          createMany: {
            args: Prisma.SocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          delete: {
            args: Prisma.SocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          update: {
            args: Prisma.SocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          deleteMany: {
            args: Prisma.SocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          upsert: {
            args: Prisma.SocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          aggregate: {
            args: Prisma.SocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocio>
          }
          groupBy: {
            args: Prisma.SocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocioCountArgs<ExtArgs>
            result: $Utils.Optional<SocioCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      AlteracaoContratual: {
        payload: Prisma.$AlteracaoContratualPayload<ExtArgs>
        fields: Prisma.AlteracaoContratualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlteracaoContratualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlteracaoContratualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          findFirst: {
            args: Prisma.AlteracaoContratualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlteracaoContratualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          findMany: {
            args: Prisma.AlteracaoContratualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>[]
          }
          create: {
            args: Prisma.AlteracaoContratualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          createMany: {
            args: Prisma.AlteracaoContratualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlteracaoContratualCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>[]
          }
          delete: {
            args: Prisma.AlteracaoContratualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          update: {
            args: Prisma.AlteracaoContratualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          deleteMany: {
            args: Prisma.AlteracaoContratualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlteracaoContratualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlteracaoContratualUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>[]
          }
          upsert: {
            args: Prisma.AlteracaoContratualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlteracaoContratualPayload>
          }
          aggregate: {
            args: Prisma.AlteracaoContratualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlteracaoContratual>
          }
          groupBy: {
            args: Prisma.AlteracaoContratualGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlteracaoContratualGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlteracaoContratualCountArgs<ExtArgs>
            result: $Utils.Optional<AlteracaoContratualCountAggregateOutputType> | number
          }
        }
      }
      Alvara: {
        payload: Prisma.$AlvaraPayload<ExtArgs>
        fields: Prisma.AlvaraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlvaraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlvaraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          findFirst: {
            args: Prisma.AlvaraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlvaraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          findMany: {
            args: Prisma.AlvaraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>[]
          }
          create: {
            args: Prisma.AlvaraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          createMany: {
            args: Prisma.AlvaraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlvaraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>[]
          }
          delete: {
            args: Prisma.AlvaraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          update: {
            args: Prisma.AlvaraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          deleteMany: {
            args: Prisma.AlvaraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlvaraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlvaraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>[]
          }
          upsert: {
            args: Prisma.AlvaraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlvaraPayload>
          }
          aggregate: {
            args: Prisma.AlvaraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlvara>
          }
          groupBy: {
            args: Prisma.AlvaraGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlvaraGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlvaraCountArgs<ExtArgs>
            result: $Utils.Optional<AlvaraCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit
    socio?: SocioOmit
    funcionario?: FuncionarioOmit
    alteracaoContratual?: AlteracaoContratualOmit
    alvara?: AlvaraOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    socios: number
    funcionarios: number
    alteracoesContratuais: number
    alvaras: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | EmpresaCountOutputTypeCountSociosArgs
    funcionarios?: boolean | EmpresaCountOutputTypeCountFuncionariosArgs
    alteracoesContratuais?: boolean | EmpresaCountOutputTypeCountAlteracoesContratuaisArgs
    alvaras?: boolean | EmpresaCountOutputTypeCountAlvarasArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountSociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocioWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountAlteracoesContratuaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlteracaoContratualWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountAlvarasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlvaraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    tempoEmpresaMeses: number | null
    capitalSocial: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    tempoEmpresaMeses: number | null
    capitalSocial: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    inscricaoMunicipal: string | null
    endereco: string | null
    tempoEmpresaMeses: number | null
    dataFundacao: Date | null
    dataEntradaContabilidade: Date | null
    contadorAnterior: string | null
    produtoOuServico: string | null
    capitalSocial: number | null
    ramoAtuacao: string | null
    participaLicitacao: boolean | null
    tipoCliente: $Enums.TipoCliente | null
    regimeTributario: string | null
    dataBaixa: Date | null
    pendenciasFiscaisGov: boolean | null
    rankingCliente: $Enums.RankingCliente | null
    ultimaAtualizacaoBanc: Date | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    inscricaoMunicipal: string | null
    endereco: string | null
    tempoEmpresaMeses: number | null
    dataFundacao: Date | null
    dataEntradaContabilidade: Date | null
    contadorAnterior: string | null
    produtoOuServico: string | null
    capitalSocial: number | null
    ramoAtuacao: string | null
    participaLicitacao: boolean | null
    tipoCliente: $Enums.TipoCliente | null
    regimeTributario: string | null
    dataBaixa: Date | null
    pendenciasFiscaisGov: boolean | null
    rankingCliente: $Enums.RankingCliente | null
    ultimaAtualizacaoBanc: Date | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    razaoSocial: number
    nomeFantasia: number
    cnpj: number
    inscricaoEstadual: number
    inscricaoMunicipal: number
    endereco: number
    tempoEmpresaMeses: number
    dataFundacao: number
    dataEntradaContabilidade: number
    contadorAnterior: number
    produtoOuServico: number
    capitalSocial: number
    ramoAtuacao: number
    participaLicitacao: number
    tipoCliente: number
    regimeTributario: number
    dataBaixa: number
    pendenciasFiscaisGov: number
    rankingCliente: number
    ultimaAtualizacaoBanc: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    tempoEmpresaMeses?: true
    capitalSocial?: true
  }

  export type EmpresaSumAggregateInputType = {
    tempoEmpresaMeses?: true
    capitalSocial?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    inscricaoMunicipal?: true
    endereco?: true
    tempoEmpresaMeses?: true
    dataFundacao?: true
    dataEntradaContabilidade?: true
    contadorAnterior?: true
    produtoOuServico?: true
    capitalSocial?: true
    ramoAtuacao?: true
    participaLicitacao?: true
    tipoCliente?: true
    regimeTributario?: true
    dataBaixa?: true
    pendenciasFiscaisGov?: true
    rankingCliente?: true
    ultimaAtualizacaoBanc?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    inscricaoMunicipal?: true
    endereco?: true
    tempoEmpresaMeses?: true
    dataFundacao?: true
    dataEntradaContabilidade?: true
    contadorAnterior?: true
    produtoOuServico?: true
    capitalSocial?: true
    ramoAtuacao?: true
    participaLicitacao?: true
    tipoCliente?: true
    regimeTributario?: true
    dataBaixa?: true
    pendenciasFiscaisGov?: true
    rankingCliente?: true
    ultimaAtualizacaoBanc?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    inscricaoEstadual?: true
    inscricaoMunicipal?: true
    endereco?: true
    tempoEmpresaMeses?: true
    dataFundacao?: true
    dataEntradaContabilidade?: true
    contadorAnterior?: true
    produtoOuServico?: true
    capitalSocial?: true
    ramoAtuacao?: true
    participaLicitacao?: true
    tipoCliente?: true
    regimeTributario?: true
    dataBaixa?: true
    pendenciasFiscaisGov?: true
    rankingCliente?: true
    ultimaAtualizacaoBanc?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    razaoSocial: string
    nomeFantasia: string | null
    cnpj: string
    inscricaoEstadual: string | null
    inscricaoMunicipal: string | null
    endereco: string
    tempoEmpresaMeses: number | null
    dataFundacao: Date | null
    dataEntradaContabilidade: Date | null
    contadorAnterior: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao: boolean
    tipoCliente: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa: Date | null
    pendenciasFiscaisGov: boolean
    rankingCliente: $Enums.RankingCliente
    ultimaAtualizacaoBanc: Date | null
    criadoEm: Date
    atualizadoEm: Date
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    inscricaoMunicipal?: boolean
    endereco?: boolean
    tempoEmpresaMeses?: boolean
    dataFundacao?: boolean
    dataEntradaContabilidade?: boolean
    contadorAnterior?: boolean
    produtoOuServico?: boolean
    capitalSocial?: boolean
    ramoAtuacao?: boolean
    participaLicitacao?: boolean
    tipoCliente?: boolean
    regimeTributario?: boolean
    dataBaixa?: boolean
    pendenciasFiscaisGov?: boolean
    rankingCliente?: boolean
    ultimaAtualizacaoBanc?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    socios?: boolean | Empresa$sociosArgs<ExtArgs>
    funcionarios?: boolean | Empresa$funcionariosArgs<ExtArgs>
    alteracoesContratuais?: boolean | Empresa$alteracoesContratuaisArgs<ExtArgs>
    alvaras?: boolean | Empresa$alvarasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    inscricaoMunicipal?: boolean
    endereco?: boolean
    tempoEmpresaMeses?: boolean
    dataFundacao?: boolean
    dataEntradaContabilidade?: boolean
    contadorAnterior?: boolean
    produtoOuServico?: boolean
    capitalSocial?: boolean
    ramoAtuacao?: boolean
    participaLicitacao?: boolean
    tipoCliente?: boolean
    regimeTributario?: boolean
    dataBaixa?: boolean
    pendenciasFiscaisGov?: boolean
    rankingCliente?: boolean
    ultimaAtualizacaoBanc?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    inscricaoMunicipal?: boolean
    endereco?: boolean
    tempoEmpresaMeses?: boolean
    dataFundacao?: boolean
    dataEntradaContabilidade?: boolean
    contadorAnterior?: boolean
    produtoOuServico?: boolean
    capitalSocial?: boolean
    ramoAtuacao?: boolean
    participaLicitacao?: boolean
    tipoCliente?: boolean
    regimeTributario?: boolean
    dataBaixa?: boolean
    pendenciasFiscaisGov?: boolean
    rankingCliente?: boolean
    ultimaAtualizacaoBanc?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    inscricaoMunicipal?: boolean
    endereco?: boolean
    tempoEmpresaMeses?: boolean
    dataFundacao?: boolean
    dataEntradaContabilidade?: boolean
    contadorAnterior?: boolean
    produtoOuServico?: boolean
    capitalSocial?: boolean
    ramoAtuacao?: boolean
    participaLicitacao?: boolean
    tipoCliente?: boolean
    regimeTributario?: boolean
    dataBaixa?: boolean
    pendenciasFiscaisGov?: boolean
    rankingCliente?: boolean
    ultimaAtualizacaoBanc?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razaoSocial" | "nomeFantasia" | "cnpj" | "inscricaoEstadual" | "inscricaoMunicipal" | "endereco" | "tempoEmpresaMeses" | "dataFundacao" | "dataEntradaContabilidade" | "contadorAnterior" | "produtoOuServico" | "capitalSocial" | "ramoAtuacao" | "participaLicitacao" | "tipoCliente" | "regimeTributario" | "dataBaixa" | "pendenciasFiscaisGov" | "rankingCliente" | "ultimaAtualizacaoBanc" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | Empresa$sociosArgs<ExtArgs>
    funcionarios?: boolean | Empresa$funcionariosArgs<ExtArgs>
    alteracoesContratuais?: boolean | Empresa$alteracoesContratuaisArgs<ExtArgs>
    alvaras?: boolean | Empresa$alvarasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      socios: Prisma.$SocioPayload<ExtArgs>[]
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
      alteracoesContratuais: Prisma.$AlteracaoContratualPayload<ExtArgs>[]
      alvaras: Prisma.$AlvaraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razaoSocial: string
      nomeFantasia: string | null
      cnpj: string
      inscricaoEstadual: string | null
      inscricaoMunicipal: string | null
      endereco: string
      tempoEmpresaMeses: number | null
      dataFundacao: Date | null
      dataEntradaContabilidade: Date | null
      contadorAnterior: string | null
      produtoOuServico: string
      capitalSocial: number
      ramoAtuacao: string
      participaLicitacao: boolean
      tipoCliente: $Enums.TipoCliente
      regimeTributario: string
      dataBaixa: Date | null
      pendenciasFiscaisGov: boolean
      rankingCliente: $Enums.RankingCliente
      ultimaAtualizacaoBanc: Date | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socios<T extends Empresa$sociosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$sociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funcionarios<T extends Empresa$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alteracoesContratuais<T extends Empresa$alteracoesContratuaisArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$alteracoesContratuaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alvaras<T extends Empresa$alvarasArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$alvarasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly razaoSocial: FieldRef<"Empresa", 'String'>
    readonly nomeFantasia: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly inscricaoEstadual: FieldRef<"Empresa", 'String'>
    readonly inscricaoMunicipal: FieldRef<"Empresa", 'String'>
    readonly endereco: FieldRef<"Empresa", 'String'>
    readonly tempoEmpresaMeses: FieldRef<"Empresa", 'Int'>
    readonly dataFundacao: FieldRef<"Empresa", 'DateTime'>
    readonly dataEntradaContabilidade: FieldRef<"Empresa", 'DateTime'>
    readonly contadorAnterior: FieldRef<"Empresa", 'String'>
    readonly produtoOuServico: FieldRef<"Empresa", 'String'>
    readonly capitalSocial: FieldRef<"Empresa", 'Float'>
    readonly ramoAtuacao: FieldRef<"Empresa", 'String'>
    readonly participaLicitacao: FieldRef<"Empresa", 'Boolean'>
    readonly tipoCliente: FieldRef<"Empresa", 'TipoCliente'>
    readonly regimeTributario: FieldRef<"Empresa", 'String'>
    readonly dataBaixa: FieldRef<"Empresa", 'DateTime'>
    readonly pendenciasFiscaisGov: FieldRef<"Empresa", 'Boolean'>
    readonly rankingCliente: FieldRef<"Empresa", 'RankingCliente'>
    readonly ultimaAtualizacaoBanc: FieldRef<"Empresa", 'DateTime'>
    readonly criadoEm: FieldRef<"Empresa", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.socios
   */
  export type Empresa$sociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    where?: SocioWhereInput
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    cursor?: SocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Empresa.funcionarios
   */
  export type Empresa$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Empresa.alteracoesContratuais
   */
  export type Empresa$alteracoesContratuaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    where?: AlteracaoContratualWhereInput
    orderBy?: AlteracaoContratualOrderByWithRelationInput | AlteracaoContratualOrderByWithRelationInput[]
    cursor?: AlteracaoContratualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlteracaoContratualScalarFieldEnum | AlteracaoContratualScalarFieldEnum[]
  }

  /**
   * Empresa.alvaras
   */
  export type Empresa$alvarasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    where?: AlvaraWhereInput
    orderBy?: AlvaraOrderByWithRelationInput | AlvaraOrderByWithRelationInput[]
    cursor?: AlvaraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlvaraScalarFieldEnum | AlvaraScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Socio
   */

  export type AggregateSocio = {
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  export type SocioAvgAggregateOutputType = {
    capitalParticipacao: number | null
  }

  export type SocioSumAggregateOutputType = {
    capitalParticipacao: number | null
  }

  export type SocioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    endereco: string | null
    nomePai: string | null
    empresaPai: string | null
    nomeMae: string | null
    empresaMae: string | null
    observacoesSociais: string | null
    fazIrpfComContabilidade: boolean | null
    capitalParticipacao: number | null
    empresaId: string | null
  }

  export type SocioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    endereco: string | null
    nomePai: string | null
    empresaPai: string | null
    nomeMae: string | null
    empresaMae: string | null
    observacoesSociais: string | null
    fazIrpfComContabilidade: boolean | null
    capitalParticipacao: number | null
    empresaId: string | null
  }

  export type SocioCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    endereco: number
    nomePai: number
    empresaPai: number
    nomeMae: number
    empresaMae: number
    observacoesSociais: number
    fazIrpfComContabilidade: number
    capitalParticipacao: number
    empresaId: number
    _all: number
  }


  export type SocioAvgAggregateInputType = {
    capitalParticipacao?: true
  }

  export type SocioSumAggregateInputType = {
    capitalParticipacao?: true
  }

  export type SocioMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    endereco?: true
    nomePai?: true
    empresaPai?: true
    nomeMae?: true
    empresaMae?: true
    observacoesSociais?: true
    fazIrpfComContabilidade?: true
    capitalParticipacao?: true
    empresaId?: true
  }

  export type SocioMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    endereco?: true
    nomePai?: true
    empresaPai?: true
    nomeMae?: true
    empresaMae?: true
    observacoesSociais?: true
    fazIrpfComContabilidade?: true
    capitalParticipacao?: true
    empresaId?: true
  }

  export type SocioCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    endereco?: true
    nomePai?: true
    empresaPai?: true
    nomeMae?: true
    empresaMae?: true
    observacoesSociais?: true
    fazIrpfComContabilidade?: true
    capitalParticipacao?: true
    empresaId?: true
    _all?: true
  }

  export type SocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socio to aggregate.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socios
    **/
    _count?: true | SocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocioMaxAggregateInputType
  }

  export type GetSocioAggregateType<T extends SocioAggregateArgs> = {
        [P in keyof T & keyof AggregateSocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocio[P]>
      : GetScalarType<T[P], AggregateSocio[P]>
  }




  export type SocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocioWhereInput
    orderBy?: SocioOrderByWithAggregationInput | SocioOrderByWithAggregationInput[]
    by: SocioScalarFieldEnum[] | SocioScalarFieldEnum
    having?: SocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocioCountAggregateInputType | true
    _avg?: SocioAvgAggregateInputType
    _sum?: SocioSumAggregateInputType
    _min?: SocioMinAggregateInputType
    _max?: SocioMaxAggregateInputType
  }

  export type SocioGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    endereco: string
    nomePai: string | null
    empresaPai: string | null
    nomeMae: string | null
    empresaMae: string | null
    observacoesSociais: string | null
    fazIrpfComContabilidade: boolean
    capitalParticipacao: number | null
    empresaId: string
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  type GetSocioGroupByPayload<T extends SocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocioGroupByOutputType[P]>
            : GetScalarType<T[P], SocioGroupByOutputType[P]>
        }
      >
    >


  export type SocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    endereco?: boolean
    nomePai?: boolean
    empresaPai?: boolean
    nomeMae?: boolean
    empresaMae?: boolean
    observacoesSociais?: boolean
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    endereco?: boolean
    nomePai?: boolean
    empresaPai?: boolean
    nomeMae?: boolean
    empresaMae?: boolean
    observacoesSociais?: boolean
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    endereco?: boolean
    nomePai?: boolean
    empresaPai?: boolean
    nomeMae?: boolean
    empresaMae?: boolean
    observacoesSociais?: boolean
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    endereco?: boolean
    nomePai?: boolean
    empresaPai?: boolean
    nomeMae?: boolean
    empresaMae?: boolean
    observacoesSociais?: boolean
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: boolean
    empresaId?: boolean
  }

  export type SocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "endereco" | "nomePai" | "empresaPai" | "nomeMae" | "empresaMae" | "observacoesSociais" | "fazIrpfComContabilidade" | "capitalParticipacao" | "empresaId", ExtArgs["result"]["socio"]>
  export type SocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type SocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type SocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $SocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socio"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      endereco: string
      nomePai: string | null
      empresaPai: string | null
      nomeMae: string | null
      empresaMae: string | null
      observacoesSociais: string | null
      fazIrpfComContabilidade: boolean
      capitalParticipacao: number | null
      empresaId: string
    }, ExtArgs["result"]["socio"]>
    composites: {}
  }

  type SocioGetPayload<S extends boolean | null | undefined | SocioDefaultArgs> = $Result.GetResult<Prisma.$SocioPayload, S>

  type SocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocioCountAggregateInputType | true
    }

  export interface SocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socio'], meta: { name: 'Socio' } }
    /**
     * Find zero or one Socio that matches the filter.
     * @param {SocioFindUniqueArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocioFindUniqueArgs>(args: SelectSubset<T, SocioFindUniqueArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocioFindUniqueOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocioFindUniqueOrThrowArgs>(args: SelectSubset<T, SocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocioFindFirstArgs>(args?: SelectSubset<T, SocioFindFirstArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocioFindFirstOrThrowArgs>(args?: SelectSubset<T, SocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socios
     * const socios = await prisma.socio.findMany()
     * 
     * // Get first 10 Socios
     * const socios = await prisma.socio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socioWithIdOnly = await prisma.socio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocioFindManyArgs>(args?: SelectSubset<T, SocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socio.
     * @param {SocioCreateArgs} args - Arguments to create a Socio.
     * @example
     * // Create one Socio
     * const Socio = await prisma.socio.create({
     *   data: {
     *     // ... data to create a Socio
     *   }
     * })
     * 
     */
    create<T extends SocioCreateArgs>(args: SelectSubset<T, SocioCreateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socios.
     * @param {SocioCreateManyArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocioCreateManyArgs>(args?: SelectSubset<T, SocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socios and returns the data saved in the database.
     * @param {SocioCreateManyAndReturnArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocioCreateManyAndReturnArgs>(args?: SelectSubset<T, SocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Socio.
     * @param {SocioDeleteArgs} args - Arguments to delete one Socio.
     * @example
     * // Delete one Socio
     * const Socio = await prisma.socio.delete({
     *   where: {
     *     // ... filter to delete one Socio
     *   }
     * })
     * 
     */
    delete<T extends SocioDeleteArgs>(args: SelectSubset<T, SocioDeleteArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socio.
     * @param {SocioUpdateArgs} args - Arguments to update one Socio.
     * @example
     * // Update one Socio
     * const socio = await prisma.socio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocioUpdateArgs>(args: SelectSubset<T, SocioUpdateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socios.
     * @param {SocioDeleteManyArgs} args - Arguments to filter Socios to delete.
     * @example
     * // Delete a few Socios
     * const { count } = await prisma.socio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocioDeleteManyArgs>(args?: SelectSubset<T, SocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocioUpdateManyArgs>(args: SelectSubset<T, SocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios and returns the data updated in the database.
     * @param {SocioUpdateManyAndReturnArgs} args - Arguments to update many Socios.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocioUpdateManyAndReturnArgs>(args: SelectSubset<T, SocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Socio.
     * @param {SocioUpsertArgs} args - Arguments to update or create a Socio.
     * @example
     * // Update or create a Socio
     * const socio = await prisma.socio.upsert({
     *   create: {
     *     // ... data to create a Socio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socio we want to update
     *   }
     * })
     */
    upsert<T extends SocioUpsertArgs>(args: SelectSubset<T, SocioUpsertArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioCountArgs} args - Arguments to filter Socios to count.
     * @example
     * // Count the number of Socios
     * const count = await prisma.socio.count({
     *   where: {
     *     // ... the filter for the Socios we want to count
     *   }
     * })
    **/
    count<T extends SocioCountArgs>(
      args?: Subset<T, SocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocioAggregateArgs>(args: Subset<T, SocioAggregateArgs>): Prisma.PrismaPromise<GetSocioAggregateType<T>>

    /**
     * Group by Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocioGroupByArgs['orderBy'] }
        : { orderBy?: SocioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socio model
   */
  readonly fields: SocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Socio model
   */
  interface SocioFieldRefs {
    readonly id: FieldRef<"Socio", 'String'>
    readonly nome: FieldRef<"Socio", 'String'>
    readonly cpf: FieldRef<"Socio", 'String'>
    readonly endereco: FieldRef<"Socio", 'String'>
    readonly nomePai: FieldRef<"Socio", 'String'>
    readonly empresaPai: FieldRef<"Socio", 'String'>
    readonly nomeMae: FieldRef<"Socio", 'String'>
    readonly empresaMae: FieldRef<"Socio", 'String'>
    readonly observacoesSociais: FieldRef<"Socio", 'String'>
    readonly fazIrpfComContabilidade: FieldRef<"Socio", 'Boolean'>
    readonly capitalParticipacao: FieldRef<"Socio", 'Float'>
    readonly empresaId: FieldRef<"Socio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Socio findUnique
   */
  export type SocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findUniqueOrThrow
   */
  export type SocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findFirst
   */
  export type SocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findFirstOrThrow
   */
  export type SocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findMany
   */
  export type SocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socios to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio create
   */
  export type SocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to create a Socio.
     */
    data: XOR<SocioCreateInput, SocioUncheckedCreateInput>
  }

  /**
   * Socio createMany
   */
  export type SocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socio createManyAndReturn
   */
  export type SocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio update
   */
  export type SocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to update a Socio.
     */
    data: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
    /**
     * Choose, which Socio to update.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio updateMany
   */
  export type SocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
  }

  /**
   * Socio updateManyAndReturn
   */
  export type SocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio upsert
   */
  export type SocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The filter to search for the Socio to update in case it exists.
     */
    where: SocioWhereUniqueInput
    /**
     * In case the Socio found by the `where` argument doesn't exist, create a new Socio with this data.
     */
    create: XOR<SocioCreateInput, SocioUncheckedCreateInput>
    /**
     * In case the Socio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
  }

  /**
   * Socio delete
   */
  export type SocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter which Socio to delete.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio deleteMany
   */
  export type SocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socios to delete
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to delete.
     */
    limit?: number
  }

  /**
   * Socio without action
   */
  export type SocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    empresaId: string | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    empresaId: string | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    empresaId: number
    _all: number
  }


  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    empresaId?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    empresaId?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    empresaId?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    empresaId: string
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    empresaId?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "empresaId", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      empresaId: string
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'String'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly cpf: FieldRef<"Funcionario", 'String'>
    readonly empresaId: FieldRef<"Funcionario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model AlteracaoContratual
   */

  export type AggregateAlteracaoContratual = {
    _count: AlteracaoContratualCountAggregateOutputType | null
    _min: AlteracaoContratualMinAggregateOutputType | null
    _max: AlteracaoContratualMaxAggregateOutputType | null
  }

  export type AlteracaoContratualMinAggregateOutputType = {
    id: string | null
    dataAlteracao: Date | null
    descricao: string | null
    empresaId: string | null
  }

  export type AlteracaoContratualMaxAggregateOutputType = {
    id: string | null
    dataAlteracao: Date | null
    descricao: string | null
    empresaId: string | null
  }

  export type AlteracaoContratualCountAggregateOutputType = {
    id: number
    dataAlteracao: number
    descricao: number
    empresaId: number
    _all: number
  }


  export type AlteracaoContratualMinAggregateInputType = {
    id?: true
    dataAlteracao?: true
    descricao?: true
    empresaId?: true
  }

  export type AlteracaoContratualMaxAggregateInputType = {
    id?: true
    dataAlteracao?: true
    descricao?: true
    empresaId?: true
  }

  export type AlteracaoContratualCountAggregateInputType = {
    id?: true
    dataAlteracao?: true
    descricao?: true
    empresaId?: true
    _all?: true
  }

  export type AlteracaoContratualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlteracaoContratual to aggregate.
     */
    where?: AlteracaoContratualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlteracaoContratuals to fetch.
     */
    orderBy?: AlteracaoContratualOrderByWithRelationInput | AlteracaoContratualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlteracaoContratualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlteracaoContratuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlteracaoContratuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlteracaoContratuals
    **/
    _count?: true | AlteracaoContratualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlteracaoContratualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlteracaoContratualMaxAggregateInputType
  }

  export type GetAlteracaoContratualAggregateType<T extends AlteracaoContratualAggregateArgs> = {
        [P in keyof T & keyof AggregateAlteracaoContratual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlteracaoContratual[P]>
      : GetScalarType<T[P], AggregateAlteracaoContratual[P]>
  }




  export type AlteracaoContratualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlteracaoContratualWhereInput
    orderBy?: AlteracaoContratualOrderByWithAggregationInput | AlteracaoContratualOrderByWithAggregationInput[]
    by: AlteracaoContratualScalarFieldEnum[] | AlteracaoContratualScalarFieldEnum
    having?: AlteracaoContratualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlteracaoContratualCountAggregateInputType | true
    _min?: AlteracaoContratualMinAggregateInputType
    _max?: AlteracaoContratualMaxAggregateInputType
  }

  export type AlteracaoContratualGroupByOutputType = {
    id: string
    dataAlteracao: Date
    descricao: string
    empresaId: string
    _count: AlteracaoContratualCountAggregateOutputType | null
    _min: AlteracaoContratualMinAggregateOutputType | null
    _max: AlteracaoContratualMaxAggregateOutputType | null
  }

  type GetAlteracaoContratualGroupByPayload<T extends AlteracaoContratualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlteracaoContratualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlteracaoContratualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlteracaoContratualGroupByOutputType[P]>
            : GetScalarType<T[P], AlteracaoContratualGroupByOutputType[P]>
        }
      >
    >


  export type AlteracaoContratualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAlteracao?: boolean
    descricao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alteracaoContratual"]>

  export type AlteracaoContratualSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAlteracao?: boolean
    descricao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alteracaoContratual"]>

  export type AlteracaoContratualSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAlteracao?: boolean
    descricao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alteracaoContratual"]>

  export type AlteracaoContratualSelectScalar = {
    id?: boolean
    dataAlteracao?: boolean
    descricao?: boolean
    empresaId?: boolean
  }

  export type AlteracaoContratualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataAlteracao" | "descricao" | "empresaId", ExtArgs["result"]["alteracaoContratual"]>
  export type AlteracaoContratualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type AlteracaoContratualIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type AlteracaoContratualIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $AlteracaoContratualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlteracaoContratual"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataAlteracao: Date
      descricao: string
      empresaId: string
    }, ExtArgs["result"]["alteracaoContratual"]>
    composites: {}
  }

  type AlteracaoContratualGetPayload<S extends boolean | null | undefined | AlteracaoContratualDefaultArgs> = $Result.GetResult<Prisma.$AlteracaoContratualPayload, S>

  type AlteracaoContratualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlteracaoContratualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlteracaoContratualCountAggregateInputType | true
    }

  export interface AlteracaoContratualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlteracaoContratual'], meta: { name: 'AlteracaoContratual' } }
    /**
     * Find zero or one AlteracaoContratual that matches the filter.
     * @param {AlteracaoContratualFindUniqueArgs} args - Arguments to find a AlteracaoContratual
     * @example
     * // Get one AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlteracaoContratualFindUniqueArgs>(args: SelectSubset<T, AlteracaoContratualFindUniqueArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlteracaoContratual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlteracaoContratualFindUniqueOrThrowArgs} args - Arguments to find a AlteracaoContratual
     * @example
     * // Get one AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlteracaoContratualFindUniqueOrThrowArgs>(args: SelectSubset<T, AlteracaoContratualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlteracaoContratual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualFindFirstArgs} args - Arguments to find a AlteracaoContratual
     * @example
     * // Get one AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlteracaoContratualFindFirstArgs>(args?: SelectSubset<T, AlteracaoContratualFindFirstArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlteracaoContratual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualFindFirstOrThrowArgs} args - Arguments to find a AlteracaoContratual
     * @example
     * // Get one AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlteracaoContratualFindFirstOrThrowArgs>(args?: SelectSubset<T, AlteracaoContratualFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlteracaoContratuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlteracaoContratuals
     * const alteracaoContratuals = await prisma.alteracaoContratual.findMany()
     * 
     * // Get first 10 AlteracaoContratuals
     * const alteracaoContratuals = await prisma.alteracaoContratual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alteracaoContratualWithIdOnly = await prisma.alteracaoContratual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlteracaoContratualFindManyArgs>(args?: SelectSubset<T, AlteracaoContratualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlteracaoContratual.
     * @param {AlteracaoContratualCreateArgs} args - Arguments to create a AlteracaoContratual.
     * @example
     * // Create one AlteracaoContratual
     * const AlteracaoContratual = await prisma.alteracaoContratual.create({
     *   data: {
     *     // ... data to create a AlteracaoContratual
     *   }
     * })
     * 
     */
    create<T extends AlteracaoContratualCreateArgs>(args: SelectSubset<T, AlteracaoContratualCreateArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlteracaoContratuals.
     * @param {AlteracaoContratualCreateManyArgs} args - Arguments to create many AlteracaoContratuals.
     * @example
     * // Create many AlteracaoContratuals
     * const alteracaoContratual = await prisma.alteracaoContratual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlteracaoContratualCreateManyArgs>(args?: SelectSubset<T, AlteracaoContratualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlteracaoContratuals and returns the data saved in the database.
     * @param {AlteracaoContratualCreateManyAndReturnArgs} args - Arguments to create many AlteracaoContratuals.
     * @example
     * // Create many AlteracaoContratuals
     * const alteracaoContratual = await prisma.alteracaoContratual.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlteracaoContratuals and only return the `id`
     * const alteracaoContratualWithIdOnly = await prisma.alteracaoContratual.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlteracaoContratualCreateManyAndReturnArgs>(args?: SelectSubset<T, AlteracaoContratualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlteracaoContratual.
     * @param {AlteracaoContratualDeleteArgs} args - Arguments to delete one AlteracaoContratual.
     * @example
     * // Delete one AlteracaoContratual
     * const AlteracaoContratual = await prisma.alteracaoContratual.delete({
     *   where: {
     *     // ... filter to delete one AlteracaoContratual
     *   }
     * })
     * 
     */
    delete<T extends AlteracaoContratualDeleteArgs>(args: SelectSubset<T, AlteracaoContratualDeleteArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlteracaoContratual.
     * @param {AlteracaoContratualUpdateArgs} args - Arguments to update one AlteracaoContratual.
     * @example
     * // Update one AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlteracaoContratualUpdateArgs>(args: SelectSubset<T, AlteracaoContratualUpdateArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlteracaoContratuals.
     * @param {AlteracaoContratualDeleteManyArgs} args - Arguments to filter AlteracaoContratuals to delete.
     * @example
     * // Delete a few AlteracaoContratuals
     * const { count } = await prisma.alteracaoContratual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlteracaoContratualDeleteManyArgs>(args?: SelectSubset<T, AlteracaoContratualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlteracaoContratuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlteracaoContratuals
     * const alteracaoContratual = await prisma.alteracaoContratual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlteracaoContratualUpdateManyArgs>(args: SelectSubset<T, AlteracaoContratualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlteracaoContratuals and returns the data updated in the database.
     * @param {AlteracaoContratualUpdateManyAndReturnArgs} args - Arguments to update many AlteracaoContratuals.
     * @example
     * // Update many AlteracaoContratuals
     * const alteracaoContratual = await prisma.alteracaoContratual.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlteracaoContratuals and only return the `id`
     * const alteracaoContratualWithIdOnly = await prisma.alteracaoContratual.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlteracaoContratualUpdateManyAndReturnArgs>(args: SelectSubset<T, AlteracaoContratualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlteracaoContratual.
     * @param {AlteracaoContratualUpsertArgs} args - Arguments to update or create a AlteracaoContratual.
     * @example
     * // Update or create a AlteracaoContratual
     * const alteracaoContratual = await prisma.alteracaoContratual.upsert({
     *   create: {
     *     // ... data to create a AlteracaoContratual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlteracaoContratual we want to update
     *   }
     * })
     */
    upsert<T extends AlteracaoContratualUpsertArgs>(args: SelectSubset<T, AlteracaoContratualUpsertArgs<ExtArgs>>): Prisma__AlteracaoContratualClient<$Result.GetResult<Prisma.$AlteracaoContratualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlteracaoContratuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualCountArgs} args - Arguments to filter AlteracaoContratuals to count.
     * @example
     * // Count the number of AlteracaoContratuals
     * const count = await prisma.alteracaoContratual.count({
     *   where: {
     *     // ... the filter for the AlteracaoContratuals we want to count
     *   }
     * })
    **/
    count<T extends AlteracaoContratualCountArgs>(
      args?: Subset<T, AlteracaoContratualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlteracaoContratualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlteracaoContratual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlteracaoContratualAggregateArgs>(args: Subset<T, AlteracaoContratualAggregateArgs>): Prisma.PrismaPromise<GetAlteracaoContratualAggregateType<T>>

    /**
     * Group by AlteracaoContratual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlteracaoContratualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlteracaoContratualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlteracaoContratualGroupByArgs['orderBy'] }
        : { orderBy?: AlteracaoContratualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlteracaoContratualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlteracaoContratualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlteracaoContratual model
   */
  readonly fields: AlteracaoContratualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlteracaoContratual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlteracaoContratualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlteracaoContratual model
   */
  interface AlteracaoContratualFieldRefs {
    readonly id: FieldRef<"AlteracaoContratual", 'String'>
    readonly dataAlteracao: FieldRef<"AlteracaoContratual", 'DateTime'>
    readonly descricao: FieldRef<"AlteracaoContratual", 'String'>
    readonly empresaId: FieldRef<"AlteracaoContratual", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlteracaoContratual findUnique
   */
  export type AlteracaoContratualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter, which AlteracaoContratual to fetch.
     */
    where: AlteracaoContratualWhereUniqueInput
  }

  /**
   * AlteracaoContratual findUniqueOrThrow
   */
  export type AlteracaoContratualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter, which AlteracaoContratual to fetch.
     */
    where: AlteracaoContratualWhereUniqueInput
  }

  /**
   * AlteracaoContratual findFirst
   */
  export type AlteracaoContratualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter, which AlteracaoContratual to fetch.
     */
    where?: AlteracaoContratualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlteracaoContratuals to fetch.
     */
    orderBy?: AlteracaoContratualOrderByWithRelationInput | AlteracaoContratualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlteracaoContratuals.
     */
    cursor?: AlteracaoContratualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlteracaoContratuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlteracaoContratuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlteracaoContratuals.
     */
    distinct?: AlteracaoContratualScalarFieldEnum | AlteracaoContratualScalarFieldEnum[]
  }

  /**
   * AlteracaoContratual findFirstOrThrow
   */
  export type AlteracaoContratualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter, which AlteracaoContratual to fetch.
     */
    where?: AlteracaoContratualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlteracaoContratuals to fetch.
     */
    orderBy?: AlteracaoContratualOrderByWithRelationInput | AlteracaoContratualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlteracaoContratuals.
     */
    cursor?: AlteracaoContratualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlteracaoContratuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlteracaoContratuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlteracaoContratuals.
     */
    distinct?: AlteracaoContratualScalarFieldEnum | AlteracaoContratualScalarFieldEnum[]
  }

  /**
   * AlteracaoContratual findMany
   */
  export type AlteracaoContratualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter, which AlteracaoContratuals to fetch.
     */
    where?: AlteracaoContratualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlteracaoContratuals to fetch.
     */
    orderBy?: AlteracaoContratualOrderByWithRelationInput | AlteracaoContratualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlteracaoContratuals.
     */
    cursor?: AlteracaoContratualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlteracaoContratuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlteracaoContratuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlteracaoContratuals.
     */
    distinct?: AlteracaoContratualScalarFieldEnum | AlteracaoContratualScalarFieldEnum[]
  }

  /**
   * AlteracaoContratual create
   */
  export type AlteracaoContratualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * The data needed to create a AlteracaoContratual.
     */
    data: XOR<AlteracaoContratualCreateInput, AlteracaoContratualUncheckedCreateInput>
  }

  /**
   * AlteracaoContratual createMany
   */
  export type AlteracaoContratualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlteracaoContratuals.
     */
    data: AlteracaoContratualCreateManyInput | AlteracaoContratualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlteracaoContratual createManyAndReturn
   */
  export type AlteracaoContratualCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * The data used to create many AlteracaoContratuals.
     */
    data: AlteracaoContratualCreateManyInput | AlteracaoContratualCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlteracaoContratual update
   */
  export type AlteracaoContratualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * The data needed to update a AlteracaoContratual.
     */
    data: XOR<AlteracaoContratualUpdateInput, AlteracaoContratualUncheckedUpdateInput>
    /**
     * Choose, which AlteracaoContratual to update.
     */
    where: AlteracaoContratualWhereUniqueInput
  }

  /**
   * AlteracaoContratual updateMany
   */
  export type AlteracaoContratualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlteracaoContratuals.
     */
    data: XOR<AlteracaoContratualUpdateManyMutationInput, AlteracaoContratualUncheckedUpdateManyInput>
    /**
     * Filter which AlteracaoContratuals to update
     */
    where?: AlteracaoContratualWhereInput
    /**
     * Limit how many AlteracaoContratuals to update.
     */
    limit?: number
  }

  /**
   * AlteracaoContratual updateManyAndReturn
   */
  export type AlteracaoContratualUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * The data used to update AlteracaoContratuals.
     */
    data: XOR<AlteracaoContratualUpdateManyMutationInput, AlteracaoContratualUncheckedUpdateManyInput>
    /**
     * Filter which AlteracaoContratuals to update
     */
    where?: AlteracaoContratualWhereInput
    /**
     * Limit how many AlteracaoContratuals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlteracaoContratual upsert
   */
  export type AlteracaoContratualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * The filter to search for the AlteracaoContratual to update in case it exists.
     */
    where: AlteracaoContratualWhereUniqueInput
    /**
     * In case the AlteracaoContratual found by the `where` argument doesn't exist, create a new AlteracaoContratual with this data.
     */
    create: XOR<AlteracaoContratualCreateInput, AlteracaoContratualUncheckedCreateInput>
    /**
     * In case the AlteracaoContratual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlteracaoContratualUpdateInput, AlteracaoContratualUncheckedUpdateInput>
  }

  /**
   * AlteracaoContratual delete
   */
  export type AlteracaoContratualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
    /**
     * Filter which AlteracaoContratual to delete.
     */
    where: AlteracaoContratualWhereUniqueInput
  }

  /**
   * AlteracaoContratual deleteMany
   */
  export type AlteracaoContratualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlteracaoContratuals to delete
     */
    where?: AlteracaoContratualWhereInput
    /**
     * Limit how many AlteracaoContratuals to delete.
     */
    limit?: number
  }

  /**
   * AlteracaoContratual without action
   */
  export type AlteracaoContratualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlteracaoContratual
     */
    select?: AlteracaoContratualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlteracaoContratual
     */
    omit?: AlteracaoContratualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlteracaoContratualInclude<ExtArgs> | null
  }


  /**
   * Model Alvara
   */

  export type AggregateAlvara = {
    _count: AlvaraCountAggregateOutputType | null
    _min: AlvaraMinAggregateOutputType | null
    _max: AlvaraMaxAggregateOutputType | null
  }

  export type AlvaraMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    pronto: boolean | null
    dataVencimento: Date | null
    empresaId: string | null
  }

  export type AlvaraMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    pronto: boolean | null
    dataVencimento: Date | null
    empresaId: string | null
  }

  export type AlvaraCountAggregateOutputType = {
    id: number
    tipo: number
    pronto: number
    dataVencimento: number
    empresaId: number
    _all: number
  }


  export type AlvaraMinAggregateInputType = {
    id?: true
    tipo?: true
    pronto?: true
    dataVencimento?: true
    empresaId?: true
  }

  export type AlvaraMaxAggregateInputType = {
    id?: true
    tipo?: true
    pronto?: true
    dataVencimento?: true
    empresaId?: true
  }

  export type AlvaraCountAggregateInputType = {
    id?: true
    tipo?: true
    pronto?: true
    dataVencimento?: true
    empresaId?: true
    _all?: true
  }

  export type AlvaraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alvara to aggregate.
     */
    where?: AlvaraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alvaras to fetch.
     */
    orderBy?: AlvaraOrderByWithRelationInput | AlvaraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlvaraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alvaras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alvaras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alvaras
    **/
    _count?: true | AlvaraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlvaraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlvaraMaxAggregateInputType
  }

  export type GetAlvaraAggregateType<T extends AlvaraAggregateArgs> = {
        [P in keyof T & keyof AggregateAlvara]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlvara[P]>
      : GetScalarType<T[P], AggregateAlvara[P]>
  }




  export type AlvaraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlvaraWhereInput
    orderBy?: AlvaraOrderByWithAggregationInput | AlvaraOrderByWithAggregationInput[]
    by: AlvaraScalarFieldEnum[] | AlvaraScalarFieldEnum
    having?: AlvaraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlvaraCountAggregateInputType | true
    _min?: AlvaraMinAggregateInputType
    _max?: AlvaraMaxAggregateInputType
  }

  export type AlvaraGroupByOutputType = {
    id: string
    tipo: string
    pronto: boolean
    dataVencimento: Date | null
    empresaId: string
    _count: AlvaraCountAggregateOutputType | null
    _min: AlvaraMinAggregateOutputType | null
    _max: AlvaraMaxAggregateOutputType | null
  }

  type GetAlvaraGroupByPayload<T extends AlvaraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlvaraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlvaraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlvaraGroupByOutputType[P]>
            : GetScalarType<T[P], AlvaraGroupByOutputType[P]>
        }
      >
    >


  export type AlvaraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    pronto?: boolean
    dataVencimento?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alvara"]>

  export type AlvaraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    pronto?: boolean
    dataVencimento?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alvara"]>

  export type AlvaraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    pronto?: boolean
    dataVencimento?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alvara"]>

  export type AlvaraSelectScalar = {
    id?: boolean
    tipo?: boolean
    pronto?: boolean
    dataVencimento?: boolean
    empresaId?: boolean
  }

  export type AlvaraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "pronto" | "dataVencimento" | "empresaId", ExtArgs["result"]["alvara"]>
  export type AlvaraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type AlvaraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type AlvaraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $AlvaraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alvara"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      pronto: boolean
      dataVencimento: Date | null
      empresaId: string
    }, ExtArgs["result"]["alvara"]>
    composites: {}
  }

  type AlvaraGetPayload<S extends boolean | null | undefined | AlvaraDefaultArgs> = $Result.GetResult<Prisma.$AlvaraPayload, S>

  type AlvaraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlvaraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlvaraCountAggregateInputType | true
    }

  export interface AlvaraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alvara'], meta: { name: 'Alvara' } }
    /**
     * Find zero or one Alvara that matches the filter.
     * @param {AlvaraFindUniqueArgs} args - Arguments to find a Alvara
     * @example
     * // Get one Alvara
     * const alvara = await prisma.alvara.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlvaraFindUniqueArgs>(args: SelectSubset<T, AlvaraFindUniqueArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alvara that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlvaraFindUniqueOrThrowArgs} args - Arguments to find a Alvara
     * @example
     * // Get one Alvara
     * const alvara = await prisma.alvara.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlvaraFindUniqueOrThrowArgs>(args: SelectSubset<T, AlvaraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alvara that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraFindFirstArgs} args - Arguments to find a Alvara
     * @example
     * // Get one Alvara
     * const alvara = await prisma.alvara.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlvaraFindFirstArgs>(args?: SelectSubset<T, AlvaraFindFirstArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alvara that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraFindFirstOrThrowArgs} args - Arguments to find a Alvara
     * @example
     * // Get one Alvara
     * const alvara = await prisma.alvara.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlvaraFindFirstOrThrowArgs>(args?: SelectSubset<T, AlvaraFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alvaras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alvaras
     * const alvaras = await prisma.alvara.findMany()
     * 
     * // Get first 10 Alvaras
     * const alvaras = await prisma.alvara.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alvaraWithIdOnly = await prisma.alvara.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlvaraFindManyArgs>(args?: SelectSubset<T, AlvaraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alvara.
     * @param {AlvaraCreateArgs} args - Arguments to create a Alvara.
     * @example
     * // Create one Alvara
     * const Alvara = await prisma.alvara.create({
     *   data: {
     *     // ... data to create a Alvara
     *   }
     * })
     * 
     */
    create<T extends AlvaraCreateArgs>(args: SelectSubset<T, AlvaraCreateArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alvaras.
     * @param {AlvaraCreateManyArgs} args - Arguments to create many Alvaras.
     * @example
     * // Create many Alvaras
     * const alvara = await prisma.alvara.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlvaraCreateManyArgs>(args?: SelectSubset<T, AlvaraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alvaras and returns the data saved in the database.
     * @param {AlvaraCreateManyAndReturnArgs} args - Arguments to create many Alvaras.
     * @example
     * // Create many Alvaras
     * const alvara = await prisma.alvara.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alvaras and only return the `id`
     * const alvaraWithIdOnly = await prisma.alvara.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlvaraCreateManyAndReturnArgs>(args?: SelectSubset<T, AlvaraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alvara.
     * @param {AlvaraDeleteArgs} args - Arguments to delete one Alvara.
     * @example
     * // Delete one Alvara
     * const Alvara = await prisma.alvara.delete({
     *   where: {
     *     // ... filter to delete one Alvara
     *   }
     * })
     * 
     */
    delete<T extends AlvaraDeleteArgs>(args: SelectSubset<T, AlvaraDeleteArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alvara.
     * @param {AlvaraUpdateArgs} args - Arguments to update one Alvara.
     * @example
     * // Update one Alvara
     * const alvara = await prisma.alvara.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlvaraUpdateArgs>(args: SelectSubset<T, AlvaraUpdateArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alvaras.
     * @param {AlvaraDeleteManyArgs} args - Arguments to filter Alvaras to delete.
     * @example
     * // Delete a few Alvaras
     * const { count } = await prisma.alvara.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlvaraDeleteManyArgs>(args?: SelectSubset<T, AlvaraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alvaras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alvaras
     * const alvara = await prisma.alvara.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlvaraUpdateManyArgs>(args: SelectSubset<T, AlvaraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alvaras and returns the data updated in the database.
     * @param {AlvaraUpdateManyAndReturnArgs} args - Arguments to update many Alvaras.
     * @example
     * // Update many Alvaras
     * const alvara = await prisma.alvara.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alvaras and only return the `id`
     * const alvaraWithIdOnly = await prisma.alvara.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlvaraUpdateManyAndReturnArgs>(args: SelectSubset<T, AlvaraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alvara.
     * @param {AlvaraUpsertArgs} args - Arguments to update or create a Alvara.
     * @example
     * // Update or create a Alvara
     * const alvara = await prisma.alvara.upsert({
     *   create: {
     *     // ... data to create a Alvara
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alvara we want to update
     *   }
     * })
     */
    upsert<T extends AlvaraUpsertArgs>(args: SelectSubset<T, AlvaraUpsertArgs<ExtArgs>>): Prisma__AlvaraClient<$Result.GetResult<Prisma.$AlvaraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alvaras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraCountArgs} args - Arguments to filter Alvaras to count.
     * @example
     * // Count the number of Alvaras
     * const count = await prisma.alvara.count({
     *   where: {
     *     // ... the filter for the Alvaras we want to count
     *   }
     * })
    **/
    count<T extends AlvaraCountArgs>(
      args?: Subset<T, AlvaraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlvaraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alvara.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlvaraAggregateArgs>(args: Subset<T, AlvaraAggregateArgs>): Prisma.PrismaPromise<GetAlvaraAggregateType<T>>

    /**
     * Group by Alvara.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlvaraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlvaraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlvaraGroupByArgs['orderBy'] }
        : { orderBy?: AlvaraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlvaraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlvaraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alvara model
   */
  readonly fields: AlvaraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alvara.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlvaraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alvara model
   */
  interface AlvaraFieldRefs {
    readonly id: FieldRef<"Alvara", 'String'>
    readonly tipo: FieldRef<"Alvara", 'String'>
    readonly pronto: FieldRef<"Alvara", 'Boolean'>
    readonly dataVencimento: FieldRef<"Alvara", 'DateTime'>
    readonly empresaId: FieldRef<"Alvara", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alvara findUnique
   */
  export type AlvaraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter, which Alvara to fetch.
     */
    where: AlvaraWhereUniqueInput
  }

  /**
   * Alvara findUniqueOrThrow
   */
  export type AlvaraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter, which Alvara to fetch.
     */
    where: AlvaraWhereUniqueInput
  }

  /**
   * Alvara findFirst
   */
  export type AlvaraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter, which Alvara to fetch.
     */
    where?: AlvaraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alvaras to fetch.
     */
    orderBy?: AlvaraOrderByWithRelationInput | AlvaraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alvaras.
     */
    cursor?: AlvaraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alvaras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alvaras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alvaras.
     */
    distinct?: AlvaraScalarFieldEnum | AlvaraScalarFieldEnum[]
  }

  /**
   * Alvara findFirstOrThrow
   */
  export type AlvaraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter, which Alvara to fetch.
     */
    where?: AlvaraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alvaras to fetch.
     */
    orderBy?: AlvaraOrderByWithRelationInput | AlvaraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alvaras.
     */
    cursor?: AlvaraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alvaras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alvaras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alvaras.
     */
    distinct?: AlvaraScalarFieldEnum | AlvaraScalarFieldEnum[]
  }

  /**
   * Alvara findMany
   */
  export type AlvaraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter, which Alvaras to fetch.
     */
    where?: AlvaraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alvaras to fetch.
     */
    orderBy?: AlvaraOrderByWithRelationInput | AlvaraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alvaras.
     */
    cursor?: AlvaraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alvaras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alvaras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alvaras.
     */
    distinct?: AlvaraScalarFieldEnum | AlvaraScalarFieldEnum[]
  }

  /**
   * Alvara create
   */
  export type AlvaraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * The data needed to create a Alvara.
     */
    data: XOR<AlvaraCreateInput, AlvaraUncheckedCreateInput>
  }

  /**
   * Alvara createMany
   */
  export type AlvaraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alvaras.
     */
    data: AlvaraCreateManyInput | AlvaraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alvara createManyAndReturn
   */
  export type AlvaraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * The data used to create many Alvaras.
     */
    data: AlvaraCreateManyInput | AlvaraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alvara update
   */
  export type AlvaraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * The data needed to update a Alvara.
     */
    data: XOR<AlvaraUpdateInput, AlvaraUncheckedUpdateInput>
    /**
     * Choose, which Alvara to update.
     */
    where: AlvaraWhereUniqueInput
  }

  /**
   * Alvara updateMany
   */
  export type AlvaraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alvaras.
     */
    data: XOR<AlvaraUpdateManyMutationInput, AlvaraUncheckedUpdateManyInput>
    /**
     * Filter which Alvaras to update
     */
    where?: AlvaraWhereInput
    /**
     * Limit how many Alvaras to update.
     */
    limit?: number
  }

  /**
   * Alvara updateManyAndReturn
   */
  export type AlvaraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * The data used to update Alvaras.
     */
    data: XOR<AlvaraUpdateManyMutationInput, AlvaraUncheckedUpdateManyInput>
    /**
     * Filter which Alvaras to update
     */
    where?: AlvaraWhereInput
    /**
     * Limit how many Alvaras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alvara upsert
   */
  export type AlvaraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * The filter to search for the Alvara to update in case it exists.
     */
    where: AlvaraWhereUniqueInput
    /**
     * In case the Alvara found by the `where` argument doesn't exist, create a new Alvara with this data.
     */
    create: XOR<AlvaraCreateInput, AlvaraUncheckedCreateInput>
    /**
     * In case the Alvara was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlvaraUpdateInput, AlvaraUncheckedUpdateInput>
  }

  /**
   * Alvara delete
   */
  export type AlvaraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
    /**
     * Filter which Alvara to delete.
     */
    where: AlvaraWhereUniqueInput
  }

  /**
   * Alvara deleteMany
   */
  export type AlvaraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alvaras to delete
     */
    where?: AlvaraWhereInput
    /**
     * Limit how many Alvaras to delete.
     */
    limit?: number
  }

  /**
   * Alvara without action
   */
  export type AlvaraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alvara
     */
    select?: AlvaraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alvara
     */
    omit?: AlvaraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlvaraInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    razaoSocial: 'razaoSocial',
    nomeFantasia: 'nomeFantasia',
    cnpj: 'cnpj',
    inscricaoEstadual: 'inscricaoEstadual',
    inscricaoMunicipal: 'inscricaoMunicipal',
    endereco: 'endereco',
    tempoEmpresaMeses: 'tempoEmpresaMeses',
    dataFundacao: 'dataFundacao',
    dataEntradaContabilidade: 'dataEntradaContabilidade',
    contadorAnterior: 'contadorAnterior',
    produtoOuServico: 'produtoOuServico',
    capitalSocial: 'capitalSocial',
    ramoAtuacao: 'ramoAtuacao',
    participaLicitacao: 'participaLicitacao',
    tipoCliente: 'tipoCliente',
    regimeTributario: 'regimeTributario',
    dataBaixa: 'dataBaixa',
    pendenciasFiscaisGov: 'pendenciasFiscaisGov',
    rankingCliente: 'rankingCliente',
    ultimaAtualizacaoBanc: 'ultimaAtualizacaoBanc',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const SocioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    endereco: 'endereco',
    nomePai: 'nomePai',
    empresaPai: 'empresaPai',
    nomeMae: 'nomeMae',
    empresaMae: 'empresaMae',
    observacoesSociais: 'observacoesSociais',
    fazIrpfComContabilidade: 'fazIrpfComContabilidade',
    capitalParticipacao: 'capitalParticipacao',
    empresaId: 'empresaId'
  };

  export type SocioScalarFieldEnum = (typeof SocioScalarFieldEnum)[keyof typeof SocioScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    empresaId: 'empresaId'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const AlteracaoContratualScalarFieldEnum: {
    id: 'id',
    dataAlteracao: 'dataAlteracao',
    descricao: 'descricao',
    empresaId: 'empresaId'
  };

  export type AlteracaoContratualScalarFieldEnum = (typeof AlteracaoContratualScalarFieldEnum)[keyof typeof AlteracaoContratualScalarFieldEnum]


  export const AlvaraScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    pronto: 'pronto',
    dataVencimento: 'dataVencimento',
    empresaId: 'empresaId'
  };

  export type AlvaraScalarFieldEnum = (typeof AlvaraScalarFieldEnum)[keyof typeof AlvaraScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoCliente'
   */
  export type EnumTipoClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCliente'>
    


  /**
   * Reference to a field of type 'TipoCliente[]'
   */
  export type ListEnumTipoClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCliente[]'>
    


  /**
   * Reference to a field of type 'RankingCliente'
   */
  export type EnumRankingClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RankingCliente'>
    


  /**
   * Reference to a field of type 'RankingCliente[]'
   */
  export type ListEnumRankingClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RankingCliente[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    razaoSocial?: StringFilter<"Empresa"> | string
    nomeFantasia?: StringNullableFilter<"Empresa"> | string | null
    cnpj?: StringFilter<"Empresa"> | string
    inscricaoEstadual?: StringNullableFilter<"Empresa"> | string | null
    inscricaoMunicipal?: StringNullableFilter<"Empresa"> | string | null
    endereco?: StringFilter<"Empresa"> | string
    tempoEmpresaMeses?: IntNullableFilter<"Empresa"> | number | null
    dataFundacao?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    dataEntradaContabilidade?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    contadorAnterior?: StringNullableFilter<"Empresa"> | string | null
    produtoOuServico?: StringFilter<"Empresa"> | string
    capitalSocial?: FloatFilter<"Empresa"> | number
    ramoAtuacao?: StringFilter<"Empresa"> | string
    participaLicitacao?: BoolFilter<"Empresa"> | boolean
    tipoCliente?: EnumTipoClienteFilter<"Empresa"> | $Enums.TipoCliente
    regimeTributario?: StringFilter<"Empresa"> | string
    dataBaixa?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    pendenciasFiscaisGov?: BoolFilter<"Empresa"> | boolean
    rankingCliente?: EnumRankingClienteFilter<"Empresa"> | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    criadoEm?: DateTimeFilter<"Empresa"> | Date | string
    atualizadoEm?: DateTimeFilter<"Empresa"> | Date | string
    socios?: SocioListRelationFilter
    funcionarios?: FuncionarioListRelationFilter
    alteracoesContratuais?: AlteracaoContratualListRelationFilter
    alvaras?: AlvaraListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    inscricaoMunicipal?: SortOrderInput | SortOrder
    endereco?: SortOrder
    tempoEmpresaMeses?: SortOrderInput | SortOrder
    dataFundacao?: SortOrderInput | SortOrder
    dataEntradaContabilidade?: SortOrderInput | SortOrder
    contadorAnterior?: SortOrderInput | SortOrder
    produtoOuServico?: SortOrder
    capitalSocial?: SortOrder
    ramoAtuacao?: SortOrder
    participaLicitacao?: SortOrder
    tipoCliente?: SortOrder
    regimeTributario?: SortOrder
    dataBaixa?: SortOrderInput | SortOrder
    pendenciasFiscaisGov?: SortOrder
    rankingCliente?: SortOrder
    ultimaAtualizacaoBanc?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    socios?: SocioOrderByRelationAggregateInput
    funcionarios?: FuncionarioOrderByRelationAggregateInput
    alteracoesContratuais?: AlteracaoContratualOrderByRelationAggregateInput
    alvaras?: AlvaraOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    razaoSocial?: StringFilter<"Empresa"> | string
    nomeFantasia?: StringNullableFilter<"Empresa"> | string | null
    inscricaoEstadual?: StringNullableFilter<"Empresa"> | string | null
    inscricaoMunicipal?: StringNullableFilter<"Empresa"> | string | null
    endereco?: StringFilter<"Empresa"> | string
    tempoEmpresaMeses?: IntNullableFilter<"Empresa"> | number | null
    dataFundacao?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    dataEntradaContabilidade?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    contadorAnterior?: StringNullableFilter<"Empresa"> | string | null
    produtoOuServico?: StringFilter<"Empresa"> | string
    capitalSocial?: FloatFilter<"Empresa"> | number
    ramoAtuacao?: StringFilter<"Empresa"> | string
    participaLicitacao?: BoolFilter<"Empresa"> | boolean
    tipoCliente?: EnumTipoClienteFilter<"Empresa"> | $Enums.TipoCliente
    regimeTributario?: StringFilter<"Empresa"> | string
    dataBaixa?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    pendenciasFiscaisGov?: BoolFilter<"Empresa"> | boolean
    rankingCliente?: EnumRankingClienteFilter<"Empresa"> | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: DateTimeNullableFilter<"Empresa"> | Date | string | null
    criadoEm?: DateTimeFilter<"Empresa"> | Date | string
    atualizadoEm?: DateTimeFilter<"Empresa"> | Date | string
    socios?: SocioListRelationFilter
    funcionarios?: FuncionarioListRelationFilter
    alteracoesContratuais?: AlteracaoContratualListRelationFilter
    alvaras?: AlvaraListRelationFilter
  }, "id" | "cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrderInput | SortOrder
    inscricaoMunicipal?: SortOrderInput | SortOrder
    endereco?: SortOrder
    tempoEmpresaMeses?: SortOrderInput | SortOrder
    dataFundacao?: SortOrderInput | SortOrder
    dataEntradaContabilidade?: SortOrderInput | SortOrder
    contadorAnterior?: SortOrderInput | SortOrder
    produtoOuServico?: SortOrder
    capitalSocial?: SortOrder
    ramoAtuacao?: SortOrder
    participaLicitacao?: SortOrder
    tipoCliente?: SortOrder
    regimeTributario?: SortOrder
    dataBaixa?: SortOrderInput | SortOrder
    pendenciasFiscaisGov?: SortOrder
    rankingCliente?: SortOrder
    ultimaAtualizacaoBanc?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    razaoSocial?: StringWithAggregatesFilter<"Empresa"> | string
    nomeFantasia?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    inscricaoEstadual?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    inscricaoMunicipal?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    endereco?: StringWithAggregatesFilter<"Empresa"> | string
    tempoEmpresaMeses?: IntNullableWithAggregatesFilter<"Empresa"> | number | null
    dataFundacao?: DateTimeNullableWithAggregatesFilter<"Empresa"> | Date | string | null
    dataEntradaContabilidade?: DateTimeNullableWithAggregatesFilter<"Empresa"> | Date | string | null
    contadorAnterior?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    produtoOuServico?: StringWithAggregatesFilter<"Empresa"> | string
    capitalSocial?: FloatWithAggregatesFilter<"Empresa"> | number
    ramoAtuacao?: StringWithAggregatesFilter<"Empresa"> | string
    participaLicitacao?: BoolWithAggregatesFilter<"Empresa"> | boolean
    tipoCliente?: EnumTipoClienteWithAggregatesFilter<"Empresa"> | $Enums.TipoCliente
    regimeTributario?: StringWithAggregatesFilter<"Empresa"> | string
    dataBaixa?: DateTimeNullableWithAggregatesFilter<"Empresa"> | Date | string | null
    pendenciasFiscaisGov?: BoolWithAggregatesFilter<"Empresa"> | boolean
    rankingCliente?: EnumRankingClienteWithAggregatesFilter<"Empresa"> | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: DateTimeNullableWithAggregatesFilter<"Empresa"> | Date | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type SocioWhereInput = {
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    id?: StringFilter<"Socio"> | string
    nome?: StringFilter<"Socio"> | string
    cpf?: StringFilter<"Socio"> | string
    endereco?: StringFilter<"Socio"> | string
    nomePai?: StringNullableFilter<"Socio"> | string | null
    empresaPai?: StringNullableFilter<"Socio"> | string | null
    nomeMae?: StringNullableFilter<"Socio"> | string | null
    empresaMae?: StringNullableFilter<"Socio"> | string | null
    observacoesSociais?: StringNullableFilter<"Socio"> | string | null
    fazIrpfComContabilidade?: BoolFilter<"Socio"> | boolean
    capitalParticipacao?: FloatNullableFilter<"Socio"> | number | null
    empresaId?: StringFilter<"Socio"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type SocioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    nomePai?: SortOrderInput | SortOrder
    empresaPai?: SortOrderInput | SortOrder
    nomeMae?: SortOrderInput | SortOrder
    empresaMae?: SortOrderInput | SortOrder
    observacoesSociais?: SortOrderInput | SortOrder
    fazIrpfComContabilidade?: SortOrder
    capitalParticipacao?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type SocioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    nome?: StringFilter<"Socio"> | string
    endereco?: StringFilter<"Socio"> | string
    nomePai?: StringNullableFilter<"Socio"> | string | null
    empresaPai?: StringNullableFilter<"Socio"> | string | null
    nomeMae?: StringNullableFilter<"Socio"> | string | null
    empresaMae?: StringNullableFilter<"Socio"> | string | null
    observacoesSociais?: StringNullableFilter<"Socio"> | string | null
    fazIrpfComContabilidade?: BoolFilter<"Socio"> | boolean
    capitalParticipacao?: FloatNullableFilter<"Socio"> | number | null
    empresaId?: StringFilter<"Socio"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "cpf">

  export type SocioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    nomePai?: SortOrderInput | SortOrder
    empresaPai?: SortOrderInput | SortOrder
    nomeMae?: SortOrderInput | SortOrder
    empresaMae?: SortOrderInput | SortOrder
    observacoesSociais?: SortOrderInput | SortOrder
    fazIrpfComContabilidade?: SortOrder
    capitalParticipacao?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    _count?: SocioCountOrderByAggregateInput
    _avg?: SocioAvgOrderByAggregateInput
    _max?: SocioMaxOrderByAggregateInput
    _min?: SocioMinOrderByAggregateInput
    _sum?: SocioSumOrderByAggregateInput
  }

  export type SocioScalarWhereWithAggregatesInput = {
    AND?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    OR?: SocioScalarWhereWithAggregatesInput[]
    NOT?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Socio"> | string
    nome?: StringWithAggregatesFilter<"Socio"> | string
    cpf?: StringWithAggregatesFilter<"Socio"> | string
    endereco?: StringWithAggregatesFilter<"Socio"> | string
    nomePai?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    empresaPai?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    nomeMae?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    empresaMae?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    observacoesSociais?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    fazIrpfComContabilidade?: BoolWithAggregatesFilter<"Socio"> | boolean
    capitalParticipacao?: FloatNullableWithAggregatesFilter<"Socio"> | number | null
    empresaId?: StringWithAggregatesFilter<"Socio"> | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "cpf">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    empresaId?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Funcionario"> | string
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    cpf?: StringWithAggregatesFilter<"Funcionario"> | string
    empresaId?: StringWithAggregatesFilter<"Funcionario"> | string
  }

  export type AlteracaoContratualWhereInput = {
    AND?: AlteracaoContratualWhereInput | AlteracaoContratualWhereInput[]
    OR?: AlteracaoContratualWhereInput[]
    NOT?: AlteracaoContratualWhereInput | AlteracaoContratualWhereInput[]
    id?: StringFilter<"AlteracaoContratual"> | string
    dataAlteracao?: DateTimeFilter<"AlteracaoContratual"> | Date | string
    descricao?: StringFilter<"AlteracaoContratual"> | string
    empresaId?: StringFilter<"AlteracaoContratual"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type AlteracaoContratualOrderByWithRelationInput = {
    id?: SortOrder
    dataAlteracao?: SortOrder
    descricao?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type AlteracaoContratualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlteracaoContratualWhereInput | AlteracaoContratualWhereInput[]
    OR?: AlteracaoContratualWhereInput[]
    NOT?: AlteracaoContratualWhereInput | AlteracaoContratualWhereInput[]
    dataAlteracao?: DateTimeFilter<"AlteracaoContratual"> | Date | string
    descricao?: StringFilter<"AlteracaoContratual"> | string
    empresaId?: StringFilter<"AlteracaoContratual"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id">

  export type AlteracaoContratualOrderByWithAggregationInput = {
    id?: SortOrder
    dataAlteracao?: SortOrder
    descricao?: SortOrder
    empresaId?: SortOrder
    _count?: AlteracaoContratualCountOrderByAggregateInput
    _max?: AlteracaoContratualMaxOrderByAggregateInput
    _min?: AlteracaoContratualMinOrderByAggregateInput
  }

  export type AlteracaoContratualScalarWhereWithAggregatesInput = {
    AND?: AlteracaoContratualScalarWhereWithAggregatesInput | AlteracaoContratualScalarWhereWithAggregatesInput[]
    OR?: AlteracaoContratualScalarWhereWithAggregatesInput[]
    NOT?: AlteracaoContratualScalarWhereWithAggregatesInput | AlteracaoContratualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlteracaoContratual"> | string
    dataAlteracao?: DateTimeWithAggregatesFilter<"AlteracaoContratual"> | Date | string
    descricao?: StringWithAggregatesFilter<"AlteracaoContratual"> | string
    empresaId?: StringWithAggregatesFilter<"AlteracaoContratual"> | string
  }

  export type AlvaraWhereInput = {
    AND?: AlvaraWhereInput | AlvaraWhereInput[]
    OR?: AlvaraWhereInput[]
    NOT?: AlvaraWhereInput | AlvaraWhereInput[]
    id?: StringFilter<"Alvara"> | string
    tipo?: StringFilter<"Alvara"> | string
    pronto?: BoolFilter<"Alvara"> | boolean
    dataVencimento?: DateTimeNullableFilter<"Alvara"> | Date | string | null
    empresaId?: StringFilter<"Alvara"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type AlvaraOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    pronto?: SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type AlvaraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlvaraWhereInput | AlvaraWhereInput[]
    OR?: AlvaraWhereInput[]
    NOT?: AlvaraWhereInput | AlvaraWhereInput[]
    tipo?: StringFilter<"Alvara"> | string
    pronto?: BoolFilter<"Alvara"> | boolean
    dataVencimento?: DateTimeNullableFilter<"Alvara"> | Date | string | null
    empresaId?: StringFilter<"Alvara"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id">

  export type AlvaraOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    pronto?: SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    _count?: AlvaraCountOrderByAggregateInput
    _max?: AlvaraMaxOrderByAggregateInput
    _min?: AlvaraMinOrderByAggregateInput
  }

  export type AlvaraScalarWhereWithAggregatesInput = {
    AND?: AlvaraScalarWhereWithAggregatesInput | AlvaraScalarWhereWithAggregatesInput[]
    OR?: AlvaraScalarWhereWithAggregatesInput[]
    NOT?: AlvaraScalarWhereWithAggregatesInput | AlvaraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alvara"> | string
    tipo?: StringWithAggregatesFilter<"Alvara"> | string
    pronto?: BoolWithAggregatesFilter<"Alvara"> | boolean
    dataVencimento?: DateTimeNullableWithAggregatesFilter<"Alvara"> | Date | string | null
    empresaId?: StringWithAggregatesFilter<"Alvara"> | string
  }

  export type EmpresaCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioUncheckedCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualUncheckedCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUncheckedUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUncheckedUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocioCreateInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
    empresa: EmpresaCreateNestedOneWithoutSociosInput
  }

  export type SocioUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
    empresaId: string
  }

  export type SocioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
    empresa?: EmpresaUpdateOneRequiredWithoutSociosNestedInput
  }

  export type SocioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type SocioCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
    empresaId: string
  }

  export type SocioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SocioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateInput = {
    id?: string
    nome: string
    cpf: string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    empresaId: string
  }

  export type FuncionarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    empresaId: string
  }

  export type FuncionarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualCreateInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
    empresa: EmpresaCreateNestedOneWithoutAlteracoesContratuaisInput
  }

  export type AlteracaoContratualUncheckedCreateInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
    empresaId: string
  }

  export type AlteracaoContratualUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutAlteracoesContratuaisNestedInput
  }

  export type AlteracaoContratualUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualCreateManyInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
    empresaId: string
  }

  export type AlteracaoContratualUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type AlvaraCreateInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
    empresa: EmpresaCreateNestedOneWithoutAlvarasInput
  }

  export type AlvaraUncheckedCreateInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
    empresaId: string
  }

  export type AlvaraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutAlvarasNestedInput
  }

  export type AlvaraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type AlvaraCreateManyInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
    empresaId: string
  }

  export type AlvaraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlvaraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTipoClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteFilter<$PrismaModel> | $Enums.TipoCliente
  }

  export type EnumRankingClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.RankingCliente | EnumRankingClienteFieldRefInput<$PrismaModel>
    in?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumRankingClienteFilter<$PrismaModel> | $Enums.RankingCliente
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SocioListRelationFilter = {
    every?: SocioWhereInput
    some?: SocioWhereInput
    none?: SocioWhereInput
  }

  export type FuncionarioListRelationFilter = {
    every?: FuncionarioWhereInput
    some?: FuncionarioWhereInput
    none?: FuncionarioWhereInput
  }

  export type AlteracaoContratualListRelationFilter = {
    every?: AlteracaoContratualWhereInput
    some?: AlteracaoContratualWhereInput
    none?: AlteracaoContratualWhereInput
  }

  export type AlvaraListRelationFilter = {
    every?: AlvaraWhereInput
    some?: AlvaraWhereInput
    none?: AlvaraWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlteracaoContratualOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlvaraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    inscricaoMunicipal?: SortOrder
    endereco?: SortOrder
    tempoEmpresaMeses?: SortOrder
    dataFundacao?: SortOrder
    dataEntradaContabilidade?: SortOrder
    contadorAnterior?: SortOrder
    produtoOuServico?: SortOrder
    capitalSocial?: SortOrder
    ramoAtuacao?: SortOrder
    participaLicitacao?: SortOrder
    tipoCliente?: SortOrder
    regimeTributario?: SortOrder
    dataBaixa?: SortOrder
    pendenciasFiscaisGov?: SortOrder
    rankingCliente?: SortOrder
    ultimaAtualizacaoBanc?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    tempoEmpresaMeses?: SortOrder
    capitalSocial?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    inscricaoMunicipal?: SortOrder
    endereco?: SortOrder
    tempoEmpresaMeses?: SortOrder
    dataFundacao?: SortOrder
    dataEntradaContabilidade?: SortOrder
    contadorAnterior?: SortOrder
    produtoOuServico?: SortOrder
    capitalSocial?: SortOrder
    ramoAtuacao?: SortOrder
    participaLicitacao?: SortOrder
    tipoCliente?: SortOrder
    regimeTributario?: SortOrder
    dataBaixa?: SortOrder
    pendenciasFiscaisGov?: SortOrder
    rankingCliente?: SortOrder
    ultimaAtualizacaoBanc?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    inscricaoMunicipal?: SortOrder
    endereco?: SortOrder
    tempoEmpresaMeses?: SortOrder
    dataFundacao?: SortOrder
    dataEntradaContabilidade?: SortOrder
    contadorAnterior?: SortOrder
    produtoOuServico?: SortOrder
    capitalSocial?: SortOrder
    ramoAtuacao?: SortOrder
    participaLicitacao?: SortOrder
    tipoCliente?: SortOrder
    regimeTributario?: SortOrder
    dataBaixa?: SortOrder
    pendenciasFiscaisGov?: SortOrder
    rankingCliente?: SortOrder
    ultimaAtualizacaoBanc?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    tempoEmpresaMeses?: SortOrder
    capitalSocial?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTipoClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel> | $Enums.TipoCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoClienteFilter<$PrismaModel>
    _max?: NestedEnumTipoClienteFilter<$PrismaModel>
  }

  export type EnumRankingClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RankingCliente | EnumRankingClienteFieldRefInput<$PrismaModel>
    in?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumRankingClienteWithAggregatesFilter<$PrismaModel> | $Enums.RankingCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankingClienteFilter<$PrismaModel>
    _max?: NestedEnumRankingClienteFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type SocioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    nomePai?: SortOrder
    empresaPai?: SortOrder
    nomeMae?: SortOrder
    empresaMae?: SortOrder
    observacoesSociais?: SortOrder
    fazIrpfComContabilidade?: SortOrder
    capitalParticipacao?: SortOrder
    empresaId?: SortOrder
  }

  export type SocioAvgOrderByAggregateInput = {
    capitalParticipacao?: SortOrder
  }

  export type SocioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    nomePai?: SortOrder
    empresaPai?: SortOrder
    nomeMae?: SortOrder
    empresaMae?: SortOrder
    observacoesSociais?: SortOrder
    fazIrpfComContabilidade?: SortOrder
    capitalParticipacao?: SortOrder
    empresaId?: SortOrder
  }

  export type SocioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    nomePai?: SortOrder
    empresaPai?: SortOrder
    nomeMae?: SortOrder
    empresaMae?: SortOrder
    observacoesSociais?: SortOrder
    fazIrpfComContabilidade?: SortOrder
    capitalParticipacao?: SortOrder
    empresaId?: SortOrder
  }

  export type SocioSumOrderByAggregateInput = {
    capitalParticipacao?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    empresaId?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    empresaId?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    empresaId?: SortOrder
  }

  export type AlteracaoContratualCountOrderByAggregateInput = {
    id?: SortOrder
    dataAlteracao?: SortOrder
    descricao?: SortOrder
    empresaId?: SortOrder
  }

  export type AlteracaoContratualMaxOrderByAggregateInput = {
    id?: SortOrder
    dataAlteracao?: SortOrder
    descricao?: SortOrder
    empresaId?: SortOrder
  }

  export type AlteracaoContratualMinOrderByAggregateInput = {
    id?: SortOrder
    dataAlteracao?: SortOrder
    descricao?: SortOrder
    empresaId?: SortOrder
  }

  export type AlvaraCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    pronto?: SortOrder
    dataVencimento?: SortOrder
    empresaId?: SortOrder
  }

  export type AlvaraMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    pronto?: SortOrder
    dataVencimento?: SortOrder
    empresaId?: SortOrder
  }

  export type AlvaraMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    pronto?: SortOrder
    dataVencimento?: SortOrder
    empresaId?: SortOrder
  }

  export type SocioCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput> | SocioCreateWithoutEmpresaInput[] | SocioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutEmpresaInput | SocioCreateOrConnectWithoutEmpresaInput[]
    createMany?: SocioCreateManyEmpresaInputEnvelope
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
  }

  export type FuncionarioCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type AlteracaoContratualCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput> | AlteracaoContratualCreateWithoutEmpresaInput[] | AlteracaoContratualUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlteracaoContratualCreateOrConnectWithoutEmpresaInput | AlteracaoContratualCreateOrConnectWithoutEmpresaInput[]
    createMany?: AlteracaoContratualCreateManyEmpresaInputEnvelope
    connect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
  }

  export type AlvaraCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput> | AlvaraCreateWithoutEmpresaInput[] | AlvaraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlvaraCreateOrConnectWithoutEmpresaInput | AlvaraCreateOrConnectWithoutEmpresaInput[]
    createMany?: AlvaraCreateManyEmpresaInputEnvelope
    connect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
  }

  export type SocioUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput> | SocioCreateWithoutEmpresaInput[] | SocioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutEmpresaInput | SocioCreateOrConnectWithoutEmpresaInput[]
    createMany?: SocioCreateManyEmpresaInputEnvelope
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type AlteracaoContratualUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput> | AlteracaoContratualCreateWithoutEmpresaInput[] | AlteracaoContratualUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlteracaoContratualCreateOrConnectWithoutEmpresaInput | AlteracaoContratualCreateOrConnectWithoutEmpresaInput[]
    createMany?: AlteracaoContratualCreateManyEmpresaInputEnvelope
    connect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
  }

  export type AlvaraUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput> | AlvaraCreateWithoutEmpresaInput[] | AlvaraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlvaraCreateOrConnectWithoutEmpresaInput | AlvaraCreateOrConnectWithoutEmpresaInput[]
    createMany?: AlvaraCreateManyEmpresaInputEnvelope
    connect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTipoClienteFieldUpdateOperationsInput = {
    set?: $Enums.TipoCliente
  }

  export type EnumRankingClienteFieldUpdateOperationsInput = {
    set?: $Enums.RankingCliente
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocioUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput> | SocioCreateWithoutEmpresaInput[] | SocioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutEmpresaInput | SocioCreateOrConnectWithoutEmpresaInput[]
    upsert?: SocioUpsertWithWhereUniqueWithoutEmpresaInput | SocioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: SocioCreateManyEmpresaInputEnvelope
    set?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    disconnect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    delete?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    update?: SocioUpdateWithWhereUniqueWithoutEmpresaInput | SocioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: SocioUpdateManyWithWhereWithoutEmpresaInput | SocioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: SocioScalarWhereInput | SocioScalarWhereInput[]
  }

  export type FuncionarioUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput | FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput | FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutEmpresaInput | FuncionarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type AlteracaoContratualUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput> | AlteracaoContratualCreateWithoutEmpresaInput[] | AlteracaoContratualUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlteracaoContratualCreateOrConnectWithoutEmpresaInput | AlteracaoContratualCreateOrConnectWithoutEmpresaInput[]
    upsert?: AlteracaoContratualUpsertWithWhereUniqueWithoutEmpresaInput | AlteracaoContratualUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AlteracaoContratualCreateManyEmpresaInputEnvelope
    set?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    disconnect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    delete?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    connect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    update?: AlteracaoContratualUpdateWithWhereUniqueWithoutEmpresaInput | AlteracaoContratualUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AlteracaoContratualUpdateManyWithWhereWithoutEmpresaInput | AlteracaoContratualUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AlteracaoContratualScalarWhereInput | AlteracaoContratualScalarWhereInput[]
  }

  export type AlvaraUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput> | AlvaraCreateWithoutEmpresaInput[] | AlvaraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlvaraCreateOrConnectWithoutEmpresaInput | AlvaraCreateOrConnectWithoutEmpresaInput[]
    upsert?: AlvaraUpsertWithWhereUniqueWithoutEmpresaInput | AlvaraUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AlvaraCreateManyEmpresaInputEnvelope
    set?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    disconnect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    delete?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    connect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    update?: AlvaraUpdateWithWhereUniqueWithoutEmpresaInput | AlvaraUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AlvaraUpdateManyWithWhereWithoutEmpresaInput | AlvaraUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AlvaraScalarWhereInput | AlvaraScalarWhereInput[]
  }

  export type SocioUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput> | SocioCreateWithoutEmpresaInput[] | SocioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SocioCreateOrConnectWithoutEmpresaInput | SocioCreateOrConnectWithoutEmpresaInput[]
    upsert?: SocioUpsertWithWhereUniqueWithoutEmpresaInput | SocioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: SocioCreateManyEmpresaInputEnvelope
    set?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    disconnect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    delete?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    connect?: SocioWhereUniqueInput | SocioWhereUniqueInput[]
    update?: SocioUpdateWithWhereUniqueWithoutEmpresaInput | SocioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: SocioUpdateManyWithWhereWithoutEmpresaInput | SocioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: SocioScalarWhereInput | SocioScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput | FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput | FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutEmpresaInput | FuncionarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type AlteracaoContratualUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput> | AlteracaoContratualCreateWithoutEmpresaInput[] | AlteracaoContratualUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlteracaoContratualCreateOrConnectWithoutEmpresaInput | AlteracaoContratualCreateOrConnectWithoutEmpresaInput[]
    upsert?: AlteracaoContratualUpsertWithWhereUniqueWithoutEmpresaInput | AlteracaoContratualUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AlteracaoContratualCreateManyEmpresaInputEnvelope
    set?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    disconnect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    delete?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    connect?: AlteracaoContratualWhereUniqueInput | AlteracaoContratualWhereUniqueInput[]
    update?: AlteracaoContratualUpdateWithWhereUniqueWithoutEmpresaInput | AlteracaoContratualUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AlteracaoContratualUpdateManyWithWhereWithoutEmpresaInput | AlteracaoContratualUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AlteracaoContratualScalarWhereInput | AlteracaoContratualScalarWhereInput[]
  }

  export type AlvaraUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput> | AlvaraCreateWithoutEmpresaInput[] | AlvaraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AlvaraCreateOrConnectWithoutEmpresaInput | AlvaraCreateOrConnectWithoutEmpresaInput[]
    upsert?: AlvaraUpsertWithWhereUniqueWithoutEmpresaInput | AlvaraUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AlvaraCreateManyEmpresaInputEnvelope
    set?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    disconnect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    delete?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    connect?: AlvaraWhereUniqueInput | AlvaraWhereUniqueInput[]
    update?: AlvaraUpdateWithWhereUniqueWithoutEmpresaInput | AlvaraUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AlvaraUpdateManyWithWhereWithoutEmpresaInput | AlvaraUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AlvaraScalarWhereInput | AlvaraScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutSociosInput = {
    create?: XOR<EmpresaCreateWithoutSociosInput, EmpresaUncheckedCreateWithoutSociosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutSociosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpresaUpdateOneRequiredWithoutSociosNestedInput = {
    create?: XOR<EmpresaCreateWithoutSociosInput, EmpresaUncheckedCreateWithoutSociosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutSociosInput
    upsert?: EmpresaUpsertWithoutSociosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutSociosInput, EmpresaUpdateWithoutSociosInput>, EmpresaUncheckedUpdateWithoutSociosInput>
  }

  export type EmpresaCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFuncionariosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFuncionariosInput
    upsert?: EmpresaUpsertWithoutFuncionariosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutFuncionariosInput, EmpresaUpdateWithoutFuncionariosInput>, EmpresaUncheckedUpdateWithoutFuncionariosInput>
  }

  export type EmpresaCreateNestedOneWithoutAlteracoesContratuaisInput = {
    create?: XOR<EmpresaCreateWithoutAlteracoesContratuaisInput, EmpresaUncheckedCreateWithoutAlteracoesContratuaisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAlteracoesContratuaisInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EmpresaUpdateOneRequiredWithoutAlteracoesContratuaisNestedInput = {
    create?: XOR<EmpresaCreateWithoutAlteracoesContratuaisInput, EmpresaUncheckedCreateWithoutAlteracoesContratuaisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAlteracoesContratuaisInput
    upsert?: EmpresaUpsertWithoutAlteracoesContratuaisInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutAlteracoesContratuaisInput, EmpresaUpdateWithoutAlteracoesContratuaisInput>, EmpresaUncheckedUpdateWithoutAlteracoesContratuaisInput>
  }

  export type EmpresaCreateNestedOneWithoutAlvarasInput = {
    create?: XOR<EmpresaCreateWithoutAlvarasInput, EmpresaUncheckedCreateWithoutAlvarasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAlvarasInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EmpresaUpdateOneRequiredWithoutAlvarasNestedInput = {
    create?: XOR<EmpresaCreateWithoutAlvarasInput, EmpresaUncheckedCreateWithoutAlvarasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAlvarasInput
    upsert?: EmpresaUpsertWithoutAlvarasInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutAlvarasInput, EmpresaUpdateWithoutAlvarasInput>, EmpresaUncheckedUpdateWithoutAlvarasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTipoClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteFilter<$PrismaModel> | $Enums.TipoCliente
  }

  export type NestedEnumRankingClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.RankingCliente | EnumRankingClienteFieldRefInput<$PrismaModel>
    in?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumRankingClienteFilter<$PrismaModel> | $Enums.RankingCliente
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel> | $Enums.TipoCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoClienteFilter<$PrismaModel>
    _max?: NestedEnumTipoClienteFilter<$PrismaModel>
  }

  export type NestedEnumRankingClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RankingCliente | EnumRankingClienteFieldRefInput<$PrismaModel>
    in?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankingCliente[] | ListEnumRankingClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumRankingClienteWithAggregatesFilter<$PrismaModel> | $Enums.RankingCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankingClienteFilter<$PrismaModel>
    _max?: NestedEnumRankingClienteFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SocioCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
  }

  export type SocioUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
  }

  export type SocioCreateOrConnectWithoutEmpresaInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput>
  }

  export type SocioCreateManyEmpresaInputEnvelope = {
    data: SocioCreateManyEmpresaInput | SocioCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
  }

  export type FuncionarioUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cpf: string
  }

  export type FuncionarioCreateOrConnectWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput>
  }

  export type FuncionarioCreateManyEmpresaInputEnvelope = {
    data: FuncionarioCreateManyEmpresaInput | FuncionarioCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type AlteracaoContratualCreateWithoutEmpresaInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
  }

  export type AlteracaoContratualUncheckedCreateWithoutEmpresaInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
  }

  export type AlteracaoContratualCreateOrConnectWithoutEmpresaInput = {
    where: AlteracaoContratualWhereUniqueInput
    create: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput>
  }

  export type AlteracaoContratualCreateManyEmpresaInputEnvelope = {
    data: AlteracaoContratualCreateManyEmpresaInput | AlteracaoContratualCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type AlvaraCreateWithoutEmpresaInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
  }

  export type AlvaraUncheckedCreateWithoutEmpresaInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
  }

  export type AlvaraCreateOrConnectWithoutEmpresaInput = {
    where: AlvaraWhereUniqueInput
    create: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput>
  }

  export type AlvaraCreateManyEmpresaInputEnvelope = {
    data: AlvaraCreateManyEmpresaInput | AlvaraCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type SocioUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: SocioWhereUniqueInput
    update: XOR<SocioUpdateWithoutEmpresaInput, SocioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<SocioCreateWithoutEmpresaInput, SocioUncheckedCreateWithoutEmpresaInput>
  }

  export type SocioUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: SocioWhereUniqueInput
    data: XOR<SocioUpdateWithoutEmpresaInput, SocioUncheckedUpdateWithoutEmpresaInput>
  }

  export type SocioUpdateManyWithWhereWithoutEmpresaInput = {
    where: SocioScalarWhereInput
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type SocioScalarWhereInput = {
    AND?: SocioScalarWhereInput | SocioScalarWhereInput[]
    OR?: SocioScalarWhereInput[]
    NOT?: SocioScalarWhereInput | SocioScalarWhereInput[]
    id?: StringFilter<"Socio"> | string
    nome?: StringFilter<"Socio"> | string
    cpf?: StringFilter<"Socio"> | string
    endereco?: StringFilter<"Socio"> | string
    nomePai?: StringNullableFilter<"Socio"> | string | null
    empresaPai?: StringNullableFilter<"Socio"> | string | null
    nomeMae?: StringNullableFilter<"Socio"> | string | null
    empresaMae?: StringNullableFilter<"Socio"> | string | null
    observacoesSociais?: StringNullableFilter<"Socio"> | string | null
    fazIrpfComContabilidade?: BoolFilter<"Socio"> | boolean
    capitalParticipacao?: FloatNullableFilter<"Socio"> | number | null
    empresaId?: StringFilter<"Socio"> | string
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutEmpresaInput, FuncionarioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutEmpresaInput, FuncionarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutEmpresaInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type FuncionarioScalarWhereInput = {
    AND?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    OR?: FuncionarioScalarWhereInput[]
    NOT?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    id?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
  }

  export type AlteracaoContratualUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: AlteracaoContratualWhereUniqueInput
    update: XOR<AlteracaoContratualUpdateWithoutEmpresaInput, AlteracaoContratualUncheckedUpdateWithoutEmpresaInput>
    create: XOR<AlteracaoContratualCreateWithoutEmpresaInput, AlteracaoContratualUncheckedCreateWithoutEmpresaInput>
  }

  export type AlteracaoContratualUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: AlteracaoContratualWhereUniqueInput
    data: XOR<AlteracaoContratualUpdateWithoutEmpresaInput, AlteracaoContratualUncheckedUpdateWithoutEmpresaInput>
  }

  export type AlteracaoContratualUpdateManyWithWhereWithoutEmpresaInput = {
    where: AlteracaoContratualScalarWhereInput
    data: XOR<AlteracaoContratualUpdateManyMutationInput, AlteracaoContratualUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type AlteracaoContratualScalarWhereInput = {
    AND?: AlteracaoContratualScalarWhereInput | AlteracaoContratualScalarWhereInput[]
    OR?: AlteracaoContratualScalarWhereInput[]
    NOT?: AlteracaoContratualScalarWhereInput | AlteracaoContratualScalarWhereInput[]
    id?: StringFilter<"AlteracaoContratual"> | string
    dataAlteracao?: DateTimeFilter<"AlteracaoContratual"> | Date | string
    descricao?: StringFilter<"AlteracaoContratual"> | string
    empresaId?: StringFilter<"AlteracaoContratual"> | string
  }

  export type AlvaraUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: AlvaraWhereUniqueInput
    update: XOR<AlvaraUpdateWithoutEmpresaInput, AlvaraUncheckedUpdateWithoutEmpresaInput>
    create: XOR<AlvaraCreateWithoutEmpresaInput, AlvaraUncheckedCreateWithoutEmpresaInput>
  }

  export type AlvaraUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: AlvaraWhereUniqueInput
    data: XOR<AlvaraUpdateWithoutEmpresaInput, AlvaraUncheckedUpdateWithoutEmpresaInput>
  }

  export type AlvaraUpdateManyWithWhereWithoutEmpresaInput = {
    where: AlvaraScalarWhereInput
    data: XOR<AlvaraUpdateManyMutationInput, AlvaraUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type AlvaraScalarWhereInput = {
    AND?: AlvaraScalarWhereInput | AlvaraScalarWhereInput[]
    OR?: AlvaraScalarWhereInput[]
    NOT?: AlvaraScalarWhereInput | AlvaraScalarWhereInput[]
    id?: StringFilter<"Alvara"> | string
    tipo?: StringFilter<"Alvara"> | string
    pronto?: BoolFilter<"Alvara"> | boolean
    dataVencimento?: DateTimeNullableFilter<"Alvara"> | Date | string | null
    empresaId?: StringFilter<"Alvara"> | string
  }

  export type EmpresaCreateWithoutSociosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutSociosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualUncheckedCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutSociosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutSociosInput, EmpresaUncheckedCreateWithoutSociosInput>
  }

  export type EmpresaUpsertWithoutSociosInput = {
    update: XOR<EmpresaUpdateWithoutSociosInput, EmpresaUncheckedUpdateWithoutSociosInput>
    create: XOR<EmpresaCreateWithoutSociosInput, EmpresaUncheckedCreateWithoutSociosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutSociosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutSociosInput, EmpresaUncheckedUpdateWithoutSociosInput>
  }

  export type EmpresaUpdateWithoutSociosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutSociosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUncheckedUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateWithoutFuncionariosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutFuncionariosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioUncheckedCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualUncheckedCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutFuncionariosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
  }

  export type EmpresaUpsertWithoutFuncionariosInput = {
    update: XOR<EmpresaUpdateWithoutFuncionariosInput, EmpresaUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutFuncionariosInput, EmpresaUncheckedUpdateWithoutFuncionariosInput>
  }

  export type EmpresaUpdateWithoutFuncionariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutFuncionariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUncheckedUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUncheckedUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateWithoutAlteracoesContratuaisInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutAlteracoesContratuaisInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioUncheckedCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
    alvaras?: AlvaraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutAlteracoesContratuaisInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutAlteracoesContratuaisInput, EmpresaUncheckedCreateWithoutAlteracoesContratuaisInput>
  }

  export type EmpresaUpsertWithoutAlteracoesContratuaisInput = {
    update: XOR<EmpresaUpdateWithoutAlteracoesContratuaisInput, EmpresaUncheckedUpdateWithoutAlteracoesContratuaisInput>
    create: XOR<EmpresaCreateWithoutAlteracoesContratuaisInput, EmpresaUncheckedCreateWithoutAlteracoesContratuaisInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutAlteracoesContratuaisInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutAlteracoesContratuaisInput, EmpresaUncheckedUpdateWithoutAlteracoesContratuaisInput>
  }

  export type EmpresaUpdateWithoutAlteracoesContratuaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutAlteracoesContratuaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUncheckedUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
    alvaras?: AlvaraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateWithoutAlvarasInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutAlvarasInput = {
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    inscricaoEstadual?: string | null
    inscricaoMunicipal?: string | null
    endereco: string
    tempoEmpresaMeses?: number | null
    dataFundacao?: Date | string | null
    dataEntradaContabilidade?: Date | string | null
    contadorAnterior?: string | null
    produtoOuServico: string
    capitalSocial: number
    ramoAtuacao: string
    participaLicitacao?: boolean
    tipoCliente?: $Enums.TipoCliente
    regimeTributario: string
    dataBaixa?: Date | string | null
    pendenciasFiscaisGov?: boolean
    rankingCliente?: $Enums.RankingCliente
    ultimaAtualizacaoBanc?: Date | string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    socios?: SocioUncheckedCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
    alteracoesContratuais?: AlteracaoContratualUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutAlvarasInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutAlvarasInput, EmpresaUncheckedCreateWithoutAlvarasInput>
  }

  export type EmpresaUpsertWithoutAlvarasInput = {
    update: XOR<EmpresaUpdateWithoutAlvarasInput, EmpresaUncheckedUpdateWithoutAlvarasInput>
    create: XOR<EmpresaCreateWithoutAlvarasInput, EmpresaUncheckedCreateWithoutAlvarasInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutAlvarasInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutAlvarasInput, EmpresaUncheckedUpdateWithoutAlvarasInput>
  }

  export type EmpresaUpdateWithoutAlvarasInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutAlvarasInput = {
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    inscricaoMunicipal?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    tempoEmpresaMeses?: NullableIntFieldUpdateOperationsInput | number | null
    dataFundacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataEntradaContabilidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contadorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    produtoOuServico?: StringFieldUpdateOperationsInput | string
    capitalSocial?: FloatFieldUpdateOperationsInput | number
    ramoAtuacao?: StringFieldUpdateOperationsInput | string
    participaLicitacao?: BoolFieldUpdateOperationsInput | boolean
    tipoCliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    regimeTributario?: StringFieldUpdateOperationsInput | string
    dataBaixa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendenciasFiscaisGov?: BoolFieldUpdateOperationsInput | boolean
    rankingCliente?: EnumRankingClienteFieldUpdateOperationsInput | $Enums.RankingCliente
    ultimaAtualizacaoBanc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: SocioUncheckedUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
    alteracoesContratuais?: AlteracaoContratualUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type SocioCreateManyEmpresaInput = {
    id?: string
    nome: string
    cpf: string
    endereco: string
    nomePai?: string | null
    empresaPai?: string | null
    nomeMae?: string | null
    empresaMae?: string | null
    observacoesSociais?: string | null
    fazIrpfComContabilidade?: boolean
    capitalParticipacao?: number | null
  }

  export type FuncionarioCreateManyEmpresaInput = {
    id?: string
    nome: string
    cpf: string
  }

  export type AlteracaoContratualCreateManyEmpresaInput = {
    id?: string
    dataAlteracao: Date | string
    descricao: string
  }

  export type AlvaraCreateManyEmpresaInput = {
    id?: string
    tipo: string
    pronto?: boolean
    dataVencimento?: Date | string | null
  }

  export type SocioUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SocioUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SocioUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    empresaPai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    empresaMae?: NullableStringFieldUpdateOperationsInput | string | null
    observacoesSociais?: NullableStringFieldUpdateOperationsInput | string | null
    fazIrpfComContabilidade?: BoolFieldUpdateOperationsInput | boolean
    capitalParticipacao?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FuncionarioUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AlteracaoContratualUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAlteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AlvaraUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlvaraUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlvaraUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pronto?: BoolFieldUpdateOperationsInput | boolean
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}