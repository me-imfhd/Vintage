// import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
// import { getSession } from '@vintage/auth';
// /**
//  * Creates context for an incoming request
//  * @link https://trpc.io/docs/context
//  */
// export async function createContext(opts: CreateNextContextOptions) {
//   const session = await getSession({ req: opts.req });
 
//   return {
//     session,
//   };
// }
 
// export type Context = Awaited<ReturnType<typeof createContext>>;