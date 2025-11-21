import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingDown } from "lucide-react";

export const ComparatifFiscal = () => {
  const revenu = 150000;
  const impotActuel = 45000;
  const impotOptimise = 28000;
  const economie = impotActuel - impotOptimise;

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-primary mb-6">Ce que vous payez VS ce que vous pourriez payer</h3>

      <div className="grid md:grid-cols-3 gap-4 items-center mb-6">
        <div className="p-6 rounded-lg bg-destructive/10 border-2 border-destructive/20">
          <div className="text-sm text-muted-foreground mb-2">Situation Actuelle</div>
          <div className="text-3xl font-bold text-destructive">{(impotActuel / 1000).toFixed(0)}K €</div>
          <div className="text-xs text-muted-foreground mt-1">Impôts annuels</div>
        </div>

        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-secondary/10">
            <ArrowRight className="w-6 h-6 text-secondary" />
          </div>
        </div>

        <div className="p-6 rounded-lg bg-secondary/10 border-2 border-secondary/20">
          <div className="text-sm text-muted-foreground mb-2">Après Optimisation</div>
          <div className="text-3xl font-bold text-secondary">{(impotOptimise / 1000).toFixed(0)}K €</div>
          <div className="text-xs text-muted-foreground mt-1">Impôts annuels</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Situation actuelle</span>
            <span className="font-semibold text-destructive">{((impotActuel / revenu) * 100).toFixed(0)}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-destructive transition-all duration-1000"
              style={{ width: `${(impotActuel / revenu) * 100}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Après optimisation</span>
            <span className="font-semibold text-secondary">{((impotOptimise / revenu) * 100).toFixed(0)}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-emerald transition-all duration-1000"
              style={{ width: `${(impotOptimise / revenu) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 bg-gradient-emerald/10 rounded-lg border border-secondary/20">
        <div className="flex items-center gap-3 mb-2">
          <TrendingDown className="w-6 h-6 text-secondary" />
          <div className="text-2xl font-bold text-primary">Économie: {(economie / 1000).toFixed(0)}K €</div>
        </div>
        <p className="text-sm text-muted-foreground">
          Soit {((economie / impotActuel) * 100).toFixed(0)}% d'économie fiscale par an avec les bonnes stratégies
        </p>
      </div>
    </Card>
  );
};
