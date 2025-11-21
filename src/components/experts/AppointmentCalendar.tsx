import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar as CalendarIcon, MapPin, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Appointment {
  id: string;
  expert_name: string;
  expert_photo: string;
  expert_specialization: string;
  appointment_date: string;
  appointment_time: string;
  location: string;
  meeting_link: string;
}

export const AppointmentCalendar = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNextAppointment();
  }, []);

  const fetchNextAppointment = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      let query = supabase
        .from("appointments")
        .select("*")
        .eq("status", "scheduled")
        .gte("appointment_date", format(new Date(), "yyyy-MM-dd"))
        .order("appointment_date", { ascending: true })
        .order("appointment_time", { ascending: true })
        .limit(1);

      // Si l'utilisateur est connecté, filtrer par user_id OU user_id null
      // Sinon, récupérer tous les rendez-vous (sans user_id)
      if (user) {
        query = query.or(`user_id.eq.${user.id},user_id.is.null`);
      } else {
        query = query.is("user_id", null);
      }

      const { data, error } = await query.maybeSingle();

      if (error) throw error;
      
      setAppointment(data);
    } catch (error) {
      console.error("Error fetching appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card className="border-primary/20 shadow-card bg-gradient-to-br from-background to-blue-lighter/10">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">Chargement...</p>
        </CardContent>
      </Card>
    );
  }

  if (!appointment) {
    return (
      <Card className="border-primary/20 shadow-card bg-gradient-to-br from-background to-blue-lighter/10">
        <CardHeader>
          <CardTitle className="text-2xl font-black">📆 Prochain rendez-vous</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">Aucun rendez-vous prévu</p>
        </CardContent>
      </Card>
    );
  }

  const appointmentDate = new Date(appointment.appointment_date + "T" + appointment.appointment_time);
  const formattedDate = format(appointmentDate, "d MMMM yyyy", { locale: fr });

  return (
    <Card className="border-primary/20 shadow-card bg-gradient-to-br from-background to-blue-lighter/10">
      <CardHeader>
        <CardTitle className="text-2xl font-black">📆 Prochain rendez-vous</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 border-2 border-primary/20 shrink-0">
            <AvatarImage src={appointment.expert_photo} alt={appointment.expert_name} className="object-cover" />
            <AvatarFallback>{appointment.expert_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-lg">{appointment.expert_name}</h3>
              <p className="text-sm text-muted-foreground">{appointment.expert_specialization}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span>{formattedDate} à {appointment.appointment_time}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{appointment.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-primary" />
                <a 
                  href={appointment.meeting_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Rejoindre la réunion
                </a>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Message
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <CalendarIcon className="w-4 h-4" />
                Replanifier
              </Button>
              <Button variant="destructive" size="sm">
                Annuler
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
