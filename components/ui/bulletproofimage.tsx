import Image from "next/image";

interface BulletproofImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function BulletproofImage({
  src,
  alt,
  className = "",
  width = 100,
  height = 100,
}: BulletproofImageProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
}
