import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { getUser } from "@vintage/auth";
import { db } from "@vintage/db";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(async () => {
    try{
      const user = await getUser();
      if (!user?.id || !user.email) {
        return {message:"You are not authenticated, please log in"}
      }
      const dbUser = await db.user.findFirst({
        where: {
          id: user.id,
        },
      });
      if (!dbUser) {
        // create user in db
        await db.user.create({
          data: {
            id: user.id,
            email: user.email,
          },
        });
      }
      return { message:"You are authenticated"};
    }catch(err){
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: (err as Error).message ?? "Error, please try again",
      });
    }
  }),
  getEasterEgg: protectedProcedure.query(() => {
    return "You can see this secret message means you trying things out and you are logged in!";
  }),
});
