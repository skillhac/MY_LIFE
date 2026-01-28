"use client";

import { useGSAP } from "@gsap/react";
import {
  DrawSVGPlugin,
  Physics2DPlugin,
  ScrambleTextPlugin,
  ScrollSmoother,
} from "gsap/all";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import IntroSection from "./sections/IntroSection";
import TrailerSection from "./sections/TrailerSection";
import ProjectsSection from "./sections/ProjectsSection";
import BingeableShowcase from "./components/BingeableShowcase";
import TimelineSection from "./sections/TimelineSection";
import TechStack from "./components/TechStack";
import TestimonialsIntro from "./components/TestimonialsIntro";
import Testimonials from "./sections/Testimonials";
import TimelineIntro from "./components/TimelineIntro";
import BioSection from "./sections/Bio";
// import BioIntro from "./components/BioIntro";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  useGSAP,
  MorphSVGPlugin,
  ScrambleTextPlugin,
  DrawSVGPlugin,
  MotionPathPlugin,
  Physics2DPlugin,
);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <IntroSection />
        <TrailerSection />
        <ProjectsSection />
        <BingeableShowcase />
        <TimelineIntro />
        <TimelineSection />
        <TestimonialsIntro />
        {/* <Testimonials /> */}
        {/* <BioIntro /> */}
        <BioSection />
        <TechStack />
      </div>
    </div>
  );
}
