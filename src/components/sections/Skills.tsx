import { Code, Wrench, Database, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C", "HTML", "CSS", "JavaScript"],
      color: "text-primary",
    },
    {
      icon: Wrench,
      title: "Libraries & Frameworks",
      skills: ["OpenCV", "Flask", "React"],
      color: "text-secondary",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "Google Firebase", "Google Firestore"],
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Security Tools",
      skills: ["Kali Linux", "Nmap", "Burpsuite", "John the Ripper", "Metasploit", "Virtual Machines"],
      color: "text-secondary",
    },
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "AI Tools", "Linux", "Windows"
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover-glow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur border-border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
