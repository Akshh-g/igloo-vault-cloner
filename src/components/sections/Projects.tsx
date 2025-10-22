import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Keylogger",
      description: "Created an offensive security tool to capture keystrokes, screenshots, and audio. Added system info gathering, multithreading, and automated email reporting. Built project to understand attacker techniques and strengthen red team skills.",
      tech: ["Python", "Security", "Multithreading"],
      link: "https://github.com/akshatgoswami/keylogger",
      highlight: true,
    },
    {
      title: "IP-Toolkit",
      description: "Built a custom Python tool for network reconnaissance and enumeration. Features include IP validation, host discovery (ping), reverse DNS lookup, WHOIS lookup, geolocation via API, and common port scanning. Automates initial recon steps useful in red teaming and penetration testing engagements.",
      tech: ["Python", "Networking", "Security"],
      link: "https://github.com/akshatgoswami/ip-toolkit",
      highlight: true,
    },
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
    {
      title: "Aasthas-Creations",
      description: "Partnered with a local business to convert their offline model into a full-fledged e-commerce platform. Developed and deployed a custom gift hamper website with ordering, personalization, and WhatsApp API integration.",
      tech: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
      link: "https://github.com/akshatgoswami/aasthas-creations",
      highlight: true,
    },
  ];

  return (
    <section id="projects" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-border hover-glow ${
                  project.highlight ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
