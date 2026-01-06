import { Menu, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Merchandise", href: "#merchandise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="container mx-auto">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] shadow-2xl shadow-primary/5">
          <div className="flex h-20 items-center justify-between px-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                alt="Logo"
                className="h-12 w-12 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 object-contain"
                src="/images/logo.png"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Volunteer Team
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2.5 text-sm rounded-2xl hover:bg-white/60 hover:backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  {item.name}
                </a>
              ))}
              <Button size="sm" className="ml-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-secondary border-0">
                Join Us 🎉
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/60">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="rounded-l-[2rem] bg-white/90 backdrop-blur-2xl border-white/40">
                <nav className="flex flex-col gap-3 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg px-4 py-3 rounded-2xl hover:bg-white/60 hover:backdrop-blur-xl transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="mt-4 rounded-full bg-gradient-to-r from-primary to-secondary">
                    Join Us 🎉
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

