import { sessionSchema, z } from "@vintage/db";
import type { DefaultSession } from "next-auth";
import type { SessionContextValue } from "next-auth/react";
import { useSession as useAuthSession } from "next-auth/react";

interface Session extends z.infer<typeof sessionSchema> {
  user: {
    id: string;
  } & DefaultSession["user"];
}

// @ts-expect-error Hacking the type so we don't have to do the module augmentation technique.
export const useSession: () => Session & SessionContextValue = useAuthSession;
