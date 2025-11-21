import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MapPin, Clock, Video, Award, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Pitch Night",
    date: "Jan 25, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, Downtown",
    distance: "2.3 km",
    attendees: 45,
    maxAttendees: 60,
    category: "Networking",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
  },
  {
    id: 2,
    title: "Tax Optimization Workshop",
    date: "Jan 28, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Business Center, Midtown",
    distance: "5.1 km",
    attendees: 28,
    maxAttendees: 40,
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
  },
  {
    id: 3,
    title: "Founders Meetup & Drinks",
    date: "Feb 2, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "The Lounge, City Center",
    distance: "1.8 km",
    attendees: 67,
    maxAttendees: 80,
    category: "Social",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
  },
];

const founders = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    company: "TechFlow AI",
    industry: "SaaS",
    location: "New York",
    connections: 234,
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    company: "GreenEnergy Solutions",
    industry: "CleanTech",
    location: "San Francisco",
    connections: 189,
  },
  {
    id: 3,
    name: "Emma Williams",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    company: "HealthTech Innovations",
    industry: "HealthTech",
    location: "Boston",
    connections: 312,
  },
  {
    id: 4,
    name: "David Martinez",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    company: "FinPro Analytics",
    industry: "FinTech",
    location: "London",
    connections: 267,
  },
];

const masterclasses = [
  {
    id: 1,
    title: "Scaling Your Startup to $10M ARR",
    instructor: "Alex Thompson",
    instructorPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    date: "Feb 5, 2025",
    duration: "2 hours",
    spots: 15,
    level: "Advanced",
    price: "Free for members",
    topics: ["Growth Strategy", "Sales", "Team Building"],
  },
  {
    id: 2,
    title: "Fundraising Masterclass: From Seed to Series A",
    instructor: "Jennifer Lee",
    instructorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    date: "Feb 8, 2025",
    duration: "3 hours",
    spots: 20,
    level: "Intermediate",
    price: "Free for members",
    topics: ["Fundraising", "Pitch Deck", "Investor Relations"],
  },
  {
    id: 3,
    title: "Building High-Performance Teams",
    instructor: "Robert Brown",
    instructorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "Feb 12, 2025",
    duration: "90 minutes",
    spots: 25,
    level: "All Levels",
    price: "Free for members",
    topics: ["Leadership", "Culture", "Hiring"],
  },
];

const Communaute = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-light/20">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-black text-primary">🤝 Community</h1>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Connect with entrepreneurs and grow together 🚀
            </p>
          </div>

          {/* Upcoming Events Section */}
          <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-background via-emerald-lighter/5 to-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-black">
                <Calendar className="w-6 h-6 text-primary" />
                📅 Upcoming Events Near You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all border-border/50 shadow-md hover:scale-105 duration-300">
                    <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-lg text-primary">{event.title}</h3>
                        <Badge variant="secondary" className="shrink-0 shadow-sm">{event.category}</Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location} ({event.distance} away)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}/{event.maxAttendees} attendees</span>
                        </div>
                      </div>

                      <Button className="w-full font-bold shadow-md hover:shadow-lg transition-shadow">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Founders Network Section */}
          <Card className="border-primary/20 shadow-xl bg-gradient-to-br from-emerald-lighter/10 via-background to-emerald-lighter/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-black">
                <Target className="w-6 h-6 text-primary" />
                💼 Founders Network
              </CardTitle>
              <p className="text-muted-foreground font-medium">Connect with fellow entrepreneurs building amazing companies</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {founders.map((founder) => (
                  <Card key={founder.id} className="p-4 hover:shadow-xl transition-all border-border/50 shadow-md hover:scale-105 duration-300 bg-gradient-to-b from-background to-emerald-lighter/5">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Avatar className="w-20 h-20 border-2 border-primary/20 shadow-md">
                        <AvatarImage src={founder.photo} alt={founder.name} />
                        <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-bold text-primary">{founder.name}</h3>
                        <p className="text-sm text-muted-foreground">{founder.company}</p>
                      </div>

                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">{founder.industry}</Badge>
                        <Badge variant="outline" className="text-xs">{founder.location}</Badge>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {founder.connections} connections
                      </div>

                      <Button variant="outline" size="sm" className="w-full shadow-sm hover:shadow-md transition-shadow">
                        Connect
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Masterclasses Section */}
          <Card className="border-primary/20 shadow-xl bg-gradient-to-br from-background via-emerald-lighter/5 to-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-black">
                <Award className="w-6 h-6 text-primary" />
                🎓 Exclusive Masterclasses
              </CardTitle>
              <p className="text-muted-foreground font-medium">Learn from industry experts and level up your entrepreneurial skills</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {masterclasses.map((masterclass) => (
                  <Card key={masterclass.id} className="p-6 hover:shadow-xl transition-all border-border/50 shadow-lg hover:scale-[1.02] duration-300 bg-gradient-to-r from-background via-emerald-lighter/5 to-background">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <Avatar className="w-24 h-24 border-2 border-primary/20 shrink-0 shadow-lg">
                        <AvatarImage src={masterclass.instructorPhoto} alt={masterclass.instructor} />
                        <AvatarFallback>{masterclass.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-3">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl font-bold text-primary">{masterclass.title}</h3>
                            <Badge className="bg-gold text-gold-foreground shrink-0 shadow-md">{masterclass.level}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">by {masterclass.instructor}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {masterclass.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs shadow-sm">
                              {topic}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{masterclass.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{masterclass.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{masterclass.spots} spots left</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            <span>Online</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-lg font-bold text-secondary">{masterclass.price}</span>
                          <Button className="font-bold shadow-md hover:shadow-lg transition-shadow">
                            Reserve My Spot
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default Communaute;
