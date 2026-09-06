
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cohort
 * 
 */
export type Cohort = $Result.DefaultSelection<Prisma.$CohortPayload>
/**
 * Model CohortMember
 * 
 */
export type CohortMember = $Result.DefaultSelection<Prisma.$CohortMemberPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionEvent
 * 
 */
export type SessionEvent = $Result.DefaultSelection<Prisma.$SessionEventPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model ExerciseAttempt
 * 
 */
export type ExerciseAttempt = $Result.DefaultSelection<Prisma.$ExerciseAttemptPayload>
/**
 * Model TranscriptSegment
 * 
 */
export type TranscriptSegment = $Result.DefaultSelection<Prisma.$TranscriptSegmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  INSTRUCTOR: 'INSTRUCTOR',
  SUPERVISOR: 'SUPERVISOR',
  MANAGER: 'MANAGER',
  PARENT: 'PARENT',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SessionStatus: {
  SCHEDULED: 'SCHEDULED',
  LIVE: 'LIVE',
  ENDED: 'ENDED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cohort`: Exposes CRUD operations for the **Cohort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cohorts
    * const cohorts = await prisma.cohort.findMany()
    * ```
    */
  get cohort(): Prisma.CohortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cohortMember`: Exposes CRUD operations for the **CohortMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CohortMembers
    * const cohortMembers = await prisma.cohortMember.findMany()
    * ```
    */
  get cohortMember(): Prisma.CohortMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionEvent`: Exposes CRUD operations for the **SessionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionEvents
    * const sessionEvents = await prisma.sessionEvent.findMany()
    * ```
    */
  get sessionEvent(): Prisma.SessionEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseAttempt`: Exposes CRUD operations for the **ExerciseAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseAttempts
    * const exerciseAttempts = await prisma.exerciseAttempt.findMany()
    * ```
    */
  get exerciseAttempt(): Prisma.ExerciseAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcriptSegment`: Exposes CRUD operations for the **TranscriptSegment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranscriptSegments
    * const transcriptSegments = await prisma.transcriptSegment.findMany()
    * ```
    */
  get transcriptSegment(): Prisma.TranscriptSegmentDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Cohort: 'Cohort',
    CohortMember: 'CohortMember',
    Session: 'Session',
    SessionEvent: 'SessionEvent',
    Attendance: 'Attendance',
    Exercise: 'Exercise',
    ExerciseAttempt: 'ExerciseAttempt',
    TranscriptSegment: 'TranscriptSegment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cohort" | "cohortMember" | "session" | "sessionEvent" | "attendance" | "exercise" | "exerciseAttempt" | "transcriptSegment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cohort: {
        payload: Prisma.$CohortPayload<ExtArgs>
        fields: Prisma.CohortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CohortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CohortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findFirst: {
            args: Prisma.CohortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CohortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findMany: {
            args: Prisma.CohortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          create: {
            args: Prisma.CohortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          createMany: {
            args: Prisma.CohortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CohortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          delete: {
            args: Prisma.CohortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          update: {
            args: Prisma.CohortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          deleteMany: {
            args: Prisma.CohortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CohortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CohortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          upsert: {
            args: Prisma.CohortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          aggregate: {
            args: Prisma.CohortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohort>
          }
          groupBy: {
            args: Prisma.CohortGroupByArgs<ExtArgs>
            result: $Utils.Optional<CohortGroupByOutputType>[]
          }
          count: {
            args: Prisma.CohortCountArgs<ExtArgs>
            result: $Utils.Optional<CohortCountAggregateOutputType> | number
          }
        }
      }
      CohortMember: {
        payload: Prisma.$CohortMemberPayload<ExtArgs>
        fields: Prisma.CohortMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CohortMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CohortMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          findFirst: {
            args: Prisma.CohortMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CohortMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          findMany: {
            args: Prisma.CohortMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>[]
          }
          create: {
            args: Prisma.CohortMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          createMany: {
            args: Prisma.CohortMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CohortMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>[]
          }
          delete: {
            args: Prisma.CohortMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          update: {
            args: Prisma.CohortMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          deleteMany: {
            args: Prisma.CohortMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CohortMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CohortMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>[]
          }
          upsert: {
            args: Prisma.CohortMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortMemberPayload>
          }
          aggregate: {
            args: Prisma.CohortMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohortMember>
          }
          groupBy: {
            args: Prisma.CohortMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CohortMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CohortMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CohortMemberCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      SessionEvent: {
        payload: Prisma.$SessionEventPayload<ExtArgs>
        fields: Prisma.SessionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          findFirst: {
            args: Prisma.SessionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          findMany: {
            args: Prisma.SessionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          create: {
            args: Prisma.SessionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          createMany: {
            args: Prisma.SessionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          delete: {
            args: Prisma.SessionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          update: {
            args: Prisma.SessionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          deleteMany: {
            args: Prisma.SessionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          upsert: {
            args: Prisma.SessionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          aggregate: {
            args: Prisma.SessionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionEvent>
          }
          groupBy: {
            args: Prisma.SessionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionEventCountArgs<ExtArgs>
            result: $Utils.Optional<SessionEventCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      ExerciseAttempt: {
        payload: Prisma.$ExerciseAttemptPayload<ExtArgs>
        fields: Prisma.ExerciseAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          findFirst: {
            args: Prisma.ExerciseAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          findMany: {
            args: Prisma.ExerciseAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>[]
          }
          create: {
            args: Prisma.ExerciseAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          createMany: {
            args: Prisma.ExerciseAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>[]
          }
          delete: {
            args: Prisma.ExerciseAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          update: {
            args: Prisma.ExerciseAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAttemptPayload>
          }
          aggregate: {
            args: Prisma.ExerciseAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseAttempt>
          }
          groupBy: {
            args: Prisma.ExerciseAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAttemptCountAggregateOutputType> | number
          }
        }
      }
      TranscriptSegment: {
        payload: Prisma.$TranscriptSegmentPayload<ExtArgs>
        fields: Prisma.TranscriptSegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscriptSegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscriptSegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          findFirst: {
            args: Prisma.TranscriptSegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscriptSegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          findMany: {
            args: Prisma.TranscriptSegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>[]
          }
          create: {
            args: Prisma.TranscriptSegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          createMany: {
            args: Prisma.TranscriptSegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscriptSegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>[]
          }
          delete: {
            args: Prisma.TranscriptSegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          update: {
            args: Prisma.TranscriptSegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          deleteMany: {
            args: Prisma.TranscriptSegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscriptSegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscriptSegmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>[]
          }
          upsert: {
            args: Prisma.TranscriptSegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptSegmentPayload>
          }
          aggregate: {
            args: Prisma.TranscriptSegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscriptSegment>
          }
          groupBy: {
            args: Prisma.TranscriptSegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptSegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscriptSegmentCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptSegmentCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cohort?: CohortOmit
    cohortMember?: CohortMemberOmit
    session?: SessionOmit
    sessionEvent?: SessionEventOmit
    attendance?: AttendanceOmit
    exercise?: ExerciseOmit
    exerciseAttempt?: ExerciseAttemptOmit
    transcriptSegment?: TranscriptSegmentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    children: number
    cohortsTaught: number
    cohortsSupervised: number
    memberships: number
    attendance: number
    attempts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    cohortsTaught?: boolean | UserCountOutputTypeCountCohortsTaughtArgs
    cohortsSupervised?: boolean | UserCountOutputTypeCountCohortsSupervisedArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
    attempts?: boolean | UserCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCohortsTaughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCohortsSupervisedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAttemptWhereInput
  }


  /**
   * Count Type CohortCountOutputType
   */

  export type CohortCountOutputType = {
    members: number
    sessions: number
  }

  export type CohortCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CohortCountOutputTypeCountMembersArgs
    sessions?: boolean | CohortCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortCountOutputType
     */
    select?: CohortCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortMemberWhereInput
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    attendance: number
    attempts: number
    transcript: number
    events: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | SessionCountOutputTypeCountAttendanceArgs
    attempts?: boolean | SessionCountOutputTypeCountAttemptsArgs
    transcript?: boolean | SessionCountOutputTypeCountTranscriptArgs
    events?: boolean | SessionCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAttemptWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTranscriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptSegmentWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionEventWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    attempts: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | ExerciseCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    parentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    parentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    parentId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    parentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    parentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    parentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    parentId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    cohortsTaught?: boolean | User$cohortsTaughtArgs<ExtArgs>
    cohortsSupervised?: boolean | User$cohortsSupervisedArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    attempts?: boolean | User$attemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    parentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "createdAt" | "parentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    cohortsTaught?: boolean | User$cohortsTaughtArgs<ExtArgs>
    cohortsSupervised?: boolean | User$cohortsSupervisedArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    attempts?: boolean | User$attemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parent: Prisma.$UserPayload<ExtArgs> | null
      children: Prisma.$UserPayload<ExtArgs>[]
      cohortsTaught: Prisma.$CohortPayload<ExtArgs>[]
      cohortsSupervised: Prisma.$CohortPayload<ExtArgs>[]
      memberships: Prisma.$CohortMemberPayload<ExtArgs>[]
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      attempts: Prisma.$ExerciseAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
      parentId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cohortsTaught<T extends User$cohortsTaughtArgs<ExtArgs> = {}>(args?: Subset<T, User$cohortsTaughtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cohortsSupervised<T extends User$cohortsSupervisedArgs<ExtArgs> = {}>(args?: Subset<T, User$cohortsSupervisedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance<T extends User$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends User$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly parentId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.cohortsTaught
   */
  export type User$cohortsTaughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    where?: CohortWhereInput
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    cursor?: CohortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * User.cohortsSupervised
   */
  export type User$cohortsSupervisedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    where?: CohortWhereInput
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    cursor?: CohortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    where?: CohortMemberWhereInput
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    cursor?: CohortMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CohortMemberScalarFieldEnum | CohortMemberScalarFieldEnum[]
  }

  /**
   * User.attendance
   */
  export type User$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.attempts
   */
  export type User$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    where?: ExerciseAttemptWhereInput
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    cursor?: ExerciseAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cohort
   */

  export type AggregateCohort = {
    _count: CohortCountAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  export type CohortMinAggregateOutputType = {
    id: string | null
    name: string | null
    language: string | null
    gradeBand: string | null
    createdAt: Date | null
    instructorId: string | null
    supervisorId: string | null
  }

  export type CohortMaxAggregateOutputType = {
    id: string | null
    name: string | null
    language: string | null
    gradeBand: string | null
    createdAt: Date | null
    instructorId: string | null
    supervisorId: string | null
  }

  export type CohortCountAggregateOutputType = {
    id: number
    name: number
    language: number
    gradeBand: number
    createdAt: number
    instructorId: number
    supervisorId: number
    _all: number
  }


  export type CohortMinAggregateInputType = {
    id?: true
    name?: true
    language?: true
    gradeBand?: true
    createdAt?: true
    instructorId?: true
    supervisorId?: true
  }

  export type CohortMaxAggregateInputType = {
    id?: true
    name?: true
    language?: true
    gradeBand?: true
    createdAt?: true
    instructorId?: true
    supervisorId?: true
  }

  export type CohortCountAggregateInputType = {
    id?: true
    name?: true
    language?: true
    gradeBand?: true
    createdAt?: true
    instructorId?: true
    supervisorId?: true
    _all?: true
  }

  export type CohortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohort to aggregate.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cohorts
    **/
    _count?: true | CohortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CohortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CohortMaxAggregateInputType
  }

  export type GetCohortAggregateType<T extends CohortAggregateArgs> = {
        [P in keyof T & keyof AggregateCohort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohort[P]>
      : GetScalarType<T[P], AggregateCohort[P]>
  }




  export type CohortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortWhereInput
    orderBy?: CohortOrderByWithAggregationInput | CohortOrderByWithAggregationInput[]
    by: CohortScalarFieldEnum[] | CohortScalarFieldEnum
    having?: CohortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CohortCountAggregateInputType | true
    _min?: CohortMinAggregateInputType
    _max?: CohortMaxAggregateInputType
  }

  export type CohortGroupByOutputType = {
    id: string
    name: string
    language: string
    gradeBand: string
    createdAt: Date
    instructorId: string
    supervisorId: string | null
    _count: CohortCountAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  type GetCohortGroupByPayload<T extends CohortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CohortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CohortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CohortGroupByOutputType[P]>
            : GetScalarType<T[P], CohortGroupByOutputType[P]>
        }
      >
    >


  export type CohortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    gradeBand?: boolean
    createdAt?: boolean
    instructorId?: boolean
    supervisorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
    members?: boolean | Cohort$membersArgs<ExtArgs>
    sessions?: boolean | Cohort$sessionsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    gradeBand?: boolean
    createdAt?: boolean
    instructorId?: boolean
    supervisorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    gradeBand?: boolean
    createdAt?: boolean
    instructorId?: boolean
    supervisorId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectScalar = {
    id?: boolean
    name?: boolean
    language?: boolean
    gradeBand?: boolean
    createdAt?: boolean
    instructorId?: boolean
    supervisorId?: boolean
  }

  export type CohortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "language" | "gradeBand" | "createdAt" | "instructorId" | "supervisorId", ExtArgs["result"]["cohort"]>
  export type CohortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
    members?: boolean | Cohort$membersArgs<ExtArgs>
    sessions?: boolean | Cohort$sessionsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CohortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
  }
  export type CohortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Cohort$supervisorArgs<ExtArgs>
  }

  export type $CohortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cohort"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$CohortMemberPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      language: string
      gradeBand: string
      createdAt: Date
      instructorId: string
      supervisorId: string | null
    }, ExtArgs["result"]["cohort"]>
    composites: {}
  }

  type CohortGetPayload<S extends boolean | null | undefined | CohortDefaultArgs> = $Result.GetResult<Prisma.$CohortPayload, S>

  type CohortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CohortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CohortCountAggregateInputType | true
    }

  export interface CohortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cohort'], meta: { name: 'Cohort' } }
    /**
     * Find zero or one Cohort that matches the filter.
     * @param {CohortFindUniqueArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CohortFindUniqueArgs>(args: SelectSubset<T, CohortFindUniqueArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cohort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CohortFindUniqueOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CohortFindUniqueOrThrowArgs>(args: SelectSubset<T, CohortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CohortFindFirstArgs>(args?: SelectSubset<T, CohortFindFirstArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CohortFindFirstOrThrowArgs>(args?: SelectSubset<T, CohortFindFirstOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cohorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cohorts
     * const cohorts = await prisma.cohort.findMany()
     * 
     * // Get first 10 Cohorts
     * const cohorts = await prisma.cohort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohortWithIdOnly = await prisma.cohort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CohortFindManyArgs>(args?: SelectSubset<T, CohortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cohort.
     * @param {CohortCreateArgs} args - Arguments to create a Cohort.
     * @example
     * // Create one Cohort
     * const Cohort = await prisma.cohort.create({
     *   data: {
     *     // ... data to create a Cohort
     *   }
     * })
     * 
     */
    create<T extends CohortCreateArgs>(args: SelectSubset<T, CohortCreateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cohorts.
     * @param {CohortCreateManyArgs} args - Arguments to create many Cohorts.
     * @example
     * // Create many Cohorts
     * const cohort = await prisma.cohort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CohortCreateManyArgs>(args?: SelectSubset<T, CohortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cohorts and returns the data saved in the database.
     * @param {CohortCreateManyAndReturnArgs} args - Arguments to create many Cohorts.
     * @example
     * // Create many Cohorts
     * const cohort = await prisma.cohort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cohorts and only return the `id`
     * const cohortWithIdOnly = await prisma.cohort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CohortCreateManyAndReturnArgs>(args?: SelectSubset<T, CohortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cohort.
     * @param {CohortDeleteArgs} args - Arguments to delete one Cohort.
     * @example
     * // Delete one Cohort
     * const Cohort = await prisma.cohort.delete({
     *   where: {
     *     // ... filter to delete one Cohort
     *   }
     * })
     * 
     */
    delete<T extends CohortDeleteArgs>(args: SelectSubset<T, CohortDeleteArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cohort.
     * @param {CohortUpdateArgs} args - Arguments to update one Cohort.
     * @example
     * // Update one Cohort
     * const cohort = await prisma.cohort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CohortUpdateArgs>(args: SelectSubset<T, CohortUpdateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cohorts.
     * @param {CohortDeleteManyArgs} args - Arguments to filter Cohorts to delete.
     * @example
     * // Delete a few Cohorts
     * const { count } = await prisma.cohort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CohortDeleteManyArgs>(args?: SelectSubset<T, CohortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cohorts
     * const cohort = await prisma.cohort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CohortUpdateManyArgs>(args: SelectSubset<T, CohortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohorts and returns the data updated in the database.
     * @param {CohortUpdateManyAndReturnArgs} args - Arguments to update many Cohorts.
     * @example
     * // Update many Cohorts
     * const cohort = await prisma.cohort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cohorts and only return the `id`
     * const cohortWithIdOnly = await prisma.cohort.updateManyAndReturn({
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
    updateManyAndReturn<T extends CohortUpdateManyAndReturnArgs>(args: SelectSubset<T, CohortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cohort.
     * @param {CohortUpsertArgs} args - Arguments to update or create a Cohort.
     * @example
     * // Update or create a Cohort
     * const cohort = await prisma.cohort.upsert({
     *   create: {
     *     // ... data to create a Cohort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cohort we want to update
     *   }
     * })
     */
    upsert<T extends CohortUpsertArgs>(args: SelectSubset<T, CohortUpsertArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortCountArgs} args - Arguments to filter Cohorts to count.
     * @example
     * // Count the number of Cohorts
     * const count = await prisma.cohort.count({
     *   where: {
     *     // ... the filter for the Cohorts we want to count
     *   }
     * })
    **/
    count<T extends CohortCountArgs>(
      args?: Subset<T, CohortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CohortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CohortAggregateArgs>(args: Subset<T, CohortAggregateArgs>): Prisma.PrismaPromise<GetCohortAggregateType<T>>

    /**
     * Group by Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortGroupByArgs} args - Group by arguments.
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
      T extends CohortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CohortGroupByArgs['orderBy'] }
        : { orderBy?: CohortGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CohortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cohort model
   */
  readonly fields: CohortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cohort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CohortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends Cohort$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$supervisorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Cohort$membersArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Cohort$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cohort model
   */
  interface CohortFieldRefs {
    readonly id: FieldRef<"Cohort", 'String'>
    readonly name: FieldRef<"Cohort", 'String'>
    readonly language: FieldRef<"Cohort", 'String'>
    readonly gradeBand: FieldRef<"Cohort", 'String'>
    readonly createdAt: FieldRef<"Cohort", 'DateTime'>
    readonly instructorId: FieldRef<"Cohort", 'String'>
    readonly supervisorId: FieldRef<"Cohort", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cohort findUnique
   */
  export type CohortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findUniqueOrThrow
   */
  export type CohortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findFirst
   */
  export type CohortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findFirstOrThrow
   */
  export type CohortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findMany
   */
  export type CohortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohorts to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort create
   */
  export type CohortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to create a Cohort.
     */
    data: XOR<CohortCreateInput, CohortUncheckedCreateInput>
  }

  /**
   * Cohort createMany
   */
  export type CohortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cohorts.
     */
    data: CohortCreateManyInput | CohortCreateManyInput[]
  }

  /**
   * Cohort createManyAndReturn
   */
  export type CohortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * The data used to create many Cohorts.
     */
    data: CohortCreateManyInput | CohortCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cohort update
   */
  export type CohortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to update a Cohort.
     */
    data: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
    /**
     * Choose, which Cohort to update.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort updateMany
   */
  export type CohortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cohorts.
     */
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyInput>
    /**
     * Filter which Cohorts to update
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to update.
     */
    limit?: number
  }

  /**
   * Cohort updateManyAndReturn
   */
  export type CohortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * The data used to update Cohorts.
     */
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyInput>
    /**
     * Filter which Cohorts to update
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cohort upsert
   */
  export type CohortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The filter to search for the Cohort to update in case it exists.
     */
    where: CohortWhereUniqueInput
    /**
     * In case the Cohort found by the `where` argument doesn't exist, create a new Cohort with this data.
     */
    create: XOR<CohortCreateInput, CohortUncheckedCreateInput>
    /**
     * In case the Cohort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
  }

  /**
   * Cohort delete
   */
  export type CohortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter which Cohort to delete.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort deleteMany
   */
  export type CohortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohorts to delete
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to delete.
     */
    limit?: number
  }

  /**
   * Cohort.supervisor
   */
  export type Cohort$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Cohort.members
   */
  export type Cohort$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    where?: CohortMemberWhereInput
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    cursor?: CohortMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CohortMemberScalarFieldEnum | CohortMemberScalarFieldEnum[]
  }

  /**
   * Cohort.sessions
   */
  export type Cohort$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Cohort without action
   */
  export type CohortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
  }


  /**
   * Model CohortMember
   */

  export type AggregateCohortMember = {
    _count: CohortMemberCountAggregateOutputType | null
    _min: CohortMemberMinAggregateOutputType | null
    _max: CohortMemberMaxAggregateOutputType | null
  }

  export type CohortMemberMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    studentId: string | null
    joinedAt: Date | null
  }

  export type CohortMemberMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    studentId: string | null
    joinedAt: Date | null
  }

  export type CohortMemberCountAggregateOutputType = {
    id: number
    cohortId: number
    studentId: number
    joinedAt: number
    _all: number
  }


  export type CohortMemberMinAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    joinedAt?: true
  }

  export type CohortMemberMaxAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    joinedAt?: true
  }

  export type CohortMemberCountAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    joinedAt?: true
    _all?: true
  }

  export type CohortMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CohortMember to aggregate.
     */
    where?: CohortMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortMembers to fetch.
     */
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CohortMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CohortMembers
    **/
    _count?: true | CohortMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CohortMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CohortMemberMaxAggregateInputType
  }

  export type GetCohortMemberAggregateType<T extends CohortMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCohortMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohortMember[P]>
      : GetScalarType<T[P], AggregateCohortMember[P]>
  }




  export type CohortMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortMemberWhereInput
    orderBy?: CohortMemberOrderByWithAggregationInput | CohortMemberOrderByWithAggregationInput[]
    by: CohortMemberScalarFieldEnum[] | CohortMemberScalarFieldEnum
    having?: CohortMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CohortMemberCountAggregateInputType | true
    _min?: CohortMemberMinAggregateInputType
    _max?: CohortMemberMaxAggregateInputType
  }

  export type CohortMemberGroupByOutputType = {
    id: string
    cohortId: string
    studentId: string
    joinedAt: Date
    _count: CohortMemberCountAggregateOutputType | null
    _min: CohortMemberMinAggregateOutputType | null
    _max: CohortMemberMaxAggregateOutputType | null
  }

  type GetCohortMemberGroupByPayload<T extends CohortMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CohortMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CohortMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CohortMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CohortMemberGroupByOutputType[P]>
        }
      >
    >


  export type CohortMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    joinedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortMember"]>

  export type CohortMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    joinedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortMember"]>

  export type CohortMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    joinedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortMember"]>

  export type CohortMemberSelectScalar = {
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    joinedAt?: boolean
  }

  export type CohortMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "studentId" | "joinedAt", ExtArgs["result"]["cohortMember"]>
  export type CohortMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CohortMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CohortMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CohortMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CohortMember"
    objects: {
      cohort: Prisma.$CohortPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string
      studentId: string
      joinedAt: Date
    }, ExtArgs["result"]["cohortMember"]>
    composites: {}
  }

  type CohortMemberGetPayload<S extends boolean | null | undefined | CohortMemberDefaultArgs> = $Result.GetResult<Prisma.$CohortMemberPayload, S>

  type CohortMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CohortMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CohortMemberCountAggregateInputType | true
    }

  export interface CohortMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CohortMember'], meta: { name: 'CohortMember' } }
    /**
     * Find zero or one CohortMember that matches the filter.
     * @param {CohortMemberFindUniqueArgs} args - Arguments to find a CohortMember
     * @example
     * // Get one CohortMember
     * const cohortMember = await prisma.cohortMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CohortMemberFindUniqueArgs>(args: SelectSubset<T, CohortMemberFindUniqueArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CohortMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CohortMemberFindUniqueOrThrowArgs} args - Arguments to find a CohortMember
     * @example
     * // Get one CohortMember
     * const cohortMember = await prisma.cohortMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CohortMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CohortMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CohortMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberFindFirstArgs} args - Arguments to find a CohortMember
     * @example
     * // Get one CohortMember
     * const cohortMember = await prisma.cohortMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CohortMemberFindFirstArgs>(args?: SelectSubset<T, CohortMemberFindFirstArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CohortMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberFindFirstOrThrowArgs} args - Arguments to find a CohortMember
     * @example
     * // Get one CohortMember
     * const cohortMember = await prisma.cohortMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CohortMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CohortMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CohortMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CohortMembers
     * const cohortMembers = await prisma.cohortMember.findMany()
     * 
     * // Get first 10 CohortMembers
     * const cohortMembers = await prisma.cohortMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohortMemberWithIdOnly = await prisma.cohortMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CohortMemberFindManyArgs>(args?: SelectSubset<T, CohortMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CohortMember.
     * @param {CohortMemberCreateArgs} args - Arguments to create a CohortMember.
     * @example
     * // Create one CohortMember
     * const CohortMember = await prisma.cohortMember.create({
     *   data: {
     *     // ... data to create a CohortMember
     *   }
     * })
     * 
     */
    create<T extends CohortMemberCreateArgs>(args: SelectSubset<T, CohortMemberCreateArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CohortMembers.
     * @param {CohortMemberCreateManyArgs} args - Arguments to create many CohortMembers.
     * @example
     * // Create many CohortMembers
     * const cohortMember = await prisma.cohortMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CohortMemberCreateManyArgs>(args?: SelectSubset<T, CohortMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CohortMembers and returns the data saved in the database.
     * @param {CohortMemberCreateManyAndReturnArgs} args - Arguments to create many CohortMembers.
     * @example
     * // Create many CohortMembers
     * const cohortMember = await prisma.cohortMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CohortMembers and only return the `id`
     * const cohortMemberWithIdOnly = await prisma.cohortMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CohortMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CohortMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CohortMember.
     * @param {CohortMemberDeleteArgs} args - Arguments to delete one CohortMember.
     * @example
     * // Delete one CohortMember
     * const CohortMember = await prisma.cohortMember.delete({
     *   where: {
     *     // ... filter to delete one CohortMember
     *   }
     * })
     * 
     */
    delete<T extends CohortMemberDeleteArgs>(args: SelectSubset<T, CohortMemberDeleteArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CohortMember.
     * @param {CohortMemberUpdateArgs} args - Arguments to update one CohortMember.
     * @example
     * // Update one CohortMember
     * const cohortMember = await prisma.cohortMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CohortMemberUpdateArgs>(args: SelectSubset<T, CohortMemberUpdateArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CohortMembers.
     * @param {CohortMemberDeleteManyArgs} args - Arguments to filter CohortMembers to delete.
     * @example
     * // Delete a few CohortMembers
     * const { count } = await prisma.cohortMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CohortMemberDeleteManyArgs>(args?: SelectSubset<T, CohortMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CohortMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CohortMembers
     * const cohortMember = await prisma.cohortMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CohortMemberUpdateManyArgs>(args: SelectSubset<T, CohortMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CohortMembers and returns the data updated in the database.
     * @param {CohortMemberUpdateManyAndReturnArgs} args - Arguments to update many CohortMembers.
     * @example
     * // Update many CohortMembers
     * const cohortMember = await prisma.cohortMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CohortMembers and only return the `id`
     * const cohortMemberWithIdOnly = await prisma.cohortMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends CohortMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CohortMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CohortMember.
     * @param {CohortMemberUpsertArgs} args - Arguments to update or create a CohortMember.
     * @example
     * // Update or create a CohortMember
     * const cohortMember = await prisma.cohortMember.upsert({
     *   create: {
     *     // ... data to create a CohortMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CohortMember we want to update
     *   }
     * })
     */
    upsert<T extends CohortMemberUpsertArgs>(args: SelectSubset<T, CohortMemberUpsertArgs<ExtArgs>>): Prisma__CohortMemberClient<$Result.GetResult<Prisma.$CohortMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CohortMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberCountArgs} args - Arguments to filter CohortMembers to count.
     * @example
     * // Count the number of CohortMembers
     * const count = await prisma.cohortMember.count({
     *   where: {
     *     // ... the filter for the CohortMembers we want to count
     *   }
     * })
    **/
    count<T extends CohortMemberCountArgs>(
      args?: Subset<T, CohortMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CohortMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CohortMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CohortMemberAggregateArgs>(args: Subset<T, CohortMemberAggregateArgs>): Prisma.PrismaPromise<GetCohortMemberAggregateType<T>>

    /**
     * Group by CohortMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortMemberGroupByArgs} args - Group by arguments.
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
      T extends CohortMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CohortMemberGroupByArgs['orderBy'] }
        : { orderBy?: CohortMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CohortMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohortMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CohortMember model
   */
  readonly fields: CohortMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CohortMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CohortMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CohortMember model
   */
  interface CohortMemberFieldRefs {
    readonly id: FieldRef<"CohortMember", 'String'>
    readonly cohortId: FieldRef<"CohortMember", 'String'>
    readonly studentId: FieldRef<"CohortMember", 'String'>
    readonly joinedAt: FieldRef<"CohortMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CohortMember findUnique
   */
  export type CohortMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter, which CohortMember to fetch.
     */
    where: CohortMemberWhereUniqueInput
  }

  /**
   * CohortMember findUniqueOrThrow
   */
  export type CohortMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter, which CohortMember to fetch.
     */
    where: CohortMemberWhereUniqueInput
  }

  /**
   * CohortMember findFirst
   */
  export type CohortMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter, which CohortMember to fetch.
     */
    where?: CohortMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortMembers to fetch.
     */
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CohortMembers.
     */
    cursor?: CohortMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CohortMembers.
     */
    distinct?: CohortMemberScalarFieldEnum | CohortMemberScalarFieldEnum[]
  }

  /**
   * CohortMember findFirstOrThrow
   */
  export type CohortMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter, which CohortMember to fetch.
     */
    where?: CohortMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortMembers to fetch.
     */
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CohortMembers.
     */
    cursor?: CohortMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CohortMembers.
     */
    distinct?: CohortMemberScalarFieldEnum | CohortMemberScalarFieldEnum[]
  }

  /**
   * CohortMember findMany
   */
  export type CohortMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter, which CohortMembers to fetch.
     */
    where?: CohortMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortMembers to fetch.
     */
    orderBy?: CohortMemberOrderByWithRelationInput | CohortMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CohortMembers.
     */
    cursor?: CohortMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortMembers.
     */
    skip?: number
    distinct?: CohortMemberScalarFieldEnum | CohortMemberScalarFieldEnum[]
  }

  /**
   * CohortMember create
   */
  export type CohortMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CohortMember.
     */
    data: XOR<CohortMemberCreateInput, CohortMemberUncheckedCreateInput>
  }

  /**
   * CohortMember createMany
   */
  export type CohortMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CohortMembers.
     */
    data: CohortMemberCreateManyInput | CohortMemberCreateManyInput[]
  }

  /**
   * CohortMember createManyAndReturn
   */
  export type CohortMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CohortMembers.
     */
    data: CohortMemberCreateManyInput | CohortMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CohortMember update
   */
  export type CohortMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CohortMember.
     */
    data: XOR<CohortMemberUpdateInput, CohortMemberUncheckedUpdateInput>
    /**
     * Choose, which CohortMember to update.
     */
    where: CohortMemberWhereUniqueInput
  }

  /**
   * CohortMember updateMany
   */
  export type CohortMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CohortMembers.
     */
    data: XOR<CohortMemberUpdateManyMutationInput, CohortMemberUncheckedUpdateManyInput>
    /**
     * Filter which CohortMembers to update
     */
    where?: CohortMemberWhereInput
    /**
     * Limit how many CohortMembers to update.
     */
    limit?: number
  }

  /**
   * CohortMember updateManyAndReturn
   */
  export type CohortMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * The data used to update CohortMembers.
     */
    data: XOR<CohortMemberUpdateManyMutationInput, CohortMemberUncheckedUpdateManyInput>
    /**
     * Filter which CohortMembers to update
     */
    where?: CohortMemberWhereInput
    /**
     * Limit how many CohortMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CohortMember upsert
   */
  export type CohortMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CohortMember to update in case it exists.
     */
    where: CohortMemberWhereUniqueInput
    /**
     * In case the CohortMember found by the `where` argument doesn't exist, create a new CohortMember with this data.
     */
    create: XOR<CohortMemberCreateInput, CohortMemberUncheckedCreateInput>
    /**
     * In case the CohortMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CohortMemberUpdateInput, CohortMemberUncheckedUpdateInput>
  }

  /**
   * CohortMember delete
   */
  export type CohortMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
    /**
     * Filter which CohortMember to delete.
     */
    where: CohortMemberWhereUniqueInput
  }

  /**
   * CohortMember deleteMany
   */
  export type CohortMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CohortMembers to delete
     */
    where?: CohortMemberWhereInput
    /**
     * Limit how many CohortMembers to delete.
     */
    limit?: number
  }

  /**
   * CohortMember without action
   */
  export type CohortMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortMember
     */
    select?: CohortMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortMember
     */
    omit?: CohortMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortMemberInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type SessionSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    status: $Enums.SessionStatus | null
    subject: string | null
    plannedAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    status: $Enums.SessionStatus | null
    subject: string | null
    plannedAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    cohortId: number
    status: number
    subject: number
    plannedAt: number
    startedAt: number
    endedAt: number
    durationSeconds: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type SessionSumAggregateInputType = {
    durationSeconds?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    cohortId?: true
    status?: true
    subject?: true
    plannedAt?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    cohortId?: true
    status?: true
    subject?: true
    plannedAt?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    cohortId?: true
    status?: true
    subject?: true
    plannedAt?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    cohortId: string
    status: $Enums.SessionStatus
    subject: string
    plannedAt: Date
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    status?: boolean
    subject?: boolean
    plannedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    attendance?: boolean | Session$attendanceArgs<ExtArgs>
    attempts?: boolean | Session$attemptsArgs<ExtArgs>
    transcript?: boolean | Session$transcriptArgs<ExtArgs>
    events?: boolean | Session$eventsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    status?: boolean
    subject?: boolean
    plannedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    status?: boolean
    subject?: boolean
    plannedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    cohortId?: boolean
    status?: boolean
    subject?: boolean
    plannedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "status" | "subject" | "plannedAt" | "startedAt" | "endedAt" | "durationSeconds", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    attendance?: boolean | Session$attendanceArgs<ExtArgs>
    attempts?: boolean | Session$attemptsArgs<ExtArgs>
    transcript?: boolean | Session$transcriptArgs<ExtArgs>
    events?: boolean | Session$eventsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      cohort: Prisma.$CohortPayload<ExtArgs>
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      attempts: Prisma.$ExerciseAttemptPayload<ExtArgs>[]
      transcript: Prisma.$TranscriptSegmentPayload<ExtArgs>[]
      events: Prisma.$SessionEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string
      status: $Enums.SessionStatus
      subject: string
      plannedAt: Date
      startedAt: Date | null
      endedAt: Date | null
      durationSeconds: number | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendance<T extends Session$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Session$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends Session$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Session$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transcript<T extends Session$transcriptArgs<ExtArgs> = {}>(args?: Subset<T, Session$transcriptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Session$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Session$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly cohortId: FieldRef<"Session", 'String'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly subject: FieldRef<"Session", 'String'>
    readonly plannedAt: FieldRef<"Session", 'DateTime'>
    readonly startedAt: FieldRef<"Session", 'DateTime'>
    readonly endedAt: FieldRef<"Session", 'DateTime'>
    readonly durationSeconds: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.attendance
   */
  export type Session$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Session.attempts
   */
  export type Session$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    where?: ExerciseAttemptWhereInput
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    cursor?: ExerciseAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * Session.transcript
   */
  export type Session$transcriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    where?: TranscriptSegmentWhereInput
    orderBy?: TranscriptSegmentOrderByWithRelationInput | TranscriptSegmentOrderByWithRelationInput[]
    cursor?: TranscriptSegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranscriptSegmentScalarFieldEnum | TranscriptSegmentScalarFieldEnum[]
  }

  /**
   * Session.events
   */
  export type Session$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    where?: SessionEventWhereInput
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    cursor?: SessionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionEvent
   */

  export type AggregateSessionEvent = {
    _count: SessionEventCountAggregateOutputType | null
    _min: SessionEventMinAggregateOutputType | null
    _max: SessionEventMaxAggregateOutputType | null
  }

  export type SessionEventMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: string | null
    actorId: string | null
    payload: string | null
    occurredAt: Date | null
  }

  export type SessionEventMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: string | null
    actorId: string | null
    payload: string | null
    occurredAt: Date | null
  }

  export type SessionEventCountAggregateOutputType = {
    id: number
    sessionId: number
    type: number
    actorId: number
    payload: number
    occurredAt: number
    _all: number
  }


  export type SessionEventMinAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    actorId?: true
    payload?: true
    occurredAt?: true
  }

  export type SessionEventMaxAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    actorId?: true
    payload?: true
    occurredAt?: true
  }

  export type SessionEventCountAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    actorId?: true
    payload?: true
    occurredAt?: true
    _all?: true
  }

  export type SessionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionEvent to aggregate.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionEvents
    **/
    _count?: true | SessionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionEventMaxAggregateInputType
  }

  export type GetSessionEventAggregateType<T extends SessionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionEvent[P]>
      : GetScalarType<T[P], AggregateSessionEvent[P]>
  }




  export type SessionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionEventWhereInput
    orderBy?: SessionEventOrderByWithAggregationInput | SessionEventOrderByWithAggregationInput[]
    by: SessionEventScalarFieldEnum[] | SessionEventScalarFieldEnum
    having?: SessionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionEventCountAggregateInputType | true
    _min?: SessionEventMinAggregateInputType
    _max?: SessionEventMaxAggregateInputType
  }

  export type SessionEventGroupByOutputType = {
    id: string
    sessionId: string
    type: string
    actorId: string | null
    payload: string | null
    occurredAt: Date
    _count: SessionEventCountAggregateOutputType | null
    _min: SessionEventMinAggregateOutputType | null
    _max: SessionEventMaxAggregateOutputType | null
  }

  type GetSessionEventGroupByPayload<T extends SessionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionEventGroupByOutputType[P]>
            : GetScalarType<T[P], SessionEventGroupByOutputType[P]>
        }
      >
    >


  export type SessionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    actorId?: boolean
    payload?: boolean
    occurredAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    actorId?: boolean
    payload?: boolean
    occurredAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    actorId?: boolean
    payload?: boolean
    occurredAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectScalar = {
    id?: boolean
    sessionId?: boolean
    type?: boolean
    actorId?: boolean
    payload?: boolean
    occurredAt?: boolean
  }

  export type SessionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "type" | "actorId" | "payload" | "occurredAt", ExtArgs["result"]["sessionEvent"]>
  export type SessionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type SessionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type SessionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $SessionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionEvent"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      type: string
      actorId: string | null
      payload: string | null
      occurredAt: Date
    }, ExtArgs["result"]["sessionEvent"]>
    composites: {}
  }

  type SessionEventGetPayload<S extends boolean | null | undefined | SessionEventDefaultArgs> = $Result.GetResult<Prisma.$SessionEventPayload, S>

  type SessionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionEventCountAggregateInputType | true
    }

  export interface SessionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionEvent'], meta: { name: 'SessionEvent' } }
    /**
     * Find zero or one SessionEvent that matches the filter.
     * @param {SessionEventFindUniqueArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionEventFindUniqueArgs>(args: SelectSubset<T, SessionEventFindUniqueArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionEventFindUniqueOrThrowArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindFirstArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionEventFindFirstArgs>(args?: SelectSubset<T, SessionEventFindFirstArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindFirstOrThrowArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionEvents
     * const sessionEvents = await prisma.sessionEvent.findMany()
     * 
     * // Get first 10 SessionEvents
     * const sessionEvents = await prisma.sessionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionEventFindManyArgs>(args?: SelectSubset<T, SessionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionEvent.
     * @param {SessionEventCreateArgs} args - Arguments to create a SessionEvent.
     * @example
     * // Create one SessionEvent
     * const SessionEvent = await prisma.sessionEvent.create({
     *   data: {
     *     // ... data to create a SessionEvent
     *   }
     * })
     * 
     */
    create<T extends SessionEventCreateArgs>(args: SelectSubset<T, SessionEventCreateArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionEvents.
     * @param {SessionEventCreateManyArgs} args - Arguments to create many SessionEvents.
     * @example
     * // Create many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionEventCreateManyArgs>(args?: SelectSubset<T, SessionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionEvents and returns the data saved in the database.
     * @param {SessionEventCreateManyAndReturnArgs} args - Arguments to create many SessionEvents.
     * @example
     * // Create many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionEvents and only return the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionEvent.
     * @param {SessionEventDeleteArgs} args - Arguments to delete one SessionEvent.
     * @example
     * // Delete one SessionEvent
     * const SessionEvent = await prisma.sessionEvent.delete({
     *   where: {
     *     // ... filter to delete one SessionEvent
     *   }
     * })
     * 
     */
    delete<T extends SessionEventDeleteArgs>(args: SelectSubset<T, SessionEventDeleteArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionEvent.
     * @param {SessionEventUpdateArgs} args - Arguments to update one SessionEvent.
     * @example
     * // Update one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionEventUpdateArgs>(args: SelectSubset<T, SessionEventUpdateArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionEvents.
     * @param {SessionEventDeleteManyArgs} args - Arguments to filter SessionEvents to delete.
     * @example
     * // Delete a few SessionEvents
     * const { count } = await prisma.sessionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionEventDeleteManyArgs>(args?: SelectSubset<T, SessionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionEventUpdateManyArgs>(args: SelectSubset<T, SessionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionEvents and returns the data updated in the database.
     * @param {SessionEventUpdateManyAndReturnArgs} args - Arguments to update many SessionEvents.
     * @example
     * // Update many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionEvents and only return the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionEvent.
     * @param {SessionEventUpsertArgs} args - Arguments to update or create a SessionEvent.
     * @example
     * // Update or create a SessionEvent
     * const sessionEvent = await prisma.sessionEvent.upsert({
     *   create: {
     *     // ... data to create a SessionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionEvent we want to update
     *   }
     * })
     */
    upsert<T extends SessionEventUpsertArgs>(args: SelectSubset<T, SessionEventUpsertArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventCountArgs} args - Arguments to filter SessionEvents to count.
     * @example
     * // Count the number of SessionEvents
     * const count = await prisma.sessionEvent.count({
     *   where: {
     *     // ... the filter for the SessionEvents we want to count
     *   }
     * })
    **/
    count<T extends SessionEventCountArgs>(
      args?: Subset<T, SessionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionEventAggregateArgs>(args: Subset<T, SessionEventAggregateArgs>): Prisma.PrismaPromise<GetSessionEventAggregateType<T>>

    /**
     * Group by SessionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventGroupByArgs} args - Group by arguments.
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
      T extends SessionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionEventGroupByArgs['orderBy'] }
        : { orderBy?: SessionEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionEvent model
   */
  readonly fields: SessionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionEvent model
   */
  interface SessionEventFieldRefs {
    readonly id: FieldRef<"SessionEvent", 'String'>
    readonly sessionId: FieldRef<"SessionEvent", 'String'>
    readonly type: FieldRef<"SessionEvent", 'String'>
    readonly actorId: FieldRef<"SessionEvent", 'String'>
    readonly payload: FieldRef<"SessionEvent", 'String'>
    readonly occurredAt: FieldRef<"SessionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionEvent findUnique
   */
  export type SessionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent findUniqueOrThrow
   */
  export type SessionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent findFirst
   */
  export type SessionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionEvents.
     */
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent findFirstOrThrow
   */
  export type SessionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionEvents.
     */
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent findMany
   */
  export type SessionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvents to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent create
   */
  export type SessionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionEvent.
     */
    data: XOR<SessionEventCreateInput, SessionEventUncheckedCreateInput>
  }

  /**
   * SessionEvent createMany
   */
  export type SessionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionEvents.
     */
    data: SessionEventCreateManyInput | SessionEventCreateManyInput[]
  }

  /**
   * SessionEvent createManyAndReturn
   */
  export type SessionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * The data used to create many SessionEvents.
     */
    data: SessionEventCreateManyInput | SessionEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionEvent update
   */
  export type SessionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionEvent.
     */
    data: XOR<SessionEventUpdateInput, SessionEventUncheckedUpdateInput>
    /**
     * Choose, which SessionEvent to update.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent updateMany
   */
  export type SessionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionEvents.
     */
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyInput>
    /**
     * Filter which SessionEvents to update
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to update.
     */
    limit?: number
  }

  /**
   * SessionEvent updateManyAndReturn
   */
  export type SessionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * The data used to update SessionEvents.
     */
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyInput>
    /**
     * Filter which SessionEvents to update
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionEvent upsert
   */
  export type SessionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionEvent to update in case it exists.
     */
    where: SessionEventWhereUniqueInput
    /**
     * In case the SessionEvent found by the `where` argument doesn't exist, create a new SessionEvent with this data.
     */
    create: XOR<SessionEventCreateInput, SessionEventUncheckedCreateInput>
    /**
     * In case the SessionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionEventUpdateInput, SessionEventUncheckedUpdateInput>
  }

  /**
   * SessionEvent delete
   */
  export type SessionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter which SessionEvent to delete.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent deleteMany
   */
  export type SessionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionEvents to delete
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to delete.
     */
    limit?: number
  }

  /**
   * SessionEvent without action
   */
  export type SessionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    minutes: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    minutes: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    studentId: string | null
    present: boolean | null
    minutes: number | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    studentId: string | null
    present: boolean | null
    minutes: number | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    sessionId: number
    studentId: number
    present: number
    minutes: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    minutes?: true
  }

  export type AttendanceSumAggregateInputType = {
    minutes?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    present?: true
    minutes?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    present?: true
    minutes?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    present?: true
    minutes?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    sessionId: string
    studentId: string
    present: boolean
    minutes: number
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    present?: boolean
    minutes?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    present?: boolean
    minutes?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    present?: boolean
    minutes?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    present?: boolean
    minutes?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "studentId" | "present" | "minutes", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      studentId: string
      present: boolean
      minutes: number
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly sessionId: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly present: FieldRef<"Attendance", 'Boolean'>
    readonly minutes: FieldRef<"Attendance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    title: string | null
    subject: string | null
    competency: string | null
    prompt: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subject: string | null
    competency: string | null
    prompt: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    title: number
    subject: number
    competency: number
    prompt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    competency?: true
    prompt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    competency?: true
    prompt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    title?: true
    subject?: true
    competency?: true
    prompt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    title: string
    subject: string
    competency: string
    prompt: string
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subject?: boolean
    competency?: boolean
    prompt?: boolean
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subject?: boolean
    competency?: boolean
    prompt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subject?: boolean
    competency?: boolean
    prompt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    title?: boolean
    subject?: boolean
    competency?: boolean
    prompt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subject" | "competency" | "prompt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      attempts: Prisma.$ExerciseAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subject: string
      competency: string
      prompt: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempts<T extends Exercise$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly title: FieldRef<"Exercise", 'String'>
    readonly subject: FieldRef<"Exercise", 'String'>
    readonly competency: FieldRef<"Exercise", 'String'>
    readonly prompt: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.attempts
   */
  export type Exercise$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    where?: ExerciseAttemptWhereInput
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    cursor?: ExerciseAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseAttempt
   */

  export type AggregateExerciseAttempt = {
    _count: ExerciseAttemptCountAggregateOutputType | null
    _min: ExerciseAttemptMinAggregateOutputType | null
    _max: ExerciseAttemptMaxAggregateOutputType | null
  }

  export type ExerciseAttemptMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    studentId: string | null
    sessionId: string | null
    completed: boolean | null
    answer: string | null
    completedAt: Date | null
  }

  export type ExerciseAttemptMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    studentId: string | null
    sessionId: string | null
    completed: boolean | null
    answer: string | null
    completedAt: Date | null
  }

  export type ExerciseAttemptCountAggregateOutputType = {
    id: number
    exerciseId: number
    studentId: number
    sessionId: number
    completed: number
    answer: number
    completedAt: number
    _all: number
  }


  export type ExerciseAttemptMinAggregateInputType = {
    id?: true
    exerciseId?: true
    studentId?: true
    sessionId?: true
    completed?: true
    answer?: true
    completedAt?: true
  }

  export type ExerciseAttemptMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    studentId?: true
    sessionId?: true
    completed?: true
    answer?: true
    completedAt?: true
  }

  export type ExerciseAttemptCountAggregateInputType = {
    id?: true
    exerciseId?: true
    studentId?: true
    sessionId?: true
    completed?: true
    answer?: true
    completedAt?: true
    _all?: true
  }

  export type ExerciseAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAttempt to aggregate.
     */
    where?: ExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAttempts to fetch.
     */
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseAttempts
    **/
    _count?: true | ExerciseAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseAttemptMaxAggregateInputType
  }

  export type GetExerciseAttemptAggregateType<T extends ExerciseAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseAttempt[P]>
      : GetScalarType<T[P], AggregateExerciseAttempt[P]>
  }




  export type ExerciseAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAttemptWhereInput
    orderBy?: ExerciseAttemptOrderByWithAggregationInput | ExerciseAttemptOrderByWithAggregationInput[]
    by: ExerciseAttemptScalarFieldEnum[] | ExerciseAttemptScalarFieldEnum
    having?: ExerciseAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseAttemptCountAggregateInputType | true
    _min?: ExerciseAttemptMinAggregateInputType
    _max?: ExerciseAttemptMaxAggregateInputType
  }

  export type ExerciseAttemptGroupByOutputType = {
    id: string
    exerciseId: string
    studentId: string
    sessionId: string | null
    completed: boolean
    answer: string | null
    completedAt: Date
    _count: ExerciseAttemptCountAggregateOutputType | null
    _min: ExerciseAttemptMinAggregateOutputType | null
    _max: ExerciseAttemptMaxAggregateOutputType | null
  }

  type GetExerciseAttemptGroupByPayload<T extends ExerciseAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseAttemptGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    studentId?: boolean
    sessionId?: boolean
    completed?: boolean
    answer?: boolean
    completedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAttempt"]>

  export type ExerciseAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    studentId?: boolean
    sessionId?: boolean
    completed?: boolean
    answer?: boolean
    completedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAttempt"]>

  export type ExerciseAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    studentId?: boolean
    sessionId?: boolean
    completed?: boolean
    answer?: boolean
    completedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAttempt"]>

  export type ExerciseAttemptSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    studentId?: boolean
    sessionId?: boolean
    completed?: boolean
    answer?: boolean
    completedAt?: boolean
  }

  export type ExerciseAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "studentId" | "sessionId" | "completed" | "answer" | "completedAt", ExtArgs["result"]["exerciseAttempt"]>
  export type ExerciseAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }
  export type ExerciseAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }
  export type ExerciseAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ExerciseAttempt$sessionArgs<ExtArgs>
  }

  export type $ExerciseAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseAttempt"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      studentId: string
      sessionId: string | null
      completed: boolean
      answer: string | null
      completedAt: Date
    }, ExtArgs["result"]["exerciseAttempt"]>
    composites: {}
  }

  type ExerciseAttemptGetPayload<S extends boolean | null | undefined | ExerciseAttemptDefaultArgs> = $Result.GetResult<Prisma.$ExerciseAttemptPayload, S>

  type ExerciseAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseAttemptCountAggregateInputType | true
    }

  export interface ExerciseAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseAttempt'], meta: { name: 'ExerciseAttempt' } }
    /**
     * Find zero or one ExerciseAttempt that matches the filter.
     * @param {ExerciseAttemptFindUniqueArgs} args - Arguments to find a ExerciseAttempt
     * @example
     * // Get one ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseAttemptFindUniqueArgs>(args: SelectSubset<T, ExerciseAttemptFindUniqueArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseAttemptFindUniqueOrThrowArgs} args - Arguments to find a ExerciseAttempt
     * @example
     * // Get one ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptFindFirstArgs} args - Arguments to find a ExerciseAttempt
     * @example
     * // Get one ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseAttemptFindFirstArgs>(args?: SelectSubset<T, ExerciseAttemptFindFirstArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptFindFirstOrThrowArgs} args - Arguments to find a ExerciseAttempt
     * @example
     * // Get one ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseAttempts
     * const exerciseAttempts = await prisma.exerciseAttempt.findMany()
     * 
     * // Get first 10 ExerciseAttempts
     * const exerciseAttempts = await prisma.exerciseAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseAttemptWithIdOnly = await prisma.exerciseAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseAttemptFindManyArgs>(args?: SelectSubset<T, ExerciseAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseAttempt.
     * @param {ExerciseAttemptCreateArgs} args - Arguments to create a ExerciseAttempt.
     * @example
     * // Create one ExerciseAttempt
     * const ExerciseAttempt = await prisma.exerciseAttempt.create({
     *   data: {
     *     // ... data to create a ExerciseAttempt
     *   }
     * })
     * 
     */
    create<T extends ExerciseAttemptCreateArgs>(args: SelectSubset<T, ExerciseAttemptCreateArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseAttempts.
     * @param {ExerciseAttemptCreateManyArgs} args - Arguments to create many ExerciseAttempts.
     * @example
     * // Create many ExerciseAttempts
     * const exerciseAttempt = await prisma.exerciseAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseAttemptCreateManyArgs>(args?: SelectSubset<T, ExerciseAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseAttempts and returns the data saved in the database.
     * @param {ExerciseAttemptCreateManyAndReturnArgs} args - Arguments to create many ExerciseAttempts.
     * @example
     * // Create many ExerciseAttempts
     * const exerciseAttempt = await prisma.exerciseAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseAttempts and only return the `id`
     * const exerciseAttemptWithIdOnly = await prisma.exerciseAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseAttempt.
     * @param {ExerciseAttemptDeleteArgs} args - Arguments to delete one ExerciseAttempt.
     * @example
     * // Delete one ExerciseAttempt
     * const ExerciseAttempt = await prisma.exerciseAttempt.delete({
     *   where: {
     *     // ... filter to delete one ExerciseAttempt
     *   }
     * })
     * 
     */
    delete<T extends ExerciseAttemptDeleteArgs>(args: SelectSubset<T, ExerciseAttemptDeleteArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseAttempt.
     * @param {ExerciseAttemptUpdateArgs} args - Arguments to update one ExerciseAttempt.
     * @example
     * // Update one ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseAttemptUpdateArgs>(args: SelectSubset<T, ExerciseAttemptUpdateArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseAttempts.
     * @param {ExerciseAttemptDeleteManyArgs} args - Arguments to filter ExerciseAttempts to delete.
     * @example
     * // Delete a few ExerciseAttempts
     * const { count } = await prisma.exerciseAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseAttemptDeleteManyArgs>(args?: SelectSubset<T, ExerciseAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseAttempts
     * const exerciseAttempt = await prisma.exerciseAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseAttemptUpdateManyArgs>(args: SelectSubset<T, ExerciseAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseAttempts and returns the data updated in the database.
     * @param {ExerciseAttemptUpdateManyAndReturnArgs} args - Arguments to update many ExerciseAttempts.
     * @example
     * // Update many ExerciseAttempts
     * const exerciseAttempt = await prisma.exerciseAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseAttempts and only return the `id`
     * const exerciseAttemptWithIdOnly = await prisma.exerciseAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseAttempt.
     * @param {ExerciseAttemptUpsertArgs} args - Arguments to update or create a ExerciseAttempt.
     * @example
     * // Update or create a ExerciseAttempt
     * const exerciseAttempt = await prisma.exerciseAttempt.upsert({
     *   create: {
     *     // ... data to create a ExerciseAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseAttempt we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseAttemptUpsertArgs>(args: SelectSubset<T, ExerciseAttemptUpsertArgs<ExtArgs>>): Prisma__ExerciseAttemptClient<$Result.GetResult<Prisma.$ExerciseAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptCountArgs} args - Arguments to filter ExerciseAttempts to count.
     * @example
     * // Count the number of ExerciseAttempts
     * const count = await prisma.exerciseAttempt.count({
     *   where: {
     *     // ... the filter for the ExerciseAttempts we want to count
     *   }
     * })
    **/
    count<T extends ExerciseAttemptCountArgs>(
      args?: Subset<T, ExerciseAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAttemptAggregateArgs>(args: Subset<T, ExerciseAttemptAggregateArgs>): Prisma.PrismaPromise<GetExerciseAttemptAggregateType<T>>

    /**
     * Group by ExerciseAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAttemptGroupByArgs} args - Group by arguments.
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
      T extends ExerciseAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseAttemptGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseAttempt model
   */
  readonly fields: ExerciseAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends ExerciseAttempt$sessionArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseAttempt$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseAttempt model
   */
  interface ExerciseAttemptFieldRefs {
    readonly id: FieldRef<"ExerciseAttempt", 'String'>
    readonly exerciseId: FieldRef<"ExerciseAttempt", 'String'>
    readonly studentId: FieldRef<"ExerciseAttempt", 'String'>
    readonly sessionId: FieldRef<"ExerciseAttempt", 'String'>
    readonly completed: FieldRef<"ExerciseAttempt", 'Boolean'>
    readonly answer: FieldRef<"ExerciseAttempt", 'String'>
    readonly completedAt: FieldRef<"ExerciseAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseAttempt findUnique
   */
  export type ExerciseAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAttempt to fetch.
     */
    where: ExerciseAttemptWhereUniqueInput
  }

  /**
   * ExerciseAttempt findUniqueOrThrow
   */
  export type ExerciseAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAttempt to fetch.
     */
    where: ExerciseAttemptWhereUniqueInput
  }

  /**
   * ExerciseAttempt findFirst
   */
  export type ExerciseAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAttempt to fetch.
     */
    where?: ExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAttempts to fetch.
     */
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAttempts.
     */
    cursor?: ExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAttempts.
     */
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * ExerciseAttempt findFirstOrThrow
   */
  export type ExerciseAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAttempt to fetch.
     */
    where?: ExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAttempts to fetch.
     */
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAttempts.
     */
    cursor?: ExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAttempts.
     */
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * ExerciseAttempt findMany
   */
  export type ExerciseAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAttempts to fetch.
     */
    where?: ExerciseAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAttempts to fetch.
     */
    orderBy?: ExerciseAttemptOrderByWithRelationInput | ExerciseAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseAttempts.
     */
    cursor?: ExerciseAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAttempts.
     */
    skip?: number
    distinct?: ExerciseAttemptScalarFieldEnum | ExerciseAttemptScalarFieldEnum[]
  }

  /**
   * ExerciseAttempt create
   */
  export type ExerciseAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseAttempt.
     */
    data: XOR<ExerciseAttemptCreateInput, ExerciseAttemptUncheckedCreateInput>
  }

  /**
   * ExerciseAttempt createMany
   */
  export type ExerciseAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseAttempts.
     */
    data: ExerciseAttemptCreateManyInput | ExerciseAttemptCreateManyInput[]
  }

  /**
   * ExerciseAttempt createManyAndReturn
   */
  export type ExerciseAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseAttempts.
     */
    data: ExerciseAttemptCreateManyInput | ExerciseAttemptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseAttempt update
   */
  export type ExerciseAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseAttempt.
     */
    data: XOR<ExerciseAttemptUpdateInput, ExerciseAttemptUncheckedUpdateInput>
    /**
     * Choose, which ExerciseAttempt to update.
     */
    where: ExerciseAttemptWhereUniqueInput
  }

  /**
   * ExerciseAttempt updateMany
   */
  export type ExerciseAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseAttempts.
     */
    data: XOR<ExerciseAttemptUpdateManyMutationInput, ExerciseAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseAttempts to update
     */
    where?: ExerciseAttemptWhereInput
    /**
     * Limit how many ExerciseAttempts to update.
     */
    limit?: number
  }

  /**
   * ExerciseAttempt updateManyAndReturn
   */
  export type ExerciseAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseAttempts.
     */
    data: XOR<ExerciseAttemptUpdateManyMutationInput, ExerciseAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseAttempts to update
     */
    where?: ExerciseAttemptWhereInput
    /**
     * Limit how many ExerciseAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseAttempt upsert
   */
  export type ExerciseAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseAttempt to update in case it exists.
     */
    where: ExerciseAttemptWhereUniqueInput
    /**
     * In case the ExerciseAttempt found by the `where` argument doesn't exist, create a new ExerciseAttempt with this data.
     */
    create: XOR<ExerciseAttemptCreateInput, ExerciseAttemptUncheckedCreateInput>
    /**
     * In case the ExerciseAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseAttemptUpdateInput, ExerciseAttemptUncheckedUpdateInput>
  }

  /**
   * ExerciseAttempt delete
   */
  export type ExerciseAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
    /**
     * Filter which ExerciseAttempt to delete.
     */
    where: ExerciseAttemptWhereUniqueInput
  }

  /**
   * ExerciseAttempt deleteMany
   */
  export type ExerciseAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAttempts to delete
     */
    where?: ExerciseAttemptWhereInput
    /**
     * Limit how many ExerciseAttempts to delete.
     */
    limit?: number
  }

  /**
   * ExerciseAttempt.session
   */
  export type ExerciseAttempt$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * ExerciseAttempt without action
   */
  export type ExerciseAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAttempt
     */
    select?: ExerciseAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAttempt
     */
    omit?: ExerciseAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAttemptInclude<ExtArgs> | null
  }


  /**
   * Model TranscriptSegment
   */

  export type AggregateTranscriptSegment = {
    _count: TranscriptSegmentCountAggregateOutputType | null
    _avg: TranscriptSegmentAvgAggregateOutputType | null
    _sum: TranscriptSegmentSumAggregateOutputType | null
    _min: TranscriptSegmentMinAggregateOutputType | null
    _max: TranscriptSegmentMaxAggregateOutputType | null
  }

  export type TranscriptSegmentAvgAggregateOutputType = {
    startsAtMs: number | null
  }

  export type TranscriptSegmentSumAggregateOutputType = {
    startsAtMs: number | null
  }

  export type TranscriptSegmentMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    speaker: string | null
    text: string | null
    startsAtMs: number | null
    createdAt: Date | null
  }

  export type TranscriptSegmentMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    speaker: string | null
    text: string | null
    startsAtMs: number | null
    createdAt: Date | null
  }

  export type TranscriptSegmentCountAggregateOutputType = {
    id: number
    sessionId: number
    speaker: number
    text: number
    startsAtMs: number
    createdAt: number
    _all: number
  }


  export type TranscriptSegmentAvgAggregateInputType = {
    startsAtMs?: true
  }

  export type TranscriptSegmentSumAggregateInputType = {
    startsAtMs?: true
  }

  export type TranscriptSegmentMinAggregateInputType = {
    id?: true
    sessionId?: true
    speaker?: true
    text?: true
    startsAtMs?: true
    createdAt?: true
  }

  export type TranscriptSegmentMaxAggregateInputType = {
    id?: true
    sessionId?: true
    speaker?: true
    text?: true
    startsAtMs?: true
    createdAt?: true
  }

  export type TranscriptSegmentCountAggregateInputType = {
    id?: true
    sessionId?: true
    speaker?: true
    text?: true
    startsAtMs?: true
    createdAt?: true
    _all?: true
  }

  export type TranscriptSegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptSegment to aggregate.
     */
    where?: TranscriptSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptSegments to fetch.
     */
    orderBy?: TranscriptSegmentOrderByWithRelationInput | TranscriptSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscriptSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranscriptSegments
    **/
    _count?: true | TranscriptSegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranscriptSegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranscriptSegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptSegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptSegmentMaxAggregateInputType
  }

  export type GetTranscriptSegmentAggregateType<T extends TranscriptSegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscriptSegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscriptSegment[P]>
      : GetScalarType<T[P], AggregateTranscriptSegment[P]>
  }




  export type TranscriptSegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptSegmentWhereInput
    orderBy?: TranscriptSegmentOrderByWithAggregationInput | TranscriptSegmentOrderByWithAggregationInput[]
    by: TranscriptSegmentScalarFieldEnum[] | TranscriptSegmentScalarFieldEnum
    having?: TranscriptSegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptSegmentCountAggregateInputType | true
    _avg?: TranscriptSegmentAvgAggregateInputType
    _sum?: TranscriptSegmentSumAggregateInputType
    _min?: TranscriptSegmentMinAggregateInputType
    _max?: TranscriptSegmentMaxAggregateInputType
  }

  export type TranscriptSegmentGroupByOutputType = {
    id: string
    sessionId: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt: Date
    _count: TranscriptSegmentCountAggregateOutputType | null
    _avg: TranscriptSegmentAvgAggregateOutputType | null
    _sum: TranscriptSegmentSumAggregateOutputType | null
    _min: TranscriptSegmentMinAggregateOutputType | null
    _max: TranscriptSegmentMaxAggregateOutputType | null
  }

  type GetTranscriptSegmentGroupByPayload<T extends TranscriptSegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptSegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptSegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptSegmentGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptSegmentGroupByOutputType[P]>
        }
      >
    >


  export type TranscriptSegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    speaker?: boolean
    text?: boolean
    startsAtMs?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptSegment"]>

  export type TranscriptSegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    speaker?: boolean
    text?: boolean
    startsAtMs?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptSegment"]>

  export type TranscriptSegmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    speaker?: boolean
    text?: boolean
    startsAtMs?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptSegment"]>

  export type TranscriptSegmentSelectScalar = {
    id?: boolean
    sessionId?: boolean
    speaker?: boolean
    text?: boolean
    startsAtMs?: boolean
    createdAt?: boolean
  }

  export type TranscriptSegmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "speaker" | "text" | "startsAtMs" | "createdAt", ExtArgs["result"]["transcriptSegment"]>
  export type TranscriptSegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type TranscriptSegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type TranscriptSegmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $TranscriptSegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranscriptSegment"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      speaker: string
      text: string
      startsAtMs: number
      createdAt: Date
    }, ExtArgs["result"]["transcriptSegment"]>
    composites: {}
  }

  type TranscriptSegmentGetPayload<S extends boolean | null | undefined | TranscriptSegmentDefaultArgs> = $Result.GetResult<Prisma.$TranscriptSegmentPayload, S>

  type TranscriptSegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscriptSegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscriptSegmentCountAggregateInputType | true
    }

  export interface TranscriptSegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranscriptSegment'], meta: { name: 'TranscriptSegment' } }
    /**
     * Find zero or one TranscriptSegment that matches the filter.
     * @param {TranscriptSegmentFindUniqueArgs} args - Arguments to find a TranscriptSegment
     * @example
     * // Get one TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscriptSegmentFindUniqueArgs>(args: SelectSubset<T, TranscriptSegmentFindUniqueArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranscriptSegment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscriptSegmentFindUniqueOrThrowArgs} args - Arguments to find a TranscriptSegment
     * @example
     * // Get one TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscriptSegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscriptSegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptSegment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentFindFirstArgs} args - Arguments to find a TranscriptSegment
     * @example
     * // Get one TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscriptSegmentFindFirstArgs>(args?: SelectSubset<T, TranscriptSegmentFindFirstArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptSegment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentFindFirstOrThrowArgs} args - Arguments to find a TranscriptSegment
     * @example
     * // Get one TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscriptSegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscriptSegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranscriptSegments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranscriptSegments
     * const transcriptSegments = await prisma.transcriptSegment.findMany()
     * 
     * // Get first 10 TranscriptSegments
     * const transcriptSegments = await prisma.transcriptSegment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptSegmentWithIdOnly = await prisma.transcriptSegment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscriptSegmentFindManyArgs>(args?: SelectSubset<T, TranscriptSegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranscriptSegment.
     * @param {TranscriptSegmentCreateArgs} args - Arguments to create a TranscriptSegment.
     * @example
     * // Create one TranscriptSegment
     * const TranscriptSegment = await prisma.transcriptSegment.create({
     *   data: {
     *     // ... data to create a TranscriptSegment
     *   }
     * })
     * 
     */
    create<T extends TranscriptSegmentCreateArgs>(args: SelectSubset<T, TranscriptSegmentCreateArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranscriptSegments.
     * @param {TranscriptSegmentCreateManyArgs} args - Arguments to create many TranscriptSegments.
     * @example
     * // Create many TranscriptSegments
     * const transcriptSegment = await prisma.transcriptSegment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscriptSegmentCreateManyArgs>(args?: SelectSubset<T, TranscriptSegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranscriptSegments and returns the data saved in the database.
     * @param {TranscriptSegmentCreateManyAndReturnArgs} args - Arguments to create many TranscriptSegments.
     * @example
     * // Create many TranscriptSegments
     * const transcriptSegment = await prisma.transcriptSegment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranscriptSegments and only return the `id`
     * const transcriptSegmentWithIdOnly = await prisma.transcriptSegment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscriptSegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscriptSegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranscriptSegment.
     * @param {TranscriptSegmentDeleteArgs} args - Arguments to delete one TranscriptSegment.
     * @example
     * // Delete one TranscriptSegment
     * const TranscriptSegment = await prisma.transcriptSegment.delete({
     *   where: {
     *     // ... filter to delete one TranscriptSegment
     *   }
     * })
     * 
     */
    delete<T extends TranscriptSegmentDeleteArgs>(args: SelectSubset<T, TranscriptSegmentDeleteArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranscriptSegment.
     * @param {TranscriptSegmentUpdateArgs} args - Arguments to update one TranscriptSegment.
     * @example
     * // Update one TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscriptSegmentUpdateArgs>(args: SelectSubset<T, TranscriptSegmentUpdateArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranscriptSegments.
     * @param {TranscriptSegmentDeleteManyArgs} args - Arguments to filter TranscriptSegments to delete.
     * @example
     * // Delete a few TranscriptSegments
     * const { count } = await prisma.transcriptSegment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscriptSegmentDeleteManyArgs>(args?: SelectSubset<T, TranscriptSegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranscriptSegments
     * const transcriptSegment = await prisma.transcriptSegment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscriptSegmentUpdateManyArgs>(args: SelectSubset<T, TranscriptSegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptSegments and returns the data updated in the database.
     * @param {TranscriptSegmentUpdateManyAndReturnArgs} args - Arguments to update many TranscriptSegments.
     * @example
     * // Update many TranscriptSegments
     * const transcriptSegment = await prisma.transcriptSegment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranscriptSegments and only return the `id`
     * const transcriptSegmentWithIdOnly = await prisma.transcriptSegment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TranscriptSegmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscriptSegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranscriptSegment.
     * @param {TranscriptSegmentUpsertArgs} args - Arguments to update or create a TranscriptSegment.
     * @example
     * // Update or create a TranscriptSegment
     * const transcriptSegment = await prisma.transcriptSegment.upsert({
     *   create: {
     *     // ... data to create a TranscriptSegment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranscriptSegment we want to update
     *   }
     * })
     */
    upsert<T extends TranscriptSegmentUpsertArgs>(args: SelectSubset<T, TranscriptSegmentUpsertArgs<ExtArgs>>): Prisma__TranscriptSegmentClient<$Result.GetResult<Prisma.$TranscriptSegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranscriptSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentCountArgs} args - Arguments to filter TranscriptSegments to count.
     * @example
     * // Count the number of TranscriptSegments
     * const count = await prisma.transcriptSegment.count({
     *   where: {
     *     // ... the filter for the TranscriptSegments we want to count
     *   }
     * })
    **/
    count<T extends TranscriptSegmentCountArgs>(
      args?: Subset<T, TranscriptSegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptSegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranscriptSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranscriptSegmentAggregateArgs>(args: Subset<T, TranscriptSegmentAggregateArgs>): Prisma.PrismaPromise<GetTranscriptSegmentAggregateType<T>>

    /**
     * Group by TranscriptSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptSegmentGroupByArgs} args - Group by arguments.
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
      T extends TranscriptSegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscriptSegmentGroupByArgs['orderBy'] }
        : { orderBy?: TranscriptSegmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranscriptSegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranscriptSegment model
   */
  readonly fields: TranscriptSegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranscriptSegment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscriptSegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TranscriptSegment model
   */
  interface TranscriptSegmentFieldRefs {
    readonly id: FieldRef<"TranscriptSegment", 'String'>
    readonly sessionId: FieldRef<"TranscriptSegment", 'String'>
    readonly speaker: FieldRef<"TranscriptSegment", 'String'>
    readonly text: FieldRef<"TranscriptSegment", 'String'>
    readonly startsAtMs: FieldRef<"TranscriptSegment", 'Int'>
    readonly createdAt: FieldRef<"TranscriptSegment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranscriptSegment findUnique
   */
  export type TranscriptSegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptSegment to fetch.
     */
    where: TranscriptSegmentWhereUniqueInput
  }

  /**
   * TranscriptSegment findUniqueOrThrow
   */
  export type TranscriptSegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptSegment to fetch.
     */
    where: TranscriptSegmentWhereUniqueInput
  }

  /**
   * TranscriptSegment findFirst
   */
  export type TranscriptSegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptSegment to fetch.
     */
    where?: TranscriptSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptSegments to fetch.
     */
    orderBy?: TranscriptSegmentOrderByWithRelationInput | TranscriptSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptSegments.
     */
    cursor?: TranscriptSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptSegments.
     */
    distinct?: TranscriptSegmentScalarFieldEnum | TranscriptSegmentScalarFieldEnum[]
  }

  /**
   * TranscriptSegment findFirstOrThrow
   */
  export type TranscriptSegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptSegment to fetch.
     */
    where?: TranscriptSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptSegments to fetch.
     */
    orderBy?: TranscriptSegmentOrderByWithRelationInput | TranscriptSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptSegments.
     */
    cursor?: TranscriptSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptSegments.
     */
    distinct?: TranscriptSegmentScalarFieldEnum | TranscriptSegmentScalarFieldEnum[]
  }

  /**
   * TranscriptSegment findMany
   */
  export type TranscriptSegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptSegments to fetch.
     */
    where?: TranscriptSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptSegments to fetch.
     */
    orderBy?: TranscriptSegmentOrderByWithRelationInput | TranscriptSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranscriptSegments.
     */
    cursor?: TranscriptSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptSegments.
     */
    skip?: number
    distinct?: TranscriptSegmentScalarFieldEnum | TranscriptSegmentScalarFieldEnum[]
  }

  /**
   * TranscriptSegment create
   */
  export type TranscriptSegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TranscriptSegment.
     */
    data: XOR<TranscriptSegmentCreateInput, TranscriptSegmentUncheckedCreateInput>
  }

  /**
   * TranscriptSegment createMany
   */
  export type TranscriptSegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranscriptSegments.
     */
    data: TranscriptSegmentCreateManyInput | TranscriptSegmentCreateManyInput[]
  }

  /**
   * TranscriptSegment createManyAndReturn
   */
  export type TranscriptSegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * The data used to create many TranscriptSegments.
     */
    data: TranscriptSegmentCreateManyInput | TranscriptSegmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscriptSegment update
   */
  export type TranscriptSegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TranscriptSegment.
     */
    data: XOR<TranscriptSegmentUpdateInput, TranscriptSegmentUncheckedUpdateInput>
    /**
     * Choose, which TranscriptSegment to update.
     */
    where: TranscriptSegmentWhereUniqueInput
  }

  /**
   * TranscriptSegment updateMany
   */
  export type TranscriptSegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranscriptSegments.
     */
    data: XOR<TranscriptSegmentUpdateManyMutationInput, TranscriptSegmentUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptSegments to update
     */
    where?: TranscriptSegmentWhereInput
    /**
     * Limit how many TranscriptSegments to update.
     */
    limit?: number
  }

  /**
   * TranscriptSegment updateManyAndReturn
   */
  export type TranscriptSegmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * The data used to update TranscriptSegments.
     */
    data: XOR<TranscriptSegmentUpdateManyMutationInput, TranscriptSegmentUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptSegments to update
     */
    where?: TranscriptSegmentWhereInput
    /**
     * Limit how many TranscriptSegments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscriptSegment upsert
   */
  export type TranscriptSegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TranscriptSegment to update in case it exists.
     */
    where: TranscriptSegmentWhereUniqueInput
    /**
     * In case the TranscriptSegment found by the `where` argument doesn't exist, create a new TranscriptSegment with this data.
     */
    create: XOR<TranscriptSegmentCreateInput, TranscriptSegmentUncheckedCreateInput>
    /**
     * In case the TranscriptSegment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscriptSegmentUpdateInput, TranscriptSegmentUncheckedUpdateInput>
  }

  /**
   * TranscriptSegment delete
   */
  export type TranscriptSegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
    /**
     * Filter which TranscriptSegment to delete.
     */
    where: TranscriptSegmentWhereUniqueInput
  }

  /**
   * TranscriptSegment deleteMany
   */
  export type TranscriptSegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptSegments to delete
     */
    where?: TranscriptSegmentWhereInput
    /**
     * Limit how many TranscriptSegments to delete.
     */
    limit?: number
  }

  /**
   * TranscriptSegment without action
   */
  export type TranscriptSegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptSegment
     */
    select?: TranscriptSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptSegment
     */
    omit?: TranscriptSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptSegmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    parentId: 'parentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CohortScalarFieldEnum: {
    id: 'id',
    name: 'name',
    language: 'language',
    gradeBand: 'gradeBand',
    createdAt: 'createdAt',
    instructorId: 'instructorId',
    supervisorId: 'supervisorId'
  };

  export type CohortScalarFieldEnum = (typeof CohortScalarFieldEnum)[keyof typeof CohortScalarFieldEnum]


  export const CohortMemberScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    studentId: 'studentId',
    joinedAt: 'joinedAt'
  };

  export type CohortMemberScalarFieldEnum = (typeof CohortMemberScalarFieldEnum)[keyof typeof CohortMemberScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    status: 'status',
    subject: 'subject',
    plannedAt: 'plannedAt',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    durationSeconds: 'durationSeconds'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionEventScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    type: 'type',
    actorId: 'actorId',
    payload: 'payload',
    occurredAt: 'occurredAt'
  };

  export type SessionEventScalarFieldEnum = (typeof SessionEventScalarFieldEnum)[keyof typeof SessionEventScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    studentId: 'studentId',
    present: 'present',
    minutes: 'minutes'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subject: 'subject',
    competency: 'competency',
    prompt: 'prompt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseAttemptScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    studentId: 'studentId',
    sessionId: 'sessionId',
    completed: 'completed',
    answer: 'answer',
    completedAt: 'completedAt'
  };

  export type ExerciseAttemptScalarFieldEnum = (typeof ExerciseAttemptScalarFieldEnum)[keyof typeof ExerciseAttemptScalarFieldEnum]


  export const TranscriptSegmentScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    speaker: 'speaker',
    text: 'text',
    startsAtMs: 'startsAtMs',
    createdAt: 'createdAt'
  };

  export type TranscriptSegmentScalarFieldEnum = (typeof TranscriptSegmentScalarFieldEnum)[keyof typeof TranscriptSegmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    cohortsTaught?: CohortListRelationFilter
    cohortsSupervised?: CohortListRelationFilter
    memberships?: CohortMemberListRelationFilter
    attendance?: AttendanceListRelationFilter
    attempts?: ExerciseAttemptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: UserOrderByWithRelationInput
    children?: UserOrderByRelationAggregateInput
    cohortsTaught?: CohortOrderByRelationAggregateInput
    cohortsSupervised?: CohortOrderByRelationAggregateInput
    memberships?: CohortMemberOrderByRelationAggregateInput
    attendance?: AttendanceOrderByRelationAggregateInput
    attempts?: ExerciseAttemptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    cohortsTaught?: CohortListRelationFilter
    cohortsSupervised?: CohortListRelationFilter
    memberships?: CohortMemberListRelationFilter
    attendance?: AttendanceListRelationFilter
    attempts?: ExerciseAttemptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CohortWhereInput = {
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    id?: StringFilter<"Cohort"> | string
    name?: StringFilter<"Cohort"> | string
    language?: StringFilter<"Cohort"> | string
    gradeBand?: StringFilter<"Cohort"> | string
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    instructorId?: StringFilter<"Cohort"> | string
    supervisorId?: StringNullableFilter<"Cohort"> | string | null
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: CohortMemberListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type CohortOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    gradeBand?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    instructor?: UserOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
    members?: CohortMemberOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type CohortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    name?: StringFilter<"Cohort"> | string
    language?: StringFilter<"Cohort"> | string
    gradeBand?: StringFilter<"Cohort"> | string
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    instructorId?: StringFilter<"Cohort"> | string
    supervisorId?: StringNullableFilter<"Cohort"> | string | null
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: CohortMemberListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id">

  export type CohortOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    gradeBand?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    _count?: CohortCountOrderByAggregateInput
    _max?: CohortMaxOrderByAggregateInput
    _min?: CohortMinOrderByAggregateInput
  }

  export type CohortScalarWhereWithAggregatesInput = {
    AND?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    OR?: CohortScalarWhereWithAggregatesInput[]
    NOT?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cohort"> | string
    name?: StringWithAggregatesFilter<"Cohort"> | string
    language?: StringWithAggregatesFilter<"Cohort"> | string
    gradeBand?: StringWithAggregatesFilter<"Cohort"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    instructorId?: StringWithAggregatesFilter<"Cohort"> | string
    supervisorId?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
  }

  export type CohortMemberWhereInput = {
    AND?: CohortMemberWhereInput | CohortMemberWhereInput[]
    OR?: CohortMemberWhereInput[]
    NOT?: CohortMemberWhereInput | CohortMemberWhereInput[]
    id?: StringFilter<"CohortMember"> | string
    cohortId?: StringFilter<"CohortMember"> | string
    studentId?: StringFilter<"CohortMember"> | string
    joinedAt?: DateTimeFilter<"CohortMember"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CohortMemberOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    joinedAt?: SortOrder
    cohort?: CohortOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type CohortMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cohortId_studentId?: CohortMemberCohortIdStudentIdCompoundUniqueInput
    AND?: CohortMemberWhereInput | CohortMemberWhereInput[]
    OR?: CohortMemberWhereInput[]
    NOT?: CohortMemberWhereInput | CohortMemberWhereInput[]
    cohortId?: StringFilter<"CohortMember"> | string
    studentId?: StringFilter<"CohortMember"> | string
    joinedAt?: DateTimeFilter<"CohortMember"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cohortId_studentId">

  export type CohortMemberOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    joinedAt?: SortOrder
    _count?: CohortMemberCountOrderByAggregateInput
    _max?: CohortMemberMaxOrderByAggregateInput
    _min?: CohortMemberMinOrderByAggregateInput
  }

  export type CohortMemberScalarWhereWithAggregatesInput = {
    AND?: CohortMemberScalarWhereWithAggregatesInput | CohortMemberScalarWhereWithAggregatesInput[]
    OR?: CohortMemberScalarWhereWithAggregatesInput[]
    NOT?: CohortMemberScalarWhereWithAggregatesInput | CohortMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CohortMember"> | string
    cohortId?: StringWithAggregatesFilter<"CohortMember"> | string
    studentId?: StringWithAggregatesFilter<"CohortMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CohortMember"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    cohortId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    subject?: StringFilter<"Session"> | string
    plannedAt?: DateTimeFilter<"Session"> | Date | string
    startedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    attendance?: AttendanceListRelationFilter
    attempts?: ExerciseAttemptListRelationFilter
    transcript?: TranscriptSegmentListRelationFilter
    events?: SessionEventListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    plannedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    cohort?: CohortOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
    attempts?: ExerciseAttemptOrderByRelationAggregateInput
    transcript?: TranscriptSegmentOrderByRelationAggregateInput
    events?: SessionEventOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    cohortId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    subject?: StringFilter<"Session"> | string
    plannedAt?: DateTimeFilter<"Session"> | Date | string
    startedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    attendance?: AttendanceListRelationFilter
    attempts?: ExerciseAttemptListRelationFilter
    transcript?: TranscriptSegmentListRelationFilter
    events?: SessionEventListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    plannedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    cohortId?: StringWithAggregatesFilter<"Session"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    subject?: StringWithAggregatesFilter<"Session"> | string
    plannedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableWithAggregatesFilter<"Session"> | number | null
  }

  export type SessionEventWhereInput = {
    AND?: SessionEventWhereInput | SessionEventWhereInput[]
    OR?: SessionEventWhereInput[]
    NOT?: SessionEventWhereInput | SessionEventWhereInput[]
    id?: StringFilter<"SessionEvent"> | string
    sessionId?: StringFilter<"SessionEvent"> | string
    type?: StringFilter<"SessionEvent"> | string
    actorId?: StringNullableFilter<"SessionEvent"> | string | null
    payload?: StringNullableFilter<"SessionEvent"> | string | null
    occurredAt?: DateTimeFilter<"SessionEvent"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type SessionEventOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    actorId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type SessionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionEventWhereInput | SessionEventWhereInput[]
    OR?: SessionEventWhereInput[]
    NOT?: SessionEventWhereInput | SessionEventWhereInput[]
    sessionId?: StringFilter<"SessionEvent"> | string
    type?: StringFilter<"SessionEvent"> | string
    actorId?: StringNullableFilter<"SessionEvent"> | string | null
    payload?: StringNullableFilter<"SessionEvent"> | string | null
    occurredAt?: DateTimeFilter<"SessionEvent"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type SessionEventOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    actorId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    _count?: SessionEventCountOrderByAggregateInput
    _max?: SessionEventMaxOrderByAggregateInput
    _min?: SessionEventMinOrderByAggregateInput
  }

  export type SessionEventScalarWhereWithAggregatesInput = {
    AND?: SessionEventScalarWhereWithAggregatesInput | SessionEventScalarWhereWithAggregatesInput[]
    OR?: SessionEventScalarWhereWithAggregatesInput[]
    NOT?: SessionEventScalarWhereWithAggregatesInput | SessionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionEvent"> | string
    sessionId?: StringWithAggregatesFilter<"SessionEvent"> | string
    type?: StringWithAggregatesFilter<"SessionEvent"> | string
    actorId?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    payload?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    occurredAt?: DateTimeWithAggregatesFilter<"SessionEvent"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    sessionId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    minutes?: IntFilter<"Attendance"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    present?: SortOrder
    minutes?: SortOrder
    session?: SessionOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_studentId?: AttendanceSessionIdStudentIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    sessionId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    minutes?: IntFilter<"Attendance"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_studentId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    present?: SortOrder
    minutes?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    sessionId?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    present?: BoolWithAggregatesFilter<"Attendance"> | boolean
    minutes?: IntWithAggregatesFilter<"Attendance"> | number
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    title?: StringFilter<"Exercise"> | string
    subject?: StringFilter<"Exercise"> | string
    competency?: StringFilter<"Exercise"> | string
    prompt?: StringFilter<"Exercise"> | string
    attempts?: ExerciseAttemptListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    competency?: SortOrder
    prompt?: SortOrder
    attempts?: ExerciseAttemptOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    title?: StringFilter<"Exercise"> | string
    subject?: StringFilter<"Exercise"> | string
    competency?: StringFilter<"Exercise"> | string
    prompt?: StringFilter<"Exercise"> | string
    attempts?: ExerciseAttemptListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    competency?: SortOrder
    prompt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    title?: StringWithAggregatesFilter<"Exercise"> | string
    subject?: StringWithAggregatesFilter<"Exercise"> | string
    competency?: StringWithAggregatesFilter<"Exercise"> | string
    prompt?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type ExerciseAttemptWhereInput = {
    AND?: ExerciseAttemptWhereInput | ExerciseAttemptWhereInput[]
    OR?: ExerciseAttemptWhereInput[]
    NOT?: ExerciseAttemptWhereInput | ExerciseAttemptWhereInput[]
    id?: StringFilter<"ExerciseAttempt"> | string
    exerciseId?: StringFilter<"ExerciseAttempt"> | string
    studentId?: StringFilter<"ExerciseAttempt"> | string
    sessionId?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completed?: BoolFilter<"ExerciseAttempt"> | boolean
    answer?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completedAt?: DateTimeFilter<"ExerciseAttempt"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type ExerciseAttemptOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    completed?: SortOrder
    answer?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type ExerciseAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseAttemptWhereInput | ExerciseAttemptWhereInput[]
    OR?: ExerciseAttemptWhereInput[]
    NOT?: ExerciseAttemptWhereInput | ExerciseAttemptWhereInput[]
    exerciseId?: StringFilter<"ExerciseAttempt"> | string
    studentId?: StringFilter<"ExerciseAttempt"> | string
    sessionId?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completed?: BoolFilter<"ExerciseAttempt"> | boolean
    answer?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completedAt?: DateTimeFilter<"ExerciseAttempt"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id">

  export type ExerciseAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    completed?: SortOrder
    answer?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    _count?: ExerciseAttemptCountOrderByAggregateInput
    _max?: ExerciseAttemptMaxOrderByAggregateInput
    _min?: ExerciseAttemptMinOrderByAggregateInput
  }

  export type ExerciseAttemptScalarWhereWithAggregatesInput = {
    AND?: ExerciseAttemptScalarWhereWithAggregatesInput | ExerciseAttemptScalarWhereWithAggregatesInput[]
    OR?: ExerciseAttemptScalarWhereWithAggregatesInput[]
    NOT?: ExerciseAttemptScalarWhereWithAggregatesInput | ExerciseAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseAttempt"> | string
    exerciseId?: StringWithAggregatesFilter<"ExerciseAttempt"> | string
    studentId?: StringWithAggregatesFilter<"ExerciseAttempt"> | string
    sessionId?: StringNullableWithAggregatesFilter<"ExerciseAttempt"> | string | null
    completed?: BoolWithAggregatesFilter<"ExerciseAttempt"> | boolean
    answer?: StringNullableWithAggregatesFilter<"ExerciseAttempt"> | string | null
    completedAt?: DateTimeWithAggregatesFilter<"ExerciseAttempt"> | Date | string
  }

  export type TranscriptSegmentWhereInput = {
    AND?: TranscriptSegmentWhereInput | TranscriptSegmentWhereInput[]
    OR?: TranscriptSegmentWhereInput[]
    NOT?: TranscriptSegmentWhereInput | TranscriptSegmentWhereInput[]
    id?: StringFilter<"TranscriptSegment"> | string
    sessionId?: StringFilter<"TranscriptSegment"> | string
    speaker?: StringFilter<"TranscriptSegment"> | string
    text?: StringFilter<"TranscriptSegment"> | string
    startsAtMs?: IntFilter<"TranscriptSegment"> | number
    createdAt?: DateTimeFilter<"TranscriptSegment"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type TranscriptSegmentOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startsAtMs?: SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type TranscriptSegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranscriptSegmentWhereInput | TranscriptSegmentWhereInput[]
    OR?: TranscriptSegmentWhereInput[]
    NOT?: TranscriptSegmentWhereInput | TranscriptSegmentWhereInput[]
    sessionId?: StringFilter<"TranscriptSegment"> | string
    speaker?: StringFilter<"TranscriptSegment"> | string
    text?: StringFilter<"TranscriptSegment"> | string
    startsAtMs?: IntFilter<"TranscriptSegment"> | number
    createdAt?: DateTimeFilter<"TranscriptSegment"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type TranscriptSegmentOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startsAtMs?: SortOrder
    createdAt?: SortOrder
    _count?: TranscriptSegmentCountOrderByAggregateInput
    _avg?: TranscriptSegmentAvgOrderByAggregateInput
    _max?: TranscriptSegmentMaxOrderByAggregateInput
    _min?: TranscriptSegmentMinOrderByAggregateInput
    _sum?: TranscriptSegmentSumOrderByAggregateInput
  }

  export type TranscriptSegmentScalarWhereWithAggregatesInput = {
    AND?: TranscriptSegmentScalarWhereWithAggregatesInput | TranscriptSegmentScalarWhereWithAggregatesInput[]
    OR?: TranscriptSegmentScalarWhereWithAggregatesInput[]
    NOT?: TranscriptSegmentScalarWhereWithAggregatesInput | TranscriptSegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranscriptSegment"> | string
    sessionId?: StringWithAggregatesFilter<"TranscriptSegment"> | string
    speaker?: StringWithAggregatesFilter<"TranscriptSegment"> | string
    text?: StringWithAggregatesFilter<"TranscriptSegment"> | string
    startsAtMs?: IntWithAggregatesFilter<"TranscriptSegment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TranscriptSegment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CohortCreateInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructor: UserCreateNestedOneWithoutCohortsTaughtInput
    supervisor?: UserCreateNestedOneWithoutCohortsSupervisedInput
    members?: CohortMemberCreateNestedManyWithoutCohortInput
    sessions?: SessionCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
    supervisorId?: string | null
    members?: CohortMemberUncheckedCreateNestedManyWithoutCohortInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCohortsTaughtNestedInput
    supervisor?: UserUpdateOneWithoutCohortsSupervisedNestedInput
    members?: CohortMemberUpdateManyWithoutCohortNestedInput
    sessions?: SessionUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: CohortMemberUncheckedUpdateManyWithoutCohortNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortCreateManyInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
    supervisorId?: string | null
  }

  export type CohortUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CohortMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutMembersInput
    student: UserCreateNestedOneWithoutMembershipsInput
  }

  export type CohortMemberUncheckedCreateInput = {
    id?: string
    cohortId: string
    studentId: string
    joinedAt?: Date | string
  }

  export type CohortMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutMembersNestedInput
    student?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type CohortMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortMemberCreateManyInput = {
    id?: string
    cohortId: string
    studentId: string
    joinedAt?: Date | string
  }

  export type CohortMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    cohort: CohortCreateNestedOneWithoutSessionsInput
    attendance?: AttendanceCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentCreateNestedManyWithoutSessionInput
    events?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput
    events?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    cohort?: CohortUpdateOneRequiredWithoutSessionsNestedInput
    attendance?: AttendanceUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUpdateManyWithoutSessionNestedInput
    events?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput
    events?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionEventCreateInput = {
    id?: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
    session: SessionCreateNestedOneWithoutEventsInput
  }

  export type SessionEventUncheckedCreateInput = {
    id?: string
    sessionId: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
  }

  export type SessionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type SessionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventCreateManyInput = {
    id?: string
    sessionId: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
  }

  export type SessionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    present?: boolean
    minutes?: number
    session: SessionCreateNestedOneWithoutAttendanceInput
    student: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    sessionId: string
    studentId: string
    present?: boolean
    minutes?: number
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutAttendanceNestedInput
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyInput = {
    id?: string
    sessionId: string
    studentId: string
    present?: boolean
    minutes?: number
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseCreateInput = {
    id?: string
    title: string
    subject: string
    competency: string
    prompt: string
    attempts?: ExerciseAttemptCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    title: string
    subject: string
    competency: string
    prompt: string
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    attempts?: ExerciseAttemptUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    title: string
    subject: string
    competency: string
    prompt: string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseAttemptCreateInput = {
    id?: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    student: UserCreateNestedOneWithoutAttemptsInput
    session?: SessionCreateNestedOneWithoutAttemptsInput
  }

  export type ExerciseAttemptUncheckedCreateInput = {
    id?: string
    exerciseId: string
    studentId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    student?: UserUpdateOneRequiredWithoutAttemptsNestedInput
    session?: SessionUpdateOneWithoutAttemptsNestedInput
  }

  export type ExerciseAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptCreateManyInput = {
    id?: string
    exerciseId: string
    studentId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentCreateInput = {
    id?: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutTranscriptInput
  }

  export type TranscriptSegmentUncheckedCreateInput = {
    id?: string
    sessionId: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
  }

  export type TranscriptSegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutTranscriptNestedInput
  }

  export type TranscriptSegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentCreateManyInput = {
    id?: string
    sessionId: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
  }

  export type TranscriptSegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CohortListRelationFilter = {
    every?: CohortWhereInput
    some?: CohortWhereInput
    none?: CohortWhereInput
  }

  export type CohortMemberListRelationFilter = {
    every?: CohortMemberWhereInput
    some?: CohortMemberWhereInput
    none?: CohortMemberWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type ExerciseAttemptListRelationFilter = {
    every?: ExerciseAttemptWhereInput
    some?: ExerciseAttemptWhereInput
    none?: ExerciseAttemptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    gradeBand?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    supervisorId?: SortOrder
  }

  export type CohortMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    gradeBand?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    supervisorId?: SortOrder
  }

  export type CohortMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    gradeBand?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    supervisorId?: SortOrder
  }

  export type CohortScalarRelationFilter = {
    is?: CohortWhereInput
    isNot?: CohortWhereInput
  }

  export type CohortMemberCohortIdStudentIdCompoundUniqueInput = {
    cohortId: string
    studentId: string
  }

  export type CohortMemberCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    joinedAt?: SortOrder
  }

  export type CohortMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    joinedAt?: SortOrder
  }

  export type CohortMemberMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TranscriptSegmentListRelationFilter = {
    every?: TranscriptSegmentWhereInput
    some?: TranscriptSegmentWhereInput
    none?: TranscriptSegmentWhereInput
  }

  export type SessionEventListRelationFilter = {
    every?: SessionEventWhereInput
    some?: SessionEventWhereInput
    none?: SessionEventWhereInput
  }

  export type TranscriptSegmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    plannedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    plannedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    plannedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionEventCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    actorId?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
  }

  export type SessionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    actorId?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
  }

  export type SessionEventMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    actorId?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AttendanceSessionIdStudentIdCompoundUniqueInput = {
    sessionId: string
    studentId: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    present?: SortOrder
    minutes?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    minutes?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    present?: SortOrder
    minutes?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    present?: SortOrder
    minutes?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    minutes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    competency?: SortOrder
    prompt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    competency?: SortOrder
    prompt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subject?: SortOrder
    competency?: SortOrder
    prompt?: SortOrder
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type ExerciseAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    completed?: SortOrder
    answer?: SortOrder
    completedAt?: SortOrder
  }

  export type ExerciseAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    completed?: SortOrder
    answer?: SortOrder
    completedAt?: SortOrder
  }

  export type ExerciseAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    completed?: SortOrder
    answer?: SortOrder
    completedAt?: SortOrder
  }

  export type TranscriptSegmentCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startsAtMs?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptSegmentAvgOrderByAggregateInput = {
    startsAtMs?: SortOrder
  }

  export type TranscriptSegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startsAtMs?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptSegmentMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startsAtMs?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptSegmentSumOrderByAggregateInput = {
    startsAtMs?: SortOrder
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CohortCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput> | CohortCreateWithoutInstructorInput[] | CohortUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutInstructorInput | CohortCreateOrConnectWithoutInstructorInput[]
    createMany?: CohortCreateManyInstructorInputEnvelope
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
  }

  export type CohortCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput> | CohortCreateWithoutSupervisorInput[] | CohortUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutSupervisorInput | CohortCreateOrConnectWithoutSupervisorInput[]
    createMany?: CohortCreateManySupervisorInputEnvelope
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
  }

  export type CohortMemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput> | CohortMemberCreateWithoutStudentInput[] | CohortMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutStudentInput | CohortMemberCreateOrConnectWithoutStudentInput[]
    createMany?: CohortMemberCreateManyStudentInputEnvelope
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExerciseAttemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput> | ExerciseAttemptCreateWithoutStudentInput[] | ExerciseAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutStudentInput | ExerciseAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: ExerciseAttemptCreateManyStudentInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CohortUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput> | CohortCreateWithoutInstructorInput[] | CohortUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutInstructorInput | CohortCreateOrConnectWithoutInstructorInput[]
    createMany?: CohortCreateManyInstructorInputEnvelope
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
  }

  export type CohortUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput> | CohortCreateWithoutSupervisorInput[] | CohortUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutSupervisorInput | CohortCreateOrConnectWithoutSupervisorInput[]
    createMany?: CohortCreateManySupervisorInputEnvelope
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
  }

  export type CohortMemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput> | CohortMemberCreateWithoutStudentInput[] | CohortMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutStudentInput | CohortMemberCreateOrConnectWithoutStudentInput[]
    createMany?: CohortMemberCreateManyStudentInputEnvelope
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput> | ExerciseAttemptCreateWithoutStudentInput[] | ExerciseAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutStudentInput | ExerciseAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: ExerciseAttemptCreateManyStudentInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CohortUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput> | CohortCreateWithoutInstructorInput[] | CohortUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutInstructorInput | CohortCreateOrConnectWithoutInstructorInput[]
    upsert?: CohortUpsertWithWhereUniqueWithoutInstructorInput | CohortUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CohortCreateManyInstructorInputEnvelope
    set?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    disconnect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    delete?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    update?: CohortUpdateWithWhereUniqueWithoutInstructorInput | CohortUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CohortUpdateManyWithWhereWithoutInstructorInput | CohortUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CohortScalarWhereInput | CohortScalarWhereInput[]
  }

  export type CohortUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput> | CohortCreateWithoutSupervisorInput[] | CohortUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutSupervisorInput | CohortCreateOrConnectWithoutSupervisorInput[]
    upsert?: CohortUpsertWithWhereUniqueWithoutSupervisorInput | CohortUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CohortCreateManySupervisorInputEnvelope
    set?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    disconnect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    delete?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    update?: CohortUpdateWithWhereUniqueWithoutSupervisorInput | CohortUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CohortUpdateManyWithWhereWithoutSupervisorInput | CohortUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CohortScalarWhereInput | CohortScalarWhereInput[]
  }

  export type CohortMemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput> | CohortMemberCreateWithoutStudentInput[] | CohortMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutStudentInput | CohortMemberCreateOrConnectWithoutStudentInput[]
    upsert?: CohortMemberUpsertWithWhereUniqueWithoutStudentInput | CohortMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CohortMemberCreateManyStudentInputEnvelope
    set?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    disconnect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    delete?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    update?: CohortMemberUpdateWithWhereUniqueWithoutStudentInput | CohortMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CohortMemberUpdateManyWithWhereWithoutStudentInput | CohortMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExerciseAttemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput> | ExerciseAttemptCreateWithoutStudentInput[] | ExerciseAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutStudentInput | ExerciseAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutStudentInput | ExerciseAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExerciseAttemptCreateManyStudentInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutStudentInput | ExerciseAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutStudentInput | ExerciseAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CohortUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput> | CohortCreateWithoutInstructorInput[] | CohortUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutInstructorInput | CohortCreateOrConnectWithoutInstructorInput[]
    upsert?: CohortUpsertWithWhereUniqueWithoutInstructorInput | CohortUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CohortCreateManyInstructorInputEnvelope
    set?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    disconnect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    delete?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    update?: CohortUpdateWithWhereUniqueWithoutInstructorInput | CohortUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CohortUpdateManyWithWhereWithoutInstructorInput | CohortUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CohortScalarWhereInput | CohortScalarWhereInput[]
  }

  export type CohortUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput> | CohortCreateWithoutSupervisorInput[] | CohortUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CohortCreateOrConnectWithoutSupervisorInput | CohortCreateOrConnectWithoutSupervisorInput[]
    upsert?: CohortUpsertWithWhereUniqueWithoutSupervisorInput | CohortUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CohortCreateManySupervisorInputEnvelope
    set?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    disconnect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    delete?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    connect?: CohortWhereUniqueInput | CohortWhereUniqueInput[]
    update?: CohortUpdateWithWhereUniqueWithoutSupervisorInput | CohortUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CohortUpdateManyWithWhereWithoutSupervisorInput | CohortUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CohortScalarWhereInput | CohortScalarWhereInput[]
  }

  export type CohortMemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput> | CohortMemberCreateWithoutStudentInput[] | CohortMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutStudentInput | CohortMemberCreateOrConnectWithoutStudentInput[]
    upsert?: CohortMemberUpsertWithWhereUniqueWithoutStudentInput | CohortMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CohortMemberCreateManyStudentInputEnvelope
    set?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    disconnect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    delete?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    update?: CohortMemberUpdateWithWhereUniqueWithoutStudentInput | CohortMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CohortMemberUpdateManyWithWhereWithoutStudentInput | CohortMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput> | ExerciseAttemptCreateWithoutStudentInput[] | ExerciseAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutStudentInput | ExerciseAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutStudentInput | ExerciseAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExerciseAttemptCreateManyStudentInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutStudentInput | ExerciseAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutStudentInput | ExerciseAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCohortsTaughtInput = {
    create?: XOR<UserCreateWithoutCohortsTaughtInput, UserUncheckedCreateWithoutCohortsTaughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutCohortsTaughtInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCohortsSupervisedInput = {
    create?: XOR<UserCreateWithoutCohortsSupervisedInput, UserUncheckedCreateWithoutCohortsSupervisedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCohortsSupervisedInput
    connect?: UserWhereUniqueInput
  }

  export type CohortMemberCreateNestedManyWithoutCohortInput = {
    create?: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput> | CohortMemberCreateWithoutCohortInput[] | CohortMemberUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutCohortInput | CohortMemberCreateOrConnectWithoutCohortInput[]
    createMany?: CohortMemberCreateManyCohortInputEnvelope
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutCohortInput = {
    create?: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput> | SessionCreateWithoutCohortInput[] | SessionUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCohortInput | SessionCreateOrConnectWithoutCohortInput[]
    createMany?: SessionCreateManyCohortInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CohortMemberUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput> | CohortMemberCreateWithoutCohortInput[] | CohortMemberUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutCohortInput | CohortMemberCreateOrConnectWithoutCohortInput[]
    createMany?: CohortMemberCreateManyCohortInputEnvelope
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput> | SessionCreateWithoutCohortInput[] | SessionUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCohortInput | SessionCreateOrConnectWithoutCohortInput[]
    createMany?: SessionCreateManyCohortInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCohortsTaughtNestedInput = {
    create?: XOR<UserCreateWithoutCohortsTaughtInput, UserUncheckedCreateWithoutCohortsTaughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutCohortsTaughtInput
    upsert?: UserUpsertWithoutCohortsTaughtInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCohortsTaughtInput, UserUpdateWithoutCohortsTaughtInput>, UserUncheckedUpdateWithoutCohortsTaughtInput>
  }

  export type UserUpdateOneWithoutCohortsSupervisedNestedInput = {
    create?: XOR<UserCreateWithoutCohortsSupervisedInput, UserUncheckedCreateWithoutCohortsSupervisedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCohortsSupervisedInput
    upsert?: UserUpsertWithoutCohortsSupervisedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCohortsSupervisedInput, UserUpdateWithoutCohortsSupervisedInput>, UserUncheckedUpdateWithoutCohortsSupervisedInput>
  }

  export type CohortMemberUpdateManyWithoutCohortNestedInput = {
    create?: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput> | CohortMemberCreateWithoutCohortInput[] | CohortMemberUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutCohortInput | CohortMemberCreateOrConnectWithoutCohortInput[]
    upsert?: CohortMemberUpsertWithWhereUniqueWithoutCohortInput | CohortMemberUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: CohortMemberCreateManyCohortInputEnvelope
    set?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    disconnect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    delete?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    update?: CohortMemberUpdateWithWhereUniqueWithoutCohortInput | CohortMemberUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: CohortMemberUpdateManyWithWhereWithoutCohortInput | CohortMemberUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutCohortNestedInput = {
    create?: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput> | SessionCreateWithoutCohortInput[] | SessionUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCohortInput | SessionCreateOrConnectWithoutCohortInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCohortInput | SessionUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: SessionCreateManyCohortInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCohortInput | SessionUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCohortInput | SessionUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CohortMemberUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput> | CohortMemberCreateWithoutCohortInput[] | CohortMemberUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortMemberCreateOrConnectWithoutCohortInput | CohortMemberCreateOrConnectWithoutCohortInput[]
    upsert?: CohortMemberUpsertWithWhereUniqueWithoutCohortInput | CohortMemberUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: CohortMemberCreateManyCohortInputEnvelope
    set?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    disconnect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    delete?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    connect?: CohortMemberWhereUniqueInput | CohortMemberWhereUniqueInput[]
    update?: CohortMemberUpdateWithWhereUniqueWithoutCohortInput | CohortMemberUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: CohortMemberUpdateManyWithWhereWithoutCohortInput | CohortMemberUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput> | SessionCreateWithoutCohortInput[] | SessionUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCohortInput | SessionCreateOrConnectWithoutCohortInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCohortInput | SessionUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: SessionCreateManyCohortInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCohortInput | SessionUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCohortInput | SessionUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CohortCreateNestedOneWithoutMembersInput = {
    create?: XOR<CohortCreateWithoutMembersInput, CohortUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CohortCreateOrConnectWithoutMembersInput
    connect?: CohortWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type CohortUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CohortCreateWithoutMembersInput, CohortUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CohortCreateOrConnectWithoutMembersInput
    upsert?: CohortUpsertWithoutMembersInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutMembersInput, CohortUpdateWithoutMembersInput>, CohortUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type CohortCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CohortCreateWithoutSessionsInput, CohortUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutSessionsInput
    connect?: CohortWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutSessionInput = {
    create?: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput> | AttendanceCreateWithoutSessionInput[] | AttendanceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionInput | AttendanceCreateOrConnectWithoutSessionInput[]
    createMany?: AttendanceCreateManySessionInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExerciseAttemptCreateNestedManyWithoutSessionInput = {
    create?: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput> | ExerciseAttemptCreateWithoutSessionInput[] | ExerciseAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutSessionInput | ExerciseAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: ExerciseAttemptCreateManySessionInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type TranscriptSegmentCreateNestedManyWithoutSessionInput = {
    create?: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput> | TranscriptSegmentCreateWithoutSessionInput[] | TranscriptSegmentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TranscriptSegmentCreateOrConnectWithoutSessionInput | TranscriptSegmentCreateOrConnectWithoutSessionInput[]
    createMany?: TranscriptSegmentCreateManySessionInputEnvelope
    connect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
  }

  export type SessionEventCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput> | AttendanceCreateWithoutSessionInput[] | AttendanceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionInput | AttendanceCreateOrConnectWithoutSessionInput[]
    createMany?: AttendanceCreateManySessionInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput> | ExerciseAttemptCreateWithoutSessionInput[] | ExerciseAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutSessionInput | ExerciseAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: ExerciseAttemptCreateManySessionInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput> | TranscriptSegmentCreateWithoutSessionInput[] | TranscriptSegmentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TranscriptSegmentCreateOrConnectWithoutSessionInput | TranscriptSegmentCreateOrConnectWithoutSessionInput[]
    createMany?: TranscriptSegmentCreateManySessionInputEnvelope
    connect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
  }

  export type SessionEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CohortUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CohortCreateWithoutSessionsInput, CohortUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutSessionsInput
    upsert?: CohortUpsertWithoutSessionsInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutSessionsInput, CohortUpdateWithoutSessionsInput>, CohortUncheckedUpdateWithoutSessionsInput>
  }

  export type AttendanceUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput> | AttendanceCreateWithoutSessionInput[] | AttendanceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionInput | AttendanceCreateOrConnectWithoutSessionInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSessionInput | AttendanceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AttendanceCreateManySessionInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSessionInput | AttendanceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSessionInput | AttendanceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExerciseAttemptUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput> | ExerciseAttemptCreateWithoutSessionInput[] | ExerciseAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutSessionInput | ExerciseAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutSessionInput | ExerciseAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ExerciseAttemptCreateManySessionInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutSessionInput | ExerciseAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutSessionInput | ExerciseAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type TranscriptSegmentUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput> | TranscriptSegmentCreateWithoutSessionInput[] | TranscriptSegmentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TranscriptSegmentCreateOrConnectWithoutSessionInput | TranscriptSegmentCreateOrConnectWithoutSessionInput[]
    upsert?: TranscriptSegmentUpsertWithWhereUniqueWithoutSessionInput | TranscriptSegmentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TranscriptSegmentCreateManySessionInputEnvelope
    set?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    disconnect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    delete?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    connect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    update?: TranscriptSegmentUpdateWithWhereUniqueWithoutSessionInput | TranscriptSegmentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TranscriptSegmentUpdateManyWithWhereWithoutSessionInput | TranscriptSegmentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TranscriptSegmentScalarWhereInput | TranscriptSegmentScalarWhereInput[]
  }

  export type SessionEventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    upsert?: SessionEventUpsertWithWhereUniqueWithoutSessionInput | SessionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    set?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    disconnect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    delete?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    update?: SessionEventUpdateWithWhereUniqueWithoutSessionInput | SessionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionEventUpdateManyWithWhereWithoutSessionInput | SessionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput> | AttendanceCreateWithoutSessionInput[] | AttendanceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionInput | AttendanceCreateOrConnectWithoutSessionInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSessionInput | AttendanceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AttendanceCreateManySessionInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSessionInput | AttendanceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSessionInput | AttendanceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput> | ExerciseAttemptCreateWithoutSessionInput[] | ExerciseAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutSessionInput | ExerciseAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutSessionInput | ExerciseAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ExerciseAttemptCreateManySessionInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutSessionInput | ExerciseAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutSessionInput | ExerciseAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput> | TranscriptSegmentCreateWithoutSessionInput[] | TranscriptSegmentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TranscriptSegmentCreateOrConnectWithoutSessionInput | TranscriptSegmentCreateOrConnectWithoutSessionInput[]
    upsert?: TranscriptSegmentUpsertWithWhereUniqueWithoutSessionInput | TranscriptSegmentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TranscriptSegmentCreateManySessionInputEnvelope
    set?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    disconnect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    delete?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    connect?: TranscriptSegmentWhereUniqueInput | TranscriptSegmentWhereUniqueInput[]
    update?: TranscriptSegmentUpdateWithWhereUniqueWithoutSessionInput | TranscriptSegmentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TranscriptSegmentUpdateManyWithWhereWithoutSessionInput | TranscriptSegmentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TranscriptSegmentScalarWhereInput | TranscriptSegmentScalarWhereInput[]
  }

  export type SessionEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    upsert?: SessionEventUpsertWithWhereUniqueWithoutSessionInput | SessionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    set?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    disconnect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    delete?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    update?: SessionEventUpdateWithWhereUniqueWithoutSessionInput | SessionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionEventUpdateManyWithWhereWithoutSessionInput | SessionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutEventsInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    upsert?: SessionUpsertWithoutEventsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutEventsInput, SessionUpdateWithoutEventsInput>, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type SessionCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<SessionCreateWithoutAttendanceInput, SessionUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttendanceInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<SessionCreateWithoutAttendanceInput, SessionUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttendanceInput
    upsert?: SessionUpsertWithoutAttendanceInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutAttendanceInput, SessionUpdateWithoutAttendanceInput>, SessionUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type ExerciseAttemptCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput> | ExerciseAttemptCreateWithoutExerciseInput[] | ExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutExerciseInput | ExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseAttemptCreateManyExerciseInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type ExerciseAttemptUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput> | ExerciseAttemptCreateWithoutExerciseInput[] | ExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutExerciseInput | ExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseAttemptCreateManyExerciseInputEnvelope
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
  }

  export type ExerciseAttemptUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput> | ExerciseAttemptCreateWithoutExerciseInput[] | ExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutExerciseInput | ExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput | ExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseAttemptCreateManyExerciseInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput | ExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutExerciseInput | ExerciseAttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput> | ExerciseAttemptCreateWithoutExerciseInput[] | ExerciseAttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseAttemptCreateOrConnectWithoutExerciseInput | ExerciseAttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput | ExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseAttemptCreateManyExerciseInputEnvelope
    set?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    disconnect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    delete?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    connect?: ExerciseAttemptWhereUniqueInput | ExerciseAttemptWhereUniqueInput[]
    update?: ExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput | ExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseAttemptUpdateManyWithWhereWithoutExerciseInput | ExerciseAttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<UserCreateWithoutAttemptsInput, UserUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttemptsInput
    connect?: SessionWhereUniqueInput
  }

  export type ExerciseUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    upsert?: ExerciseUpsertWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutAttemptsInput, ExerciseUpdateWithoutAttemptsInput>, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type UserUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutAttemptsInput, UserUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttemptsInput
    upsert?: UserUpsertWithoutAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttemptsInput, UserUpdateWithoutAttemptsInput>, UserUncheckedUpdateWithoutAttemptsInput>
  }

  export type SessionUpdateOneWithoutAttemptsNestedInput = {
    create?: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttemptsInput
    upsert?: SessionUpsertWithoutAttemptsInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutAttemptsInput, SessionUpdateWithoutAttemptsInput>, SessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type SessionCreateNestedOneWithoutTranscriptInput = {
    create?: XOR<SessionCreateWithoutTranscriptInput, SessionUncheckedCreateWithoutTranscriptInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTranscriptInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutTranscriptNestedInput = {
    create?: XOR<SessionCreateWithoutTranscriptInput, SessionUncheckedCreateWithoutTranscriptInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTranscriptInput
    upsert?: SessionUpsertWithoutTranscriptInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTranscriptInput, SessionUpdateWithoutTranscriptInput>, SessionUncheckedUpdateWithoutTranscriptInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
  }

  export type CohortCreateWithoutInstructorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    supervisor?: UserCreateNestedOneWithoutCohortsSupervisedInput
    members?: CohortMemberCreateNestedManyWithoutCohortInput
    sessions?: SessionCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutInstructorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    supervisorId?: string | null
    members?: CohortMemberUncheckedCreateNestedManyWithoutCohortInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutInstructorInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput>
  }

  export type CohortCreateManyInstructorInputEnvelope = {
    data: CohortCreateManyInstructorInput | CohortCreateManyInstructorInput[]
  }

  export type CohortCreateWithoutSupervisorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructor: UserCreateNestedOneWithoutCohortsTaughtInput
    members?: CohortMemberCreateNestedManyWithoutCohortInput
    sessions?: SessionCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutSupervisorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
    members?: CohortMemberUncheckedCreateNestedManyWithoutCohortInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutSupervisorInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput>
  }

  export type CohortCreateManySupervisorInputEnvelope = {
    data: CohortCreateManySupervisorInput | CohortCreateManySupervisorInput[]
  }

  export type CohortMemberCreateWithoutStudentInput = {
    id?: string
    joinedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutMembersInput
  }

  export type CohortMemberUncheckedCreateWithoutStudentInput = {
    id?: string
    cohortId: string
    joinedAt?: Date | string
  }

  export type CohortMemberCreateOrConnectWithoutStudentInput = {
    where: CohortMemberWhereUniqueInput
    create: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput>
  }

  export type CohortMemberCreateManyStudentInputEnvelope = {
    data: CohortMemberCreateManyStudentInput | CohortMemberCreateManyStudentInput[]
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    present?: boolean
    minutes?: number
    session: SessionCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    sessionId: string
    present?: boolean
    minutes?: number
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
  }

  export type ExerciseAttemptCreateWithoutStudentInput = {
    id?: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    session?: SessionCreateNestedOneWithoutAttemptsInput
  }

  export type ExerciseAttemptUncheckedCreateWithoutStudentInput = {
    id?: string
    exerciseId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptCreateOrConnectWithoutStudentInput = {
    where: ExerciseAttemptWhereUniqueInput
    create: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput>
  }

  export type ExerciseAttemptCreateManyStudentInputEnvelope = {
    data: ExerciseAttemptCreateManyStudentInput | ExerciseAttemptCreateManyStudentInput[]
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    parentId?: StringNullableFilter<"User"> | string | null
  }

  export type CohortUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CohortWhereUniqueInput
    update: XOR<CohortUpdateWithoutInstructorInput, CohortUncheckedUpdateWithoutInstructorInput>
    create: XOR<CohortCreateWithoutInstructorInput, CohortUncheckedCreateWithoutInstructorInput>
  }

  export type CohortUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CohortWhereUniqueInput
    data: XOR<CohortUpdateWithoutInstructorInput, CohortUncheckedUpdateWithoutInstructorInput>
  }

  export type CohortUpdateManyWithWhereWithoutInstructorInput = {
    where: CohortScalarWhereInput
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CohortScalarWhereInput = {
    AND?: CohortScalarWhereInput | CohortScalarWhereInput[]
    OR?: CohortScalarWhereInput[]
    NOT?: CohortScalarWhereInput | CohortScalarWhereInput[]
    id?: StringFilter<"Cohort"> | string
    name?: StringFilter<"Cohort"> | string
    language?: StringFilter<"Cohort"> | string
    gradeBand?: StringFilter<"Cohort"> | string
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    instructorId?: StringFilter<"Cohort"> | string
    supervisorId?: StringNullableFilter<"Cohort"> | string | null
  }

  export type CohortUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: CohortWhereUniqueInput
    update: XOR<CohortUpdateWithoutSupervisorInput, CohortUncheckedUpdateWithoutSupervisorInput>
    create: XOR<CohortCreateWithoutSupervisorInput, CohortUncheckedCreateWithoutSupervisorInput>
  }

  export type CohortUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: CohortWhereUniqueInput
    data: XOR<CohortUpdateWithoutSupervisorInput, CohortUncheckedUpdateWithoutSupervisorInput>
  }

  export type CohortUpdateManyWithWhereWithoutSupervisorInput = {
    where: CohortScalarWhereInput
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type CohortMemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: CohortMemberWhereUniqueInput
    update: XOR<CohortMemberUpdateWithoutStudentInput, CohortMemberUncheckedUpdateWithoutStudentInput>
    create: XOR<CohortMemberCreateWithoutStudentInput, CohortMemberUncheckedCreateWithoutStudentInput>
  }

  export type CohortMemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: CohortMemberWhereUniqueInput
    data: XOR<CohortMemberUpdateWithoutStudentInput, CohortMemberUncheckedUpdateWithoutStudentInput>
  }

  export type CohortMemberUpdateManyWithWhereWithoutStudentInput = {
    where: CohortMemberScalarWhereInput
    data: XOR<CohortMemberUpdateManyMutationInput, CohortMemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type CohortMemberScalarWhereInput = {
    AND?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
    OR?: CohortMemberScalarWhereInput[]
    NOT?: CohortMemberScalarWhereInput | CohortMemberScalarWhereInput[]
    id?: StringFilter<"CohortMember"> | string
    cohortId?: StringFilter<"CohortMember"> | string
    studentId?: StringFilter<"CohortMember"> | string
    joinedAt?: DateTimeFilter<"CohortMember"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    sessionId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    minutes?: IntFilter<"Attendance"> | number
  }

  export type ExerciseAttemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExerciseAttemptWhereUniqueInput
    update: XOR<ExerciseAttemptUpdateWithoutStudentInput, ExerciseAttemptUncheckedUpdateWithoutStudentInput>
    create: XOR<ExerciseAttemptCreateWithoutStudentInput, ExerciseAttemptUncheckedCreateWithoutStudentInput>
  }

  export type ExerciseAttemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExerciseAttemptWhereUniqueInput
    data: XOR<ExerciseAttemptUpdateWithoutStudentInput, ExerciseAttemptUncheckedUpdateWithoutStudentInput>
  }

  export type ExerciseAttemptUpdateManyWithWhereWithoutStudentInput = {
    where: ExerciseAttemptScalarWhereInput
    data: XOR<ExerciseAttemptUpdateManyMutationInput, ExerciseAttemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExerciseAttemptScalarWhereInput = {
    AND?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
    OR?: ExerciseAttemptScalarWhereInput[]
    NOT?: ExerciseAttemptScalarWhereInput | ExerciseAttemptScalarWhereInput[]
    id?: StringFilter<"ExerciseAttempt"> | string
    exerciseId?: StringFilter<"ExerciseAttempt"> | string
    studentId?: StringFilter<"ExerciseAttempt"> | string
    sessionId?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completed?: BoolFilter<"ExerciseAttempt"> | boolean
    answer?: StringNullableFilter<"ExerciseAttempt"> | string | null
    completedAt?: DateTimeFilter<"ExerciseAttempt"> | Date | string
  }

  export type UserCreateWithoutCohortsTaughtInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCohortsTaughtInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCohortsTaughtInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCohortsTaughtInput, UserUncheckedCreateWithoutCohortsTaughtInput>
  }

  export type UserCreateWithoutCohortsSupervisedInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCohortsSupervisedInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCohortsSupervisedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCohortsSupervisedInput, UserUncheckedCreateWithoutCohortsSupervisedInput>
  }

  export type CohortMemberCreateWithoutCohortInput = {
    id?: string
    joinedAt?: Date | string
    student: UserCreateNestedOneWithoutMembershipsInput
  }

  export type CohortMemberUncheckedCreateWithoutCohortInput = {
    id?: string
    studentId: string
    joinedAt?: Date | string
  }

  export type CohortMemberCreateOrConnectWithoutCohortInput = {
    where: CohortMemberWhereUniqueInput
    create: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput>
  }

  export type CohortMemberCreateManyCohortInputEnvelope = {
    data: CohortMemberCreateManyCohortInput | CohortMemberCreateManyCohortInput[]
  }

  export type SessionCreateWithoutCohortInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentCreateNestedManyWithoutSessionInput
    events?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCohortInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput
    events?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutCohortInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput>
  }

  export type SessionCreateManyCohortInputEnvelope = {
    data: SessionCreateManyCohortInput | SessionCreateManyCohortInput[]
  }

  export type UserUpsertWithoutCohortsTaughtInput = {
    update: XOR<UserUpdateWithoutCohortsTaughtInput, UserUncheckedUpdateWithoutCohortsTaughtInput>
    create: XOR<UserCreateWithoutCohortsTaughtInput, UserUncheckedCreateWithoutCohortsTaughtInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCohortsTaughtInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCohortsTaughtInput, UserUncheckedUpdateWithoutCohortsTaughtInput>
  }

  export type UserUpdateWithoutCohortsTaughtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCohortsTaughtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutCohortsSupervisedInput = {
    update: XOR<UserUpdateWithoutCohortsSupervisedInput, UserUncheckedUpdateWithoutCohortsSupervisedInput>
    create: XOR<UserCreateWithoutCohortsSupervisedInput, UserUncheckedCreateWithoutCohortsSupervisedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCohortsSupervisedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCohortsSupervisedInput, UserUncheckedUpdateWithoutCohortsSupervisedInput>
  }

  export type UserUpdateWithoutCohortsSupervisedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCohortsSupervisedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortMemberUpsertWithWhereUniqueWithoutCohortInput = {
    where: CohortMemberWhereUniqueInput
    update: XOR<CohortMemberUpdateWithoutCohortInput, CohortMemberUncheckedUpdateWithoutCohortInput>
    create: XOR<CohortMemberCreateWithoutCohortInput, CohortMemberUncheckedCreateWithoutCohortInput>
  }

  export type CohortMemberUpdateWithWhereUniqueWithoutCohortInput = {
    where: CohortMemberWhereUniqueInput
    data: XOR<CohortMemberUpdateWithoutCohortInput, CohortMemberUncheckedUpdateWithoutCohortInput>
  }

  export type CohortMemberUpdateManyWithWhereWithoutCohortInput = {
    where: CohortMemberScalarWhereInput
    data: XOR<CohortMemberUpdateManyMutationInput, CohortMemberUncheckedUpdateManyWithoutCohortInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutCohortInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCohortInput, SessionUncheckedUpdateWithoutCohortInput>
    create: XOR<SessionCreateWithoutCohortInput, SessionUncheckedCreateWithoutCohortInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCohortInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCohortInput, SessionUncheckedUpdateWithoutCohortInput>
  }

  export type SessionUpdateManyWithWhereWithoutCohortInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCohortInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    cohortId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    subject?: StringFilter<"Session"> | string
    plannedAt?: DateTimeFilter<"Session"> | Date | string
    startedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
  }

  export type CohortCreateWithoutMembersInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructor: UserCreateNestedOneWithoutCohortsTaughtInput
    supervisor?: UserCreateNestedOneWithoutCohortsSupervisedInput
    sessions?: SessionCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
    supervisorId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutMembersInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutMembersInput, CohortUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type CohortUpsertWithoutMembersInput = {
    update: XOR<CohortUpdateWithoutMembersInput, CohortUncheckedUpdateWithoutMembersInput>
    create: XOR<CohortCreateWithoutMembersInput, CohortUncheckedCreateWithoutMembersInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutMembersInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutMembersInput, CohortUncheckedUpdateWithoutMembersInput>
  }

  export type CohortUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCohortsTaughtNestedInput
    supervisor?: UserUpdateOneWithoutCohortsSupervisedNestedInput
    sessions?: SessionUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortCreateWithoutSessionsInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructor: UserCreateNestedOneWithoutCohortsTaughtInput
    supervisor?: UserCreateNestedOneWithoutCohortsSupervisedInput
    members?: CohortMemberCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
    supervisorId?: string | null
    members?: CohortMemberUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutSessionsInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutSessionsInput, CohortUncheckedCreateWithoutSessionsInput>
  }

  export type AttendanceCreateWithoutSessionInput = {
    id?: string
    present?: boolean
    minutes?: number
    student: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutSessionInput = {
    id?: string
    studentId: string
    present?: boolean
    minutes?: number
  }

  export type AttendanceCreateOrConnectWithoutSessionInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput>
  }

  export type AttendanceCreateManySessionInputEnvelope = {
    data: AttendanceCreateManySessionInput | AttendanceCreateManySessionInput[]
  }

  export type ExerciseAttemptCreateWithoutSessionInput = {
    id?: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    student: UserCreateNestedOneWithoutAttemptsInput
  }

  export type ExerciseAttemptUncheckedCreateWithoutSessionInput = {
    id?: string
    exerciseId: string
    studentId: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptCreateOrConnectWithoutSessionInput = {
    where: ExerciseAttemptWhereUniqueInput
    create: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput>
  }

  export type ExerciseAttemptCreateManySessionInputEnvelope = {
    data: ExerciseAttemptCreateManySessionInput | ExerciseAttemptCreateManySessionInput[]
  }

  export type TranscriptSegmentCreateWithoutSessionInput = {
    id?: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
  }

  export type TranscriptSegmentUncheckedCreateWithoutSessionInput = {
    id?: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
  }

  export type TranscriptSegmentCreateOrConnectWithoutSessionInput = {
    where: TranscriptSegmentWhereUniqueInput
    create: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput>
  }

  export type TranscriptSegmentCreateManySessionInputEnvelope = {
    data: TranscriptSegmentCreateManySessionInput | TranscriptSegmentCreateManySessionInput[]
  }

  export type SessionEventCreateWithoutSessionInput = {
    id?: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
  }

  export type SessionEventUncheckedCreateWithoutSessionInput = {
    id?: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
  }

  export type SessionEventCreateOrConnectWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    create: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput>
  }

  export type SessionEventCreateManySessionInputEnvelope = {
    data: SessionEventCreateManySessionInput | SessionEventCreateManySessionInput[]
  }

  export type CohortUpsertWithoutSessionsInput = {
    update: XOR<CohortUpdateWithoutSessionsInput, CohortUncheckedUpdateWithoutSessionsInput>
    create: XOR<CohortCreateWithoutSessionsInput, CohortUncheckedCreateWithoutSessionsInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutSessionsInput, CohortUncheckedUpdateWithoutSessionsInput>
  }

  export type CohortUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCohortsTaughtNestedInput
    supervisor?: UserUpdateOneWithoutCohortsSupervisedNestedInput
    members?: CohortMemberUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: CohortMemberUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSessionInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSessionInput, AttendanceUncheckedUpdateWithoutSessionInput>
    create: XOR<AttendanceCreateWithoutSessionInput, AttendanceUncheckedCreateWithoutSessionInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSessionInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSessionInput, AttendanceUncheckedUpdateWithoutSessionInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSessionInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSessionInput>
  }

  export type ExerciseAttemptUpsertWithWhereUniqueWithoutSessionInput = {
    where: ExerciseAttemptWhereUniqueInput
    update: XOR<ExerciseAttemptUpdateWithoutSessionInput, ExerciseAttemptUncheckedUpdateWithoutSessionInput>
    create: XOR<ExerciseAttemptCreateWithoutSessionInput, ExerciseAttemptUncheckedCreateWithoutSessionInput>
  }

  export type ExerciseAttemptUpdateWithWhereUniqueWithoutSessionInput = {
    where: ExerciseAttemptWhereUniqueInput
    data: XOR<ExerciseAttemptUpdateWithoutSessionInput, ExerciseAttemptUncheckedUpdateWithoutSessionInput>
  }

  export type ExerciseAttemptUpdateManyWithWhereWithoutSessionInput = {
    where: ExerciseAttemptScalarWhereInput
    data: XOR<ExerciseAttemptUpdateManyMutationInput, ExerciseAttemptUncheckedUpdateManyWithoutSessionInput>
  }

  export type TranscriptSegmentUpsertWithWhereUniqueWithoutSessionInput = {
    where: TranscriptSegmentWhereUniqueInput
    update: XOR<TranscriptSegmentUpdateWithoutSessionInput, TranscriptSegmentUncheckedUpdateWithoutSessionInput>
    create: XOR<TranscriptSegmentCreateWithoutSessionInput, TranscriptSegmentUncheckedCreateWithoutSessionInput>
  }

  export type TranscriptSegmentUpdateWithWhereUniqueWithoutSessionInput = {
    where: TranscriptSegmentWhereUniqueInput
    data: XOR<TranscriptSegmentUpdateWithoutSessionInput, TranscriptSegmentUncheckedUpdateWithoutSessionInput>
  }

  export type TranscriptSegmentUpdateManyWithWhereWithoutSessionInput = {
    where: TranscriptSegmentScalarWhereInput
    data: XOR<TranscriptSegmentUpdateManyMutationInput, TranscriptSegmentUncheckedUpdateManyWithoutSessionInput>
  }

  export type TranscriptSegmentScalarWhereInput = {
    AND?: TranscriptSegmentScalarWhereInput | TranscriptSegmentScalarWhereInput[]
    OR?: TranscriptSegmentScalarWhereInput[]
    NOT?: TranscriptSegmentScalarWhereInput | TranscriptSegmentScalarWhereInput[]
    id?: StringFilter<"TranscriptSegment"> | string
    sessionId?: StringFilter<"TranscriptSegment"> | string
    speaker?: StringFilter<"TranscriptSegment"> | string
    text?: StringFilter<"TranscriptSegment"> | string
    startsAtMs?: IntFilter<"TranscriptSegment"> | number
    createdAt?: DateTimeFilter<"TranscriptSegment"> | Date | string
  }

  export type SessionEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    update: XOR<SessionEventUpdateWithoutSessionInput, SessionEventUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput>
  }

  export type SessionEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    data: XOR<SessionEventUpdateWithoutSessionInput, SessionEventUncheckedUpdateWithoutSessionInput>
  }

  export type SessionEventUpdateManyWithWhereWithoutSessionInput = {
    where: SessionEventScalarWhereInput
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionEventScalarWhereInput = {
    AND?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
    OR?: SessionEventScalarWhereInput[]
    NOT?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
    id?: StringFilter<"SessionEvent"> | string
    sessionId?: StringFilter<"SessionEvent"> | string
    type?: StringFilter<"SessionEvent"> | string
    actorId?: StringNullableFilter<"SessionEvent"> | string | null
    payload?: StringNullableFilter<"SessionEvent"> | string | null
    occurredAt?: DateTimeFilter<"SessionEvent"> | Date | string
  }

  export type SessionCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    cohort: CohortCreateNestedOneWithoutSessionsInput
    attendance?: AttendanceCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutEventsInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutEventsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
  }

  export type SessionUpsertWithoutEventsInput = {
    update: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type SessionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    cohort?: CohortUpdateOneRequiredWithoutSessionsNestedInput
    attendance?: AttendanceUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutAttendanceInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    cohort: CohortCreateNestedOneWithoutSessionsInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentCreateNestedManyWithoutSessionInput
    events?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutAttendanceInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput
    events?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutAttendanceInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAttendanceInput, SessionUncheckedCreateWithoutAttendanceInput>
  }

  export type UserCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type SessionUpsertWithoutAttendanceInput = {
    update: XOR<SessionUpdateWithoutAttendanceInput, SessionUncheckedUpdateWithoutAttendanceInput>
    create: XOR<SessionCreateWithoutAttendanceInput, SessionUncheckedCreateWithoutAttendanceInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutAttendanceInput, SessionUncheckedUpdateWithoutAttendanceInput>
  }

  export type SessionUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    cohort?: CohortUpdateOneRequiredWithoutSessionsNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUpdateManyWithoutSessionNestedInput
    events?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput
    events?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExerciseAttemptCreateWithoutExerciseInput = {
    id?: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
    student: UserCreateNestedOneWithoutAttemptsInput
    session?: SessionCreateNestedOneWithoutAttemptsInput
  }

  export type ExerciseAttemptUncheckedCreateWithoutExerciseInput = {
    id?: string
    studentId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptCreateOrConnectWithoutExerciseInput = {
    where: ExerciseAttemptWhereUniqueInput
    create: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseAttemptCreateManyExerciseInputEnvelope = {
    data: ExerciseAttemptCreateManyExerciseInput | ExerciseAttemptCreateManyExerciseInput[]
  }

  export type ExerciseAttemptUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseAttemptWhereUniqueInput
    update: XOR<ExerciseAttemptUpdateWithoutExerciseInput, ExerciseAttemptUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseAttemptCreateWithoutExerciseInput, ExerciseAttemptUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseAttemptUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseAttemptWhereUniqueInput
    data: XOR<ExerciseAttemptUpdateWithoutExerciseInput, ExerciseAttemptUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseAttemptUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseAttemptScalarWhereInput
    data: XOR<ExerciseAttemptUpdateManyMutationInput, ExerciseAttemptUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseCreateWithoutAttemptsInput = {
    id?: string
    title: string
    subject: string
    competency: string
    prompt: string
  }

  export type ExerciseUncheckedCreateWithoutAttemptsInput = {
    id?: string
    title: string
    subject: string
    competency: string
    prompt: string
  }

  export type ExerciseCreateOrConnectWithoutAttemptsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
  }

  export type UserCreateWithoutAttemptsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAttemptsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    parentId?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    cohortsTaught?: CohortUncheckedCreateNestedManyWithoutInstructorInput
    cohortsSupervised?: CohortUncheckedCreateNestedManyWithoutSupervisorInput
    memberships?: CohortMemberUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttemptsInput, UserUncheckedCreateWithoutAttemptsInput>
  }

  export type SessionCreateWithoutAttemptsInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    cohort: CohortCreateNestedOneWithoutSessionsInput
    attendance?: AttendanceCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentCreateNestedManyWithoutSessionInput
    events?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutAttemptsInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionInput
    transcript?: TranscriptSegmentUncheckedCreateNestedManyWithoutSessionInput
    events?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutAttemptsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
  }

  export type ExerciseUpsertWithoutAttemptsInput = {
    update: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExerciseUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    competency?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAttemptsInput = {
    update: XOR<UserUpdateWithoutAttemptsInput, UserUncheckedUpdateWithoutAttemptsInput>
    create: XOR<UserCreateWithoutAttemptsInput, UserUncheckedCreateWithoutAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttemptsInput, UserUncheckedUpdateWithoutAttemptsInput>
  }

  export type UserUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SessionUpsertWithoutAttemptsInput = {
    update: XOR<SessionUpdateWithoutAttemptsInput, SessionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutAttemptsInput, SessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type SessionUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    cohort?: CohortUpdateOneRequiredWithoutSessionsNestedInput
    attendance?: AttendanceUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUpdateManyWithoutSessionNestedInput
    events?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput
    events?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutTranscriptInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    cohort: CohortCreateNestedOneWithoutSessionsInput
    attendance?: AttendanceCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptCreateNestedManyWithoutSessionInput
    events?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutTranscriptInput = {
    id?: string
    cohortId: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionInput
    attempts?: ExerciseAttemptUncheckedCreateNestedManyWithoutSessionInput
    events?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutTranscriptInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTranscriptInput, SessionUncheckedCreateWithoutTranscriptInput>
  }

  export type SessionUpsertWithoutTranscriptInput = {
    update: XOR<SessionUpdateWithoutTranscriptInput, SessionUncheckedUpdateWithoutTranscriptInput>
    create: XOR<SessionCreateWithoutTranscriptInput, SessionUncheckedCreateWithoutTranscriptInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTranscriptInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTranscriptInput, SessionUncheckedUpdateWithoutTranscriptInput>
  }

  export type SessionUpdateWithoutTranscriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    cohort?: CohortUpdateOneRequiredWithoutSessionsNestedInput
    attendance?: AttendanceUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutSessionNestedInput
    events?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutTranscriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput
    events?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserCreateManyParentInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type CohortCreateManyInstructorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    supervisorId?: string | null
  }

  export type CohortCreateManySupervisorInput = {
    id?: string
    name: string
    language?: string
    gradeBand: string
    createdAt?: Date | string
    instructorId: string
  }

  export type CohortMemberCreateManyStudentInput = {
    id?: string
    cohortId: string
    joinedAt?: Date | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    sessionId: string
    present?: boolean
    minutes?: number
  }

  export type ExerciseAttemptCreateManyStudentInput = {
    id?: string
    exerciseId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    cohortsTaught?: CohortUncheckedUpdateManyWithoutInstructorNestedInput
    cohortsSupervised?: CohortUncheckedUpdateManyWithoutSupervisorNestedInput
    memberships?: CohortMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UserUpdateOneWithoutCohortsSupervisedNestedInput
    members?: CohortMemberUpdateManyWithoutCohortNestedInput
    sessions?: SessionUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: CohortMemberUncheckedUpdateManyWithoutCohortNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CohortUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCohortsTaughtNestedInput
    members?: CohortMemberUpdateManyWithoutCohortNestedInput
    sessions?: SessionUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    members?: CohortMemberUncheckedUpdateManyWithoutCohortNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gradeBand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type CohortMemberUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CohortMemberUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortMemberUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseAttemptUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    session?: SessionUpdateOneWithoutAttemptsNestedInput
  }

  export type ExerciseAttemptUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortMemberCreateManyCohortInput = {
    id?: string
    studentId: string
    joinedAt?: Date | string
  }

  export type SessionCreateManyCohortInput = {
    id?: string
    status?: $Enums.SessionStatus
    subject: string
    plannedAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type CohortMemberUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type CohortMemberUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortMemberUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUpdateManyWithoutSessionNestedInput
    events?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSessionNestedInput
    attempts?: ExerciseAttemptUncheckedUpdateManyWithoutSessionNestedInput
    transcript?: TranscriptSegmentUncheckedUpdateManyWithoutSessionNestedInput
    events?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    subject?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttendanceCreateManySessionInput = {
    id?: string
    studentId: string
    present?: boolean
    minutes?: number
  }

  export type ExerciseAttemptCreateManySessionInput = {
    id?: string
    exerciseId: string
    studentId: string
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type TranscriptSegmentCreateManySessionInput = {
    id?: string
    speaker: string
    text: string
    startsAtMs: number
    createdAt?: Date | string
  }

  export type SessionEventCreateManySessionInput = {
    id?: string
    type: string
    actorId?: string | null
    payload?: string | null
    occurredAt?: Date | string
  }

  export type AttendanceUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    minutes?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseAttemptUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    student?: UserUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type ExerciseAttemptUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptSegmentUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startsAtMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptCreateManyExerciseInput = {
    id?: string
    studentId: string
    sessionId?: string | null
    completed?: boolean
    answer?: string | null
    completedAt?: Date | string
  }

  export type ExerciseAttemptUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAttemptsNestedInput
    session?: SessionUpdateOneWithoutAttemptsNestedInput
  }

  export type ExerciseAttemptUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAttemptUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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