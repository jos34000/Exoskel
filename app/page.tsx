import { Carroussel } from "@/components/home/carroussel";
import { Contact } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { Nav } from "@/components/home/nav";
import { Steps } from "@/components/home/steps";

// Fonction interne pour simuler un délai
const simulateDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default async function Home() {
  // Simule une opération asynchrone
  await simulateDelay();

  return (
    <>
      <Nav />
      <HeroSection />
      <Carroussel />
      <Steps />
      <Contact />
    </>
  );
}
