"use client";

const pressLinks = [
  {
    title: "Youngest person to skydive solo with a prosthetic leg",
    source: "THE WEEK",
    url: "https://www.theweek.in/health/cover/2024/07/27/youngest-person-to-skydive-solo-with-a-prosthetic-leg-syamkumar-s-s.html",
  },
  {
    title:
      "From suicidal thoughts to solo skydiving — the comeback India needs",
    source: "THE WEEK Health Summit 2025",
    url: "https://www.theweek.in/news/health/2025/11/15/the-week-health-summit-2025-from-suicidal-thoughts-to-solo-skydiving-the-comeback-story-india-needs-to-hear.html",
  },
  {
    title: "Sky’s the limit",
    source: "New Indian Express",
    url: "https://www.newindianexpress.com/cities/kochi/2025/Jan/17/skys-the-limit-2",
  },
  {
    title: "Some doctors changed my life",
    source: "THE WEEK",
    url: "https://www.theweek.in/health/cover/2025/11/28/the-week-health-summit-2025-some-doctors-changed-my-life-syam-kumar-ss.html",
  },
  {
    title: "Skydiving solo with a prosthetic leg",
    source: "Happiest Health",
    url: "https://www.happiesthealth.com/testimonials/skydiving-solo-with-a-prosthetic-leg",
  },
  {
    title: "Nothing will stop me from climbing Mt Everest",
    source: "New Indian Express",
    url: "https://www.newindianexpress.com/cities/kochi/2019/Jun/11/nothing-will-stop-me-from-climbing-mt-everest-1988589.html",
  },
  {
    title: "Amputee cyclist battles incredible adversities",
    source: "ETV Bharat",
    url: "https://www.etvbharat.com/english/state/kerala/amputee-cyclist-battles-incredible-adversities-to-pursue-dreams/na20201002222944667",
  },
  {
    title: "Amputee helps during Kerala floods",
    source: "Mathrubhumi",
    url: "https://englisharchives.mathrubhumi.com/news/good-news/kerala-flood-2019-shyam-kumar-amputee-helping-out-in-flood-relief-collection-centre-thomas-isaac-b7c0c24d",
  },
];

export default function PressLinks() {
  return (
    <div className="bingeable-element w-dvw h-full px-10 flex flex-col justify-center items-center text-sand">
      {/* Title */}
      <h2 className="text-customBlue font-bold font-heading tracking-[0.3em] uppercase mb-12">
        PRESS & MEDIA
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        {pressLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/20 rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
          >
            <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
              {item.source}
            </p>

            <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-customBlue transition">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-white/40 group-hover:text-white/70">
              Read article →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
