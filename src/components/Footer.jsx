import { Facebook, Twitter, Instagram, Linkedin, Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#091F5B] to-[#344EAD] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="h-14 w-14 rounded-3xl bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-xl">Volunteer Team</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Making a positive impact in our community, one project at a time. ✨
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-red-400 text-red-400 animate-pulse" />
              <span>by volunteers</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → About
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Our Team
                </a>
              </li>
              <li>
                <a href="#merchandise" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Merchandise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Get Involved</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Volunteer 🙌
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Donate 💝
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Partner With Us 🤝
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block">
                  → Upcoming Events 📅
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Follow Us 🚀</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 shadow-xl">
              <p className="text-sm mb-2 font-semibold">Newsletter 📬</p>
              <p className="text-xs text-white/70 mb-3">Stay updated with our latest projects!</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
                />
                <button className="px-5 py-2 bg-white text-[#091F5B] rounded-2xl hover:scale-105 transition-transform font-semibold text-sm shadow-lg">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2026 Volunteer Team. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

