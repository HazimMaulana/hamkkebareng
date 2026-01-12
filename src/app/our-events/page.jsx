"use client";

import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import svgPaths from "@/imports/svg-aryojtau6r";
import Link from "next/link";
import { useEffect, useState } from "react";

const MAX_PARTICIPANTS = 75;
const MAX_CLOSING_PARTICIPANTS = 500;
const SPREADSHEET_URL_GENERAL =
  "https://script.google.com/macros/s/AKfycbyMApDrsbMvFNGFY6z6KX4pahz2Cjv6o7WXDJ1kYFOVnBzbxjiLADUyWi0bkXzuXtPK/exec";
const SPREADSHEET_URL_CLOSING = 
  "https://script.google.com/macros/s/AKfycbxIxi01ntbNyZiVrmMKFwDG9DVdfL8tgEzft-Lj0Xftw8-HxwFVjtkzySuI4YJe_Yf0/exec";

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

      <img
        src={imageSrc}
        alt=""
        className="w-full  object-cover rounded-4xl cursor-pointer"
        loading="lazy"
      />
    </div>
  );
}


export default function ContactPage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  const [counts, setCounts] = useState({
    "Aging And Health Promotion": 0,
    "Development Economics And Impact Evaluation": 0,
    "Culture Exchange": 0,
  });
  const [loading, setLoading] = useState(true);
  const [isClosingOnHold, setIsClosingOnHold] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resGeneral, resClosing] = await Promise.all([
          fetch(`${SPREADSHEET_URL_GENERAL}?t=${Date.now()}`).then((r) =>
            r.text()
          ),
          fetch(`${SPREADSHEET_URL_CLOSING}?t=${Date.now()}`).then((r) =>
            r.text()
          ),
        ]);

        // Helper to split CSV line respecting quotes
        const parseCSVLine = (text) => {
          const result = [];
          let cell = "";
          let inQuotes = false;

          for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
              result.push(cell.trim());
              cell = "";
            } else {
              cell += char;
            }
          }
          result.push(cell.trim());
          return result;
        };

        const newCounts = {
          "Aging And Health Promotion": 0,
          "Development Economics And Impact Evaluation": 0,
          "Culture Exchange": 0,
        };

        const processGeneralCSV = (csvText) => {
          const lines = csvText.split(/\r?\n/);
          if (lines.length === 0) return;

          const headers = parseCSVLine(lines[0]);
          let eventColIndex = headers.indexOf("General Lecture");
          
          if (eventColIndex === -1) {
            eventColIndex = headers.findIndex(h => h.trim().toLowerCase() === "events");
          }

          if (eventColIndex === -1) return;

          lines.slice(1).forEach((line) => {
            if (!line.trim()) return;
            const cols = parseCSVLine(line);

            if (cols.length > eventColIndex) {
              let eventName = cols[eventColIndex];
              if (eventName && eventName.startsWith('"') && eventName.endsWith('"')) {
                eventName = eventName.slice(1, -1);
              }
              if (eventName) {
                eventName = eventName.trim();
                if (newCounts[eventName] !== undefined) {
                  newCounts[eventName]++;
                }
              }
            }
          });
        };

        const processClosingCSV = (csvText) => {
            const lines = csvText.split(/\r?\n/);
            // Assuming the first line is header, count all subsequent non-empty lines
            let count = 0;
            let checkHold = false;

            if (lines.length > 1) {
                // Check the first data row (index 1) for "hold"
                const firstCols = parseCSVLine(lines[1]);
                // Timestamp, Nama, Asal -> Nama is at index 1
                if (firstCols.length > 1 && firstCols[1].trim().toLowerCase() === "hold") {
                    checkHold = true;
                }
            }
            setIsClosingOnHold(checkHold);

            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim()) {
                    count++;
                }
            }
            newCounts["Culture Exchange"] = count;
        };

        processGeneralCSV(resGeneral);
        processClosingCSV(resClosing);

        setCounts(newCounts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch participant counts", err);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Poll every 2 seconds for faster updates
    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const isAgingFull = counts["Aging And Health Promotion"] >= MAX_PARTICIPANTS;
  const isEconomicsFull =
    counts["Development Economics And Impact Evaluation"] >= MAX_PARTICIPANTS;

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
                className="font-['AGPX',sans-serif] text-white text-[45px] lg:text-[85px] leading-[1.1] tracking-[-2.125px] text-center"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" }}
            >
                UPCOMING EVENTS
            </h1>
            <p className="text-white text-center pt-6 px-2">Join us for the International KKN (Community Service Learning) Winter Batch 2025. This season, we are transcending geographical boundaries to foster sustainable development and cultural exchange.</p>
        </div>

        <div className="flex flex-wrap gap-8 lg:gap-12 w-full justify-center pt-10 px-4 items-stretch">
        <div className="flex flex-col w-full justify-center max-w-[570px]">
          <div className="flex flex-col w-full h-full bg-[#6F96D1] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] justify-between">
          <EventsCard
            title="GENERAL LECTURE"
            imageSrc="/assets/health.png"
            titleClassName="w-[200px] sm:w-[300px]"
            titleTextClassName="text-[16px] lg:text-[22px]"
            className="-mt-3 px-3 rounded-4xl"
          />

          <div className="flex flex-col md:flex-row justify-between pt-4 gap-4 w-full px-6 pb-8">
            <div className="flex flex-col md:w-3/5 text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2">Aging and Health Promotion</h1>
              <p className="text-sm md:text-base opacity-90">Faculty of Medicine</p>
            </div>
            <div className="flex flex-col md:w-2/5 text-white mt-4 md:mt-0">
              <p className="text-lg font-semibold">Event date:</p>
              <h2 className="text-2xl font-bold mb-2">January 25th</h2>
              <div className="text-sm opacity-90 space-y-0.5">
                <p>Ruang Sidang Prof. Morisco</p>
                <p>Gedung A, Fakultas Teknik</p>
                <p>Universitas Mataram</p>
              </div>
              <div className="mt-4 bg-white/20 p-2 rounded-lg text-center backdrop-blur-sm">
                <p className="font-bold text-sm">
                  {loading
                    ? "Loading..."
                    : `${counts["Aging And Health Promotion"]} / ${MAX_PARTICIPANTS} Registered`}
                </p>
              </div>
            </div>
          </div>

          {!isAgingFull ? (
            <Link
              href="/our-events/aging-and-health-promotion"
              className="-mb-6 relative z-10 self-center"
            >
              <button className="bg-[#091F5B] w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer hover:bg-[#091f5b]/90 transition-colors">
                <p className="font-['Inter'] font-bold text-[#D0E4FF] text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  SIGN UP NOW
                </p>
              </button>
            </Link>
          ) : (
            <div className="-mb-6 relative z-10 self-center">
              <button
                disabled
                className="bg-gray-500 w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-not-allowed"
              >
                <p className="font-['Inter'] font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  FULL
                </p>
              </button>
            </div>
          )}
          </div>
        </div>


        <div className="flex flex-col w-full justify-center max-w-[570px]">
          <div className="flex flex-col w-full h-full bg-[#6F96D1] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] justify-between">
          <EventsCard
            title="GENERAL LECTURE"
            imageSrc="/assets/economics.png"
            titleClassName="w-[200px] sm:w-[300px]"
            titleTextClassName="text-[16px] lg:text-[22px]"
            className="-mt-3 px-3 rounded-4xl"
          />

          <div className="flex flex-col md:flex-row justify-between pt-4 gap-4 w-full px-6 pb-8">
            <div className="flex flex-col md:w-3/5 text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2">Development Economics and Impact Evaluation</h1>
              <p className="text-sm md:text-base opacity-90">Faculty of Food, Science and Technology & Faculty of Agriculture</p>
            </div>
            <div className="flex flex-col md:w-2/5 text-white mt-4 md:mt-0">
              <p className="text-lg font-semibold">Event date:</p>
              <h2 className="text-2xl font-bold mb-2">January 26th</h2>
              <div className="text-sm opacity-90 space-y-0.5">
                <p>Ruang Sidang Prof. Morisco</p>
                <p>Gedung A, Fakultas Teknik</p>
                <p>Universitas Mataram</p>
              </div>
              <div className="mt-4 bg-white/20 p-2 rounded-lg text-center backdrop-blur-sm">
                <p className="font-bold text-sm">
                  {loading
                    ? "Loading..."
                    : `${counts["Development Economics And Impact Evaluation"]} / ${MAX_PARTICIPANTS} Registered`}
                </p>
              </div>
            </div>
          </div>

          {!isEconomicsFull ? (
            <Link
              href="/our-events/development-economics-and-impact-evaluation"
              className="-mb-6 relative z-10 self-center"
            >
              <button className="bg-[#091F5B] w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer hover:bg-[#091f5b]/90 transition-colors">
                <p className="font-['Inter'] font-bold text-[#D0E4FF] text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  SIGN UP NOW
                </p>
              </button>
            </Link>
          ) : (
            <div className="-mb-6 relative z-10 self-center">
              <button
                disabled
                className="bg-gray-500 w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-not-allowed"
              >
                <p className="font-['Inter'] font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  FULL
                </p>
              </button>
            </div>
          )}
          </div>
        </div>

        <div className="flex flex-col w-full justify-center max-w-[570px]">
          <div className="flex flex-col w-full h-full bg-[#6F96D1] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <EventsCard
            title="CLOSING CEREMONY"
            imageSrc="/assets/closingCeremony.png"
            titleClassName="w-[200px] sm:w-[300px]"
            titleTextClassName="text-[16px] lg:text-[22px]"
            className="-mt-3 px-3 rounded-4xl"
          />

          <div className="flex flex-col md:flex-row justify-between pt-4 gap-4 w-full px-6 pb-8">
            <div className="flex flex-col md:w-3/5 text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2">Culture Exchange</h1>
              <p className="text-sm md:text-base opacity-90">Closing Ceremony Event</p>
            </div>
            <div className="flex flex-col md:w-2/5 text-white mt-4 md:mt-0">
              <p className="text-lg font-semibold">Event date:</p>
              <h2 className="text-2xl font-bold mb-2">January 29th</h2>
              <div className="text-sm opacity-90 space-y-0.5">
                <p>Gedung Dome</p>
                <p>Universitas Mataram</p>
              </div>
              <div className="mt-4 bg-white/20 p-2 rounded-lg text-center backdrop-blur-sm">
                <p className="font-bold text-sm">
                  {loading
                    ? "Loading..."
                    : `${counts["Culture Exchange"]} / ${MAX_CLOSING_PARTICIPANTS} Registered`}
                </p>
              </div>
            </div>
          </div>

          {isClosingOnHold ? (
            <div className="-mb-6 relative z-10 self-center mt-auto">
              <button
                disabled
                className="bg-gray-500 w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-not-allowed"
              >
                <p className="font-['Inter'] font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  COMING SOON
                </p>
              </button>
            </div>
          ) : (
            <Link
              href="/our-events/closing-ceremony"
              className="-mb-6 relative z-10 self-center mt-auto"
            >
              <button className="bg-[#091F5B] w-[180px] sm:w-[200px] h-[48px] rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer hover:bg-[#091f5b]/90 transition-colors">
                <p className="font-['Inter'] font-bold text-[#D0E4FF] text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.625px] text-center uppercase">
                  SIGN UP NOW
                </p>
              </button>
            </Link>
          )}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
