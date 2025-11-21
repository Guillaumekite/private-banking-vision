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
            <h1 className="text-4xl font-black text-primary mb-4">💸 Tax</h1>
            <p className="text-lg font-semibold text-muted-foreground">
              Tax optimization and personalized simulations 🎯
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
