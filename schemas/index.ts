import * as z from "zod";

export const SignupSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const SigninSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const postSchema = z.object({
  image: z.string().min(1, "image is required"),
  title: z.string().min(1, "title is required"),
  tags: z.array(z.string()).optional(),
  description: z.string().min(1, "description is required"),
});
