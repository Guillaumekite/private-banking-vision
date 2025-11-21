import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { QuizProfil } from "@/components/investissement/QuizProfil";

const Investissement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Investissement</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Stratégies et outils pour optimiser vos investissements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <QuizProfil />
            </div>
          </div>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Investissement;
