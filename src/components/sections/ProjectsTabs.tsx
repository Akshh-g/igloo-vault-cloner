import { useState } from "react";
import { ExternalLink, Github, Shield, Code, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsTabs = () => {
  const categories = [
    {
      id: "security",
      label: "Security Tools",
      icon: Shield,
      projects: [
        {
          title: "Keylogger",
          description: "Created an offensive security tool to capture keystrokes, screenshots, and audio. Added system info gathering, multithreading, and automated email reporting. Built project to understand attacker techniques and strengthen red team skills.",
          tech: ["Python", "Security", "Multithreading", "Email API"],
          link: "https://github.com/akshatgoswami/keylogger",
        },
        {
          title: "IP-Toolkit",
          description: "Built a custom Python tool for network reconnaissance and enumeration. Features include IP validation, host discovery (ping), reverse DNS lookup, WHOIS lookup, geolocation via API, and common port scanning. Automates initial recon steps useful in red teaming and penetration testing engagements.",
          tech: ["Python", "Networking", "Security", "API Integration"],
          link: "https://github.com/akshatgoswami/ip-toolkit",
        },
      ],
    },
    {
      id: "web",
      label: "Web Development",
      icon: Code,
      projects: [
        {
          title: "Password-Checker-and-logger",
          description: "Password strength checker based on entropy calculation. Classifies password as Very Weak, Weak, Moderate, Strong, Very Strong. Also logs the result via Email using EmailJS.",
          tech: ["JavaScript", "HTML", "CSS", "EmailJS"],
          link: "https://github.com/akshatgoswami/password-checker",
        },
        {
          title: "Portfolio Website",
          description: "Developed a personal portfolio site using HTML5 & CSS3 with responsive design principles. Showcases frontend development skills, UI/UX styling, and deployment on GitHub.",
          tech: ["HTML", "CSS", "Responsive Design"],
          link: "https://github.com/akshatgoswami/portfolio",
        },
      ],
    },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: Globe,
      projects: [
        {
          title: "Aasthas-Creations",
          description: "Partnered with a local business to convert their offline model into a full-fledged e-commerce platform. Developed and deployed a custom gift hamper website with ordering, personalization, and WhatsApp API integration.",
          tech: ["HTML", "CSS", "JavaScript", "WhatsApp API", "E-commerce"],
          link: "https://github.com/akshatgoswami/aasthas-creations",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Explore my work across security tools, web development, and full-stack applications
          </p>

          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 backdrop-blur-lg border border-border p-1 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold transition-all duration-300"
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-6 animate-fade-in-up"
              >
                {category.projects.map((project, index) => (
                  <Card
                    key={index}
                    className="p-8 bg-card/50 backdrop-blur-lg border-border hover-glow transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="hover:text-primary transition-colors"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        </div>

                        <p className="text-lg text-muted-foreground mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary transition-all hover:bg-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTabs;
