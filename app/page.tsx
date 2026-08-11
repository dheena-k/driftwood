import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import OfferSection from "@/components/OfferSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <ExperiencesSection />
        <OfferSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
