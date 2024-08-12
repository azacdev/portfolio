"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { SigninSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const signin = async (values: z.infer<typeof SigninSchema>) => {
  const validatedFields = SigninSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/blog",
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

  return { success: true };
};
