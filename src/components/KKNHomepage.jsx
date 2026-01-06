import React from "react";
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

function ProgramCard({ title, emoji, className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="bg-[#d0e4ff] px-6 py-2 rounded-[42px] inline-block mb-4">
        <p className="font-['Inter'] font-bold text-[#091f5b] text-[18px] sm:text-[20px] lg:text-[25px] tracking-[-0.625px] text-center">
          {title}
        </p>
      </div>

      <button
        type="button"
        className="bg-[#d0e4ff] w-[286px] sm:w-[320px] rounded-[25px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] p-4 cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="bg-[#6f96d1] rounded-[13px] h-[155px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <span className="text-white text-5xl" aria-hidden>
            {emoji}
          </span>
        </div>
      </button>
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
        <img alt="" className="absolute h-[240px] left-[1110px] top-[800px] w-[232px] z-10" src="/assets/pinko1.png" />
      </div>

      {/* MAIN CONTENT (Natural Flow) */}
      <main className="relative w-full max-w-[1300px] mx-auto px-6 lg:px-16 pb-24">
        {/* HERO (flow + responsive grid) */}
        <section className="pt-10 lg:pt-16">
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

              <p className="font-['Inter'] font-light text-[#091f5b] text-[16px] lg:text-[20px] tracking-[-0.5px] leading-relaxed w-full max-w-[620px] mt-6 mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus illo quis tenetur, saepe dolore incidunt ullam vero eveniet
                quam?
              </p>

              <button
                type="button"
                className="bg-[#d0e4ff] px-6 py-4 rounded-[31.5px] shadow-[0px_0px_15px_0px_rgba(9,31,91,0.05)] hover:scale-105 transition-transform mt-8"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-l font-['Inter'] font-bold from-[#091f5b] to-[#6f96d1] text-[20px] lg:text-[25px] tracking-[-0.625px]">
                  Get to know us more!
                </span>
              </button>
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
              <p className="font-['Inter'] font-light text-[#091f5b] text-[16px] sm:text-[18px] lg:text-[25px] tracking-[-0.625px] text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* PROGRAM */}
<section className="mt-16 lg:mt-36">
  <SectionTitlePill gradient="left">OUR PROGRAM</SectionTitlePill>
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 justify-items-center">
    {/* Row 1: 3 cards -> each takes 2/6 */}
    <ProgramCard title="BASIC KOREAN" emoji="📚" className="lg:col-span-2" />
    <ProgramCard title="EPS TOPIK" emoji="✍️" className="lg:col-span-2" />
    <ProgramCard title="KOREAN FOR TOURISM" emoji="✈️" className="lg:col-span-2" />

    {/* Row 2: 2 cards -> each takes 3/6 (centered & symmetric) */}
    <ProgramCard title="KOREAN FOR BUSINESS" emoji="💼" className="lg:col-span-3" />
    <ProgramCard title="DIGITAL BUSINESS" emoji="💻" className="lg:col-span-3" />
  </div>
</section>


        {/* TOTAL PARTICIPANT */}
        <section className="mt-16 lg:mt-38">
          <SectionTitlePill gradient="left">TOTAL PARTICIPANT</SectionTitlePill>

          <div className="mt-10 flex justify-center">
            <div className="bg-white/30 backdrop-blur-xl rounded-[3rem] p-10 lg:p-16 shadow-2xl w-full max-w-[894px]">
              <p className="text-[56px] sm:text-[64px] lg:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#091F5B] to-[#6F96D1] text-center">
                500+
              </p>
              <p className="text-[#091F5B] text-[16px] sm:text-[18px] lg:text-2xl font-semibold mt-4 text-center">
                Students from around the world
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
