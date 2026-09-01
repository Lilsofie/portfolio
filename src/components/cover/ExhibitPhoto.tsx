import Image from "next/image";

/* The paper backing is object-constant, which is what lets `multiply` work
   in dark mode: the photograph is printed on paper in an evening gallery
   rather than dimmed by it. */
export default function ExhibitPhoto({
  src,
  alt,
  sizes,
  fit = "cover",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  return (
    <span className="exhibitphoto" data-fit={fit}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="exhibitphoto__img"
        priority={priority}
      />
      <span className="exhibitphoto__screen" aria-hidden="true" />
      <span className="exhibitphoto__wash" aria-hidden="true" />
    </span>
  );
}
