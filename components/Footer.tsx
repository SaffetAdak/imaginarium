"use client";
import { socials } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const scrollRef = useRef(null);
  useGSAP(() => {
    gsap.to("#footer", {
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: "#footer",
        start: "50% bottom",
        end: "bottom bottom",
      },
      onComplete: () => {
        gsap.to("#stagger", {
          duration: 2,
          scale: 1,
          opacity: 1,
          rotate: 1080,
          borderRadius: "100%",
          x: 0,

          stagger: {
            amount: 2,
            axis: "x",
            from: "start",
            ease: "bounce.out",
          },
        });
      },
    });
  });

  return (
    <div className="bg-[#3d205c] w-full">
      <div
        ref={scrollRef}
        id="footer"
        className="flex md:block xl:px-64 lg:px-40 px-4 py-12 border-t opacity-0"
      >
        <div className="flex justify-between flex-col md:flex-row mx-auto p-4 overflow-hidden">
          <p className="text-center mb-4 md:mb-0">
            @{new Date().getFullYear()} All rights reserved.
          </p>
          <ul className="flex gap-5 flex-wrap">
            {socials.map((link) => (
              <Link
                id="stagger"
                key={link.id}
                href={link.url}
                className="flex items-center justify-center w-10 h-10 bg-gray-100/10 shadow-lg transition hover:bg-gray-100/20 translate-x-24 scale-0 opacity-0"
              >
                <Image src={link.iconUrl} alt="socials" />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
