 "use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 w-full flex justify-center">
      <div className="backdrop-blur-2xl bg-white/10 border border-white/40 h-[72px] w-[1208px] max-w-[92%] rounded-[36px] shadow-[0px_10px_40px_rgba(9,31,91,0.12)] flex items-center px-6">
        <a href="/" className="flex items-center gap-4">
          <img alt="Hamkke Bareng Logo" className="h-[62px] w-auto" src="/images/logo.png" />
        </a>

        <div className="ml-auto hidden lg:flex items-center gap-6">
          <a href="/our-team" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Our Team
          </a>
          <a href="/our-program" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Our Program
          </a>
          <a href="/scube-center" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            S-Cube Center
          </a>
          <a href="/our-events" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Our Events
          </a>
          <a href="/store" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Store
          </a>
          <a
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] hover:border-white/80 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center lg:hidden w-12 h-12 rounded-full border border-white/60 bg-white/60 text-[#091f5b] hover:text-[#6F96D1] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[88px] w-[92%] max-w-[1208px] lg:hidden">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/40 rounded-[28px] shadow-[0px_10px_40px_rgba(9,31,91,0.12)] p-6 flex flex-col gap-4">
            <a href="/our-team" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Our Team
            </a>
            <a href="/our-program" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Our Program
            </a>
            <a href="/scube-center" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              S-Cube Center
            </a>
            {/* <a href="/contact" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Contact
            </a> */}
            <a href="/our-events" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Our Events
            </a>
            <a href="/store" className="font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
              Store
            </a>
            <a
              href="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-3 font-['Inter'] font-bold text-[#091f5b] text-[18px] tracking-[-0.5px] hover:text-[#6F96D1] hover:border-white/80 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
