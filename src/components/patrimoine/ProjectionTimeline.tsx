import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const generateProjection = (years: number, currentValue: number, growthRate: number) => {
  const data = [];
  for (let i = 0; i <= years; i++) {
    data.push({
      year: new Date().getFullYear() + i,
      value: Math.round(currentValue * Math.pow(1 + growthRate, i)),
    });
  }
  return data;
};

export const ProjectionTimeline = () => {
  const [years, setYears] = useState([5]);
  const [growthRate] = useState(0.06); // 6% par an
  const currentValue = 1000000; // 1M €

  const projectionData = generateProjection(years[0], currentValue, growthRate);
  const finalValue = projectionData[projectionData.length - 1].value;
  const gain = finalValue - currentValue;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-primary">Wealth Projection</h3>
        <div className="flex items-center gap-2 text-secondary">
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">+{growthRate * 100}% / an</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Horizon: {years[0]} years</span>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{(finalValue / 1000).toFixed(0)}K €</div>
            <div className="text-sm text-secondary">+{(gain / 1000).toFixed(0)}K €</div>
          </div>
        </div>
        <Slider value={years} onValueChange={setYears} min={1} max={10} step={1} />
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={projectionData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(value: number) => `${(value / 1000).toFixed(0)}K €`} />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--secondary))" strokeWidth={3} dot={{ fill: "hsl(var(--secondary))", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <div className="text-sm text-muted-foreground">Financial Health Score</div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-emerald" style={{ width: "75%" }} />
          </div>
          <span className="font-bold text-primary">75/100</span>
        </div>
      </div>
    </Card>
  );
};
