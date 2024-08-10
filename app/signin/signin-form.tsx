"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { signin } from "./actions";
import { SigninSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";

export const SigninForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    startTransition(() => {
      signin(values);
    });
  };

  return (
    <CardWrapper headerLabel="Welcome back">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <div className="space-y-4">
            <div className="relative h-16 mb-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="youremail@gmail.com"
                        type="email"
                        className="absolute top-0 left-0 right-0 w-full h-full outline-none text-dark rounded-xl border p-6 bg-light border-dark dark:text-light dark:bg-dark dark:border-light"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="relative h-16 mb-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                        className="absolute top-0 left-0 right-0 w-full h-full text-dark outline-none rounded-xl border p-6 resize-none bg-light border-dark dark:text-light dark:bg-dark dark:border-light"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Signin
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
