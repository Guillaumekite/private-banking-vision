import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, Database, Scale } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

const conformiteData = [
  { category: "HR", score: 75, icon: Users, max: 100 },
  { category: "Legal", score: 85, icon: Scale, max: 100 },
  { category: "Contracts", score: 60, icon: FileText, max: 100 },
  { category: "Data/GDPR", score: 45, icon: Database, max: 100 },
  { category: "Tax", score: 90, icon: Shield, max: 100 },
];

export const RadarConformite = () => {
  const scoreGlobal = Math.round(conformiteData.reduce((sum, item) => sum + item.score, 0) / conformiteData.length);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-secondary";
    if (score >= 60) return "text-gold";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Average";
    return "At Risk";
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Compliance Radar</h3>
        <Badge className={`${scoreGlobal >= 80 ? "bg-gradient-emerald" : scoreGlobal >= 60 ? "bg-gold" : "bg-destructive"} text-white`}>
          Overall Score: {scoreGlobal}/100
        </Badge>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={conformiteData}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          <Radar name="Compliance" dataKey="score" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {conformiteData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold ${getScoreColor(item.score)}`}>{item.score}/100</span>
                <span className="text-xs text-muted-foreground">{getScoreBadge(item.score)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
