import { forwardRef } from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/libs/utils";

const containerVariants = cva("mx-auto w-full px-4", {
  variants: {
    maxWidth: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
    },
  },
  defaultVariants: {
    maxWidth: "2xl",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, ...props }, ref) => {
    return (
      <div
        className={cn(containerVariants({ maxWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Container.displayName = "Container";

export default Container;
