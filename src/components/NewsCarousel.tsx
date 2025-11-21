import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, TrendingUp, Award } from "lucide-react";

const newsItems = [
  {
    icon: Calendar,
    title: "Webinar Stratégie",
    description: "Optimisation fiscale 2025",
    date: "15 Jan",
  },
  {
    icon: TrendingUp,
    title: "Marchés",
    description: "Perspectives T1 2025",
    date: "12 Jan",
  },
  {
    icon: Award,
    title: "Événement",
    description: "Forum Entrepreneurs",
    date: "20 Jan",
  },
];

export const NewsCarousel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">En ce moment</h3>
        <button className="text-sm text-secondary hover:text-accent flex items-center gap-1 transition-colors">
          Voir tout
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                  <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
