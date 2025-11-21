import { useState } from "react";
import { Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  const [activeTab, setActiveTab] = useState<"pro" | "perso">("pro");

  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border/50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BP</span>
            </div>
            <span className="hidden md:block text-sm font-semibold text-primary">
              Banque Privée
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab("pro")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "pro"
                ? "bg-card text-primary shadow-soft"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Vie Professionnelle
          </button>
          <button
            onClick={() => setActiveTab("perso")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "perso"
                ? "bg-card text-primary shadow-soft"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Vie Personnelle
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
