"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { SignupSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already taken!" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: true };
};
