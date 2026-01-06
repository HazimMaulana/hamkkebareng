"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Merchandise } from "@/components/Merchandise";
import { ProductDetails } from "@/components/ProductDetails";
import { SnowEffect } from "@/components/SnowEffect";
import svgPaths from "@/imports/svg-aryojtau6r";

const FALLBACK_STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5z";

const STAR_POSITIONS = [
  { left: 100, top: 150 },
  { left: 300, top: 250 },
  { left: 50, top: 400 },
  { left: 1100, top: 200 },
  { left: 1250, top: 450 },
  { left: 900, top: 150 },
  { left: 1300, top: 300 },
  { left: 60, top: 600 },
  { left: 1200, top: 650 },
];

const CIRCLE_POSITIONS = [
  { left: 150, top: 500 },
  { left: 250, top: 180 },
  { left: 1150, top: 350 },
  { left: 1050, top: 550 },
  { left: 1350, top: 150 },
  { left: 50, top: 800 },
];

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden">
      <SnowEffect />
      
      {/* Decorative Elements */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden z-0">
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

        {/* Decorative Snow Images - Adjusted for Store Layout */}
        <img alt="" className="absolute h-[162px] left-[50px] top-[120px] w-[161px] opacity-40" src="/assets/snow.png" />
        <img alt="" className="absolute blur-sm h-[140px] w-[139px] right-[50px] top-[300px] z-0 opacity-60" src="/assets/snow.png" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
      
        <div className="w-full flex-1 pt-32 pb-20">
          {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => {
                setSelectedProduct(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
          />
        ) : (
          <div className="animate-in fade-in duration-500">
             <div className="text-center px-6 mb-8">
                <h1 className="font-['AGPX',sans-serif] text-[#091f5b] text-[50px] lg:text-[85px] leading-[1.1] tracking-[-2.125px]">
                  Store
                </h1>
                <p className="font-['Inter'] font-light text-[#091f5b] text-[16px] lg:text-[20px] tracking-[-0.5px] mt-4 max-w-2xl mx-auto">
                  Support our mission by grabbing some exclusive merchandise! All proceeds go towards our volunteer programs.
                </p>
             </div>
             <Merchandise 
                onProductClick={(product) => {
                    setSelectedProduct(product);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
             />
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
