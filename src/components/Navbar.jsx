export function Navbar() {
  return (
    <nav className="sticky top-4 z-50 w-full flex justify-center">
      <div className="backdrop-blur-2xl bg-white/30 border border-white/40 h-[93px] w-[1208px] rounded-[46.5px] shadow-[0px_10px_40px_rgba(9,31,91,0.12)] flex items-center px-[43px]">
        <div className="flex items-center gap-4">
          <img alt="Hamkke Bareng Logo" className="h-[62px] w-auto" src="/images/logo.png" />
          <p className="font-['Inter'] font-bold text-[#091f5b] text-[25px] tracking-[-0.625px]">
            HAMKKE BARENG
          </p>
        </div>

        <div className="ml-auto flex items-center gap-8">
          <a href="#home" className="font-['Inter'] font-bold text-[#091f5b] text-[20px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Home
          </a>
          <a href="#team" className="font-['Inter'] font-bold text-[#091f5b] text-[20px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Our Team
          </a>
          <a href="#center" className="font-['Inter'] font-bold text-[#091f5b] text-[20px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            S-Cube Center
          </a>
          <a href="/store" className="font-['Inter'] font-bold text-[#091f5b] text-[20px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Store
          </a>
          <a href="#contact" className="font-['Inter'] font-bold text-[#091f5b] text-[20px] tracking-[-0.5px] hover:text-[#6F96D1] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
