import { Card } from "@/components/ui/card";
import { TrendingUp, Scale, FileText, Calculator, Users, Landmark } from "lucide-react";

const resources = [
  { icon: TrendingUp, title: "Investissement", color: "text-accent" },
  { icon: Scale, title: "Légal", color: "text-primary" },
  { icon: FileText, title: "Fiscalité", color: "text-secondary" },
  { icon: Calculator, title: "Simulation", color: "text-accent" },
  { icon: Users, title: "Experts", color: "text-primary" },
  { icon: Landmark, title: "Patrimoine", color: "text-secondary" },
];

export const ResourcesGrid = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Ressources et Conseils</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card 
              key={index}
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
