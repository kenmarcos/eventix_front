"use client";

import CurrencyInputComponent, {
  CurrencyInputProps as CurrencyInputComponentProps,
} from "react-currency-input-field";

import { twMerge } from "tailwind-merge";

interface CurrencyInputProps extends CurrencyInputComponentProps {
  componentClassName?: string;
  errorMessage?: string;
}

const CurrencyInput = ({
  componentClassName = "",
  errorMessage = "",
  ...rest
}: CurrencyInputProps) => {
  const currencyInputClassName = twMerge(
    `w-full text-sm border ${
      errorMessage ? "border-red-600" : "border-blue-light"
    } rounded-lg overflow-hidden flex bg-white px-4 py-2 focus:outline-none`,
    rest.className
  );

  return (
    <div className={componentClassName}>
      <CurrencyInputComponent
        {...rest}
        className={currencyInputClassName}
        lang="pt-BR"
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
      />

      {!!errorMessage && <small className="text-red-600">{errorMessage}</small>}
    </div>
  );
};

export default CurrencyInput;
