import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, AlertTriangle } from "lucide-react";

const riskCategories = [
  { name: "Immobilier", risk: 3, amount: 450000, icon: Shield, recommendation: "Risque faible, diversification immobilière recommandée" },
  { name: "Actions", risk: 7, amount: 280000, icon: TrendingUp, recommendation: "Risque élevé, envisager des ETF plus stables" },
  { name: "Assurance Vie", risk: 2, amount: 180000, icon: Shield, recommendation: "Très sécurisé, performance modérée" },
  { name: "Liquidités", risk: 1, amount: 90000, icon: Shield, recommendation: "Aucun risque, rendement faible" },
];

const getRiskColor = (risk: number) => {
  if (risk <= 3) return "bg-secondary";
  if (risk <= 6) return "bg-gold";
  return "bg-destructive";
};

const getRiskLabel = (risk: number) => {
  if (risk <= 3) return "Faible";
  if (risk <= 6) return "Modéré";
  return "Élevé";
};

export const RiskHeatmap = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Répartition du Risque</h3>
        <Button variant="outline" size="sm">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Ajuster
        </Button>
      </div>

      <div className="space-y-4">
        {riskCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div key={idx} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{category.name}</div>
                    <div className="text-sm text-muted-foreground">{(category.amount / 1000).toFixed(0)}K €</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">Risque: {getRiskLabel(category.risk)}</div>
                  <div className="text-xs text-muted-foreground">{category.risk}/10</div>
                </div>
              </div>
              
              <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full ${getRiskColor(category.risk)} transition-all duration-500`}
                  style={{ width: `${category.risk * 10}%` }}
                />
              </div>

              <div className="hidden group-hover:block p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground animate-fade-in">
                💡 {category.recommendation}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-emerald/10 rounded-lg border border-secondary/20">
        <div className="font-semibold text-primary mb-2">Niveau de Risque Global</div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-secondary via-gold to-destructive" style={{ width: "48%" }} />
          </div>
          <span className="font-bold text-primary">4.8/10</span>
        </div>
        <div className="text-sm text-muted-foreground mt-2">Profil équilibré avec une légère surpondération en actions</div>
      </div>
    </Card>
  );
};
