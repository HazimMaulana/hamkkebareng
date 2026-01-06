import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full text-sm mb-6 border border-white/60 shadow-xl">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Interested in joining our team or learning more about our work? We'd
            love to hear from you! 💬
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group bg-white/70 backdrop-blur-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Email Us</h4>
                <p className="text-foreground/70">info@volunteerteam.org</p>
                <p className="text-sm text-foreground/50 mt-1">We reply within 24 hours ⚡</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group bg-white/70 backdrop-blur-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Call Us</h4>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
                <p className="text-sm text-foreground/50 mt-1">Mon-Fri, 9am-5pm 📞</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group bg-white/70 backdrop-blur-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Visit Us</h4>
                <p className="text-foreground/70">
                  123 Community Street
                  <br />
                  Volunteer City, VC 12345
                </p>
                <p className="text-sm text-foreground/50 mt-1">Come say hi! 👋</p>
              </div>
            </Card>

            {/* Fun fact card with glassmorphism */}
            <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 border-2 border-white/60 shadow-xl">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-bold mb-2">Did you know?</p>
              <p className="text-sm text-foreground/70">
                90% of our volunteers heard about us through word of mouth.
                Spread the word and help us grow!
              </p>
            </div>
          </div>

          <Card className="p-8 md:p-10 shadow-2xl border-2 border-white/60 hover:border-white/80 rounded-[2rem] bg-white/70 backdrop-blur-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-3 font-semibold">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="h-12 rounded-2xl border-2 border-white/60 bg-white/50 backdrop-blur-xl focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 font-semibold">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="h-12 rounded-2xl border-2 border-white/60 bg-white/50 backdrop-blur-xl focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 font-semibold">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how you'd like to get involved... ✨"
                  rows={6}
                  className="rounded-2xl border-2 border-white/60 bg-white/50 backdrop-blur-xl focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 gap-2 text-lg bg-gradient-to-r from-primary to-secondary border-0"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>

              <p className="text-center text-sm text-foreground/60">
                We'll get back to you as soon as possible! 🚀
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

