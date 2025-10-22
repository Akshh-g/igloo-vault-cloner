import { Code, Wrench, Database, Shield, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsTabs = () => {
  const skillCategories = [
    {
      id: "languages",
      label: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "C", level: 75 },
      ],
    },
    {
      id: "frameworks",
      label: "Frameworks",
      icon: Wrench,
      skills: [
        { name: "Flask", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "React", level: 70 },
      ],
    },
    {
      id: "security",
      label: "Security Tools",
      icon: Shield,
      skills: [
        { name: "Kali Linux", level: 85 },
        { name: "Nmap", level: 90 },
        { name: "Burpsuite", level: 80 },
        { name: "Metasploit", level: 75 },
        { name: "John the Ripper", level: 80 },
      ],
    },
    {
      id: "tools",
      label: "Tools & Platforms",
      icon: Terminal,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Virtual Machines", level: 85 },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Firestore", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            My technical toolkit spanning security, development, and infrastructure
          </p>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-card/50 backdrop-blur-lg border border-border p-1 h-auto gap-1">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground py-3 text-xs md:text-sm font-semibold transition-all duration-300"
                >
                  <category.icon className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="animate-fade-in-up"
              >
                <Card className="p-8 bg-card/50 backdrop-blur-lg border-border">
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">{skill.name}</span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsTabs;
