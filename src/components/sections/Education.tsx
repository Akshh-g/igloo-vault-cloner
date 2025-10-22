import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border hover-glow">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
                <p className="text-xl text-primary mb-4">Specialization in CyberSecurity</p>
                <p className="text-lg font-semibold mb-4">Jaipur National University</p>
                
                <div className="flex flex-wrap gap-6 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2024 - 2027</span>
                  </div>
                </div>
                
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
                  <span className="text-primary font-bold text-lg">GPA: 8.6</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
