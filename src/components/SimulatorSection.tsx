import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, PiggyBank, Users, Building2, Briefcase } from "lucide-react";

const getRecommendations = (age: number, entreprises: string, situation: string, patrimoine: string) => {
  const recommendations = [];
  const ageVal = age;
  const hasMultipleEntreprises = entreprises === "2" || entreprises === "3+";
  const hasOneEntreprise = entreprises === "1";
  const isYoung = ageVal < 40;
  const isMature = ageVal >= 40 && ageVal < 60;
  const isSenior = ageVal >= 60;
  const highPatrimony = patrimoine === ">5m" || patrimoine === "250k-5m";

  // Logique pour plusieurs entreprises
  if (hasMultipleEntreprises) {
    recommendations.push(
      { icon: Building2, title: "Création de Holding", desc: "Optimisez la gestion de vos entreprises" },
      { icon: TrendingUp, title: "Optimisation des Flux", desc: "Structurez les dividendes et rémunérations" }
    );
  }

  // Logique pour une entreprise + âge mûr/senior
  if (hasOneEntreprise && (isMature || isSenior)) {
    recommendations.push(
      { icon: Shield, title: "Pacte Dutreil", desc: "Préparez la transmission de votre entreprise" }
    );
  }

  // Logique patrimoine + âge
  if (highPatrimony && isYoung) {
    recommendations.push(
      { icon: TrendingUp, title: "Stratégie d'Investissement Actions", desc: "Profitez de votre horizon long terme" }
    );
  }

  if (highPatrimony && isSenior) {
    recommendations.push(
      { icon: Users, title: "Stratégie de Transmission", desc: "Optimisez la transmission familiale" },
      { icon: Briefcase, title: "Préparation Retraite", desc: "Sécurisez votre avenir" }
    );
  }

  // Optimisation fiscale selon patrimoine
  if (patrimoine === ">5m") {
    recommendations.push(
      { icon: PiggyBank, title: "Optimisation Fiscale Avancée", desc: "Structuration patrimoniale complexe" }
    );
  } else if (highPatrimony) {
    recommendations.push(
      { icon: PiggyBank, title: "Optimisation Fiscale", desc: "Réduisez votre charge fiscale légalement" }
    );
  }

  // Protection patrimoniale générale
  if (situation === "marie" || situation === "divorce") {
    recommendations.push(
      { icon: Shield, title: "Protection Patrimoniale", desc: "Sécurisez votre situation familiale" }
    );
  }

  // Diversification pour patrimoine moyen/élevé
  if (isMature && highPatrimony) {
    recommendations.push(
      { icon: TrendingUp, title: "Diversification Internationale", desc: "Élargissez vos horizons" }
    );
  }

  // Limiter à 3-4 recommandations
  return recommendations.slice(0, 4);
};

export const SimulatorSection = () => {
  const [situation, setSituation] = useState("marie");
  const [age, setAge] = useState([45]);
  const [enfants, setEnfants] = useState("2");
  const [entreprises, setEntreprises] = useState("1");
  const [patrimoine, setPatrimoine] = useState("250k-5m");
  const [showResults, setShowResults] = useState(false);

  const getProfile = () => {
    if (age[0] < 35) return "Jeune Entrepreneur avec Patrimoine en Croissance";
    if (age[0] >= 35 && age[0] < 55) return "Entrepreneur Établi avec Famille";
    return "Entrepreneur Senior à Patrimoine Consolidé";
  };

  const handleSimulate = () => {
    setShowResults(true);
  };

  const profile = getProfile();
  const currentRecommendations = getRecommendations(age[0], entreprises, situation, patrimoine);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Découvrez Votre Potentiel d'Optimisation Financière
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Votre futur financier commence ici
        </p>

        <Card className="p-8 shadow-card mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">Situation</Label>
                <RadioGroup value={situation} onValueChange={setSituation}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="seul" id="seul" />
                    <Label htmlFor="seul">Seul</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="marie" id="marie" />
                    <Label htmlFor="marie">Marié</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="divorce" id="divorce" />
                    <Label htmlFor="divorce">Divorcé</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Âge : {age[0]} ans</Label>
                <Slider value={age} onValueChange={setAge} min={25} max={75} step={1} />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Enfants</Label>
                <RadioGroup value={enfants} onValueChange={setEnfants} className="flex gap-4">
                  {["0", "1", "2", "3+"].map((val) => (
                    <div key={val} className="flex items-center space-x-2">
                      <RadioGroupItem value={val} id={`enfants-${val}`} />
                      <Label htmlFor={`enfants-${val}`}>{val}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">Entreprises</Label>
                <RadioGroup value={entreprises} onValueChange={setEntreprises} className="flex gap-4">
                  {["0", "1", "2", "3+"].map((val) => (
                    <div key={val} className="flex items-center space-x-2">
                      <RadioGroupItem value={val} id={`entreprises-${val}`} />
                      <Label htmlFor={`entreprises-${val}`}>{val}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Patrimoine</Label>
                <RadioGroup value={patrimoine} onValueChange={setPatrimoine}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="<250k" id="pat1" />
                    <Label htmlFor="pat1">{"< 250K €"}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="250k-5m" id="pat2" />
                    <Label htmlFor="pat2">250K - 5M €</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value=">5m" id="pat3" />
                    <Label htmlFor="pat3">{"> 5M €"}</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleSimulate}
              size="lg"
              className="bg-gradient-emerald text-white hover:opacity-90 transition-opacity px-12"
            >
              Simuler mon Optimisation
            </Button>
          </div>
        </Card>

        {showResults && (
          <div className="animate-fade-in">
            <div className="bg-gradient-emerald text-white p-8 rounded-lg shadow-card mb-8">
              <h2 className="text-3xl font-bold mb-2">Votre Profil d'Optimisation :</h2>
              <p className="text-xl opacity-95">{profile}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentRecommendations.map((rec, idx) => {
                const Icon = rec.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-card transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{rec.title}</h3>
                    <p className="text-muted-foreground">{rec.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
