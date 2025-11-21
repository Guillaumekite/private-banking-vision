import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { OscarLogo } from "./OscarLogo";

export const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <OscarLogo className="scale-125" />

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="text-foreground hover:text-primary font-bold"
          >
            🔐 Sign In
          </Button>
          <Button 
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-gold font-black px-6"
          >
            ✨ Become a Client
          </Button>
        </div>
      </div>
    </header>
  );
};
