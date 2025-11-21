import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

type ViewType = "brut" | "net" | "disponible";

const data = {
  brut: { label: "Gross Wealth", value: 1000000 },
  net: { label: "Net Wealth", value: 850000 },
  disponible: { label: "Available Wealth", value: 650000 },
};

export const AnalyseBrutNet = () => {
  const [view, setView] = useState<ViewType>("brut");

  const chartData = [
    { name: "Gross", value: data.brut.value, color: "hsl(var(--primary))" },
    { name: "Net", value: data.net.value, color: "hsl(var(--secondary))" },
    { name: "Avail", value: data.disponible.value, color: "hsl(var(--accent))" },
  ];

  const currentData = data[view];
  const recommendations = {
    brut: "Your gross wealth is solid. Consider optimizing taxation.",
    net: "After debts, your net wealth represents 85% of gross. Excellent ratio!",
    disponible: "Short-term liquidity available for investment opportunities.",
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-primary mb-4">Gross / Net / Available Analysis</h3>

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
        <div className="text-sm font-semibold text-primary mb-1">💡 Recommendation</div>
        <div className="text-sm text-muted-foreground">{recommendations[view]}</div>
      </div>
    </Card>
  );
};
