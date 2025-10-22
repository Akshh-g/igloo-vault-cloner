import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
              Cyber Security Specialist
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Akshat Puri Goswami
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Enthusiast of Cyber Forensics and Web Development
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BCA Student specializing in Cybersecurity at Jaipur National University. 
            Passionate about offensive security, red teaming, and building secure web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a href="https://linkedin.com/in/akshat-puri-goswami" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a href="https://github.com/akshatgoswami" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
