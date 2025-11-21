import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { NewsCarousel } from "@/components/NewsCarousel";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          {/* Dashboard Section */}
          <div className="space-y-6">
            <DashboardCard />
            <NewsCarousel />
          </div>

          {/* Resources Section */}
          <ResourcesGrid />
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Index;
