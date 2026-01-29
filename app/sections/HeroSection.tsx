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

        <div className="hero-content w-full h-full justify-center items-center flex flex-col translate-y-30 gap-6 pt-10 md:pt-30 relative z-10">
          <p className="hero-caption text-4xl md:text-6xl xl:text-7xl -mt-56 w-[90%] max-w-[900px] self-center font-heading tracking-tighter font-extrabold text-white text-center leading-tight">
            Hi I&apos;m Syam Kumar
            <span className="block mt-2 text-[#00ff41]">World&apos;s</span>
          </p>

          {/* Typing Line */}
          <div className="h-[2.2rem] md:h-[2.6rem] xl:h-[3rem] flex items-center justify-center">
            <span className="typing-text text-2xl md:text-3xl xl:text-4xl font-heading font-semibold text-[#95e1a8] tracking-wide">
              Youngest Amputee
            </span>
          </div>

          <p className="text-white/80 text-center max-w-[720px] mt-0 md:mt-6 text-lg leading-relaxed">
            From 16 surgeries to setting a world record — support Syam Kumar in
            becoming the first person without a leg to skydive from 45,000 feet
            and fly as a wingsuit pilot.
          </p>
          {/* Hero Stats */}
          <div className=" text-lg md:text-xl text-white/90 font-medium text-center mt-8">
            <span className="text-[#00ff41]">16 Surgeries</span> |
            <span className="text-[#FF6B6B] ml-2">100+ Solo Skydiving</span> |
            <span className="text-[#FFD700] ml-2">
              {" "}
              42000ft Wingsuit Flying
            </span>{" "}
            |<span className="text-[#61DBFB] ml-2">Tom Cruise Cliff Jump</span>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 mt-0 md:mt-12 ">
            <Link href={"/world-championship"}>
              <button className="bg-[#00bf30] hover:bg-[#03ae2e] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                FUND THE ₹3.6CR MISSION →
              </button>
            </Link>

            <Link href={"/donation"}>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black  font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Donation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
