"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, MapPin, Star } from "lucide-react";
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
  { left: 1220, top: 720, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.35, blur: true },
  { left: 1260, top: 160, size: 110, opacity: 0.6, blur: false },
];

export default function ClassDetailLayout({ data, backHref = "/our-program" }) {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  if (!data) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b pt-8 from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden">
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

        <main className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <Link
            href={backHref}
            className="mb-8 inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full border border-white/60 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl text-[#091F5B] font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Our Program
          </Link>

          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <h1
              className="font-['AGPX',sans-serif] text-white text-[48px] lg:text-[72px] leading-[1.05] tracking-[-2px]"
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)",
              }}
            >
              {data.title}
            </h1>
            <p className="text-[#091F5B] text-lg lg:text-xl font-bold">
              {data.level}
            </p>

            <div className="flex items-center gap-2 text-yellow-400 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(data.rating) ? "fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-[#091F5B] font-semibold ml-2">
                {data.rating} rating
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-tr from-[#091F5B]/20 to-[#6F96D1]/20 rounded-[2.5rem] transform rotate-3 scale-95 opacity-100 transition-all duration-500 blur-2xl" />
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm border-2 border-white/50 shadow-2xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#091F5B]/80 text-base lg:text-lg leading-relaxed">
                {data.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-2xl border border-white/50 p-4 flex items-center gap-3 text-[#091F5B]">
                  <CalendarDays className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-bold">Schedule</p>
                    <p className="text-sm">{data.schedule}</p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl border border-white/50 p-4 flex items-center gap-3 text-[#091F5B]">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-bold">Time</p>
                    <p className="text-sm">{data.time}</p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl border border-white/50 p-4 flex items-center gap-3 text-[#091F5B]">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-bold">Location</p>
                    <p className="text-sm">{data.location}</p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl border border-white/50 p-4 flex items-center gap-3 text-[#091F5B]">
                  <div>
                    <p className="text-sm font-bold">Duration</p>
                    <p className="text-sm">{data.duration}</p>
                  </div>
                </div>
              </div>



              <ul className="grid sm:grid-cols-2 gap-3 text-[#091F5B]">
                {data.highlights.map((item) => (
                  <li key={item} className="bg-white/50 rounded-xl px-4 py-2 border border-white/50 text-sm font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/40">
              <h2 className="text-2xl font-bold text-[#091F5B] mb-6">Tutor Profile</h2>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-[#D0E4FF] to-[#6F96D1] animate-pulse flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-white/70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#091F5B]">{data.tutor.name}</p>
                  <p className="text-sm text-[#6F96D1] font-semibold">{data.tutor.role}</p>
                </div>
                <p className="text-[#091F5B]/80 text-sm leading-relaxed">{data.tutor.bio}</p>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/40">
              <h2 className="text-2xl font-bold text-[#091F5B] mb-6">Class Documentation</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.documentation.map((img, i) => (
                  <div key={`${img}-${i}`} className="rounded-2xl overflow-hidden border border-white/60 shadow-lg bg-white/70">
                    <img src={img} alt="" className="w-full h-40 object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
