import { ComputerId, computerIdSchema } from "@vintage/db/schema/computers";
import { db } from "@vintage/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const getComputers = async () => {
  try {
    const c = await db.computer.findMany();
    const totc = await db.computer.count();
    return { computers: c, totalComputer: totc };
  } catch (err) {
    throw new Error((err as Error).message ?? "Error, please try again");
  }
};

export const getComputerById = async (id: ComputerId) => {
  const { id: computerId } = computerIdSchema.parse({ id });
  try {
    const c = await db.computer.findFirst({ where: { id: computerId } });
    return { computer: c };
  } catch (err) {
    throw new Error((err as Error).message ?? "Error, please try again");
  }
};
