import { useState } from "react";
import Navigation from "@/components/Navigation";
import BuyerProfileCard from "@/components/BuyerProfileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageSquare,
  Star,
  Zap
} from "lucide-react";
import { toast } from "sonner";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRange, setSelectedRange] = useState("all");

  // Mock buyer profiles
  const [buyers] = useState([
    {
      id: "1",
      firstName: "Sarah",
      lastName: "Chen",
      location: "San Francisco, CA",
      investmentRange: "500k-1m",
      timeframe: "3-months",
      experienceLevel: "experienced",
      industries: ["Technology", "SaaS", "E-commerce"],
      fundingSource: "investor-backing",
      acquisitionGoals: "Looking to acquire profitable SaaS businesses with strong recurring revenue and growth potential. Particularly interested in B2B solutions with proven market fit.",
      involvementLevel: "strategic",
      verificationLevel: "premium" as const,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2",
      firstName: "Michael",
      lastName: "Rodriguez",
      location: "Austin, TX",
      investmentRange: "1m-5m",
      timeframe: "6-months",
      experienceLevel: "serial-acquirer",
      industries: ["Manufacturing", "Construction", "Professional Services"],
      fundingSource: "combination",
      acquisitionGoals: "Serial acquirer focused on traditional businesses with strong cash flow. Looking for opportunities to scale operations and improve efficiency.",
      involvementLevel: "full-time",
      verificationLevel: "verified" as const,
      linkedinUrl: "https://linkedin.com/in/mrodriguez"
    },
    {
      id: "3",
      firstName: "Emily",
      lastName: "Johnson",
      location: "Chicago, IL",
      investmentRange: "250k-500k",
      timeframe: "immediate",
      experienceLevel: "first-time",
      industries: ["Food & Beverage", "Retail", "Healthcare"],
      fundingSource: "personal-savings",
      acquisitionGoals: "First-time buyer looking for a stable, profitable business with growth potential. Interested in businesses with strong local presence.",
      involvementLevel: "full-time",
      verificationLevel: "basic" as const
    },
    {
      id: "4",
      firstName: "David",
      lastName: "Kim",
      location: "New York, NY",
      investmentRange: "2m-5m",
      timeframe: "1-year",
      experienceLevel: "experienced",
      industries: ["Financial Services", "Real Estate", "Technology"],
      fundingSource: "sba-loan",
      acquisitionGoals: "Experienced buyer seeking businesses with strong fundamentals and expansion opportunities. Focus on companies with sustainable competitive advantages.",
      involvementLevel: "part-time",
      verificationLevel: "premium" as const,
      linkedinUrl: "https://linkedin.com/in/davidkim"
    }
  ]);

  const [matches, setMatches] = useState<string[]>([]);
  const [rejected, setRejected] = useState<string[]>([]);

  const handleAccept = (buyerId: string) => {
    setMatches(prev => [...prev, buyerId]);
    toast.success("Great! You've connected with this buyer. They'll be notified!");
  };

  const handleReject = (buyerId: string) => {
    setRejected(prev => [...prev, buyerId]);
    toast("Buyer passed. Looking for your next opportunity!", {
      icon: "👍"
    });
  };

  const filteredBuyers = buyers.filter(buyer => 
    !matches.includes(buyer.id) && 
    !rejected.includes(buyer.id) &&
    (selectedIndustry === "all" || buyer.industries.some(ind => 
      ind.toLowerCase().includes(selectedIndustry.toLowerCase())
    )) &&
    (selectedRange === "all" || buyer.investmentRange === selectedRange) &&
    (searchQuery === "" || 
      buyer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buyer.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buyer.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Buyer Marketplace</h1>
            <p className="text-muted-foreground">
              Discover qualified buyers interested in businesses like yours
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Buyers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{buyers.length}</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Matches</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{matches.length}</div>
                <p className="text-xs text-muted-foreground">Connections made</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">Platform average</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Unread conversations</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search buyers by name or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedRange} onValueChange={setSelectedRange}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Investment Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranges</SelectItem>
                    <SelectItem value="under-100k">Under $100K</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Featured Buyers */}
          {filteredBuyers.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-semibold">Featured Buyers</h2>
                <Badge className="bg-accent/10 text-accent">
                  <Zap className="w-3 h-3 mr-1" />
                  Hot
                </Badge>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredBuyers
                  .filter(buyer => buyer.verificationLevel === "premium")
                  .slice(0, 2)
                  .map((buyer) => (
                    <BuyerProfileCard
                      key={buyer.id}
                      buyer={buyer}
                      onAccept={handleAccept}
                      onReject={handleReject}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* All Buyers */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              All Buyers ({filteredBuyers.length})
            </h2>
            
            {filteredBuyers.length === 0 ? (
              <Card className="shadow-card">
                <CardContent className="text-center py-12">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No buyers found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredBuyers.map((buyer) => (
                  <BuyerProfileCard
                    key={buyer.id}
                    buyer={buyer}
                    onAccept={handleAccept}
                    onReject={handleReject}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;