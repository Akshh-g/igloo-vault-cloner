import { Trophy, Medal, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "National Level Hackathon Winner",
      description: "Won Gold Medal at 'Code War' event held at RIET Jaipur",
      highlight: true,
    },
    {
      icon: Medal,
      title: "CTF Competition - 7th Place",
      description: "Ranked 7th out of 400+ participants in CTF event conducted by Cybercure Technologies",
      highlight: false,
    },
  ];

  return (
    <section id="awards" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Honors & Awards
          </h2>
          
          <div className="space-y-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className={`p-8 bg-card/50 backdrop-blur border-border hover-glow ${
                  award.highlight ? "border-primary/50" : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg ${
                    award.highlight ? "bg-gradient-to-br from-primary/20 to-secondary/20" : "bg-primary/10"
                  }`}>
                    <award.icon className={`h-8 w-8 ${
                      award.highlight ? "text-primary" : "text-primary"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                    <p className="text-lg text-muted-foreground">{award.description}</p>
                  </div>
                  
                  {award.highlight && (
                    <div className="hidden md:block">
                      <Target className="h-12 w-12 text-primary/30" />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
