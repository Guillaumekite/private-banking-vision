import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Scale } from "lucide-react";

const Legal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Légal</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Conformité et assistance juridique pour votre activité
            </p>
          </div>

          <Card className="p-8">
            <p className="text-center text-muted-foreground">
              Section Légal en construction avec modules interactifs à venir
            </p>
          </Card>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Legal;
