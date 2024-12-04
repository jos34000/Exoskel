import { HeroSection } from "@/components/home/hero-section";
import { Nav } from "@/components/home/nav";
import { Carroussel } from "../components/home/carroussel";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Carroussel />
    </>
  );
}
