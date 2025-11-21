import { Card } from "@/components/ui/card";
import { TrendingUp, Scale, FileText, Calculator, Users, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const resources = [
  { icon: TrendingUp, title: "Investment", color: "text-accent", path: "/investissement" },
  { icon: Scale, title: "Legal", color: "text-primary", path: "/legal" },
  { icon: FileText, title: "Tax", color: "text-secondary", path: "/fiscalite" },
  { icon: Calculator, title: "Simulation", color: "text-accent", path: "/investissement" },
  { icon: Users, title: "Experts", color: "text-primary", path: "/experts" },
  { icon: Landmark, title: "Wealth", color: "text-secondary", path: "/patrimoine" },
];

export const ResourcesGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Resources & Advice</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card 
              key={index}
              onClick={() => navigate(resource.path)}
              className="p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group border-border/50"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-muted group-hover:bg-accent/10 transition-colors">
                  <Icon className={`w-6 h-6 ${resource.color}`} />
                </div>
                <h4 className="font-semibold text-primary">{resource.title}</h4>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
