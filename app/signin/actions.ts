"use server";

import * as z from "zod";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import { SigninSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { SIGNIN_REDIRECT } from "@/routes";

export const signin = async (values: z.infer<typeof SigninSchema>) => {
  const validatedFields = SigninSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!existingUser) {
    await db.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: SIGNIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
