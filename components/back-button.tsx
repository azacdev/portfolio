"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant={"link"}
      className="font-normal w-full text-slate-200 justify-start pl-6"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
