import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

const data = [
  { name: "Real Estate", value: 450000, color: "#0a4d3c" },
  { name: "Stocks/ETF", value: 280000, color: "#2d8a6b" },
  { name: "Life Insurance", value: 180000, color: "#5cb88f" },
  { name: "Cash", value: 90000, color: "#a3d9c2" },
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill} className="text-2xl font-bold">
        {(value / 1000).toFixed(0)}K €
      </text>
      <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#666" className="text-sm">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export const PatrimoineDonut = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const score = Math.round((total / 1200000) * 100); // Score basé sur objectif 1.2M

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primary mb-2">Global Wealth Overview</h3>
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold text-primary">{(total / 1000).toFixed(0)}K €</div>
          <div className="px-3 py-1 bg-gradient-emerald text-white rounded-full text-sm font-semibold">
            Score: {score}%
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <div>
              <div className="text-sm font-semibold text-foreground">{item.name}</div>
              <div className="text-xs text-muted-foreground">{(item.value / 1000).toFixed(0)}K €</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
