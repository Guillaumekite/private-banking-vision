import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { Landmark } from "lucide-react";
import { PatrimoineDonut } from "@/components/patrimoine/PatrimoineDonut";
import { ProjectionTimeline } from "@/components/patrimoine/ProjectionTimeline";
import { AnalyseBrutNet } from "@/components/patrimoine/AnalyseBrutNet";
import { RiskHeatmap } from "@/components/patrimoine/RiskHeatmap";
import { PlaybooksPatrimoniaux } from "@/components/patrimoine/PlaybooksPatrimoniaux";
import { SalaireDividendesSimulator } from "@/components/patrimoine/SalaireDividendesSimulator";

const Patrimoine = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-light/20">
                <Landmark className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-primary">💎 Patrimoine</h1>
                <p className="text-lg font-semibold text-muted-foreground">
                  Vue globale et gestion optimisée de votre patrimoine 🚀
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <PatrimoineDonut />
            <ProjectionTimeline />
            <AnalyseBrutNet />
            <RiskHeatmap />
            <PlaybooksPatrimoniaux />
            <SalaireDividendesSimulator />
          </div>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Patrimoine;
