import { image, arrows, start } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

interface TransparentBlockProps {
  text: string;
  className: string;
  glow?: boolean;
  icon: string;
  clickable?: boolean;
  href?: string;
}

export default function TransparentBlock({
  text,
  className,
  glow,
  icon,
  clickable,
  href,
}: TransparentBlockProps) {
  const handleIcon = (icon: string) => {
    switch (icon) {
      case "image":
        return image;
      case "arrows":
        return arrows;
      case "start":
        return start;
    }
  };
  return (
    <>
      <button
        className={`bg-[#320b3d]/5 backdrop-blur-xl border border-gray-500/20 rounded-md text-white z-10 absolute transform font-merri font-light  ${
          glow ? "shadow-indigo-700 shadow-2xl" : "shadow-md"
        } ${!clickable && "pointer-events-none"}  ${className || ""}`}
      >
        <div
          className={`flex gap-2 ${
            icon === "arrows" ? "flex-col-reverse items-center" : ""
          } `}
        >
          <Image
            src={handleIcon(icon)}
            alt="Imaginarium"
            width={icon === "arrows" ? 50 : 10}
          />
          {text}
        </div>
      </button>
    </>
  );
}
