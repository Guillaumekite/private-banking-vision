import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const historyData = {
  totalConsultations: 12,
  keyInsights: [
    "Tax optimization: 15K€/year savings achieved",
    "Family holding created in September 2024",
    "Succession strategy validated and ongoing",
    "Diversified investment portfolio (ETF + SCPI)",
  ],
  documents: [
    { name: "Tax Report 2024.pdf", date: "Dec 10, 2024", size: "2.4 MB" },
    { name: "Holding Articles.pdf", date: "Sep 15, 2024", size: "1.8 MB" },
    { name: "Succession Plan.pdf", date: "Jun 20, 2024", size: "3.1 MB" },
  ],
  lastExchanges: [
    {
      id: 1,
      expertName: "Jean Martin",
      expertPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      date: "December 10, 2024",
      duration: "60 min",
      topic: "2024 Tax Optimization",
      summary: "In-depth discussion on tax optimization strategies for 2024. Specific recommendations on salary/dividends distribution and holding company usage.",
      recommendations: [
        "Favor dividends at 60% of total compensation",
        "Set up management fees between holding and subsidiaries",
        "Anticipate Q1 2025 social security payments",
      ],
      attachments: ["Tax_Report_2024.pdf", "Tax_Calendar_2025.xlsx"],
    },
    {
      id: 2,
      expertName: "Sophie Laurent",
      expertPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      date: "June 20, 2024",
      duration: "45 min",
      topic: "Estate Planning",
      summary: "Development of wealth transfer strategy. Discussion on gifts, life insurance and Dutreil pact.",
      recommendations: [
        "Dismemberment gift before 70 to optimize IFI",
        "Opening a life insurance for each child",
        "Signing the Dutreil pact for company shares",
      ],
      attachments: ["Succession_Plan.pdf"],
    },
  ],
};

export const AppointmentHistory = () => {
  const [expandedExchange, setExpandedExchange] = useState<number | null>(null);

  return (
    <Card className="border-primary/20 shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl">Appointment History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-subtle border-primary/10">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">
                {historyData.totalConsultations}
              </div>
              <p className="text-sm text-muted-foreground">Consultations completed</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-gradient-subtle border-primary/10">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Key Points
              </h4>
              <ul className="space-y-1.5">
                {historyData.keyInsights.map((insight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30 border-border/50">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Exchanged Documents
            </h4>
            <div className="space-y-2">
              {historyData.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.date} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Last exchanges with your experts
          </h3>

          {historyData.lastExchanges.map((exchange) => (
            <Collapsible
              key={exchange.id}
              open={expandedExchange === exchange.id}
              onOpenChange={(open) => setExpandedExchange(open ? exchange.id : null)}
            >
              <Card className="border-border/50 hover:border-primary/30 transition-all">
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={exchange.expertPhoto} alt={exchange.expertName} />
                        <AvatarFallback>
                          {exchange.expertName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 text-left space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold">{exchange.expertName}</h4>
                            <p className="text-sm text-muted-foreground">{exchange.topic}</p>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                              expandedExchange === exchange.id ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{exchange.date}</span>
                          <span>•</span>
                          <span>{exchange.duration}</span>
                          <Badge variant="secondary" className="text-xs">
                            {exchange.attachments.length} document(s)
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="px-4 pb-4 pt-0 space-y-4 border-t border-border/50 mt-2">
                    <div>
                      <h5 className="font-medium text-sm mb-2">Summary</h5>
                      <p className="text-sm text-muted-foreground">{exchange.summary}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-sm mb-2">Recommendations</h5>
                      <ul className="space-y-1.5">
                        {exchange.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-sm mb-2">Attachments</h5>
                      <div className="flex flex-wrap gap-2">
                        {exchange.attachments.map((file, idx) => (
                          <Badge key={idx} variant="outline" className="gap-1">
                            <FileText className="w-3 h-3" />
                            {file}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full sm:w-auto gap-2" variant="outline">
                      <Calendar className="w-4 h-4" />
                      Book a follow-up with {exchange.expertName.split(' ')[0]}
                    </Button>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
