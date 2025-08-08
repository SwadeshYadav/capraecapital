import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, DollarSign, Target, User } from "lucide-react";
import { Link } from "react-router-dom";

const BuyerOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    
    // Investment Profile
    investmentRange: "",
    timeframe: "",
    fundingSource: "",
    experienceLevel: "",
    
    // Business Preferences
    industries: [] as string[],
    businessTypes: [] as string[],
    geographicPreference: "",
    employeeRange: "",
    
    // Deal Structure
    acquisitionGoals: "",
    dealStructurePreference: "",
    involvementLevel: "",
    specialRequirements: ""
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const industries = [
    "Technology", "Healthcare", "Manufacturing", "Retail", "Food & Beverage",
    "Professional Services", "Real Estate", "Education", "Financial Services",
    "E-commerce", "SaaS", "Construction", "Transportation"
  ];

  const toggleIndustry = (industry: string) => {
    const current = formData.industries;
    if (current.includes(industry)) {
      updateFormData("industries", current.filter(i => i !== industry));
    } else {
      updateFormData("industries", [...current, industry]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Tell us about yourself</h2>
              <p className="text-muted-foreground">Help sellers understand who you are</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="John"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Smith"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">LinkedIn Profile (Optional)</Label>
              <Input
                id="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={(e) => updateFormData("linkedinUrl", e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Investment Profile</h2>
              <p className="text-muted-foreground">Share your financial capacity and timeline</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investmentRange">Investment Range</Label>
              <Select value={formData.investmentRange} onValueChange={(value) => updateFormData("investmentRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your investment range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-100k">Under $100K</SelectItem>
                  <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                  <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                  <SelectItem value="over-10m">Over $10M</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeframe">Investment Timeframe</Label>
              <Select value={formData.timeframe} onValueChange={(value) => updateFormData("timeframe", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When are you looking to acquire?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Ready to buy now</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                  <SelectItem value="1-year">Within 1 year</SelectItem>
                  <SelectItem value="exploring">Just exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fundingSource">Primary Funding Source</Label>
              <Select value={formData.fundingSource} onValueChange={(value) => updateFormData("fundingSource", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How will you fund the acquisition?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal-savings">Personal Savings</SelectItem>
                  <SelectItem value="investor-backing">Investor Backing</SelectItem>
                  <SelectItem value="sba-loan">SBA Loan</SelectItem>
                  <SelectItem value="bank-financing">Bank Financing</SelectItem>
                  <SelectItem value="seller-financing">Seller Financing</SelectItem>
                  <SelectItem value="combination">Combination</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experienceLevel">Acquisition Experience</Label>
              <Select value={formData.experienceLevel} onValueChange={(value) => updateFormData("experienceLevel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">First-time buyer</SelectItem>
                  <SelectItem value="some-experience">Some experience (1-2 deals)</SelectItem>
                  <SelectItem value="experienced">Experienced (3+ deals)</SelectItem>
                  <SelectItem value="serial-acquirer">Serial acquirer (10+ deals)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Business Preferences</h2>
              <p className="text-muted-foreground">What type of business are you looking for?</p>
            </div>
            
            <div className="space-y-4">
              <Label>Industries of Interest (Select all that apply)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className={`p-3 rounded-lg border cursor-pointer transition-smooth ${
                      formData.industries.includes(industry)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card hover:bg-accent/50 border-border"
                    }`}
                    onClick={() => toggleIndustry(industry)}
                  >
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="geographicPreference">Geographic Preference</Label>
              <Select value={formData.geographicPreference} onValueChange={(value) => updateFormData("geographicPreference", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Where are you willing to buy?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local area only</SelectItem>
                  <SelectItem value="regional">Regional (within 2-3 hours)</SelectItem>
                  <SelectItem value="national">Anywhere in the country</SelectItem>
                  <SelectItem value="remote">Remote businesses preferred</SelectItem>
                  <SelectItem value="no-preference">No preference</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="employeeRange">Preferred Team Size</Label>
              <Select value={formData.employeeRange} onValueChange={(value) => updateFormData("employeeRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How many employees?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Solo operation</SelectItem>
                  <SelectItem value="small">Small team (2-10)</SelectItem>
                  <SelectItem value="medium">Medium team (11-50)</SelectItem>
                  <SelectItem value="large">Large team (50+)</SelectItem>
                  <SelectItem value="no-preference">No preference</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Final Details</h2>
              <p className="text-muted-foreground">Help us match you with the right opportunities</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="acquisitionGoals">What are your main goals for this acquisition?</Label>
              <Textarea
                id="acquisitionGoals"
                value={formData.acquisitionGoals}
                onChange={(e) => updateFormData("acquisitionGoals", e.target.value)}
                placeholder="E.g., Looking for passive income, want to scale an existing business, seeking new market entry..."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="involvementLevel">Post-Acquisition Involvement</Label>
              <Select value={formData.involvementLevel} onValueChange={(value) => updateFormData("involvementLevel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How involved do you want to be?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hands-off">Hands-off investor</SelectItem>
                  <SelectItem value="part-time">Part-time involvement</SelectItem>
                  <SelectItem value="full-time">Full-time operation</SelectItem>
                  <SelectItem value="strategic">Strategic oversight only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="specialRequirements">Any special requirements or preferences?</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => updateFormData("specialRequirements", e.target.value)}
                placeholder="E.g., Must be profitable, prefer recurring revenue, need seller financing..."
                rows={3}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Buyer Profile Setup</h1>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Form Card */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              {renderStep()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/onboarding">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                variant="warm"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button variant="success" asChild>
                <Link to="/dashboard">
                  Complete Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerOnboarding;