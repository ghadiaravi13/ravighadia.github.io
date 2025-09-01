import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Cpu, Zap } from "lucide-react";
import datacenterHero from "@/assets/datacenter-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced datacenter background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 datacenter-grid" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${datacenterHero})` }}
        />
      </div>
      
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Data processing indicators */}
        <div className="absolute top-20 left-20 w-1 h-16 processing-indicator opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-12 processing-indicator opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1 h-20 processing-indicator opacity-50" style={{ animationDelay: '2s' }} />
        
        {/* Neural network nodes */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-60 right-1/4 w-3 h-3 bg-accent/50 rounded-full animate-neural-pulse" />
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-primary-glow/30 rounded-full animate-float" />
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-accent-glow/40 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
        {/* HPC connection lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-data-flow" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-flow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main content with enhanced sophistication */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-slide-up">
          {/* Premium title with better contrast */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-2 text-foreground tracking-tight">
              Ravi Ghadia
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="text-xl md:text-3xl text-primary mb-4 font-semibold tracking-wide">
            AI Systems Engineer & Research Innovator
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-accent">
              <Cpu className="h-5 w-5" />
              <span className="text-sm font-medium">High-Performance Computing</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">GPU Architecture</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Architecting next-generation systems for massive AI models at{" "}
            <span className="text-primary font-semibold">UT Austin</span> and formerly at{" "}
            <span className="text-accent font-semibold">NVIDIA</span>
          </p>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="group datacenter-glow">
            Explore My Research
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="backdrop-blur-sm border-primary/30 hover:border-primary/60">
            Download CV
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