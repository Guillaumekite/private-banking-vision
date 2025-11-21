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
            <h1 className="text-4xl font-black text-primary mb-4">📅 Your Appointments</h1>
            <p className="text-lg font-semibold text-muted-foreground">
              Manage your consultations and find the ideal expert 🎓
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
