import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import SkillsTabs from "@/components/sections/SkillsTabs";
import ProjectsTabs from "@/components/sections/ProjectsTabs";
import Certifications from "@/components/sections/Certifications";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <SkillsTabs />
        <ProjectsTabs />
        <Certifications />
        <Awards />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
