import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Video, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const upcomingAppointment = {
  expertName: "Marie Dubois",
  expertPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  specialization: "Tax & Wealth",
  date: "January 15, 2025",
  time: "2:00 PM - 3:00 PM",
  location: "Online",
  meetingLink: "https://meet.example.com/xyz",
};

export const AppointmentCalendar = () => {
  return (
    <Card className="border-primary/20 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-subtle border border-primary/10">
          <Avatar className="w-16 h-16 border-2 border-primary/20">
            <AvatarImage src={upcomingAppointment.expertPhoto} alt={upcomingAppointment.expertName} />
            <AvatarFallback>{upcomingAppointment.expertName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-lg">{upcomingAppointment.expertName}</h3>
              <p className="text-sm text-muted-foreground">{upcomingAppointment.specialization}</p>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{upcomingAppointment.date} • {upcomingAppointment.time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Video className="w-4 h-4" />
                <span>{upcomingAppointment.location}</span>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
              <Button variant="destructive" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
          <p className="text-sm text-muted-foreground mb-2">Meeting link:</p>
          <a 
            href={upcomingAppointment.meetingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            {upcomingAppointment.meetingLink}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
