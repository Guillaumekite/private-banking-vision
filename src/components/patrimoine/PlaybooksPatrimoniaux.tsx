import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Shield } from "lucide-react";

const playbooks = [
  {
    id: 1,
    title: "Optimisation Patrimoine Starter",
    icon: Target,
    tasks: [
      { id: "t1", label: "Cartographier tous vos actifs", done: true },
      { id: "t2", label: "Identifier les optimisations fiscales", done: true },
      { id: "t3", label: "Mettre en place une holding", done: false },
      { id: "t4", label: "Diversifier les investissements", done: false },
    ],
  },
  {
    id: 2,
    title: "Protection Patrimoine Avancée",
    icon: Shield,
    tasks: [
      { id: "t5", label: "Souscrire assurance décès", done: true },
      { id: "t6", label: "Rédiger testament", done: false },
      { id: "t7", label: "Préparer pacte Dutreil", done: false },
      { id: "t8", label: "Structurer la transmission", done: false },
    ],
  },
];

export const PlaybooksPatrimoniaux = () => {
  const [checklistStates, setChecklistStates] = useState<Record<string, boolean>>({
    t1: true,
    t2: true,
    t3: false,
    t4: false,
    t5: true,
    t6: false,
    t7: false,
    t8: false,
  });

  const toggleTask = (taskId: string) => {
    setChecklistStates((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Playbooks Patrimoniaux</h3>
        <Badge variant="secondary" className="bg-gradient-emerald text-white">
          <Trophy className="w-4 h-4 mr-1" />
          Level 3
        </Badge>
      </div>

      <div className="space-y-6">
        {playbooks.map((playbook) => {
          const Icon = playbook.icon;
          const completedTasks = playbook.tasks.filter((task) => checklistStates[task.id]).length;
          const progress = (completedTasks / playbook.tasks.length) * 100;
          const isCompleted = progress === 100;

          return (
            <div key={playbook.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{playbook.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {completedTasks}/{playbook.tasks.length} tâches
                    </div>
                  </div>
                </div>
                {isCompleted && (
                  <Badge className="bg-gradient-emerald text-white animate-scale-in">
                    <Trophy className="w-3 h-3 mr-1" />
                    Complété!
                  </Badge>
                )}
              </div>

              <Progress value={progress} className="h-2" />

              <div className="space-y-2 pl-4">
                {playbook.tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 group">
                    <Checkbox
                      id={task.id}
                      checked={checklistStates[task.id]}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <label
                      htmlFor={task.id}
                      className={`text-sm cursor-pointer transition-all ${
                        checklistStates[task.id]
                          ? "line-through text-muted-foreground"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {task.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
