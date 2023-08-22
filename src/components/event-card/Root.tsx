import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface RootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const Root = ({ children, ...rest }: RootProps) => {
  const rootClassName = twMerge(
    "relative min-h-[200px] rounded-3xl overflow-hidden shadow-lg shadow-blue-dark",
    rest.className
  );

  return (
    <div {...rest} className={rootClassName}>
      {children}
    </div>
  );
};

export default Root;
