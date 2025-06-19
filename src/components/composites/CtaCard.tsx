import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you set up path alias '@' to 'src'

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define the props for our new component
interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, title, description, buttonText, onButtonClick, ...props }, ref) => {
    return (
      <Card className={cn("w-[380px]", className)} ref={ref} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </CardFooter>
      </Card>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
