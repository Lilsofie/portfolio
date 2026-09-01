import Image from "next/image";

export default function PortraitCover({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <span className="portrait">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 760px) 420px, 92vw"
        className="portrait__img"
        priority={priority}
      />
      <span className="portrait__screen" aria-hidden="true" />
      <span className="portrait__wash" aria-hidden="true" />
    </span>
  );
}
