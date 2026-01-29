import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialsIntro = () => {
  useGSAP(() => {
    gsap.set(".testimonials-intro", {
      // marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-intro",
        start: "top 10%",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-intro #first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-intro #sec-title",
        {
          xPercent: 25,
        },
        "<",
      )
      .to(
        ".testimonials-intro #third-title",
        {
          xPercent: -50,
        },
        "<",
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-intro",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });
  });

  return (
    <div className="testimonials-intro">
      <h1 id="first-title" className="kind-words text-sand ">
        MORE
      </h1>
      <h1 id="sec-title" className="kind-words text-white">
        ABOUT
      </h1>
      <h1 id="third-title" className="kind-words text-customBlue">
        ME
      </h1>
    </div>
  );
};

export default TestimonialsIntro;
