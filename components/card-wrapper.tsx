import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-[500px] shadow-md bg-transparent border-none mx-auto">
      <CardHeader className="">
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
