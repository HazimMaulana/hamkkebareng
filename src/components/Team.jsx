import { Card } from "./ui/card";
import { Mail, Linkedin, Sparkles } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Team Lead",
      initials: "SJ",
      gradient: "from-pink-400 to-primary",
      emoji: "🌟",
    },
    {
      name: "Michael Chen",
      role: "Project Coordinator",
      initials: "MC",
      gradient: "from-primary to-secondary",
      emoji: "🚀",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach",
      initials: "ER",
      gradient: "from-secondary to-purple-500",
      emoji: "💜",
    },
    {
      name: "David Kim",
      role: "Logistics Manager",
      initials: "DK",
      gradient: "from-primary to-cyan-400",
      emoji: "⚡",
    },
    {
      name: "Lisa Thompson",
      role: "Communications Lead",
      initials: "LT",
      gradient: "from-pink-400 to-orange-400",
      emoji: "✨",
    },
    {
      name: "James Wilson",
      role: "Volunteer Coordinator",
      initials: "JW",
      gradient: "from-secondary to-primary",
      emoji: "🎯",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full text-sm mb-6 border border-white/60 shadow-xl">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-semibold">Our Amazing Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            The dedicated individuals who make our mission possible. Each member
            brings unique skills, passion, and commitment to our cause. 🎉
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group relative overflow-hidden bg-white/70 backdrop-blur-2xl"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-28 h-28 rounded-[2rem] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-xl bg-gradient-to-br ${member.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {member.initials}
                </div>
                
                {/* Fun emoji badge with glass effect */}
                <div className="absolute top-6 right-6 text-3xl bg-white/60 backdrop-blur-xl rounded-2xl w-14 h-14 flex items-center justify-center border border-white/60 shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {member.emoji}
                </div>
                
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-foreground/60 mb-6">{member.role}</p>
                
                <div className="flex justify-center gap-3">
                  <button className="p-3 bg-white/60 backdrop-blur-xl border border-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 hover:scale-110 group/btn shadow-lg">
                    <Mail className="h-5 w-5 text-primary group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-3 bg-white/60 backdrop-blur-xl border border-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 hover:scale-110 group/btn shadow-lg">
                    <Linkedin className="h-5 w-5 text-primary group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun CTA with glassmorphism */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/70 backdrop-blur-2xl rounded-[2rem] p-8 border-2 border-white/60 shadow-2xl hover:scale-105 transition-transform">
            <p className="text-xl font-bold mb-2">Want to join our team? 🙌</p>
            <p className="text-foreground/70 mb-4">We're always looking for passionate volunteers!</p>
            <a href="#contact" className="text-primary hover:text-secondary font-semibold transition-colors">
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

