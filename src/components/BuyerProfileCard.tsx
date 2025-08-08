import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Heart, 
  X, 
  MapPin, 
  DollarSign, 
  Clock, 
  Target,
  Building2,
  TrendingUp,
  User,
  Linkedin,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface BuyerProfile {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  investmentRange: string;
  timeframe: string;
  experienceLevel: string;
  industries: string[];
  avatar?: string;
  linkedinUrl?: string;
  fundingSource: string;
  acquisitionGoals: string;
  involvementLevel: string;
  verificationLevel: "basic" | "verified" | "premium";
}

interface BuyerProfileCardProps {
  buyer: BuyerProfile;
  onAccept: (buyerId: string) => void;
  onReject: (buyerId: string) => void;
  className?: string;
  expanded?: boolean;
}

const BuyerProfileCard = ({ 
  buyer, 
  onAccept, 
  onReject, 
  className = "",
  expanded = false 
}: BuyerProfileCardProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAccept = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onAccept(buyer.id);
    }, 300);
  };

  const handleReject = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onReject(buyer.id);
    }, 300);
  };

  const getVerificationBadge = () => {
    switch (buyer.verificationLevel) {
      case "premium":
        return <Badge className="bg-accent text-accent-foreground">Premium Verified</Badge>;
      case "verified":
        return <Badge variant="secondary">Verified</Badge>;
      default:
        return <Badge variant="outline">Basic</Badge>;
    }
  };

  const getExperienceColor = () => {
    switch (buyer.experienceLevel) {
      case "serial-acquirer":
        return "text-accent";
      case "experienced":
        return "text-success";
      case "some-experience":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const formatRange = (range: string) => {
    return range.replace(/-/g, ' - ').replace(/k/g, 'K').replace(/m/g, 'M');
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-smooth hover:shadow-card ${
        isAnimating ? "animate-pulse" : ""
      } ${className}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={buyer.avatar} alt={`${buyer.firstName} ${buyer.lastName}`} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                {buyer.firstName[0]}{buyer.lastName[0]}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="text-xl font-bold">
                {buyer.firstName} {buyer.lastName}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span>{buyer.location}</span>
                {buyer.linkedinUrl && (
                  <a 
                    href={buyer.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-smooth"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {getVerificationBadge()}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-accent" />
            <div>
              <div className="text-sm text-muted-foreground">Investment Range</div>
              <div className="font-semibold">{formatRange(buyer.investmentRange)}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Timeframe</div>
              <div className="font-semibold capitalize">{buyer.timeframe.replace('-', ' ')}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <TrendingUp className={`w-4 h-4 ${getExperienceColor()}`} />
            <div>
              <div className="text-sm text-muted-foreground">Experience</div>
              <div className="font-semibold capitalize">{buyer.experienceLevel.replace('-', ' ')}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-success" />
            <div>
              <div className="text-sm text-muted-foreground">Funding</div>
              <div className="font-semibold text-sm capitalize">{buyer.fundingSource.replace('-', ' ')}</div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div>
          <div className="text-sm text-muted-foreground mb-2">Interested Industries</div>
          <div className="flex flex-wrap gap-2">
            {buyer.industries.slice(0, isExpanded ? buyer.industries.length : 3).map((industry) => (
              <Badge key={industry} variant="outline" className="text-xs">
                {industry}
              </Badge>
            ))}
            {!isExpanded && buyer.industries.length > 3 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{buyer.industries.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Acquisition Goals</div>
              <p className="text-sm">{buyer.acquisitionGoals}</p>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Post-Acquisition Involvement</div>
              <p className="text-sm capitalize">{buyer.involvementLevel.replace('-', ' ')}</p>
            </div>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Show More
            </>
          )}
        </Button>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleReject}
            className="flex-1 group hover:border-destructive hover:text-destructive"
          >
            <X className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Pass
          </Button>
          
          <Button
            variant="success"
            size="lg"
            onClick={handleAccept}
            className="flex-1 group"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Connect
          </Button>
        </div>
      </CardContent>

      {/* Match Indicator */}
      {buyer.verificationLevel === "premium" && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      )}
    </Card>
  );
};

export default BuyerProfileCard;