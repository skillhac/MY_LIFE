import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const IntroSection = () => {
  const testimonialVideos = [
    {
      id: "WkTEp1MdOnw",
      title: "The Medical Journey: From Hospital Bed to Sky",
      description:
        "Syam's incredible medical journey through 21 surgeries, kidney transplant, and the determination that led him to the sky",
    },
    {
      id: "pV9OerNwpdk",
      title: "World Record Breakthrough: 13,000ft Solo Jump",
      description:
        "The historic moment - youngest amputee solo skydive from 13,000ft without prosthetic leg, certified by International Book of Records",
    },
    {
      id: "9JXt6NK0rZA",
      title: "Sky Beyond Limits: 43,000ft Mission Revealed",
      description:
        "The future mission targeting three world records from 43,000ft with adaptive wingsuit technology and global partnerships",
    },
  ];

  useGSAP(() => {
    const intro1 = SplitText.create(".intro-1", {
      type: "words",
    });

    gsap.to(intro1.words, {
      color: "#00ff41",
      ease: "power1.inOut",
      stagger: 0.5,
      scrollTrigger: {
        start: "top 70%",
        end: "30% center",
        trigger: ".intro-1",
        scrub: true,
      },
    });

    // Video container animations
    gsap.fromTo(
      ".video-container",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".videos-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-section",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTL.to(".intro-section", {
      rotate: 7,
      scale: 0.3,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <div
      className="intro-section w-dvw flex flex-col min-h-dvh items-center relative overflow-hidden pb-[200px]"
      style={{}}
    >
      <div className="flex flex-col items-center w-[90%] max-w-[1200px] pt-[200px] pb-[100px] justify-start">
        {/* Intro Text */}
        <h2 className="intro-1 text-4xl md:text-6xl font-heading font-bold text-white text-center mb-16 leading-tight">
          Witness The Journey: From Biological Mutiny to Sky Mastery
        </h2>

        {/* Videos Grid */}
        <div className="videos-grid grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {testimonialVideos.map((video, index) => (
            <div
              key={video.id}
              className="video-container bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              {/* Video Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center leading-tight">
                {video.title}
              </h3>

              {/* YouTube Video Embed */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-lg border-2 border-white/20">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Video Description */}
              <p className="text-white/90 text-base text-center leading-relaxed mb-4">
                {video.description}
              </p>

              {/* Watch on YouTube Link */}
              <div className="text-center">
                <a
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#05be34] hover:bg-[#05a62d] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-white/90 text-lg md:text-xl max-w-[800px] leading-relaxed">
            These testimonials showcase Syam's incredible journey from medical
            trauma to sky mastery. Each video tells a part of the story that
            proves human potential has no ceiling.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#05be34] hover:bg-[#05a62d] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Support The Mission
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300">
              View All Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
