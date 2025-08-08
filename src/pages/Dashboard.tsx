import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Calendar,
  Brain,
  Shield,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  AlertTriangle,
  Upload,
  Download,
  Eye
} from "lucide-react";

const Dashboard = () => {
  const [activeDeals] = useState([
    {
      id: "1",
      buyerName: "Sarah Chen",
      businessType: "SaaS Platform",
      stage: "Due Diligence",
      progress: 65,
      value: "$750K",
      timeline: "3 weeks remaining",
      lastActivity: "2 hours ago",
      riskLevel: "low",
      aiInsights: "Strong financials, minimal risk factors identified"
    },
    {
      id: "2", 
      buyerName: "Michael Rodriguez",
      businessType: "Manufacturing",
      stage: "Negotiation",
      progress: 40,
      value: "$2.1M",
      timeline: "5 weeks remaining", 
      lastActivity: "1 day ago",
      riskLevel: "medium",
      aiInsights: "Some discrepancies in inventory valuation require attention"
    }
  ]);

  const [aiSuggestions] = useState([
    {
      type: "financial",
      title: "Upload Q3 Financial Statements",
      description: "Complete your financial documentation to increase buyer confidence",
      priority: "high"
    },
    {
      type: "legal",
      title: "Review Non-Disclosure Agreement", 
      description: "New NDA from Sarah Chen requires your review",
      priority: "medium"
    },
    {
      type: "optimization",
      title: "Optimize Business Valuation",
      description: "Our AI suggests highlighting your recurring revenue model",
      priority: "low"
    }
  ]);

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "low":
        return <Badge className="bg-success/10 text-success">Low Risk</Badge>;
      case "medium":
        return <Badge className="bg-warning/10 text-warning">Medium Risk</Badge>;
      case "high":
        return <Badge className="bg-destructive/10 text-destructive">High Risk</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "medium":
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Deal Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your active deals and track progress with AI-powered insights
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeDeals.length}</div>
                <p className="text-xs text-muted-foreground">+1 this week</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.85M</div>
                <p className="text-xs text-muted-foreground">Total potential value</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Deal Time</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89 days</div>
                <p className="text-xs text-muted-foreground">12% faster than average</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">91%</div>
                <p className="text-xs text-muted-foreground">Above platform avg</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="deals" className="space-y-6">
            <TabsList className="grid w-full md:w-auto md:grid-cols-4">
              <TabsTrigger value="deals">Active Deals</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="deals" className="space-y-6">
              {/* Active Deals */}
              <div className="grid gap-6">
                {activeDeals.map((deal) => (
                  <Card key={deal.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <span>{deal.buyerName}</span>
                            {getRiskBadge(deal.riskLevel)}
                          </CardTitle>
                          <CardDescription>{deal.businessType}</CardDescription>
                        </div>
                        <Badge variant="outline">{deal.stage}</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Deal Value</div>
                          <div className="text-lg font-semibold">{deal.value}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                          <div className="text-lg font-semibold">{deal.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Last Activity</div>
                          <div className="text-lg font-semibold">{deal.lastActivity}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{deal.progress}%</span>
                        </div>
                        <Progress value={deal.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-start space-x-2 p-3 bg-primary/5 rounded-lg">
                        <Brain className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div className="text-sm">
                          <div className="font-medium text-primary mb-1">AI Insight</div>
                          <div className="text-muted-foreground">{deal.aiInsights}</div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message Buyer
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View Documents
                        </Button>
                        <Button variant="warm" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-insights" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>AI-Powered Recommendations</span>
                  </CardTitle>
                  <CardDescription>
                    Smart suggestions to optimize your deal flow and increase success rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                        {getPriorityIcon(suggestion.priority)}
                        <div className="flex-1">
                          <div className="font-medium mb-1">{suggestion.title}</div>
                          <div className="text-sm text-muted-foreground mb-3">
                            {suggestion.description}
                          </div>
                          <Button variant="outline" size="sm">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-success" />
                    <span>Secure Document Center</span>
                  </CardTitle>
                  <CardDescription>
                    Manage and share confidential documents with AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Quick Actions</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Financial Statements
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Business Summary
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Download className="w-4 h-4 mr-2" />
                          Download Data Room
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold">Document Status</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Financial Statements</span>
                          <Badge className="bg-success/10 text-success">Complete</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Legal Documents</span>
                          <Badge className="bg-warning/10 text-warning">In Review</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Operational Reports</span>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Deal Flow Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Inquiries This Month</span>
                        <span className="font-semibold">23</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Qualified Leads</span>
                        <span className="font-semibold">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Active Negotiations</span>
                        <span className="font-semibold">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Conversion Rate</span>
                        <span className="font-semibold">52%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-success/10 rounded-lg">
                        <div className="text-sm font-medium text-success">Top Performing</div>
                        <div className="text-sm text-muted-foreground">
                          Your business profile views are 34% above average
                        </div>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <div className="text-sm font-medium text-primary">Opportunity</div>
                        <div className="text-sm text-muted-foreground">
                          Adding customer testimonials could increase interest by 18%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;