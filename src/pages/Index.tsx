import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code2, Palette, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Muhammad Yahya
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Front-End Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Building beautiful, responsive web applications with React, TypeScript, and modern web technologies
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
          <Card className="glass-card p-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate front-end developer specializing in creating exceptional digital experiences. 
              With expertise in React, TypeScript, and modern web technologies, I transform ideas into 
              beautiful, performant applications that users love.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS</p>
            </Card>
            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Palette className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">Responsive Design, Animation, User Experience</p>
            </Card>
            <Card className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">Optimization, SEO, Best Practices</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="glass-card overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <Button variant="outline" className="border-primary/50 hover:border-primary">
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary-glow">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Muhammad Yahya. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
