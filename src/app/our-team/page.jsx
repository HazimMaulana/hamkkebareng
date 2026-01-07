"use client";

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
//   { left: 820, top: 120, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.35, blur: true },
  { left: 1260, top: 160, size: 110, opacity: 0.6, blur: false },
];

const TEAM_MEMBERS = [
  {
    name: "MUHAMMAD NAUFAL RAHMATULLAH",
    role: "LEADER",
    dept: "DEPARTMENT OF INFORMATICS ENGINEERING",
    image: "/images/pal.png",
    id: "naufal",
  },
  {
    name: "MUHAMMAD HAZIM MAULANA",
    role: "TECHNICAL LEAD",
    dept: "DEPARTMENT OF INFORMATICS ENGINEERING",
    image: "/images/jim.png",
    id: "hazim",
  },
  {
    name: "LALU MUHAMMAD FAQIH FIRMANSYAH",
    role: "CREATIVE LEAD",
    dept: "DEPARTMENT OF ARCHITECTURE",
    image: "/images/faqih.png",
    id: "faqih",
  },
  {
    name: "NADYA AZZAHRA",
    role: "TREASURER",
    dept: "DEPARTMENT OF INFORMATICS ENGINEERING",
    image: "/images/nad.png",
    id: "nadya",
  },
  {
    name: "FITRY WAU",
    role: "SECRETARY",
    dept: "DEPARTMENT OF FOOD SCIENCE & TECHNOLOGY",
    image: "/images/fitry.png",
    id: "fitry",
  },
  {
    name: "REVATA ANWAR",
    role: "PUBLIC RELATION",
    dept: "DEPARTMENT OF FOOD SCIENCE & TECHNOLOGY",
    image: "/images/reva.png",
    id: "reva",
  },
];

function TeamCard({ member, className = "" }) {
  // Extract first name for alt text
  const firstName = member.name.split(" ")[0];
  const isFaqih = member.id === "faqih";
  const isLadies = ["nadya", "fitry", "reva"].includes(member.id);
  
  let positionClass = '-top-12';
  if (isFaqih) positionClass = '-top-3';
  if (isLadies) positionClass = '-top-6';

  const sizeClass = isFaqih ? 'h-[320px]' : 'h-[340px]';

  return (
    <div className={`relative w-[286px] h-[480px] flex items-end ${className}`}>
        {/* Card Base */}
        <div className="w-[286px] h-[421px] bg-[#D0E4FF] rounded-[25px] shadow-[0px_0px_15px_5px_rgba(0,0,0,0.05)] relative flex flex-col justify-end pb-8 items-center px-4">
            
            {/* Texts */}
            <h3 className="font-['Inter'] font-bold text-[20px] text-[#091F5B] text-center leading-tight mb-2">
                {member.name}
            </h3>
            <p className="font-['Inter'] font-light text-[15px] text-[#091F5B] text-center leading-tight mb-4 opacity-80">
                {member.dept}
            </p>

             {/* Role Pill */}
            <div className="relative">
                <div className="bg-[#6F96D1] rounded-[42px] h-[44px] px-8 flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                     <span className="font-['Inter'] font-bold text-[20px] bg-gradient-to-r from-[#D0E4FF] to-[#FFFFFF] bg-clip-text text-transparent uppercase whitespace-nowrap">
                         {member.role}
                     </span>
                </div>
            </div>
        </div>

        {/* Image - Popping out */}
        <img 
            src={member.image} 
            alt={member.name}
            className={`absolute left-1/2 -translate-x-1/2 ${sizeClass} w-auto max-w-none object-contain z-10 drop-shadow-xl ${positionClass}`}
        />
        
        {/* Decorative + Icons (Sparkles) would go here if needed */}
    </div>
  );
}

export default function OurTeamPage() {
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
          
          <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center">
            {/* Title */}
            <div className="relative mb-6 text-center">
                 <h1 className="font-['AGPX',sans-serif] text-white text-[50px] lg:text-[85px] leading-[1.1] tracking-[-2.125px]"
                  style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" }}
                >
                    MEET OUR WINTER<br className="hidden lg:block"/> 2025 VOLUNTEER!
                 </h1>
            </div>

            {/* Team Layout - Desktop Pyramid/Grid */}
            <div className="w-full max-w-[1000px] relative min-h-[1400px] hidden lg:block">
                
                {/* Row 1: Naufal (Leader) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0">
                    <TeamCard member={TEAM_MEMBERS[0]} />
                </div>
                
                {/* Row 2: Hazim (Left) & Faqih (Right) */}
                <div className="absolute left-[0px] top-[280px]">
                    <TeamCard member={TEAM_MEMBERS[1]} />
                </div>
                <div className="absolute right-[0px] top-[280px]">
                    <TeamCard member={TEAM_MEMBERS[2]} />
                </div>

                {/* Row 3: Nadya (Center) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[690px]">
                     <TeamCard member={TEAM_MEMBERS[3]} />
                </div>
                
                {/* Row 4: Fitry (Left) and Revata (Right) */}
                 <div className="absolute left-[0px] top-[885px]">
                    <TeamCard member={TEAM_MEMBERS[4]} />
                </div>
                <div className="absolute right-[0px] top-[885px]">
                    <TeamCard member={TEAM_MEMBERS[5]} />
                </div>
            </div>

            {/* Mobile/Tablet Simple Column Layout */}
            <div className="flex lg:hidden flex-col gap-12 items-center">
                 {TEAM_MEMBERS.map((member) => (
                    <TeamCard 
                      key={member.id} 
                      member={member} 
                      className={member.id === 'faqih' ? '-mt-8' : ''}
                    />
                 ))}
            </div>
            
          </div>
      </div>
    </div>
  );
}
