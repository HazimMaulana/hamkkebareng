import { Heart, Users, Target, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and care in everything we do",
      color: "from-pink-400 to-primary",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger connections and supporting each other",
      color: "from-primary to-secondary",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focused on creating meaningful and lasting change",
      color: "from-secondary to-purple-500",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full text-sm mb-6 border border-white/60 shadow-xl">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-semibold">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Our Mission
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We are a passionate group of volunteers dedicated to making our
            community a better place. Through collaborative efforts and
            unwavering commitment, we tackle challenges and create opportunities
            for positive change. ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group order-2 md:order-1">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 border-4 border-white/60 backdrop-blur-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwcGVvcGxlfGVufDF8fHx8MTc2NzY5NjIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers helping people"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-[2rem] opacity-20 blur-xl" />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold">Our Story 📖</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Founded in 2020, our volunteer team has grown from a small group of
              dedicated individuals to a thriving community of changemakers. We've
              completed over 50 projects, volunteered 10,000+ hours, and touched
              countless lives.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our work spans various initiatives including community outreach,
              environmental conservation, education support, and emergency relief.
              Every project we undertake is driven by our core values and
              commitment to excellence.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="flex-1 bg-white/70 backdrop-blur-2xl rounded-3xl p-5 border border-white/60 shadow-xl hover:scale-105 transition-transform">
                <p className="text-3xl font-bold text-primary mb-1">2020</p>
                <p className="text-sm text-foreground/70">Founded</p>
              </div>
              <div className="flex-1 bg-white/70 backdrop-blur-2xl rounded-3xl p-5 border border-white/60 shadow-xl hover:scale-105 transition-transform">
                <p className="text-3xl font-bold text-secondary mb-1">50+</p>
                <p className="text-sm text-foreground/70">Projects</p>
              </div>
              <div className="flex-1 bg-white/70 backdrop-blur-2xl rounded-3xl p-5 border border-white/60 shadow-xl hover:scale-105 transition-transform">
                <p className="text-3xl font-bold text-secondary mb-1">10K+</p>
                <p className="text-sm text-foreground/70">Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group bg-white/70 backdrop-blur-2xl"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

