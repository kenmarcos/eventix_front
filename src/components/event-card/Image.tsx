import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <NextImage
      className="object-cover group-hover:scale-105 group-hover:duration-500"
      src={src}
      alt={alt}
      fill
      sizes="100%"
    />
  );
};

export default Image;
