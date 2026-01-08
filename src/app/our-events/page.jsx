"use client";

import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import svgPaths from "@/imports/svg-aryojtau6r";
import Link from "next/link";

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
  { left: 1220, top: 550, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.35, blur: true },
  { left: 1260, top: 160, size: 110, opacity: 0.6, blur: false },
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

function EventsCard({
  title,
  imageSrc,
  className = "",
  titleClassName = "",
  titleTextClassName = "",
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
        className="bg-[#d0e4ff] w-[550px] h-[295px] rounded-[26px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)]   pt-4 cursor-pointer  flex flex-col items-center"
      >
        <div className="w-[510px] h-[260px] rounded-[14px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </button>
    </div>
  );
}


export default function ContactPage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden pb-14">
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
            className={`absolute ${snow.blur ? 'blur-sm' : ''}`}
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
        
        <div className="flex flex-col max-w-[700px] flex justify-center w-full pt-32">
            <h1
                className="font-['AGPX',sans-serif] text-white text-[50px] lg:text-[85px] leading-[1.1] tracking-[-2.125px] text-center"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" }}
            >
                UPCOMING EVENTS
            </h1>
            <p className="text-white text-center pt-6">Join us for the International KKN (Community Service Learning) Winter Batch 2025. This season, we are transcending geographical boundaries to foster sustainable development and cultural exchange.</p>
        </div>

        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row w-full space-x-12 justify-center lg:pt-8 ">
        <div className="flex flex-col w-full justify-center max-w-[570px]">
          <div className="flex flex-col w-full bg-[#6F96D1] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <EventsCard
            title="GENERAL LECTURE"
            imageSrc="/ourProgramAssets/image 4.png"
            titleClassName="w-[300px]"
            titleTextClassName="lg:text-[22px]"
            className="-mt-3"
          />

          <div className="flex flex-row justify-between pt-2 gap-4 wfull px-6 pb-6">
            <div className="flex flex-col w-3/5 text-white">
              <h1 className=" text-3xl font-extrabold">Aging and Health Promotion</h1>
              <p>Faculty of Medicine</p>
            </div>
            <div className="flex flex-col w-2/5 text-white">
              <h1 className=" text-3xl font-semibold">Event date:</h1>
              <h1 className=" text-3xl font-bold">January 26th</h1>
              <p>Ruang Sidang Prof. Morisco</p>
              <p>Gedung A</p>
              <p>Fakultas Teknik</p>
              <p>Universitas Mataram</p>
            </div>
          </div>

          <Link href="/our-events/aging-and-health-promotion" className="-mb-6 relative z-10 self-center">
            <button className="bg-[#091F5B] w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer hover:bg-[#091f5b]/90 transition-colors">
              <p className="font-['Inter'] font-bold text-[#D0E4FF] text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                SIGN UP NOW
              </p>
            </button>
          </Link>
          </div>
        </div>


        <div className="flex flex-col w-full justify-center max-w-[570px]">
          <div className="flex flex-col w-full bg-[#6F96D1] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <EventsCard
            title="GENERAL LECTURE"
            imageSrc="/ourProgramAssets/image 4.png"
            titleClassName="w-[300px]"
            titleTextClassName="lg:text-[22px]"
            className="-mt-3"
          />

          <div className="flex flex-row justify-between pt-2 gap-4  w-full px-6 pb-6">
            <div className="flex flex-col w-3/5 text-white">
              <h1 className=" text-3xl font-extrabold">Development Economics and Impact Evaluation</h1>
              <p>Faculty of Food, Science and Technology & Faculty of Agriculture</p>
            </div>
            <div className="flex flex-col w-2/5 text-white">
              <h1 className=" text-3xl font-semibold">Event date:</h1>
              <h1 className=" text-3xl font-bold">January 27th</h1>
              <p>Ruang Sidang Prof. Morisco</p>
              <p>Gedung A</p>
              <p>Fakultas Teknik</p>
              <p>Universitas Mataram</p>
            </div>
          </div>

          <Link href="/our-events/development-economics-and-impact-evaluation" className="-mb-6 relative z-10 self-center">
            <button className="bg-[#091F5B] w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer hover:bg-[#091f5b]/90 transition-colors">
              <p className="font-['Inter'] font-bold text-[#D0E4FF] text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                SIGN UP NOW
              </p>
            </button>
          </Link>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
