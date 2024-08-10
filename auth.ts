import NextAuth from "next-auth";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
