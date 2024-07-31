"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import Project from "./Project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Contents() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);

  useGSAP(() => {
    gsap.to("#header", {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#header",
        start: "top bottom",
        // end: "center center",
      },
    });
    gsap.to("#timeline1", {
      duration: 3,
      opacity: 1,
      y: 0,
      axis: "y",
      scrollTrigger: {
        trigger: "#trigger1",
        start: "10% 80%",
        // end: "60% center",
      },
      stagger: {
        amount: 1,
        ease: "power1.inOut",
      },
    });
    gsap.to("#timeline2", {
      duration: 1,
      opacity: 1,
      y: 0,
      axis: "y",
      scrollTrigger: {
        trigger: "#trigger2",
        start: "top center",
        // end: "center 30%",
      },
      stagger: {
        amount: 1,
        ease: "power1.inOut",
      },
    });
    gsap.to("#timeline3", {
      duration: 1,
      opacity: 1,
      x: 0,
      axis: "x",
      scrollTrigger: {
        trigger: "#trigger3",
        start: "10% bottom",
        // end: "center 30%",
      },
      stagger: {
        amount: 1,
        ease: "power1.inOut",
      },
    });
    gsap.to("#timeline4", {
      duration: 1,
      opacity: 1,
      x: 0,
      axis: "x",
      scrollTrigger: {
        trigger: "#trigger4",
        start: "10% bottom",
        // end: "center 30%",
      },
      stagger: {
        amount: 1,
        onComplete: () => {
          gsap.to("#timeline5", {
            delay: 1,
            duration: 1,
            opacity: 1,
            scale: 1,
          });
          gsap.to("#timeline6", {
            duration: 1,
            opacity: 1,
            scale: 1,
            y: 0,
            scrollTrigger: {
              trigger: "#trigger5",
              start: "top bottom",
              // end: "center 50%",
            },
          });
        },
      },
    });
  }, []);
  return (
    <section className="relative w-full xl:px-64 lg:px-40 px-4 bg-gradient-to-b from-[#150f1c] from-25% via-[#251833] via-60% to-[#3d205c] to-100%">
      <div className="w-full">
        <h1
          ref={scrollRef1}
          id="header"
          className="opacity-0 -translate-y-8 py-24 text-center mx-auto font-merri font-bold text-white text-3xl md:text-4xl xl:text-6xl transition "
        >
          What we are working on
        </h1>
        <div
          id="trigger1"
          ref={scrollRef2}
          className="flex flex-col xl:flex-row gap-4 p-4"
        >
          {projects.slice(0, 3).map((project) => (
            <Project
              key={project.id}
              {...project}
              id="timeline1"
              className="opacity-0 -translate-y-24"
            />
          ))}
        </div>
        <div
          id="trigger2"
          ref={scrollRef3}
          className="relative grid xl:grid-cols-2 gap-4 p-4"
        >
          {projects.slice(3, 5).map((project) => (
            <Project
              key={project.id}
              {...project}
              id="timeline2"
              className="opacity-0 translate-y-48"
            />
          ))}
        </div>

        <div
          id="trigger3"
          ref={scrollRef4}
          className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4"
        >
          {projects.slice(5, 9).map((project) => (
            <Project
              key={project.id}
              {...project}
              id="timeline3"
              className={`opacity-0 ${
                project.id === "6" || project.id === "7"
                  ? "-translate-x-96 "
                  : "translate-x-96"
              }`}
            />
          ))}
        </div>
        <div
          id="trigger4"
          ref={scrollRef5}
          className="relative grid md:grid-cols-3 gap-4 p-4"
        >
          {projects.slice(9, 12).map((project) => (
            <Project
              key={project.id}
              {...project}
              id={project.id === "11" ? "timeline5" : "timeline4"}
              className={`opacity-0 ${
                project.id === "10"
                  ? "translate-x-[29rem]"
                  : project.id === "11"
                  ? "scale-0"
                  : project.id === "12"
                  ? "-translate-x-[29rem]"
                  : ""
              }`}
            />
          ))}
        </div>
        <div id="trigger5" className="relative p-4 pb-24">
          <Project
            {...projects[12]}
            id="timeline6"
            className={`scale-125 opacity-0 translate-y-10 flex-col items-center md:flex-row`}
          />
        </div>
      </div>
    </section>
  );
}
