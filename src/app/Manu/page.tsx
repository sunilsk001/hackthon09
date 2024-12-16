import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Experience from "@/components/Experience/Experience";
import MainCours from "@/components/MainCours/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/PartnerClient/partnerClient";
import Hero from "@/components/HeroSection/HeroSection";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}