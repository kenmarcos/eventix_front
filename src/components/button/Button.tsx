import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline-primary";
}

const Button = ({ children, variant = "primary", ...rest }: ButtonProps) => {
  const variants = {
    primary:
      "bg-blue-primary border boder-blue-primary text-white hover:bg-blue-dark hover:duration-500",
    "outline-primary":
      "bg-transparent border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white hover:duration-500",
  };

  const buttonClassName = twMerge(
    "text-xs font-bold px-2 py-3",
    variants[variant],
    rest.className
  );

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
