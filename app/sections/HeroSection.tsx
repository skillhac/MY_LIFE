"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { portfolioConfig } from "../config/portfolio";
import Link from "next/link";

export default function HeroSection() {
  useGSAP(() => {
    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTL.to(".hero-section", {
      rotate: 7,
      scale: 0.7,
      yPercent: 30,
      ease: "power1.inOut",
    });

    const titleSplit = SplitText.create(".hero-caption", {
      type: "words ,lines",
    });

    const statsSplit = SplitText.create(".hero-stats", {
      type: "chars",
    });

    const tl = gsap.timeline();

    tl.from(titleSplit.words, {
      ease: "power1.inOut",
      stagger: 0.02,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      y: 50,
    })
      .to(
        ".hero-highlight",
        {
          opacity: 1,
          delay: 0.5,

          scrambleText: {
            text: "{original}",
            chars: "lowerCase",
          },
          duration: 7,
        },
        "-=.5",
      )
      .fromTo(
        statsSplit.chars,
        { opacity: 0, scale: 0, y: 30 }, // start small + lower
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        },
        "-=2.5",
      );
  });
  return (
    <div className="main-container h-dvh overflow-hidden relative w-dvw   ">
      <section className="hero-section h-full relative w-full ">
        {/* Video Background */}
        <div className="w-full h-dvh absolute -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full -z-10 absolute"
          >
            <source src="/skydive web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 -z-5"></div>
        </div>

        <div className="hero-content w-full h-full justify-center items-center flex flex-col translate-y-30 gap-6 pt-30 relative z-10">
          <p className="hero-caption text-4xl md:text-6xl xl:text-7xl -mt-56 w-[90%] max-w-[800px] self-center font-heading tracking-tighter font-extrabold text-white text-center leading-tight">
            {portfolioConfig.hero.tagline.split(".")[0]}.
            <span className="text-[#FF6B6B] hero-highlight opacity-1 block mt-2">
              He Made The Sky His Proving Ground.
            </span>
          </p>

          {/* Hero Stats */}
          <div className="hero-stats text-lg md:text-xl text-white/90 font-medium text-center mt-8">
            <span className="text-[#00ff41]">21 Surgeries</span> |
            <span className="text-[#FF6B6B] ml-2">101+ Jumps</span> |
            <span className="text-[#FFD700] ml-2">43K FT Target</span> |
            <span className="text-[#61DBFB] ml-2">India Para Pioneer</span>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link href={"/donation"}>
              <button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                FUND THE ₹3.6CR MISSION →
              </button>
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Watch Records
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-center max-w-[600px] mt-6 text-lg leading-relaxed">
            From hospital bed to terminal velocity. 16 surgeries before age 25.
            Kidney transplant survivor. Now targeting world records at 43,000
            feet.
          </p>
        </div>
      </section>
    </div>
  );
}
