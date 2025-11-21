import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Target } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is your investment horizon?",
    options: [
      { value: "short", label: "< 3 years", score: 1 },
      { value: "medium", label: "3-7 years", score: 2 },
      { value: "long", label: "> 7 years", score: 3 },
    ],
  },
  {
    id: 2,
    question: "What maximum loss do you accept?",
    options: [
      { value: "low", label: "< 5%", score: 1 },
      { value: "medium", label: "5-15%", score: 2 },
      { value: "high", label: "> 15%", score: 3 },
    ],
  },
];

const getAllocationData = (score: number) => {
  if (score <= 3) {
    return [
      { name: "Euro Funds", value: 60, color: "hsl(var(--primary))" },
      { name: "Bonds", value: 30, color: "hsl(var(--secondary))" },
      { name: "Stocks", value: 10, color: "hsl(var(--accent))" },
    ];
  }
  if (score <= 5) {
    return [
      { name: "Euro Funds", value: 30, color: "hsl(var(--primary))" },
      { name: "Bonds", value: 30, color: "hsl(var(--secondary))" },
      { name: "Stocks", value: 40, color: "hsl(var(--accent))" },
    ];
  }
  return [
    { name: "Euro Funds", value: 10, color: "hsl(var(--primary))" },
    { name: "Bonds", value: 20, color: "hsl(var(--secondary))" },
    { name: "Stocks", value: 70, color: "hsl(var(--accent))" },
  ];
};

export const QuizProfil = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const allocationData = getAllocationData(totalScore);

  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-accent/10">
          <Target className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">Express Investor Profile Quiz</h3>
          <p className="text-sm text-muted-foreground">30 seconds to discover your ideal allocation</p>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id}>
              <Label className="text-base font-semibold mb-3 block">{question.question}</Label>
              <RadioGroup
                value={answers[question.id]?.toString()}
                onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
                className="space-y-2"
              >
                {question.options.map((option) => (
                  <div key={option.value}>
                    <RadioGroupItem value={option.score.toString()} id={`q${question.id}-${option.value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`q${question.id}-${option.value}`}
                      className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          <Button
            onClick={() => setShowResults(true)}
            disabled={!isComplete}
            className="w-full bg-gradient-emerald text-white"
            size="lg"
          >
            View my recommended allocation
          </Button>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              Profile: {totalScore <= 3 ? "Cautious" : totalScore <= 5 ? "Balanced" : "Dynamic"}
            </div>
            <p className="text-muted-foreground">Recommended allocation for your profile</p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={allocationData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>

          <Button variant="outline" onClick={() => setShowResults(false)} className="w-full">
            Retake the quiz
          </Button>
        </div>
      )}
    </Card>
  );
};
