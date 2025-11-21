import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";

interface Expert {
  id: number;
  name: string;
  photo: string;
  specialization: string;
}

interface BookingDialogProps {
  expert: Expert | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookingComplete: () => void;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

export const BookingDialog = ({ expert, open, onOpenChange, onBookingComplete }: BookingDialogProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBooking, setIsBooking] = useState(false);
  const { user } = useAuth();

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !expert) {
      toast.error("Veuillez sélectionner une date et une heure");
      return;
    }

    setIsBooking(true);

    try {
      const appointmentData: any = {
        expert_id: expert.id,
        expert_name: expert.name,
        expert_photo: expert.photo,
        expert_specialization: expert.specialization,
        appointment_date: format(selectedDate, "yyyy-MM-dd"),
        appointment_time: selectedTime,
        meeting_link: `https://meet.wiseconnect.app/${Date.now()}`,
        status: "scheduled"
      };

      if (user) {
        appointmentData.user_id = user.id;
      }

      const { error } = await supabase.from("appointments").insert(appointmentData);

      if (error) throw error;

      toast.success("Rendez-vous réservé avec succès!");
      onOpenChange(false);
      onBookingComplete();
      setSelectedDate(undefined);
      setSelectedTime("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Erreur lors de la réservation");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Réserver avec {expert?.name}
          </DialogTitle>
          <p className="text-muted-foreground">{expert?.specialization}</p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="font-semibold mb-3">Sélectionnez une date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </div>

          {selectedDate && (
            <div>
              <h3 className="font-semibold mb-3">Sélectionnez une heure</h3>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime || isBooking}
              className="flex-1"
            >
              {isBooking ? "Réservation..." : "Confirmer"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
