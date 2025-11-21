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
    specialization: "Fiscalité Entreprise",
    tags: ["IR", "IS", "TVA", "Holding"],
    bio: "Expert en optimisation fiscale pour entrepreneurs depuis 15 ans",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: "Sophie Laurent",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    specialization: "Patrimoine & Succession",
    tags: ["Succession", "Donation", "IFI", "Assurance-vie"],
    bio: "Spécialiste en transmission patrimoniale et planification successorale",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Pierre Dubois",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    specialization: "Investissement & Gestion",
    tags: ["ETF", "SCPI", "PEA", "Crypto"],
    bio: "Conseiller en gestion de patrimoine et stratégie d'investissement",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Caroline Petit",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    specialization: "Juridique & Conformité",
    tags: ["Contrats", "Statuts", "RGPD", "Social"],
    bio: "Avocate spécialisée en droit des affaires et conformité",
    rating: 4.9,
    reviews: 83,
  },
];

export const ExpertMatching = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <Card className="border-primary/20 shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl">Match avec votre expert</CardTitle>
        <p className="text-muted-foreground">Précisez votre disponibilité et vos besoins</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Textarea
            placeholder="Décrivez vos besoins, votre disponibilité et vos préférences...&#10;Exemple : J'ai besoin d'aide pour optimiser ma fiscalité. Je suis disponible les mardis et jeudis après-midi."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="min-h-[120px] resize-none"
          />
          <Button className="w-full sm:w-auto gap-2">
            <MessageCircle className="w-4 h-4" />
            Trouver mon expert
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Experts recommandés</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {experts.map((expert) => (
                <CarouselItem key={expert.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-16 h-16 border-2 border-primary/20">
                          <AvatarImage src={expert.photo} alt={expert.name} />
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
                          Réserver
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
