import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface InfoProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const Info = ({ children, ...rest }: InfoProps) => {
  const infoClassName = twMerge(
    "absolute w-full space-y-4 bg-description-gradient text-white",
    rest.className
  );

  return (
    <div {...rest} className={infoClassName}>
      {children}
    </div>
  );
};

export default Info;
