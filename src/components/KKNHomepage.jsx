import React from "react";
import Link from "next/link";
import { SnowEffect } from "./SnowEffect";
import { Navbar } from "./Navbar";
import svgPaths from "../imports/svg-aryojtau6r";

const FALLBACK_STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5z";

// NOTE: Dekorasi ini tidak memengaruhi flow karena ditempatkan di wrapper absolute + overflow-hidden
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
  { left: 120, bottom: 180, size: 120, opacity: 0.55, blur: false },
  { left: 420, bottom: 60, size: 160, opacity: 0.4, blur: true },
  { left: 820, bottom: 120, size: 140, opacity: 0.5, blur: false },
  { left: 1080, bottom: 40, size: 180, opacity: 0.9, blur: true },
  { left: 1260, bottom: 160, size: 110, opacity: 0.6, blur: false },
];

const PROGRAM_SNOW_POSITIONS = [
  { left: 60, top: 1080, size: 150, opacity: 0.45, blur: true },
  { left: 220, top: 1200, size: 110, opacity: 0.6, blur: false },
  { left: 2120, top: 1920, size: 140, opacity: 0.5, blur: true },
  { left: 640, top: 1120, size: 120, opacity: 0.55, blur: false },
  { left: 20, top: 1960, size: 160, opacity: 0.4, blur: true },
  { left: 980, top: 1140, size: 120, opacity: 0.6, blur: false },
  { left: 1120, top: 2320, size: 150, opacity: 0.45, blur: true },
  { left: 160, top: 2380, size: 110, opacity: 0.6, blur: false },
  { left: 1300, top: 2000, size: 110, opacity: 0.6, blur: false },
];

const WAVE_SNOW_POSITIONS = [
  { left: 980, top: 800, size: 140, opacity: 0.3, blur: true },
];

const DOT_SNOW_POSITIONS = [
  { left: 120, top: 1620, size: 10, opacity: 0.6, type: "dot" },
  { left: 260, top: 1720, size: 40, opacity: 0.5, type: "small" },
  { left: 420, top: 1640, size: 12, opacity: 0.55, type: "dot" },
  { left: 600, top: 1760, size: 40, opacity: 0.45, type: "small" },
  { left: 780, top: 1660, size: 11, opacity: 0.5, type: "dot" },
  { left: 980, top: 1720, size: 40, opacity: 0.45, type: "small" },
  { left: 1160, top: 640, size: 12, opacity: 0.6, type: "dot" },
  { left: 180, top: 1900, size: 40, opacity: 0.45, type: "small" },
  { left: 360, top: 1980, size: 10, opacity: 0.55, type: "dot" },
  { left: 540, top: 1880, size: 40, opacity: 0.5, type: "small" },
  { left: 720, top: 2580, size: 11, opacity: 0.55, type: "dot" },
  { left: 900, top: 2500, size: 40, opacity: 0.45, type: "small" },
  { left: 1080, top: 2580, size: 10, opacity: 0.6, type: "dot" },
  { left: 1240, top: 2500, size: 40, opacity: 0.45, type: "small" },
  { left: 220, top: 2180, size: 10, opacity: 0.55, type: "dot" },
  { left: 460, top: 2100, size: 40, opacity: 0.5, type: "small" },
  { left: 700, top: 2200, size: 11, opacity: 0.55, type: "dot" },
  { left: 940, top: 2100, size: 40, opacity: 0.5, type: "small" },
  { left: 1180, top: 2180, size: 10, opacity: 0.55, type: "dot" },
  { left: 1840, top: 2500, size: 40, opacity: 0.45, type: "small" },
  { left: 1500, top: 2400, size: 40, opacity: 0.45, type: "small" },
  { left: 1840, top: 2500, size: 40, opacity: 0.45, type: "small" },
  { left: 20, top: 2180, size: 14, opacity: 0.55, type: "dot" },
  { left: 460, top: 2100, size: 40, opacity: 0.5, type: "small" },
  { left: 700, top: 2250, size: 11, opacity: 0.55, type: "dot" },
  { left: 1940, top: 2900, size: 40, opacity: 0.5, type: "small" },
  { left: 1380, top: 2180, size: 10, opacity: 0.55, type: "dot" },
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
  title,
  imageSrc,
  description,
  className = "",
  titleClassName = "",
  titleTextClassName = "",
  mascotSrc,
  mascotClassName = "",
}) {
  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      <div className={`bg-[#d0e4ff] w-[232px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center -mb-6 relative z-10 ${titleClassName}`}>
        <p className={`font-['Inter'] font-bold text-[#091f5b] text-[20px] lg:text-[26px] tracking-[-0.625px] text-center ${titleTextClassName}`}>
          {title}
        </p>
      </div>

      <button
        type="button"
        className="bg-[#d0e4ff] w-[310px] h-[270px] rounded-[26px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] px-4 pb-4 pt-9 cursor-pointer hover:scale-105 transition-transform flex flex-col items-center"
      >
        <div className="w-[273px] h-[165px] rounded-[14px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        {description && (
          <p className="mt-4 font-['Inter'] font-light text-[13px] leading-[16px] text-center tracking-[-0.025em] text-[#091F5B] px-2">
            {description}
          </p>
        )}
      </button>

      {mascotSrc && (
        <img
          src={mascotSrc}
          alt="Program Mascot"
          className={`absolute pointer-events-none z-20 hover:scale-110 transition-transform duration-300 ${mascotClassName}`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export function KKNHomepage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  return (
    // Penting: jangan overflow-hidden (itu memotong scroll).
    // Kalau takut overflow horizontal, pakai overflow-x-hidden saja.
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1]">
      <SnowEffect />

      {/* Background SVG - purely decorative */}
      <div className="hidden lg:block absolute top-[586px] left-1/2 -translate-x-1/2 w-screen h-[1304px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1304">
          <path
            d="M-41.5 0C-41.5 0 -200 681 610.5 725C1421 769 1558 875.5 1558 875.5L1666.5 1303.5C1666.5 1303.5 1254 1018.5 647 1018.5C40 1018.5 -151 636.5 -151 636.5L-41.5 0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="-57.5" x2="1614" y1="599" y2="1098.5">
              <stop offset="0.147893" stopColor="#D0E4FF" />
              <stop offset="1" stopColor="#091F5B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navbar />

      {/* 
        Decorative layer clipped so it DOES NOT extend page height / create extra scroll.
        Ini penting agar asset absolute besar tidak bikin layout “panjang palsu”.
      */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden">
        {/* Stars */}
        {STAR_POSITIONS.map((pos, i) => (
          <div key={`star-${i}`} className="absolute size-[24px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={starPath} fill="white" opacity="0.8" />
            </svg>
          </div>
        ))}

        {/* Circles */}
        {CIRCLE_POSITIONS.map((pos, i) => (
          <div key={`circle-${i}`} className="absolute size-[9px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="white" r="4.5" opacity="0.8" />
            </svg>
          </div>
        ))}

        {/* Decorative images */}
        <img alt="" className="absolute h-[162px] left-[1200px] top-[120px] w-[161px]" src="/assets/snow.png" />
        <img alt="" className="absolute blur-sm h-[162px] w-[161px] left-[790px] top-[550px] z-10" src="/assets/snow.png" />
        <img alt="" className="absolute blur-sm left-[1105px] size-[104px] top-[620px]" src="/assets/snow.png" />
        <img alt="" className="absolute h-[240px] left-[1110px] top-[900px] w-[232px] z-10" src="/assets/pinko1.png" />

        {/* Bottom snow accents */}
        {SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-bottom-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""} ${i === 3 ? "z-10" : ""}`}
            style={{
              left: pos.left,
              bottom: pos.bottom,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {/* Our Program snow accents */}
        {PROGRAM_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-program-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""}`}
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {/* Wave area snow accents */}
        {WAVE_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-wave-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""}`}
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {/* Dot snow accents below hero */}
        {DOT_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`dot-snow-${i}`}
            alt=""
            src={pos.type === "dot" ? "/assets/dotSnow.png" : "/assets/smallSnow.png"}
            className="absolute"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {/* Wave between Program and Participant */}
        <div className="hidden lg:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-[2100px] w-screen h-[1383px] overflow-hidden">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1383">
            <g filter="url(#filter0_f_12_1166)">
              <path
                d="M1490.5 25C1490.5 25 992.618 470.03 518 470.03C43.3817 470.03 -481.5 946 -481.5 946L-563 1357.5C-563 1357.5 32.5039 766.132 518 766.132C1003.5 766.132 1453 442 1453 442L1490.5 25Z"
                fill="url(#paint0_linear_12_1166)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_12_1166"
                x="-588"
                y="0"
                width="2103.5"
                height="1382.5"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_12_1166" />
              </filter>
              <linearGradient
                id="paint0_linear_12_1166"
                x1="1233.65"
                y1="435.666"
                x2="-310.171"
                y2="1368.71"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0E4FF" />
                <stop offset="1" stopColor="#091F5B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT (Natural Flow) */}
      <main className="relative w-full max-w-[1300px] mx-auto px-6 lg:px-16 pb-24">
        {/* HERO (flow + responsive grid) */}
        <section className="pt-24 lg:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <p className="font-['Inter'] font-extrabold text-[#091f5b] text-[16px] lg:text-[20px] tracking-[-0.5px]">
                KKN INTERNATIONAL WINTER BATCH 2025
              </p>

              <h1 className="font-['AGPX',sans-serif] text-[#091f5b] text-[46px] sm:text-[54px] lg:text-[85px] leading-[1.05] tracking-[-2.125px] mt-3">
                Hamkke Bareng,
                <br />
                kita bareng!
              </h1>

              <p className="font-['Inter'] font-light text-[#091f5b] text-[16px] lg:text-[20px] tracking-[-0.5px] leading-relaxed w-full max-w-[620px] mt-6 mx-auto lg:mx-0 text-justify">
                Hamkke Bareng is a community service team under the collaboration with SNU-SR, organized by six seventh-semester students united by a shared commitment to growth, collaboration, and social impact. Coming from diverse academic backgrounds and areas of expertise, each member contributes unique skills and perspectives that strengthen our collective work. Through teamwork and mutual support, we strive to create meaningful, sustainable contributions to the communities we serve. Hamkke Bareng, Kita Bareng!
              </p>

              <Link href="/our-team">
              <button
                type="button"
                className="bg-[#d0e4ff] px-6 py-4 rounded-[31.5px] shadow-[0px_0px_15px_0px_rgba(9,31,91,0.05)] hover:scale-105 transition-transform mt-8"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-l font-['Inter'] font-bold from-[#091f5b] to-[#6f96d1] text-[20px] lg:text-[25px] tracking-[-0.625px]">
                  Get to know us more!
                </span>
              </button>
              </Link>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-[#6f96d1] h-[360px] sm:h-[420px] lg:h-[509px] w-[320px] sm:w-[380px] lg:w-[475px] rounded-t-[150px] lg:rounded-t-[250px] border-[5px] border-[#091f5b] overflow-hidden">
                <img
                  alt="KKN International Team"
                  className="w-full h-[135%] object-cover object-top -mt-[35%]"
                  src="/images/fotoBareng.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS */}
        <section className="mt-16 lg:mt-38">
          <SectionTitlePill gradient="right">WHAT IS KKN INTERNATIONAL?</SectionTitlePill>

          <div className="mt-8 flex justify-center">
            <div className="bg-[#d0e4ff] rounded-[25px] shadow-[0px_0px_15px_5px_rgba(9,31,91,0.05)] w-full max-w-[894px] p-8 lg:p-12">
              <p className="font-['Inter'] font-light text-[#091f5b] text-[16px] sm:text-[18px] lg:text-[20px] tracking-[-0.625px] text-center leading-relaxed">
                This international-based community service program is organized by universities students as part of an unique way to achive academic initiative and human resource development. Designed as a platform for cultural assimilation between Korean and Indonesian culture, the program promotes mutual understanding through meaningful cross-cultural engagement. In collaboration with 2 other universities, Seoul National University and National University students, the team contribute knowledge, skills, and perspectives to address community needs while strengthening global academic partnerships. This cooperation not only enriches participants intellectually but also enhances the program’s impact by fostering globally competent human resources with an international outlook.  
              </p>
            </div>
          </div>
        </section>

        {/* PROGRAM */}
<section className="mt-16 lg:mt-36">
  <SectionTitlePill gradient="left">OUR PROGRAM</SectionTitlePill>
  <div className="mt-10 space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      <ProgramCard
        title="BASIC KOREAN"
        imageSrc="/ourProgramAssets/image 1.png"
        description="Learn Hangul and everyday beginner conversations."
        mascotSrc="/assets/pinkoBasicKorean.png"
        mascotClassName="top-1/2 -translate-y-1/2 -left-10 w-32 h-auto"
      />
      <ProgramCard
        title="EPS TOPIK"
        imageSrc="/ourProgramAssets/image 4.png"
        description="Focused EPS-TOPIK exam prep with targeted practice."
        mascotSrc="/assets/pinkoEPS.png"
        mascotClassName="top-1/2 -translate-y-1/2 -right-12 w-40 h-auto rotate-12"
      />
      <ProgramCard
        title="KOREAN FOR TOURISM"
        imageSrc="/ourProgramAssets/image 4.png"
        description="Practical Korean for travel and tourism services."
        titleClassName="w-[300px]"
        titleTextClassName="lg:text-[22px]"
        mascotSrc="/assets/pinkoKoreanForTourism.png"
        mascotClassName="top-1/2 -translate-y-1/2 -right-12 w-40 h-auto rotate-12"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 lg:mx-32 lg:pt-4 justify-items-center">
      <ProgramCard
        title="KOREAN FOR BUSINESS"
        imageSrc="/ourProgramAssets/kfb.png"
        description="Professional Korean for workplace and business communication."
        titleClassName="w-[310px]"
        titleTextClassName="lg:text-[22px]"
        mascotSrc="/assets/pinkoKoreanForBusiness.png"
        mascotClassName="top-1/2 -translate-y-1/2 -left-10 w-32 h-auto"
      />
      <ProgramCard
        title="DIGITAL BUSINESS"
        imageSrc="/ourProgramAssets/image 5.png"
        description="Build and grow a business through digital marketing strategies."
        titleClassName="w-[250px]"
        titleTextClassName="lg:text-[22px]"
        mascotSrc="/assets/pinkoDigital Business.png"
        mascotClassName="top-1/2 -translate-y-1/2 -right-12 w-40 h-auto rotate-12"
      />
    </div>
  </div>
</section>


        {/* TOTAL PARTICIPANT */}
        <section className="mt-16 lg:mt-38">
          <SectionTitlePill gradient="left">TOTAL PARTICIPANT</SectionTitlePill>

          <div className="mt-10 flex justify-center">
            <div className="relative bg-[#D0E4FF] rounded-[3rem] p-10 lg:p-16 shadow-2xl w-full max-w-[720px]">
              <img
                src="/assets/pinkoBasicKorean.png"
                alt=""
                className="absolute -top-6 -right-6 w-24 h-24 lg:w-38 lg:h-38 object-contain pointer-events-none"
                loading="lazy"
              />
              <img
                src="/assets/pinkoEPS.png"
                alt=""
                className="absolute -bottom-6 -left-6 w-24 h-24 lg:w-38 lg:h-38 object-contain pointer-events-none"
                loading="lazy"
              />
              <p className="text-[56px] sm:text-[64px] lg:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#091F5B] to-[#6F96D1] text-center">
                170+
              </p>
              <p className="text-[16px] sm:text-[24px] lg:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#091F5B] to-[#6F96D1] text-center">participants</p>
              <p className="text-[#091F5B] text-[16px] sm:text-[18px] lg:text-2xl font-semibold mt-4 text-center">
                Our team is committed on ensuring all participant get all the things they need
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
