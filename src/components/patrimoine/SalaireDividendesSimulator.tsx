import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft } from "lucide-react";

export const SalaireDividendesSimulator = () => {
  const [montant] = useState(100000);
  const [ratio, setRatio] = useState([50]); // % en salaire

  const salaire = (montant * ratio[0]) / 100;
  const dividendes = montant - salaire;

  // Calculs simplifiés
  const chargesSalaire = salaire * 0.45; // ~45% charges patronales + salariales
  const impotSalaire = (salaire - chargesSalaire) * 0.3; // ~30% IR
  const netSalaire = salaire - chargesSalaire - impotSalaire;

  const impotDividendes = dividendes * 0.30; // flat tax 30%
  const netDividendes = dividendes - impotDividendes;

  const netTotal = netSalaire + netDividendes;
  const economie = montant * 0.25 - (montant - netTotal);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Salaire vs Dividendes</h3>
        <Badge variant="outline" className="border-secondary text-secondary">
          <ArrowRightLeft className="w-4 h-4 mr-1" />
          Battle Mode
        </Badge>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Répartition</span>
          <span className="font-semibold text-primary">{ratio[0]}% Salaire / {100 - ratio[0]}% Dividendes</span>
        </div>
        <Slider value={ratio} onValueChange={setRatio} min={0} max={100} step={5} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-primary/5 border-2 border-primary/20">
          <div className="text-sm text-muted-foreground mb-1">Salaire Brut</div>
          <div className="text-2xl font-bold text-primary mb-2">{(salaire / 1000).toFixed(0)}K €</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>- Charges</span>
              <span className="text-destructive">-{(chargesSalaire / 1000).toFixed(0)}K €</span>
            </div>
            <div className="flex justify-between">
              <span>- Impôts</span>
              <span className="text-destructive">-{(impotSalaire / 1000).toFixed(0)}K €</span>
            </div>
            <div className="flex justify-between font-semibold pt-1 border-t">
              <span>Net</span>
              <span className="text-secondary">{(netSalaire / 1000).toFixed(0)}K €</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-secondary/5 border-2 border-secondary/20">
          <div className="text-sm text-muted-foreground mb-1">Dividendes</div>
          <div className="text-2xl font-bold text-secondary mb-2">{(dividendes / 1000).toFixed(0)}K €</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>- Flat Tax (30%)</span>
              <span className="text-destructive">-{(impotDividendes / 1000).toFixed(0)}K €</span>
            </div>
            <div className="flex justify-between font-semibold pt-1 border-t mt-auto">
              <span>Net</span>
              <span className="text-secondary">{(netDividendes / 1000).toFixed(0)}K €</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gradient-emerald/10 rounded-lg border border-secondary/20">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-primary">Total Net</span>
          <span className="text-2xl font-bold text-primary">{(netTotal / 1000).toFixed(0)}K €</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Économie fiscale potentielle</span>
          <span className="font-semibold text-secondary">+{Math.abs(economie / 1000).toFixed(1)}K €</span>
        </div>
      </div>
    </Card>
  );
};
