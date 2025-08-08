import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Revolutionizing Business Acquisitions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Where Business
              <span className="block text-accent"> Dreams Connect</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              The first platform where sellers find buyers. Skip the brokers, 
              reduce friction, and close deals faster with AI-powered matching 
              and streamlined workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/onboarding">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">10K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Bank-level Security</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Business professionals connecting through digital platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card shadow-card rounded-xl p-6 border">
              <div className="text-2xl font-bold text-primary">$2.3B+</div>
              <div className="text-sm text-muted-foreground">Deals Facilitated</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card shadow-card rounded-xl p-6 border">
              <div className="text-2xl font-bold text-success">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;