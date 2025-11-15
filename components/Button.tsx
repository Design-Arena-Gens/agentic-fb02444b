import { forwardRef } from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export const Button = Object.assign(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { asChild, variant = "primary", size = "md", className, children, ...props },
    ref
  ) {
    const classes = clsx(
      "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60",
      variant === "primary" && "bg-blue-500 hover:bg-blue-400 text-white",
      variant === "ghost" && "bg-white/0 hover:bg-white/10 text-white",
      size === "md" && "h-11 px-5 text-sm",
      size === "lg" && "h-12 px-6 text-base",
      className
    );

    if (asChild) {
      return (
        // @ts-expect-error allow anchors as children
        <button ref={ref} className={classes} {...props}>
          {children}
        </button>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }),
  { displayName: "Button" }
);
