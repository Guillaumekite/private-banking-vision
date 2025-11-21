import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  return (
    <>
      {/* RDV Button */}
      <Button
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 bg-gold hover:bg-gold/90 text-gold-foreground shadow-gold flex flex-col items-center gap-2 py-6 px-4 h-auto"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-xs font-semibold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
          Mon Conseiller
        </span>
      </Button>

      {/* Chatbot */}
      <Button
        size="icon"
        className="fixed right-6 bottom-6 z-30 w-14 h-14 rounded-full bg-secondary hover:bg-accent shadow-card"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </>
  );
};
