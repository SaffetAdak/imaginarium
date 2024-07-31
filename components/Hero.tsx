"use client";
import Image from "next/image";

import TransparentBlock from "./TransparentBlock";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Divider from "./Divider";
import { hero, smallHero } from "@/lib/assets";
import { useEffect, useState } from "react";

export default function Hero() {
  const [image, setImage] = useState(hero);
  const handleImage = () => {
    if (window.screen.width > 768) {
      setImage(hero);
    } else {
      setImage(smallHero);
    }
  };
  useEffect(() => {
    handleImage();
    window.addEventListener("resize", handleImage);
    return () => {
      window.removeEventListener("resize", handleImage);
    };
  }, []);
  return (
    <div className="relative">
      <div className="z-0 w-[100%] relative">
        <Image src={image} alt="hero section background" />
        <Divider />
      </div>
      <TransparentBlock
        icon={"image"}
        text="Welcome to Imaginarium"
        className="text-white absolute text-xs p-2 top-52 left-48 hidden lg:block"
      />
      <h1 className="absolute top-72 sm:top-24 md:top-36 lg:top-64 left-20 sm:left-24 md:left-36 lg:left-48 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
        Explore with <br /> others
      </h1>
      <div className=" absolute top-96 sm:top-40 md:top-56 lg:top-96 xl:top-[28.5rem] left-20 sm:left-24 md:left-36 lg:left-[12.5rem] w-72 sm:w-96 xl:w-[40rem]">
        <p className="font-medium text-xs sm:text-sm lg:text-lg text-white/70">
          Welcome to Imaginarium, the ultimate online destination for creators,
          writers, artists, and dreamers. Whether you&apos;re a seasoned
          novelist, a budding artist, or simply someone who loves to create,
          this is the place for you. Join our vibrant community to collaborate,
          share, and bring your imaginative projects to life.
        </p>
      </div>
      <MouseParallax isAbsolutelyPositioned>
        <TransparentBlock
          icon="start"
          text="Start your journey"
          className="top-[40rem] left-48 text-xs p-2 hidden md:block"
          glow
          clickable
        />
      </MouseParallax>
      <ScrollParallax isAbsolutelyPositioned>
        <TransparentBlock
          icon="arrows"
          text="New ideas await"
          className=" lg:top-96 xl:top-[45rem] lg:right-[10rem] xl:right-[18rem] lg:text-2xl xl:text-5xl font-semibold py-4 px-2 hidden lg:block"
        />
      </ScrollParallax>
    </div>
  );
}
