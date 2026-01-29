"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { SplitText, TextPlugin } from "gsap/all";
import { portfolioConfig } from "../config/portfolio";
import Link from "next/link";
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const downloadFile = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useGSAP(() => {
    /* ---------------- TYPING ANIMATION ---------------- */

    const words = ["Youngest Amputee", "Skydiver", "Paragliding Pilot"];

    const typingTL = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      typingTL
        .to(".typing-text", {
          text: "",
          duration: 0.4,
          ease: "none",
        })
        .to(".typing-text", {
          text: word,
          duration: word.length * 0.08,
          ease: "none",
        })
        .to({}, { duration: 1.2 });
    });

    /* ---------------- HERO SCROLL + TEXT ---------------- */

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
      type: "words, lines",
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
        { opacity: 0, scale: 0, y: 30 },
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
    <div className="main-container min-h-dvh overflow-hidden relative w-full">
      <section className="hero-section min-h-dvh relative w-full">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/skydive web.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 min-h-dvh gap-5 md:gap-7">
          {/* Heading */}
          <p
            className="hero-caption font-heading font-extrabold tracking-tighter text-white leading-tight
        text-3xl sm:text-4xl md:text-6xl xl:text-7xl
        max-w-[90%] sm:max-w-[700px] xl:max-w-[900px]"
          >
            Hi I&apos;m Syam Kumar
            <span className="block mt-2 text-[#00ff41]">World&apos;s</span>
          </p>

          {/* Typing Text */}
          <div className="h-[2rem] sm:h-[2.4rem] md:h-[2.8rem]">
            <span
              className="typing-text font-heading font-semibold tracking-wide
          text-lg sm:text-xl md:text-3xl xl:text-4xl text-[#95e1a8]"
            >
              Youngest Amputee
            </span>
          </div>

          {/* Description */}
          <p
            className="text-white/80 max-w-[90%] sm:max-w-[600px] md:max-w-[720px]
        text-base sm:text-lg leading-relaxed"
          >
            From 16 surgeries to setting a world record — support Syam Kumar in
            becoming the first person without a leg to skydive from 45,000 feet
            and fly as a wingsuit pilot.
          </p>

          {/* Stats */}
          <div
            className=" text-sm sm:text-base md:text-lg text-white/90 font-medium
        flex flex-wrap justify-center gap-x-2 gap-y-2 mt-4"
          >
            <span className="text-[#00ff41]">16 Surgeries</span>
            <span>|</span>
            <span className="text-[#FF6B6B]">100+ Solo Skydiving</span>
            <span>|</span>
            <span className="text-[#FFD700]">42000ft Wingsuit Flying</span>
            <span>|</span>
            <span className="text-[#61DBFB]">Tom Cruise Cliff Jump</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10">
            <Link href="/world-championship">
              <button
                className="bg-[#00bf30] hover:bg-[#03ae2e] text-white font-bold
            py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg
            transition-all duration-300 hover:scale-105"
              >
                FUND THE ₹3.6CR MISSION →
              </button>
            </Link>

            <Link href="/donation">
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-black
            font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg
            transition-all duration-300 hover:scale-105"
              >
                Donation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
