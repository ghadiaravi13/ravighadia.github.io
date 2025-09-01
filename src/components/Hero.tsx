import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tech grid */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 tech-grid" />
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-accent/40 rounded-full animate-float" />
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-primary-glow/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent-glow/30 rounded-full animate-float" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ravi Ghadia
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            AI Systems Engineer & Research Enthusiast
          </div>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building efficient systems for massive AI models at{" "}
            <span className="text-primary font-semibold">UT Austin</span> and{" "}
            <span className="text-accent font-semibold">NVIDIA</span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="backdrop-blur-sm">
            Download Resume
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="social-icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="social-icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="social-icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;