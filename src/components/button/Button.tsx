import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary";
}

const Button = ({ children, variant = "primary", ...rest }: ButtonProps) => {
  const variants = {
    primary: "bg-blue-primary text-white hover:bg-blue-dark hover:duration-150",
  };

  const buttonClassName = twMerge(
    "text-xs font-bold px-2 py-3",
    variants[variant],
    rest.className
  );

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
