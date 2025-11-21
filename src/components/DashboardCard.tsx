import { Card } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const data = [
  { value: 1200000 },
  { value: 1350000 },
  { value: 1280000 },
  { value: 1450000 },
  { value: 1520000 },
  { value: 1680000 },
];

export const DashboardCard = () => {
  return (
    <Card className="p-8 shadow-card hover:shadow-gold transition-all duration-300 border-border/50">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm text-muted-foreground font-medium mb-2">Global View</p>
          <h2 className="text-4xl font-bold text-primary mb-1">1,680,000 €</h2>
          <div className="flex items-center gap-2 text-secondary">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+12.5% this month</span>
          </div>
        </div>
        <button className="p-2 rounded-lg bg-gold/10 hover:bg-gold/20 transition-colors group">
          <ArrowUpRight className="w-5 h-5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
      
      <div className="h-24 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--secondary))" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">
        Last update: today at 2:32 PM
      </p>
    </Card>
  );
};
