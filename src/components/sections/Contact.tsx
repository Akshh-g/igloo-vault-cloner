import { Mail, Linkedin, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 hover-glow rounded-lg">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:akshatgoswami2006@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  akshatgoswami2006@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 hover-glow rounded-lg">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/akshat-puri-goswami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Connect with me
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 hover-glow rounded-lg">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex justify-center gap-4">
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
                
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <a href="mailto:akshatgoswami2006@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>© 2025 Akshat Puri Goswami. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
