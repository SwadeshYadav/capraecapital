import { Brain, Shield, Zap, Target, Users, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Seller-First Matching",
      description: "Flip the script. Sellers discover and reach out to qualified buyers, creating more meaningful connections."
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Smart document analysis, financial summarization, and deal risk assessment powered by advanced AI."
    },
    {
      icon: Zap,
      title: "Streamlined Workflows",
      description: "Guided acquisition process with automated milestones, reducing friction and maximizing deal success."
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Bank-level security with encrypted data rooms and controlled information sharing."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with verified legal, financial, and business experts when you need professional guidance."
    },
    {
      icon: TrendingUp,
      title: "Success Optimization",
      description: "Data-driven insights and recommendations to increase your deal completion probability."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built for Modern Deal Making
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with deep business expertise 
            to transform how acquisitions happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-8 rounded-xl border bg-card shadow-card hover:shadow-primary transition-smooth group"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;