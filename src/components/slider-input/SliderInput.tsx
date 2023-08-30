"use client";

import { useState } from "react";

import * as Slider from "@radix-ui/react-slider";

interface SliderInputProps extends Slider.SliderProps {
  formatLabel?: (value: number) => number | string;
}

const SliderInput = ({
  min = 0,
  max = 100,
  defaultValue = [max],
  formatLabel,
  onValueChange,
  ...rest
}: SliderInputProps) => {
  const [currentValue, setCurrentValue] = useState(max);

  const handleOnValueChange = (value: number[]) => {
    if (!!onValueChange) {
      onValueChange(value);
    }

    setCurrentValue(value[0]);
  };

  return (
    <div>
      <Slider.Root
        {...rest}
        className="relative flex items-center select-none touch-none w-full h-5"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onValueChange={handleOnValueChange}
        value={[currentValue]}
      >
        <Slider.Track className="bg-slate-200 relative grow rounded-full h-3">
          <Slider.Range className="absolute bg-teal-400 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-6 h-6 bg-gray-primary shadow-[0_2px_10px] shadow-gray-dark rounded-full hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-teal-400"
          aria-label="Volume"
        />
      </Slider.Root>

      {!!formatLabel && (
        <div className="flex justify-between font-light text-sm text-blue-primary">
          <p>{formatLabel(min)}</p>
          <p>{formatLabel(currentValue)}</p>
        </div>
      )}
    </div>
  );
};

export default SliderInput;
