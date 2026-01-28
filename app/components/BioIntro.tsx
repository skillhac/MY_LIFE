// import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const BioIntro = () => {
//   useGSAP(() => {
//     gsap.set(".bio-intro", {
//       // marginTop: "-140vh",
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".bio-intro",
//         start: "top 10%",
//         end: "200% top",
//         scrub: true,
//       },
//     });

//     tl.to(".bio-intro #first-title", {
//       xPercent: 70,
//     }).to(
//       ".bio-intro #sec-title",
//       {
//         xPercent: 25,
//       },
//       "<",
//     );

//     const pinTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".bio-intro",
//         start: "10% top",
//         end: "200% top",
//         scrub: 1.5,
//         pin: true,
//       },
//     });
//   });

//   return (
//     <div className="bio-intro">
//       <h1 id="first-title" className="kind-words text-sand ">
//         MY
//       </h1>
//       <h1 id="sec-title" className="kind-words text-white">
//         STORY
//       </h1>
//     </div>
//   );
// };

// export default BioIntro;
