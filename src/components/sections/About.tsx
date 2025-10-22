const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a cybersecurity enthusiast and web developer currently pursuing my BCA with specialization in 
              Cybersecurity at Jaipur National University. With a strong foundation in both offensive security 
              and full-stack development, I bridge the gap between building secure applications and understanding 
              how they can be compromised.
            </p>
            
            <p>
              My journey in technology is driven by curiosity and a passion for understanding complex systems. 
              From developing offensive security tools to creating responsive web applications, I'm constantly 
              exploring new technologies and methodologies to enhance my skills.
            </p>
            
            <p>
              I've achieved recognition in national-level competitions, including winning a gold medal at the 
              Code War hackathon and ranking 7th in a CTF event with 400+ participants. These experiences have 
              strengthened my problem-solving abilities and technical expertise.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8.6</div>
              <div className="text-sm text-muted-foreground">Current GPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
