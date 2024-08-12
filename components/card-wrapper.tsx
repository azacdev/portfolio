"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components//header";
import { BackButton } from "@/components/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="max-w-[500px] w-full shadow-md bg-transparent text-white border-none mx-auto">
      <CardHeader className="">
        <Header label={headerLabel} />
      </CardHeader>
      <BackButton href={backButtonHref} label={backButtonLabel} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
