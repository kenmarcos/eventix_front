"use client";

import Image from "next/image";
import {
  ChangeEvent,
  ComponentProps,
  LegacyRef,
  forwardRef,
  useState,
} from "react";

import { twMerge } from "tailwind-merge";

interface FileInputProps extends ComponentProps<"input"> {}

const FileInput = (
  { ...rest }: FileInputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const [preview, setPreview] = useState<File | null>(null);

  const fileInputClassName = twMerge(
    "relative shadow-lg h-32 rounded-3xl overflow-hidden mx-auto",
    rest.className
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPreview(event.target.files[0]);
    }
  };

  return (
    <div className={fileInputClassName}>
      <Image
        src={preview ? URL.createObjectURL(preview) : "/file-input-lg.png"}
        alt="Preview image"
        fill
        sizes="100%"
        className="object-cover"
      />

      <input
        {...rest}
        ref={ref}
        type="file"
        accept=".png, .jpg, .jpeg"
        className="absolute w-full h-full cursor-pointer opacity-0"
        onChange={handleChange}
      />
    </div>
  );
};

export default forwardRef(FileInput);
