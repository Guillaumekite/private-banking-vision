import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Calendar, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const experts = [
  {
    id: 1,
    name: "Jean Martin",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    specialization: "Corporate Tax",
    tags: ["IR", "IS", "VAT", "Holding"],
    bio: "Expert in tax optimization for entrepreneurs for 15 years",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: "Sophie Laurent",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    specialization: "Wealth & Succession",
    tags: ["Succession", "Gift", "IFI", "Life Insurance"],
    bio: "Specialist in wealth transfer and estate planning",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Pierre Dubois",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    specialization: "Investment & Management",
    tags: ["ETF", "SCPI", "PEA", "Crypto"],
    bio: "Wealth management advisor and investment strategy",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Caroline Petit",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    specialization: "Legal & Compliance",
    tags: ["Contracts", "Articles", "GDPR", "Social"],
    bio: "Lawyer specializing in business law and compliance",
    rating: 4.9,
    reviews: 83,
  },
];

export const ExpertMatching = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <Card className="border-primary/20 shadow-card bg-gradient-to-br from-background to-emerald-lighter/10">
      <CardHeader>
        <CardTitle className="text-2xl font-black">🤝 Match with your expert</CardTitle>
        <p className="text-muted-foreground font-medium">Specify your availability and needs ✨</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Textarea
            placeholder="Describe your needs, availability and preferences...&#10;Example: I need help optimizing my taxes. I'm available on Tuesdays and Thursdays in the afternoon."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="min-h-[120px] resize-none"
          />
          <Button className="w-full sm:w-auto gap-2 font-bold">
            <MessageCircle className="w-4 h-4" />
            🔍 Find my expert
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Recommended Experts</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {experts.map((expert) => (
                <CarouselItem key={expert.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-16 h-16 border-2 border-primary/20 shrink-0">
                          <AvatarImage src={expert.photo} alt={expert.name} className="object-cover" />
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{expert.name}</h4>
                          <p className="text-sm text-muted-foreground">{expert.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-gold text-gold" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                            <span className="text-sm text-muted-foreground">({expert.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {expert.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {expert.bio}
                      </p>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1 gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </Button>
                        <Button size="sm" className="flex-1 gap-2">
                          <Calendar className="w-4 h-4" />
                          Book
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};
