import React from "react";
import { cn } from "~/libs/shadcn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto px-4 w-full h-full", className)}>
      {children}
    </section>
  );
}
