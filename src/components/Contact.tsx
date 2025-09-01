import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss AI systems, research opportunities, or potential collaborations
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-foreground leading-relaxed mb-8">
                I'm always interested in discussing cutting-edge research in AI systems, 
                potential collaboration opportunities, or sharing insights about machine learning 
                and computer systems optimization.
              </p>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>ravi.ghadia@utexas.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>Austin, Texas</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="social-icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="social-icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="social-icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="What would you like to discuss?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-3xl mx-auto shadow-elegant bg-gradient-subtle">
            <h3 className="text-2xl font-bold mb-4 text-primary">Research Collaboration</h3>
            <p className="text-foreground mb-6 leading-relaxed">
              Interested in collaborating on AI systems research or discussing opportunities 
              in machine learning optimization? I'd love to hear from you.
            </p>
            <Button variant="outline" size="lg">
              View My Publications
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;