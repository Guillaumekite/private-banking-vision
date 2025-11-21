import { LandingHeader } from "@/components/LandingHeader";
import { SimulatorSection } from "@/components/SimulatorSection";
import { VideoSection } from "@/components/VideoSection";
import { NotificationsSection } from "@/components/NotificationsSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <SimulatorSection />
      <VideoSection />
      <NotificationsSection />
    </div>
  );
};

export default Landing;
