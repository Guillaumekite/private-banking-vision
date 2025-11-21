import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  return (
    <>
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
