import Link from "next/link";

interface NavButtonProps {
  text: string;
  hasBg: boolean;
  className: string;
  href: string;
}

export default function NavButton({
  text,
  hasBg,
  className,
  href,
}: NavButtonProps) {
  return (
    <div className="relative">
      <button
        className={`${className || ""} relative lg:w-28 h-9 transition-colors 
         hover:border-2 rounded-lg hover:border-yellow-100 text-gray-500/90 hover:text-gray-100/80 items-center lg:mx-8 md:mx-6 sm:mx-4  px-4 ${
           hasBg ? " border" : ""
         }`}
      >
        <Link href={href}>{text}</Link>
      </button>
    </div>
  );
}
