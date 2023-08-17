import { ComponentProps, LegacyRef, ReactNode, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface TextareaProps extends ComponentProps<"textarea"> {
  errorMessage?: string;
}

const Textarea = (
  { errorMessage = "", ...rest }: TextareaProps,
  ref: LegacyRef<HTMLTextAreaElement> | undefined
) => {
  const textareaClassName = twMerge(
    `border ${
      errorMessage ? "border-red-600" : "border-blue-light"
    } rounded-lg overflow-hidden flex bg-white px-6 py-1`,
    rest.className
  );

  return (
    <>
      <textarea {...rest} ref={ref} className={textareaClassName} />

      {!!errorMessage && <small className="text-red-600">{errorMessage}</small>}
    </>
  );
};

export default forwardRef(Textarea);
