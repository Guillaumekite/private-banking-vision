import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          BNP Paribas Private Bank
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Your Partner for Entrepreneurial Success
        </p>

        <Card className="relative overflow-hidden shadow-card group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
              <Play className="w-10 h-10 text-gold-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Discover How We Support Your Growth</h3>
              <p className="text-white/90">Tailored support for ambitious entrepreneurs</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
