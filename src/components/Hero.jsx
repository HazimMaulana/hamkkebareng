import { Button } from "./ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-32 md:py-40 pt-36 md:pt-44">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-75" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-150" />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Heart className="h-8 w-8 text-primary/30 fill-primary/30" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Star className="h-6 w-6 text-secondary/30 fill-secondary/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/60 backdrop-blur-xl rounded-full text-sm border border-white/60 shadow-xl">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Making the world better, together
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Making a{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Difference
              </span>
              <br />
              <span className="relative">
                Together
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8 Q50 2, 100 8 T200 8" stroke="#6F96D1" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-xl leading-relaxed">
              Join our dedicated volunteer team as we work to create positive change
              in our community. Every action counts! 💪
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 bg-gradient-to-r from-primary to-secondary border-0">
                Join Our Team <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-xl border-white/60 hover:bg-white/80 transition-all duration-300 hover:scale-105 text-lg px-8 shadow-xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl rounded-3xl px-5 py-3 border border-white/60 shadow-xl hover:scale-105 transition-transform">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">50+</span>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-semibold">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl rounded-3xl px-5 py-3 border border-white/60 shadow-xl hover:scale-105 transition-transform">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">10K+</span>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-semibold">Hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white/60 backdrop-blur-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFtJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzY5NjIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteer team working together"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge with glassmorphism */}
            <div className="absolute -bottom-6 -right-6 bg-white/70 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/60">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Heart className="h-7 w-7 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Community</p>
                  <p className="font-bold text-lg">Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

