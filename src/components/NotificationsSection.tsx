import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Smartphone, Bell } from "lucide-react";

const notifications = [
  {
    icon: Mail,
    type: "Email",
    title: "Suggestion d'Optimisation Fiscale",
    desc: "Suite à l'évolution de la loi X, nous avons identifié une opportunité pour votre entreprise.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Smartphone,
    type: "Application Mobile",
    title: "Opportunité d'Investissement Personnalisée",
    desc: "Alerte marché : Une opportunité correspond à votre profil sur le marché Y.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bell,
    type: "Email",
    title: "Rendez-vous avec Votre Banquier Privé",
    desc: "Rappel : Révision de votre portefeuille personnel prévue le 15 du mois.",
    color: "bg-gold/10 text-gold",
  },
];

export const NotificationsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Un Accompagnement Proactif au Quotidien
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Recevez des conseils personnalisés et des alertes en temps réel
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {notifications.map((notif, idx) => {
            const Icon = notif.icon;
            return (
              <Card key={idx} className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${notif.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{notif.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{notif.title}</h3>
                <p className="text-sm text-muted-foreground">{notif.desc}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-gold font-semibold px-8 text-lg">
            Devenir Client
          </Button>
        </div>
      </div>
    </section>
  );
};
