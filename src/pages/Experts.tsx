import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { AppointmentCalendar } from "@/components/experts/AppointmentCalendar";
import { ExpertMatching } from "@/components/experts/ExpertMatching";
import { AppointmentHistory } from "@/components/experts/AppointmentHistory";

const Experts = () => {
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
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Vos Rendez-vous</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Gérez vos consultations et trouvez l'expert idéal
            </p>
          </div>

          <div className="space-y-8">
            <AppointmentCalendar />
            <ExpertMatching />
            <AppointmentHistory />
          </div>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Experts;
