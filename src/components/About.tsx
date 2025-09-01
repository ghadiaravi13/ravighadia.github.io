import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Cpu, Brain, Zap } from "lucide-react";
import hpcPattern from "@/assets/hpc-pattern.jpg";

const About = () => {
  const education = [
    {
      degree: "Master's in Electrical and Computer Engineering",
      school: "University of Texas at Austin",
      period: "2023 - Present",
      focus: "Computer Systems for AI and Machine Learning"
    }
  ];

  const skills = [
    { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Large Language Models", "RLHF"] },
    { category: "Systems", items: ["GPU Architecture", "Computer Systems", "Performance Optimization", "KV Cache Optimization"] },
    { category: "Programming", items: ["Python", "C++", "CUDA", "TensorFlow", "PyTorch"] },
    { category: "Research", items: ["Statistical Methods", "Predictive Modeling", "Performance Analysis", "System Design"] }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-datacenter relative overflow-hidden">
      {/* Background enhancement */}
      <div className="absolute inset-0 neural-network opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building efficient systems for AI at scale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Bio */}
          <div className="space-y-8">
            <Card className="p-8 shadow-datacenter transition-elastic hover:shadow-glow server-rack">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-accent">
                  <Brain className="h-5 w-5" />
                  <span className="font-medium">Current Research</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  I'm currently a first-year Master's student in Electrical and Computer Engineering at UT Austin, 
                  focusing on Computer Systems for AI and Machine Learning. I work as a research assistant with{" "}
                  <span className="text-primary font-semibold">Dr. Poulami Das</span>, where I'm improving 
                  inter-token generation latency during LLM inference by tuning KV cache size using predictive ML methods.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-datacenter transition-elastic hover:shadow-glow server-rack">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-accent">
                  <Cpu className="h-5 w-5" />
                  <span className="font-medium">Professional Experience</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Previously, I worked as a GPU Architect at{" "}
                  <span className="text-accent font-semibold">NVIDIA, Bengaluru</span>, focusing on GPU Architecture 
                  optimization. I built ML-powered predictive models to project performance for NVIDIA's future products 
                  and helped build analytical models to debug inefficiencies in current products, particularly for 
                  the gaming market including NVIDIA DLSS.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-datacenter transition-elastic hover:shadow-glow server-rack">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-accent">
                  <Zap className="h-5 w-5" />
                  <span className="font-medium">Research Vision</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  My research interests lie in designing efficient systems for running massive AI models. 
                  I'm interested in using statistical methods, Reinforcement Learning, and optimization algorithms 
                  to design efficient end-to-end AI systems. I'm also passionate about NLP, particularly 
                  Large Language Models, RLHF, and interactive systems.
                </p>
              </div>
            </Card>
          </div>

          {/* Right column - Skills & Education */}
          <div className="space-y-8">
            {/* Education with enhanced styling */}
            <Card className="p-8 shadow-datacenter server-rack">
              <h3 className="text-2xl font-bold mb-6 text-primary">Education & Focus</h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.period}</p>
                  <p className="text-accent text-sm font-medium">{edu.focus}</p>
                </div>
              ))}
            </Card>

            {/* Enhanced Skills */}
            <Card className="p-8 shadow-datacenter relative overflow-hidden server-rack">
              <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${hpcPattern})` }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technical Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-accent mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary" 
                            className="transition-elastic hover:bg-primary/30 hover:text-primary hover:shadow-accent transform hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;