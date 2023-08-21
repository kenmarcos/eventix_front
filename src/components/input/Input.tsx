import { ComponentProps, LegacyRef, ReactNode, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
  componentClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
}

const Input = (
  {
    componentClassName = "",
    rightIcon = null,
    leftIcon = null,
    errorMessage = "",
    ...rest
  }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const inputClassName = twMerge("flex-1 focus:outline-none", rest.className);

  return (
    <div className={componentClassName}>
      <div
        className={`border ${
          errorMessage ? "border-red-600" : "border-blue-light"
        } rounded-lg overflow-hidden flex bg-white px-4 py-1`}
      >
        {!!leftIcon && leftIcon}

        <input {...rest} ref={ref} className={inputClassName} />

        {!!rightIcon && rightIcon}
      </div>
      {!!errorMessage && <small className="text-red-600">{errorMessage}</small>}
    </div>
  );
};

export default forwardRef(Input);
