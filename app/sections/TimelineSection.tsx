import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import Image from "next/image";

const TimelineSection = () => {
  //     const [isDesktop, setIsDesktop] = useState(false)

  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia("(min-width: 1536px)");

  //     // Set initial value
  //     setIsDesktop(mediaQuery.matches);

  //     // Update on change
  //     const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
  //     mediaQuery.addEventListener("change", handler);

  //     // Cleanup
  //     return () => {
  //       mediaQuery.removeEventListener("change", handler);
  //     };
  //   }, []);

  useGSAP(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01, #text-2011 ", {}, 0.04)
      .to(".ball03, .text02, #text-2011-2 , #uoft", {}, 0.07)
      .to(".ball04, .text03, #text-2014", {}, 0.13)
      .to(".ball05, .text04, #text-2015", {}, 0.17)
      .to(".ball06, .text05, #text-2016, #chair, #haircut", {}, 0.2)
      .to(
        ".ball07, #text-barbering-great, #competition, #pompodour, #combover",
        {},
        0.23,
      )
      .to(".ball08, .text06, #text-2023", {}, 0.42)
      .to(
        ".ball09, .text07, #text-2024, #camera-op, #still-1, #still-2, #still-3",
        {},
        0.54,
      )
      .to(".ball10, .text08, #text-2025", {}, 0.62);

    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg-stage",
          scrub: true,
          start: "top 10% ",
          end: "bottom top",
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0,
      )
      .add(pulses, 0);
  }, []);

  return (
    <div className="timeline  w-dvw relative pb-40 h-full  ">
      <Image
        id="uoft"
        src="/syam with his mother_.jpg"
        width={150}
        height={150}
        alt="syam-with-mother"
        className="timeline-pic hidden lg:block w-[50px] lg:w-[100px] 2xl:w-[150px] absolute top-[30%] left-[79%] md:top-[31%] md:left-[85%] lg:left-[73%] xl:top-[30%] xl:left-[70%] 2xl:top-[15%] 2xl:left-[68%] opacity-0 rotate-6"
      />

      <Image
        id="haircut"
        src="/running.jpg"
        width={120}
        height={120}
        alt="syam-childhood"
        className="timeline-pic hidden lg:block w-[40px] lg:w-[90px] 2xl:w-[120px] absolute top-[47%] left-[80%] md:top-[47.5%] md:left-[85%] lg:top-[49%] lg:left-[85%] xl:left-[78%] 2xl:left-[75%] opacity-0 rotate-3"
      />

      <Image
        id="camera-op"
        src="/Vanitha magazine picture_.jpg"
        width={120}
        height={120}
        alt="media-feature"
        className="timeline-pic hidden lg:block w-[45px] md:w-[70px] lg:w-[200px] absolute top-[65%] left-[15%] 2xl:top-[72%] 2xl:left-[66%] opacity-0 -rotate-5"
      />

      {/* <Image
        id="still-1"
        src="/Vanitha magazine picture_.jpg"
        width={180}
        height={180}
        alt="media-still-1"
        className="timeline-pic hidden lg:block w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px] absolute top-[70%] left-[29%] md:top-[70%] 2xl:top-[80%] 2xl:left-[35%] opacity-0 rotate-6"
      /> */}

      {/* <Image
        id="still-2"
        src="/Vanitha magazine picture_.jpg"
        width={180}
        height={180}
        alt="media-still-2"
        className="timeline-pic hidden lg:block md:w-[120px] lg:w-[140px] xl:w-[180px] absolute top-[70%] left-[45%] md:top-[70%] md:left-[40%] 2xl:top-[79%] 2xl:left-[50%] opacity-0 rotate-6"
      /> */}
      {/* 
      <Image
        id="still-3"
        src="/Vanitha magazine picture_.jpg"
        width={250}
        height={250}
        alt="media-still-3"
        className="timeline-pic hidden lg:block w-[90px] md:w-[140px] lg:w-[200px] xl:w-[250px] absolute top-[79%] left-[60%] md:top-[78%] md:left-[65%] 2xl:top-[88%] 2xl:left-[70%] opacity-0 -rotate-3"
      /> */}

      <svg
        id="svg-stage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 2526.3"
        className="scale-50 2xl:scale-100 origin-left"
      >
        <path
          className="theLine"
          d="M-5,0c303.3,153.3,405,303.3,305,450s-156.7,246.7-170,300c-20,66.7,36.7,150,170,250,133.3,100,117.4,455-115.9,488.4-88.3,15.5,121,58.8,158.6,80.1s-116.1,19.6-143.8,52.3,90.2,8.2,114.6,32.7-104.8,31.1-77,63.8c27.8,32.7,196.2-1.6,241.9,93.2s-336.7,14-294.2,94.8c45.8,87,287.7,148.8,243.6,299.1S-12.1,2506.7-12.1,2506.7"
          fill="none"
          stroke="#000"
          strokeWidth="10"
        />
        <circle className="ball ball01" cx="50" cy="100" r="20" />
        <circle className="ball ball02" cx="278" cy="201" r="20" />
        <circle className="ball ball03" cx="327" cy="401" r="20" />
        <circle className="ball ball04" cx="130.3" cy="799" r="20" />
        <circle className="ball ball05" cx="303.3" cy="1000" r="20" />
        <circle className="ball ball06" cx="384" cy="1192.2" r="20" />
        <circle className="ball ball07" cx="333.4" cy="1392.2" r="20" />
        <circle className="ball ball08" cx="468.1" cy="1792.2" r="20" />
        <circle className="ball ball09" cx="281.8" cy="1992.2" r="20" />
        <circle className="ball ball10" cx="430" cy="2191.1" r="20" />
        <text className="text01" x="50" y="194.11">
          2011
        </text>
        <text className="text02" x="50" y="394.11">
          2011
        </text>
        <text className="text03" x="50" y="724.11">
          2014
        </text>
        <text className="text04" x="50" y="994.11">
          2015
        </text>
        <text className="text05" x="50" y="1186.31">
          2016
        </text>
        <text className="text06" x="50" y="1786.31">
          2023
        </text>
        <text className="text07" x="50" y="1986.31">
          2024
        </text>
        <text className="text08" x="50" y="2186.81">
          2025
        </text>
      </svg>
      <div
        id="text-2011"
        className="timeline-text   absolute top-[26%] left-[52%] md:top-[27%] md:left-[40%] lg:left-[40%] xl:top-[27%] xl:left-[30%] 2xl:top-[7%] 2xl:left-[35%]"
      >
        <p>
          Born with spina bifida, congenital scoliosis, neurogenic bladder,
          three kidneys, spinal risks, and a severely underdeveloped right leg.
          Multiple surgeries began within days of birth.
        </p>
      </div>

      <div
        id="text-2011-2"
        className="timeline-text absolute top-[32%] left-[48%] md:top-[31%] md:left-[42%] lg:left-[33%] xl:top-[31%] xl:left-[30%] 2xl:top-[15%] 2xl:left-[37%]"
      >
        <p>
          Early childhood marked by repeated surgeries, catheter dependency,
          chronic infections, and learning pain before language.
        </p>
      </div>

      <div
        id="text-2014"
        className="timeline-text absolute top-[37%] left-[38%] md:top-[38%] md:left-[30%] lg:left-[23%] xl:top-[38%] xl:left-[25%] 2xl:top-[29%] 2xl:left-[22%]"
      >
        <p>
          Trained in clean intermittent catheterisation. Social isolation and
          medical monitoring became daily realities.
        </p>
      </div>

      <div
        id="text-2015"
        className="timeline-text absolute top-[42%] left-[50%] md:top-[42%] md:left-[42%] lg:left-[33%] lg:top-[42%] xl:top-[42%] xl:left-[28%] 2xl:top-[36%] 2xl:left-[31%]"
      >
        <p>
          At age eight, chose right-leg amputation — a strategic decision for
          mobility, independence, and survival.
        </p>
      </div>

      <div
        id="text-2016"
        className="timeline-text absolute top-[46%] left-[50%] md:top-[45%] md:left-[46%] lg:left-[35%] lg:top-[45%] xl:top-[45%] xl:left-[32%] 2xl:top-[44%] 2xl:left-[40%]"
      >
        <p>
          Continued surgeries, learned to walk and run on one leg, while facing
          severe bullying and deep emotional trauma.
        </p>
      </div>

      <div
        id="text-barbering-great"
        className="timeline-text absolute top-[50%] left-[43%] md:top-[49%]  md:left-[40%] lg:left-[35%] lg:top-[48%] xl:top-[49%] xl:left-[28%] 2xl:top-[50%] 2xl:left-[40%]"
      >
        <p>
          Kidney function declined steadily. Awareness of mortality grew,
          alongside quiet physical endurance and inner resolve.
        </p>
      </div>

      <div
        id="text-2023"
        className="timeline-text absolute top-[56%] left-[57%] md:top-[56%]  md:left-[48%] lg:left-[35%] lg:top-[53%] xl:top-[56%] xl:left-[32%] 2xl:top-[67%] 2xl:left-[40%]"
      >
        <p>
          Kidney function dropped below 25%. Major surgeries followed, living
          daily with the certainty of eventual renal failure.
        </p>
      </div>

      <div
        id="text-2024"
        className="timeline-text absolute top-[62%] left-[57%] md:top-[62%] md:left-[46%] 2xl:top-[73%] 2xl:left-[35%]"
      >
        <p>
          Discovered cycling as liberation. Completed long endurance rides
          despite physical breakdowns, forming an endurance identity.
        </p>
      </div>

      <div
        id="text-2025"
        className="timeline-text absolute  top-[68%] left-[57%] xl:top-[80%] 2xl:top-[91%] 2xl:left-[35%]"
      >
        <p>
          Renal failure led to dialysis and a high-risk transplant from mother.
          Survival marked a turning point.
        </p>
        <p>
          Post-recovery: skydiving, paragliding, scuba diving, filmmaking, and
          100+ jumps — evolving into an adaptive systems thinker.
        </p>
      </div>
    </div>
  );
};

export default TimelineSection;
