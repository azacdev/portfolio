import { notFound } from "next/navigation";

import { auth } from "@/auth";

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user?.email !== "azacdev@gmail.com") {
    notFound();
  }

  return <div>{children}</div>;
}
