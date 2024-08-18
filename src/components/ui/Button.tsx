import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-laila",
  {
    variants: {
      variant: {
        default: "bg-primary rounded-[120px] font-bold hover:bg-primary/90 shadow font-satoshi",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "bg-transparent border font-bold border-secondary rounded-[120px] text-white font-satoshi hover:bg-primary/30 shadow",
        secondary: "bg-white rounded-[5px] text-[20px] font-normal font-monumentExtended leading-[24px] text-black hover:bg-white/70",
        ghost: "text-white/80 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[51px] w-[165px] text-[20px] leading-[27px] text-white",
        md: "h-[42px] w-[139px] font-bold text-[20px] leading-[24px] ",
        sm: "h-[35px] w-[113.3px] text-[13px] leading-[17.6px] text-white",
        xs: "h-[21.2px] w-[91.6px] text-[12px] leading-[16.2px] text-white",
        lg: "",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
