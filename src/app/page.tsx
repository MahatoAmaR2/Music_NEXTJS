import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestiMonialCards from "@/components/TestiMonialCards";
import WhyCHooseUs from "@/components/WhyCHooseUs";


export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1>Har Har Mahadev</h1> */}
      <HeroSection/>
      <FeaturedSection/>
      <WhyCHooseUs/>
      <TestiMonialCards/>
    </div>
  );
}
