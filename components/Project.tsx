import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageProps: {
    width: number;
    height: number;
    alt: string;
    url: StaticImageData;
  };
  className: string;
  vertical: boolean;
  ordered: boolean;
}

export default function Project({
  id,
  title,
  description,
  imageProps,
  className,
  vertical,
  ordered,
}: ProjectProps) {
  return (
    <div
      id={id}
      className={`
        relative flex bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/50 p-4 rounded-lg shadow-xl overflow-hidden transition-all
        ${className || ""}
      ${vertical ? "flex-col items-center" : ""}
      ${ordered ? "flex-row" : "flex-row-reverse"}
      ${!ordered && vertical ? "flex-col-reverse" : ""}
      `}
    >
      <div>
        <h2 className="text-white text-2xl font-bold m-2">{title}</h2>
        <p className="text-white/70 m-2 text-sm md:text-base">{description}</p>
      </div>
      <Image
        className="rounded-lg m-2"
        src={imageProps.url}
        width={imageProps.width}
        height={imageProps.height}
        alt={imageProps.alt}
      />
    </div>
  );
}
