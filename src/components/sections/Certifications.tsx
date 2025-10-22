import { Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Advanced Cyber Security",
      issuer: "Great Learning",
    },
    {
      title: "HTML Programming",
      issuer: "IIT Bombay",
    },
    {
      title: "Ethical Hacking and Cybersecurity",
      issuer: "Bitten Tech Solutions",
    },
    {
      title: "C Programming",
      issuer: "IIT Bombay",
    },
  ];

  return (
    <section id="certifications" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
