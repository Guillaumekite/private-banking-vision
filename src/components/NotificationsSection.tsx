import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Smartphone, Bell } from "lucide-react";

const notifications = [
  {
    icon: Mail,
    type: "Email",
    title: "Tax Optimization Suggestion",
    desc: "Following the evolution of law X, we have identified an opportunity for your business.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Smartphone,
    type: "Mobile App",
    title: "Personalized Investment Opportunity",
    desc: "Market alert: An opportunity matching your profile on market Y.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bell,
    type: "Email",
    title: "Appointment with Your Private Banker",
    desc: "Reminder: Review of your personal portfolio scheduled for the 15th of the month.",
    color: "bg-gold/10 text-gold",
  },
];

export const NotificationsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Proactive Daily Support
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Receive personalized advice and real-time alerts
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
            Become a Client
          </Button>
        </div>
      </div>
    </section>
  );
};
