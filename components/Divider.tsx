import { curveNegative } from "@/lib/assets";
import Image from "next/image";

export default function Divider() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-10">
      <Image src={curveNegative} alt="curve" layout="responsive" />
    </div>
  );
}
