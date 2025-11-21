import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { FileText } from "lucide-react";
import { ComparatifFiscal } from "@/components/fiscalite/ComparatifFiscal";

const Fiscalite = () => {
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
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h1 className="text-4xl font-black text-primary">💸 Fiscalité</h1>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Optimisation fiscale et simulations personnalisées 🎯
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <ComparatifFiscal />
            </div>
          </div>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Fiscalite;
