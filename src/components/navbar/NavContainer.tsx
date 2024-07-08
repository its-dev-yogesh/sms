"use client";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
  className?: string;
}

export const NavContainer: React.FC<NavContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "navbar text-black max-h-16 backdrop-blur-md bg-base-200",
        className
      )}>
      {children}
    </div>
  );
};
