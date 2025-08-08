import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [selectedType, setSelectedType] = useState<"buyer" | "seller" | null>(null);

  const userTypes = [
    {
      type: "buyer" as const,
      icon: User,
      title: "I'm Looking to Buy",
      description: "Find and acquire businesses that match your investment criteria",
      features: [
        "Browse verified business listings",
        "Receive seller invitations",
        "Access AI-powered deal analysis",
        "Connect with acquisition experts"
      ],
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      iconColor: "text-primary"
    },
    {
      type: "seller" as const,
      icon: Building2,
      title: "I'm Ready to Sell",
      description: "Connect with qualified buyers and streamline your exit process",
      features: [
        "Create compelling business profiles",
        "Discover potential buyers",
        "Initiate confidential conversations",
        "Guided exit workflow"
      ],
      bgColor: "bg-accent/5",
      borderColor: "border-accent/20",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to DealConnect
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's get you set up with the right tools for your journey
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {userTypes.map((userType) => {
              const isSelected = selectedType === userType.type;
              return (
                <Card
                  key={userType.type}
                  className={`cursor-pointer transition-smooth hover:shadow-card ${
                    isSelected
                      ? "ring-2 ring-primary shadow-primary"
                      : "hover:shadow-secondary"
                  }`}
                  onClick={() => setSelectedType(userType.type)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${userType.bgColor}`}>
                        <userType.icon className={`w-8 h-8 ${userType.iconColor}`} />
                      </div>
                      {isSelected && (
                        <div className="p-1 bg-primary rounded-full">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{userType.title}</CardTitle>
                    <CardDescription className="text-base">
                      {userType.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {userType.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className="text-center">
            {selectedType ? (
              <Button 
                variant="hero" 
                size="lg" 
                asChild
                className="group"
              >
                <Link to={`/onboarding/${selectedType}`}>
                  Continue as {selectedType === "buyer" ? "Buyer" : "Seller"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="lg" disabled>
                Select your role to continue
              </Button>
            )}
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Badge variant="secondary" className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Secure & Confidential</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Takes 3 minutes</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No commitment</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;