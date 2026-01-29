"use client";

import Image from "next/image";
import Link from "next/link";

const videoLinks = [
  "https://youtu.be/BDnuGTyGunM",
  "https://youtu.be/aPSY_si8wnw",
  "https://youtu.be/ZN7_5PWTD0M",
  "https://youtu.be/EAEtJpiSBDc",
  "https://youtu.be/pOjLj3e8psg",
  "https://youtu.be/SQGSVXbdLhI",
  "https://youtu.be/BDnuGTyGunM",
  "https://youtu.be/UWH0CeWra8A",
  "https://youtu.be/lfRD9KrbLS0",
  "https://youtu.be/y-0RH8PzlQ8",
  "https://youtu.be/Q1Y-opixwWE",
  "https://youtu.be/TDPv6BDBrzQ",
  "https://youtu.be/uYqCRPbK_UU",
  "https://youtu.be/LFXZcXAwgds",
  "https://youtu.be/h8BwVrEkfB0",
  "https://youtu.be/6j9BMbotMj8",
  "https://youtu.be/YS-Z-8CzXqc",
  "https://youtu.be/WpzuXaZBmdg",
];

const getVideoId = (url: string) => {
  const match = url.match(/youtu\.be\/([^?]+)/);
  return match ? match[1] : "";
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="flex w-full justify-center mb-10 ">
        <Link
          href={"/"}
          className="bg-white rounded-2xl px-5 py-2 font-bold hover:scale-105 transition-all duration-150 text-black"
        >
          Go Back
        </Link>
      </div>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold">Interviews</h1>
          <p className="text-white/60">
            Skydiving, training, missions & moments
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLinks.map((link, index) => {
            const id = getVideoId(link);
            const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden border border-white/10 hover:border-[#00ff41]/60 transition"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={thumbnail}
                    alt="YouTube video thumbnail"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4 bg-black/80">
                  <p className="text-sm text-white/60 group-hover:text-[#00ff41] transition">
                    Watch on YouTube →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
