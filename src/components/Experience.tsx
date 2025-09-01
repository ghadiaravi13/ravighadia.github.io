import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "University of Texas at Austin",
      location: "Austin, TX",
      period: "2023 - Present",
      type: "Research",
      description: "Working with Dr. Poulami Das on improving inter-token generation latency during LLM inference by tuning KV cache size using predictive ML methods.",
      technologies: ["Machine Learning", "LLM Optimization", "Performance Analysis", "Python"],
      highlights: ["KV Cache Optimization", "Predictive Modeling", "Latency Reduction"]
    },
    {
      role: "GPU Architect",
      company: "NVIDIA",
      location: "Bengaluru, India",
      period: "Previous Role",
      type: "Industry",
      description: "Worked on GPU Architecture optimization, building ML-powered predictive models to project performance for NVIDIA's future products and analytical models to debug inefficiencies in current products.",
      technologies: ["GPU Architecture", "Performance Modeling", "CUDA", "Machine Learning", "DLSS"],
      highlights: ["Future Product Performance", "Gaming Market Optimization", "NVIDIA DLSS", "Analytical Models"]
    },
    {
      role: "Part-time Researcher", 
      company: "H2Lab, University of Washington",
      location: "Seattle, WA",
      period: "Research Project",
      type: "Research",
      description: "Worked with Prof. Prithviraj Ammanabrolu on deriving rewards from freeform linguistic feedback to train Large Language Models using Reinforcement Learning.",
      technologies: ["Reinforcement Learning", "NLP", "RLHF", "Large Language Models", "Python"],
      highlights: ["Linguistic Feedback", "RL for LLMs", "RLHF Innovation", "Interactive Systems"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      {/* Subtle datacenter atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of AI systems across research and industry
          </p>
        </div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
            <Card key={index} className="p-8 shadow-datacenter transition-elastic hover:shadow-glow group server-rack">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-smooth">
                          {exp.role}
                        </h3>
                        <Badge 
                          variant={exp.type === "Research" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium text-accent">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-accent border-accent/30">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="hover:bg-primary/20 transition-smooth">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;