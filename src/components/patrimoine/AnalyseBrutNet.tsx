import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

type ViewType = "brut" | "net" | "disponible";

const data = {
  brut: { label: "Patrimoine Brut", value: 1000000 },
  net: { label: "Patrimoine Net", value: 850000 },
  disponible: { label: "Patrimoine Disponible", value: 650000 },
};

export const AnalyseBrutNet = () => {
  const [view, setView] = useState<ViewType>("brut");

  const chartData = [
    { name: "Brut", value: data.brut.value, color: "hsl(var(--primary))" },
    { name: "Net", value: data.net.value, color: "hsl(var(--secondary))" },
    { name: "Dispo", value: data.disponible.value, color: "hsl(var(--accent))" },
  ];

  const currentData = data[view];
  const recommendations = {
    brut: "Votre patrimoine brut est solide. Pensez à optimiser la fiscalité.",
    net: "Après dettes, votre patrimoine net représente 85% du brut. Excellent ratio!",
    disponible: "Liquidité disponible à court terme pour opportunités d'investissement.",
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-primary mb-4">Analyse Brut / Net / Disponible</h3>

      <div className="flex gap-2 mb-6">
        {(Object.keys(data) as ViewType[]).map((type) => (
          <Button
            key={type}
            variant={view === type ? "default" : "outline"}
            onClick={() => setView(type)}
            className="flex-1 capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-1">{currentData.label}</div>
        <div className="text-4xl font-bold text-primary">{(currentData.value / 1000).toFixed(0)}K €</div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(value: number) => `${(value / 1000).toFixed(0)}K €`} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 p-4 bg-gradient-emerald/10 rounded-lg border border-secondary/20">
        <div className="text-sm font-semibold text-primary mb-1">💡 Recommandation</div>
        <div className="text-sm text-muted-foreground">{recommendations[view]}</div>
      </div>
    </Card>
  );
};
