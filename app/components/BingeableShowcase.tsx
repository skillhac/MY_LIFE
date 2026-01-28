import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { frontEndPoints, backendData } from "../lib/bingeablePoints";
import { Download, FilePen, Star } from "lucide-react";
import { SplitText } from "gsap/all";
import LogoScroll from "./LogoScroll";
import { frontEndIcons, backendIcons } from "../lib/techStackLogos";
import { useMediaQuery } from "react-responsive";
import PressLinks from "./PressLinks";

const BingeableShowcase = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const downloadsRef = useRef<HTMLSpanElement>(null);
  const signUpRef = useRef<HTMLSpanElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const backendImageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [frontEndHoverIndex, setFrontEndHoverIndex] = useState(0);
  const [backEndHoverIndex, setBackEndHoverIndex] = useState(0);
  // const [ frontEndImage, setFrontEndImage ] = useState(frontEndPoints[0]?.image)
  // const [ backendImage, setBackendImage ] = useState(backendData[0]?.image)

  const frontEndImages = frontEndPoints.map((data) => data.image);
  const backendImages = backendData.map((data) => data.image);

  const [imageFullscreen, setImageFullscreen] = useState<null | number>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1536px)");

    // Set initial value
    setIsDesktop(mediaQuery.matches);

    // Update on change
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    if (frontEndHoverIndex === null) return;

    imageRefs.current.forEach((img, index) => {
      if (!img) return;

      if (index === frontEndHoverIndex) {
        gsap.to(img, {
          top: `${index * 40 - 60}px`, // raise up
          zIndex: 99,
          duration: 0.4,
          ease: "back.out",
        });
      } else {
        gsap.to(img, {
          top: `${index * 40}px`,
          zIndex: index,
          duration: 0.4,
          ease: "back.out",
        });
      }
    });
  }, [frontEndHoverIndex]);

  useEffect(() => {
    if (backEndHoverIndex === null) return;

    backendImageRefs.current.forEach((img, index) => {
      if (!img) return;

      if (index === backEndHoverIndex) {
        gsap.to(img, {
          top: `${index * 40 - 60}px`, // raise up
          zIndex: 99,
          duration: 0.4,
          ease: "back.out",
        });
      } else {
        gsap.to(img, {
          top: `${index * 40}px`,
          zIndex: index,
          duration: 0.4,
          ease: "back.out",
        });
      }
    });
  }, [backEndHoverIndex]);

  useGSAP(() => {
    if (!sliderRef.current || !wrapperRef.current) return;

    const downloadObj = { val: 0 };
    const signUpObj = { val: 0 };
    const ratingObj = { val: 0 };

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const bingeableTextSplit = SplitText.create(".bingeable-text", {
      type: "chars",
    });

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current, // ✅ use wrapper
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: true,
          pin: true,
        },
      });
      tl.to(sliderRef.current, {
        x: -scrollAmount, // ✅ move only the slider
        ease: "none",
      });

      gsap.to(".front-end-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#front-end",
          start: "center 80%",
          containerAnimation: tl,
        },
      });

      const frontEndSplit = SplitText.create(".front-end-para", {
        type: "words, lines",
      });
      const backendSplit = SplitText.create(".back-end-para", {
        type: "words, lines",
      });

      gsap.to(".front-end-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#front-end",
          start: "center 80%",
          containerAnimation: tl,
        },
      });

      gsap.from(frontEndSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#front-end",
          start: "center 80%",
          containerAnimation: tl,
        },
      });

      gsap.from(".back-end-images", {
        scrollTrigger: {
          trigger: ".front-end-text",
          start: "bottom center",
          end: "bottom center",
          containerAnimation: tl,
        },
        opacity: 0,
        duration: 1.2,
        y: 100,
        ease: "power1.inOut",
      });

      gsap.to(".back-end-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "center 70%",
          end: "bottom center",
          containerAnimation: tl,
          trigger: "#back-end",
        },
      });

      gsap.from(backendSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          containerAnimation: tl,
          start: "center 70%",
          end: "bottom center",
          trigger: "#back-end",
        },
      });

      gsap.to(".challenges-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "center 80%",
          end: "bottom center",
          containerAnimation: tl,
          trigger: ".challenges",
        },
      });

      const challengesSplit = SplitText.create(".challenges-para", {
        type: "words, lines",
      });

      gsap.from(challengesSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          containerAnimation: tl,
          start: "center 70%",
          // end:'bottom center',
          trigger: ".challenges",
          // toggleActions: 'play reset play reset',
        },
      });

      gsap.to("#challenge-problem-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        xPercent: -20,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-container",
          // toggleActions: 'play reset play reset',
          // markers:true
        },
      });
      gsap.to("#challenge-solution-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-container",
          // toggleActions: 'play reset play reset',
        },
      });
      gsap.to("#challenge-problem-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-2",
        },
      });
      gsap.to("#challenge-solution-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-2",
        },
      });
      gsap.to("#challenge-problem-3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        // xPercent:40,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-3",
        },
      });
      gsap.to("#challenge-solution-3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          containerAnimation: tl,
          trigger: ".challenges-3",
        },
      });

      gsap.fromTo(
        ".bingeable-logo-final",
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
          filter: "blur(10px)",
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 3,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: ".bingeable-final",
            start: "left 20%",
            containerAnimation: tl,
            toggleActions: "play reset play reset",
          },
        },
      );

      gsap.set(bingeableTextSplit.chars, {
        opacity: 0,
        yPercent: 90,
        scale: 0.6,
        rotate: -90,
      });

      gsap.to(bingeableTextSplit.chars, {
        opacity: 1,
        rotate: 0,
        scale: 1,
        yPercent: 0,
        ease: "elastic.out",
        duration: 0.6,
        delay: 0.8,
        stagger: 0.05, // <-- small value for snappy character-by-character
        scrollTrigger: {
          trigger: ".bingeable-final",
          start: "left 32%", // fire when element hits 80% of viewport
          containerAnimation: tl, // if this is inside a horizontal scroll animation
          toggleActions: "play reset play reset", // play once, don’t reset
        },
      });
    } else {
      gsap.to(".front-end-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".front-end-title",
          start: "top 80%",
          // containerAnimation:tl,
        },
      });

      const frontEndSplit = SplitText.create(".front-end-para", {
        type: "words, lines",
      });
      const backendSplit = SplitText.create(".back-end-para", {
        type: "words, lines",
      });

      gsap.from(frontEndSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".front-end-title",
          start: "top 80%",
          // containerAnimation:tl,
        },
      });

      gsap.from(".back-end-images", {
        scrollTrigger: {
          trigger: ".front-end-text",
          start: "top center",
          end: "bottom center",
          // containerAnimation:tl,
        },
        opacity: 0,
        duration: 1.2,
        y: 100,
        ease: "power1.inOut",
      });

      gsap.to(".back-end-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 70%",
          end: "bottom center",
          // containerAnimation:tl,
          trigger: ".back-end-title",
        },
      });

      gsap.from(backendSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          // containerAnimation:tl,
          start: "top 70%",
          end: "bottom center",
          trigger: ".back-end-title",
        },
      });

      const challengesSplit = SplitText.create(".challenges-para", {
        type: "words, lines",
      });

      gsap.from(challengesSplit.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        delay: 0.5,
        scrollTrigger: {
          start: "top 90%",
          // end:'bottom center',
          trigger: ".challenges",
          // toggleActions: 'play reset play reset',
        },
      });

      gsap.to("#challenge-problem-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        // xPercent:-20,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 70%",
          end: "bottom center",
          trigger: ".challenges-1",
          // toggleActions: 'play reset play reset',
          // markers:true
        },
      });
      gsap.to("#challenge-solution-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 70%",
          end: "bottom center",
          trigger: ".challenges-1",
          // toggleActions: 'play reset play reset',
        },
      });
      gsap.to("#challenge-problem-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          trigger: ".challenges-2",
          // toggleActions: 'play reset play reset',
        },
      });
      gsap.to("#challenge-solution-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          trigger: ".challenges-2",
          // toggleActions: 'play reset play reset',
        },
      });
      gsap.to("#challenge-problem-3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        opacity: 1,
        // xPercent:40,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          trigger: ".challenges-3",
          // toggleActions: 'play reset play reset',
        },
      });
      gsap.to("#challenge-solution-3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "left 70%",
          trigger: ".challenges-3",
          // toggleActions: 'play reset play reset',
        },
      });

      gsap.fromTo(
        ".bingeable-logo-final",
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
          filter: "blur(10px)",
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 3,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: ".bingeable-final",
            start: "left 20%",
            toggleActions: "play reset play reset",
          },
        },
      );
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slide-1",
          start: "center bottom",
          end: "right center",
          //   markers:true,
          scrub: true,
        },
      })
      .to(".image-1", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power1.out",
      })
      .to(
        ".slide-1-text",
        {
          opacity: 1,
          duration: 0.5,
          y: 30,
          ease: "power1.out",
        },
        "-=0.05",
      )
      .to(
        ".count-up",
        {
          opacity: 1,
          duration: 0.5,
          y: 30,
          ease: "power1.out",
        },
        "-=0.5",
      );

    ScrollTrigger.create({
      trigger: ".count-up",
      start: "top 70%", // when .count-up is near viewport bottom
      onEnter: () => {
        gsap.to(downloadObj, {
          val: 385,
          duration: 2.5,
          ease: "power1.out",
          onUpdate: () => {
            if (downloadsRef.current) {
              downloadsRef.current.textContent = Math.floor(
                downloadObj.val,
              ).toLocaleString();
            }
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(downloadObj, {
          val: 0,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            if (downloadsRef.current) {
              downloadsRef.current.textContent = Math.floor(
                downloadObj.val,
              ).toLocaleString();
            }
          },
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".count-up",
      start: "top 70%", // when .count-up is near viewport bottom
      onEnter: () => {
        gsap.to(signUpObj, {
          val: 292,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            if (signUpRef.current) {
              signUpRef.current.textContent = Math.floor(
                signUpObj.val,
              ).toLocaleString();
            }
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(signUpObj, {
          val: 0,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            if (signUpRef.current) {
              signUpRef.current.textContent = Math.floor(
                signUpObj.val,
              ).toLocaleString();
            }
          },
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".count-up",
      start: "top 70%", // when .count-up is near viewport bottom
      onEnter: () => {
        gsap.to(ratingObj, {
          val: 5.0,
          duration: 1.7,
          ease: "power1.out",
          onUpdate: () => {
            if (ratingRef.current) {
              ratingRef.current.textContent = ratingObj.val.toFixed(1);
            }
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(ratingObj, {
          val: 0,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            if (ratingRef.current) {
              ratingRef.current.textContent = ratingObj.val.toFixed(1);
            }
          },
        });
      },
    });

    // gsap.from('.front-end-images', {
    //   scrollTrigger:{
    //       start : 'center 10%',
    //       trigger:'.front-end-images'
    //   },
    //   opacity : 0,
    //   duration:1.2,
    //   y:100,
    //   ease:'power1.inOut'
    // })

    gsap.to(".challenges-title", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "top 80%",
        end: "bottom center",
        trigger: ".challenges",
        // toggleActions: 'play reset play reset',
      },
    });

    gsap.set(bingeableTextSplit.chars, {
      opacity: 0,
      yPercent: 90,
      scale: 0.6,
      rotate: -90,
    });

    gsap.to(bingeableTextSplit.chars, {
      opacity: 1,
      rotate: 0,
      scale: 1,
      yPercent: 0,
      ease: "elastic.out",
      duration: 0.6,
      delay: 0.8,
      stagger: 0.05, // <-- small value for snappy character-by-character
      scrollTrigger: {
        trigger: ".bingeable-final",
        start: "left 30%", // fire when element hits 80% of viewport
        toggleActions: "play reset play reset", // play once, don’t reset
      },
    });
  }, []);

  const handleFrontEndZoom = (index: number) => {
    if (imageFullscreen === index) {
      setImageFullscreen(null);
    } else {
      setImageFullscreen(index);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="bingeable-wrapper w-full  lg:h-dvh lg:w-max  "
    >
      <div
        ref={sliderRef}
        className="bingeable-slider flex flex-col justify-center items-center w-full h-full lg:h-dvh lg:flex-row  lg:w-max gap-20 lg:gap-3"
      >
        <div className="bingeable-element  h-full w-dvw flex flex-row items-center justify-center  overflow-hidden">
          <div className="slide-1 gap-20 flex flex-col lg:flex-row justify-center items-center  ">
            <Image
              src="/bingeable-main-4.png"
              width={1100}
              height={1400}
              alt="app-screenshots"
              className={`image-1  lg:w-[60%] `}
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            />

            <div className="lg:w-[40%]  slide-1-right flex flex-col justify-center items-center  lg:-translate-x-12  px-12  lg:px-0">
              <div className="slide-1-text flex flex-col  justify-center items-center gap-5  opacity-0 translate-y-50 ">
                <div className="flex flex-row justify-center items-center w-full  ">
                  <Image
                    src="/bingeable-logo.png"
                    width={80}
                    height={80}
                    alt="bingeable-icon"
                    className=""
                  />
                  <h3 className=" font-extrabold text-3xl  lg:text-4xl xl:text-5xl text-sand font-bingeable ">
                    SYAMKUMARSS
                  </h3>
                </div>
                <h3 className="text-lg lg:text-xl  xl:text-2xl  font-bold text-sand font-bingeable ">
                  A social media for film lovers and filmmakers.
                </h3>
                <Image
                  src="/ios-store-1.png"
                  width={160}
                  height={120}
                  alt="ios-store-icon"
                  className="-translate-y-15"
                />
              </div>
              <div className="flex flex-row gap-6 lg:gap-4 xl:gap-14 -translate-y-12 text-sand  ">
                <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                  <Download size={26} />
                  <div className="flex flex-col text-sm font-medium text-center">
                    <span
                      className="text-2xl lg:text-3xl xl:text-5xl font-bold"
                      ref={downloadsRef}
                    >
                      0
                    </span>{" "}
                    downloads
                  </div>
                </div>
                <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                  <FilePen size={26} />
                  <div className="flex flex-col   text-sm font-medium text-center">
                    <span
                      className="text-2xl lg:text-3xl xl:text-5xl font-bold"
                      ref={signUpRef}
                    >
                      0
                    </span>{" "}
                    user sign-ups
                  </div>
                </div>
                <div className="count-up flex flex-row gap-3 opacity-0 justify-center items-center">
                  <Star size={26} />
                  <div className="flex flex-col  text-sm font-medium text-center">
                    <span
                      className="text-2xl lg:text-3xl xl:text-5xl font-bold"
                      ref={ratingRef}
                    >
                      0
                    </span>{" "}
                    avg rating/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="front-end"
          className="bingeable-element  w-dvw h-full flex flex-col justify-start 2xl:items-center 2xl:justify-center gap-0 text-sand  pt-20 relative "
        >
          <div className="front-end-title-container flex flex-col justify-center items-center  gap-3 ">
            <h2
              className="front-end-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase"
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            >
              About me
            </h2>
            {/* <p className="front-end-para font-heading   px-8 lg:px-0   text-sand lg:w-[800px]  xl:w-[1100px] font-bold text-2xl pt-2  ">
              All about the UI and client logic. Take a closer look at how I
              approached the front end with real production code snippets.
            </p>
            <LogoScroll data={frontEndIcons} className="py-3 px-10 " /> */}
          </div>

          {isDesktop ? (
            <div
              style={{ zIndex: 20 }}
              className="2xl:flex   2xl:flex-row  gap-10 pt-10 w-full "
            >
              <div className="front-end-images lg:w-[700px] lg:h-[700px]   lg:relative">
                {frontEndImages.map((image, index) => (
                  <Image
                    src={image}
                    ref={(el) => {
                      if (el) imageRefs.current[index] = el;
                    }}
                    width={900}
                    height={700}
                    key={index}
                    alt="code-snippet"
                    className={`front-end-image-${index}  left-0   lg:absolute `}
                    style={{
                      top: `${index * 40}px`,
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                    }}
                  />
                ))}
              </div>
              <div className=" front-end-text  lg:flex flex-col justify-start items-center w-[900px] gap-3">
                {frontEndPoints.map((data, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 cursor-pointer   "
                    style={{
                      backgroundColor:
                        frontEndHoverIndex === index ? "#2e54d1" : undefined,
                      opacity: frontEndHoverIndex === index ? 1 : 0.5,
                    }}
                    onMouseEnter={() => {
                      setFrontEndHoverIndex(index);
                    }}
                  >
                    <h3 className=" font-black text-lg font-heading w-full uppercase  ">
                      {data.content.title}
                    </h3>
                    <p
                      className={`font-heading front-end-body  font-semibold `}
                    >
                      {data.content.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{ zIndex: 50 }}
              className="flex flex-col  justify-center items-start h-full  w-full  "
            >
              <div className="flex flex-wrap gap-3 px-10 w-full relative  ">
                {frontEndPoints.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setFrontEndHoverIndex(index);
                    }}
                  >
                    <p
                      className={` ${frontEndHoverIndex === index ? "bg-white text-customBlack" : " bg-none text-white"} cursor-pointer border-2 rounded-full border-white   px-4 py-1 text-left text-xs font-heading  font-semibold   `}
                    >
                      {data.content.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="font-heading text-sand px-12 pt-6 font-medium ">
                {frontEndPoints[frontEndHoverIndex].content.body}
              </div>
              <div
                onClick={() => handleFrontEndZoom(frontEndHoverIndex)}
                className={` w-full mt-2   ${imageFullscreen === frontEndHoverIndex ? " h-dvh top-0 left-0 absolute cursor-zoom-out overflow-scroll" : " h-[600px] cursor-zoom-in overflow-hidden "}  `}
              >
                {
                  <Image
                    src={frontEndImages[frontEndHoverIndex]}
                    width={500}
                    height={900}
                    alt="code-snippet"
                    className={`front-end-image-${frontEndHoverIndex}   w-full   `}
                  />
                }
              </div>
            </div>
          )}
        </div>
        <div
          id="back-end"
          className="bingeable-element back-end w-dvw h-full flex flex-col justify-start 2xl:items-center 2xl:justify-center gap-0 text-sand  pt-20 relative"
        >
          <div className="back-end-title-container w-full flex flex-col justify-center items-center gap-3">
            <h2
              className=" font-bold text-customBlue font-heading tracking-[0.3em] back-end-title  uppercase "
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            >
              About Me
            </h2>
            {/* <p className="font-heading back-end-para    px-8 lg:px-0   text-sand lg:w-[800px]  xl:w-[1100px] font-bold text-2xl pt-2  ">
              A robust backend is needed to support the front end. Here are
              snippets from my production server code.
            </p>

            <LogoScroll data={backendIcons} className="py-3 px-10" /> */}
          </div>

          {isDesktop ? (
            <div className="hidden 2xl:flex 2xl:flex-row  gap-10 pt-10 z-1 relative">
              <div className="back-end-images w-[700px] h-[700px]  relative   ">
                {backendImages.map((image, index) => (
                  <Image
                    src={image}
                    ref={(el) => {
                      if (el) backendImageRefs.current[index] = el;
                    }}
                    width={900}
                    height={700}
                    key={index}
                    alt="code-snippet"
                    className={`back-end-image-${index} absolute left-0 `}
                    style={{
                      top: `${index * 40}px`,
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                    }}
                  />
                ))}
              </div>

              <div className="backend-text flex flex-col justify-start items-center w-[900px] gap-3  ">
                {backendData.map((data, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 cursor-pointer   "
                    style={{
                      backgroundColor:
                        backEndHoverIndex === index ? "#2e54d1" : undefined,
                      opacity: backEndHoverIndex === index ? 1 : 0.5,
                    }}
                    onMouseEnter={() => {
                      setBackEndHoverIndex(index);
                    }}
                  >
                    <h3 className="  font-heading font-black text-lg uppercase ">
                      {data.content.title}
                    </h3>
                    <p className="font-heading  font-semibold">
                      {data.content.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{ zIndex: 50 }}
              className="flex flex-col  justify-center items-start h-full  w-full  "
            >
              <div className="flex flex-wrap gap-3 px-10 w-full relative ">
                {backendData.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      pointerEvents: "auto",
                      cursor: "pointer",
                      zIndex: 50,
                    }}
                    onClick={() => {
                      console.log("hello");
                      setBackEndHoverIndex(index);
                    }}
                  >
                    <p
                      className={` ${backEndHoverIndex === index ? "bg-white text-customBlack" : " bg-none text-white"} text-xs text-left cursor-pointer border-2 rounded-full border-white   px-4 font-heading  py-1 font-semibold   `}
                    >
                      {data.content.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="font-heading text-sand px-12 pt-6 font-medium ">
                {backendData[backEndHoverIndex].content.body}
              </div>
              <div
                onClick={() => handleFrontEndZoom(backEndHoverIndex)}
                className={` w-full mt-2   ${imageFullscreen === backEndHoverIndex ? " h-dvh top-0 left-0 absolute cursor-zoom-out overflow-scroll" : " h-[600px] cursor-zoom-in overflow-hidden "}  `}
              >
                {
                  <Image
                    src={backendImages[backEndHoverIndex]}
                    width={500}
                    height={900}
                    alt="code-snippet"
                    className={`front-end-image-${backEndHoverIndex}   w-full   `}
                  />
                }
              </div>
            </div>
          )}
        </div>

        <div className="bingeable-element challenges h-full pt-10 w-dvw px-8 ">
          <div className="challenges-container flex flex-col justify-center items-center  gap-3 w-full">
            <div className="challenges-text-container flex flex-col justify-center items-center gap-3">
              <h2
                className="challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase"
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              >
                MISSIONS
              </h2>
              {/* <p className="challenges-para font-heading w-full lg:w-[1000px] font-bold text-2xl pt-2 text-sand text-left px-8 lg:px-0 ">
                Here were some of my biggest challenges and takeaways from
                building this app.
              </p> */}
            </div>
            <div className="challenges-1 relative justify-center items-center pt-20 ">
              <h3
                id="challenge-problem-1"
                className="challenge-problem "
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              >
                MISSION NO 1 :
              </h3>
              <p
                id="challenge-solution-1"
                className="challenge-solution top-95 overflow-auto h-[50vh]"
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)" }}
              >
                An adaptive high-risk athlete and aerospace mission aspirant
                pursuing one of the most technically and humanly challenging
                feats in modern wingsuit history: enabling controlled
                high-altitude wingsuit flight with a single leg in a
                fundamentally asymmetrical body. Conventional wingsuit flight
                depends on perfect bilateral leg symmetry, precise weight
                distribution, and aerodynamic balance my body does not naturally
                possess due to limb loss and severe structural scoliosis making
                this mission widely considered impossible by existing standards;
                rather than accept that limit, I am engineering solutions where
                anatomy ends, beginning with the development of a
                hand-controlled mechanical leg system designed to dynamically
                balance mass, stabilize yaw and roll, and restore controlled
                glide authority during wingsuit flight. The ultimate objective
                is a 42,000-foot high altitude wingsuit jump, a regime
                comparable to stratospheric aerospace operations, where the
                absence of oxygen, extreme hypoxia, and ambient temperatures
                between –70°C and –90°C impose life critical constraints,
                necessitating redundant supplemental oxygen systems, advanced
                physiological monitoring, and a custom electrically powered
                thermal suit capable of sustaining core body temperature in
                near-space conditions. This mission requires a minimum of three
                years of structured preparation, including hypoxia and altitude
                conditioning, intensive physical and neuromuscular training, and
                aerodynamic validation through advanced wind-tunnel testing in
                Sweden, combined with progressive wingsuit jump testing to
                validate safety margins and system reliability. Compounding the
                challenge is my severe lower structural scoliosis, which makes
                hard landings a credible paralysis risk; in response, I am
                developing and flight-testing a proprietary protective landing
                and impact-mitigation system integrated into the suit
                architecture, treating survivability as an engineering problem
                rather than a gamble. This project exists at the intersection of
                human resilience, adaptive aerospace engineering, and
                extreme-environment physiology, and its success would redefine
                inclusion not as accommodation, but as innovation demonstrating
                that bodies traditionally excluded from aerospace and
                high-performance flight can become platforms for technological
                advancement rather than limitations. I seek collaboration with
                aerospace institutions, research organizations, and engineering
                partners including ISRO, NASA, and private innovators to
                co-develop life-support systems, thermal regulation
                technologies, adaptive control mechanisms, and safety
                architectures that extend beyond this mission into broader
                applications for aviation, spaceflight, and human performance in
                extreme environments. This is not an attempt to defy risk, but
                to systematically understand, engineer, and manage it
                transforming a body shaped by adversity into a testbed for
                progress, and proving that the future of flight is not defined
                by physical symmetry, but by human ingenuity, discipline, and
                the courage to redesign what is considered possible.
              </p>
            </div>
          </div>
        </div>
        <div className="challenges-2 w-dvw px-8 h-full ">
          <h2 className="challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase pt-10 w-full hidden lg:flex ">
            MISSIONs
          </h2>
          <div className="challenges-2 relative justify-center items-center  lg:pt-20">
            <h3
              id="challenge-problem-2"
              className="challenge-problem "
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            >
              MISSION NO 2 :
            </h3>
            <p
              id="challenge-solution-2"
              className="challenge-solution top-95 overflow-auto h-[50vh]"
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)" }}
            >
              The development and real-world deployment of a next-generation
              adaptive right-leg system engineered specifically for high-impact
              motocross landings, enabling controlled aerial jumps and safe
              ground absorption for an athlete with a single biological leg and
              severe structural spinal vulnerability. Drawing technical
              inspiration from advanced adaptBioDaptility systems such as the
              BioDapt Moto Knee 2 while extending far beyond existing prosthetic
              frameworks this project focuses on designing a custom
              impact-mitigating, energy-dissipating, and spine-protective
              mechanical leg capable of absorbing extreme vertical and lateral
              forces generated during motocross jumps and uneven landings.
              Unlike conventional prosthetics optimized for walking or light
              sport, this system is being engineered as an active safety
              architecture, integrating progressive shock absorption, multi-axis
              articulation, controlled rebound damping, and spinal
              load-distribution pathways to reduce peak force transfer to the
              pelvis and vertebral column, where injury or paralysis risk is
              critical. The leg design phase is complete, and the mission now
              advances toward fabrication, testing, and validation through
              staged jump simulations, culminating in a live-action cinematic
              motocross jump sequence planned in Norway conceptually inspired by
              the iconic high-risk practical stunts popularized in the Mission:
              Impossible franchise and performers such as Tom Cruise, but
              executed with real physics, real risk management, and real
              adaptive engineering. This jump is not a spectacle for shock
              value; it is a documented proof-of-concept demonstrating how
              intelligent mechanical design can convert vulnerability into
              controlled performance, captured as a pivotal scene for a Netflix
              documentary intended to reach a global audience and reframe
              disability as a frontier for innovation rather than limitation.
              The project’s broader objective extends beyond personal
              achievement: to establish a scalable blueprint for adaptive
              impact-sport prosthetics that can reduce spinal injuries, expand
              access to motocross and action sports for amputees, and influence
              safety design in extreme sports equipment worldwide. Strategic
              partnerships are sought with biomechanical engineers, materials
              scientists, motorsport safety specialists, and medical advisors to
              refine structural integrity, validate load thresholds, and ensure
              ethical risk management, while media collaboration ensures the
              mission’s story educates as much as it inspires. Mission No. 2
              stands at the convergence of engineering, human resilience, and
              storytelling where a single, precisely designed leg becomes both a
              life-saving system and a symbol of what is possible when adaptive
              technology is pushed beyond accommodation into performance,
              protection, and purpose.
            </p>
          </div>
        </div>
        <div className="challenges-3 w-dvw px-8 h-full">
          {/* // <h2 className="challenges-title text-customBlue font-bold font-heading tracking-[0.3em] uppercase pt-10 hidden lg:flex">
          //   Challenges
          // </h2>

          // <div className="challenges-3 relative justify-center items-center lg:pt-20">
          //   <h3
          //     id="challenge-problem-3"
          //     className="challenge-problem "
          //     style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          //   >
          //     Challenge #3: Learning about System Design.
          //   </h3>
          //   <p
          //     id="challenge-solution-3"
          //     className="challenge-solution top-115"
          //     style={{ clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)" }}
          //   >
          //     Approach: Without much prior knowledge in system design, I wanted
          //     to set myself up in the case the app scales in the future. I
          //     learned about the 3 pillars in system design: Scalability,
          //     Reliability, and Maintainability. I've heard you can't have all
          //     three and should focus on two of them.
          //     <br />
          //     <br />
          //     To improve scalability and reliability, I've set up my app like
          //     so:
          //     <br />
          //     <br />- when a user makes a request, this first go throughs nginx,
          //     which reverse proxies the request mainly to enhance backend
          //     security.
          //     <br />
          //     <br />- This then go through a load balancer which I configured in
          //     AWS, which will distribute the traffic to the most available
          //     server instance. This works hand in hand with the auto scaling of
          //     my server, which will spin up new instances based on the usage and
          //     traffic.
          //     <br />
          //     <br />- I have redis setup for frequently requested data as a in
          //     memory store.
          //     <br />
          //     <br />- As for the DB, if the app really scales, I'll look into
          //     vertical scaling with partitioning/sharding.{" "}
          //   </p>
          // </div> */}
          <PressLinks />
        </div>

        <div className="bingeable-element bingeable-final justify-center items-center  relative w-dvw  ">
          <div className="flex flex-col justify-center items-center w-full h-full relative">
            <Image
              src="/bingeable-logo.png"
              width={100}
              height={100}
              alt="bingeable-icon"
              className="bingeable-logo-final "
            />
            <h3 className="bingeable-text font-extrabold text-3xl lg:text-5xl text-sand font-bingeable  ">
              SYAMKUMARSS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingeableShowcase;
