import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    const userList = await prisma.user.findMany();
    return userList;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await prisma.user.create({
        data: { name: input.name, email: input.email },
      });
      return user;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
