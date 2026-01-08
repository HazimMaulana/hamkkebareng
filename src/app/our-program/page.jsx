 "use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import svgPaths from "@/imports/svg-aryojtau6r";

const FALLBACK_STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5z";

const STAR_POSITIONS = [
  { left: 638, top: 80 },
  { left: 437, top: 320 },
  { left: 67, top: 640 },
  { left: 1028, top: 760 },
  { left: 1185, top: 980 },
  { left: 805, top: 420 },
  { left: 62, top: 380 },
  { left: 50, top: 120 },
  { left: 1238, top: 420 },
];

const CIRCLE_POSITIONS = [
  { left: 53, top: 520 },
  { left: 153, top: 880 },
  { left: 350, top: 690 },
  { left: 1023, top: 360 },
  { left: 1188, top: 720 },
  { left: 234, top: 280 },
];

const SNOW_POSITIONS = [
  { left: 120, top: 180, size: 120, opacity: 0.55, blur: false },
  { left: 420, top: 60, size: 160, opacity: 0.4, blur: true },
  { left: 1220, top: 620, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.35, blur: true },
  { left: 1260, top: 160, size: 110, opacity: 0.6, blur: false },
];

const PROGRAMS = [
  {
    title: "BASIC KOREAN",
    imageSrc: "/ourProgramAssets/image 1.png",
    description: "Learn Hangul and everyday beginner conversations.",
    mascotSrc: "/assets/pinkoBasicKorean.png",
    mascotClassName: "top-1/2 -translate-y-1/2 -right-12 w-32 h-auto rotate-12",
    href: "/our-program/basic-korean",
  },
  {
    title: "EPS TOPIK",
    imageSrc: "/ourProgramAssets/image 3.png",
    description: "Focused EPS-TOPIK exam prep with targeted practice.",
    mascotSrc: "/assets/pinkoEPS.png",
    mascotClassName: "top-1/2 -translate-y-1/2 -left-10 w-38 h-auto",
    href: "/our-program/eps-topik",
  },
  {
    title: "KOREAN FOR TOURISM",
    imageSrc: "/ourProgramAssets/image 4.png",
    description: "Practical Korean for travel and tourism services.",
    titleClassName: "w-[300px]",
    titleTextClassName: "lg:text-[22px]",
    mascotSrc: "/assets/pinkoKoreanForTourism.png",
    mascotClassName: "top-1/2 -translate-y-1/2 -right-12 w-40 h-auto rotate-12",
    href: "/our-program/korean-for-tourism",
  },
  {
    title: "KOREAN FOR BUSINESS",
    imageSrc: "/ourProgramAssets/kfb.png",
    description: "Professional Korean for workplace and business communication.",
    titleClassName: "w-[310px]",
    titleTextClassName: "lg:text-[22px]",
    mascotSrc: "/assets/pinkoKoreanForBusiness.png",
    mascotClassName: "top-1/2 -translate-y-1/2 -left-10 w-32 h-auto",
    href: "/our-program/korean-for-business",
  },
  {
    title: "DIGITAL BUSINESS",
    imageSrc: "/ourProgramAssets/image 5.png",
    description: "Build and grow a business through digital marketing strategies.",
    titleClassName: "w-[250px]",
    titleTextClassName: "lg:text-[22px]",
    mascotSrc: "/assets/pinkoDigital Business.png",
    mascotClassName: "top-1/2 -translate-y-1/2 -right-12 w-40 h-auto rotate-12",
    href: "/our-program/digital-business",
  },
];

function SectionTitlePill({ children, gradient = "right" }) {
  const titleGradient =
    gradient === "right"
      ? "bg-gradient-to-r from-[#6f96d1] to-[#091f5b]"
      : "bg-gradient-to-l from-[#091f5b] to-[#6f96d1]";

  return (
    <div className="flex justify-center">
      <div className="bg-[#d0e4ff] px-8 lg:px-12 py-4 rounded-[42px] inline-block shadow-[0px_0px_15px_5px_rgba(9,31,91,0.05)]">
        <h2
          className={`text-transparent bg-clip-text ${titleGradient} font-['Inter'] font-bold text-[24px] sm:text-[28px] lg:text-[35px] tracking-[-0.875px] text-center`}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}

function ProgramCard({
  href,
  title,
  imageSrc,
  description,
  className = "",
  titleClassName = "",
  titleTextClassName = "",
  mascotSrc,
  mascotClassName = "",
}) {
  const content = (
    <>
      <div
        className={`bg-[#d0e4ff] w-[232px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center -mb-6 relative z-10 ${titleClassName}`}
      >
        <p
          className={`font-['Inter'] font-bold text-[#091f5b] text-[20px] lg:text-[26px] tracking-[-0.625px] text-center ${titleTextClassName}`}
        >
          {title}
        </p>
      </div>

      <div className="bg-[#d0e4ff] w-[340px] h-[270px] rounded-[26px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] px-4 pb-4 pt-9 cursor-pointer hover:scale-105 transition-transform flex flex-col items-center">
        <div className="w-[303px] h-[165px] rounded-[14px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] overflow-hidden">
          <img src={imageSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        {description && (
          <p className="mt-4 font-['Inter'] font-light text-[13px] leading-[16px] text-center tracking-[-0.025em] text-[#091F5B] px-2">
            {description}
          </p>
        )}
      </div>

      {mascotSrc && (
        <img
          src={mascotSrc}
          alt="Program Mascot"
          className={`absolute z-20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer ${mascotClassName}`}
          loading="lazy"
        />
      )}
    </>
  );

  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      {href ? (
        <Link
          href={href}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-[26px] flex flex-col items-center"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default function OurProgramPage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden">
      <SnowEffect />

      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden z-0">
        {STAR_POSITIONS.map((pos, i) => (
          <div key={`star-${i}`} className="absolute size-[24px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={starPath} fill="white" opacity="0.8" />
            </svg>
          </div>
        ))}

        {CIRCLE_POSITIONS.map((pos, i) => (
          <div key={`circle-${i}`} className="absolute size-[9px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="white" r="4.5" opacity="0.8" />
            </svg>
          </div>
        ))}

        {SNOW_POSITIONS.map((snow, i) => (
          <img
            key={`snow-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${snow.blur ? "blur-sm" : ""}`}
            style={{
              left: snow.left,
              top: snow.top,
              width: snow.size,
              height: snow.size,
              opacity: snow.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <Navbar />

        <main className="w-full max-w-[1300px] mx-auto px-6 lg:px-16 py-20">
          <section className="mt-10 lg:mt-16">
            <h1
              className="font-['AGPX',sans-serif] text-white text-[50px] lg:text-[85px] leading-[1.1] tracking-[-2.125px] text-center"
              style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" }}
            >
              Our Program
            </h1>
            <div className="mt-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {PROGRAMS.slice(0, 3).map((program) => (
                  <ProgramCard key={program.title} href={program.href} {...program} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 lg:mx-32 lg:pt-4 justify-items-center">
                {PROGRAMS.slice(3).map((program) => (
                  <ProgramCard key={program.title} href={program.href} {...program} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
