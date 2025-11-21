import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">BP</span>
          </div>
          <span className="text-lg font-bold text-primary">
            BNP Paribas Banque Privée
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="text-foreground hover:text-primary"
          >
            Se connecter
          </Button>
          <Button 
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-gold font-semibold px-6"
          >
            Devenir Client
          </Button>
        </div>
      </div>
    </header>
  );
};
