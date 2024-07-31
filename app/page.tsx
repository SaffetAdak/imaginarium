import Contents from "@/components/Contents";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black from-10% via-violet-800 via-50% to-purple-500 to-100% min-h-screen w-full text-gray-400 overflow-hidden">
      <Hero />
      <Contents />
      <Footer />
    </div>
  );
}
