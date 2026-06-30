import Schedule from "@/src/components/Schedule";
import Philosophy from "@/src/components/Philosophy";
import Pillars from "@/src/components/Pillars";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Testimonials from "@/src/components/Testimonials";
import FAQ from "@/src/components/FAQ";
import Location from "@/src/components/Location";
import Footer from "@/src/components/Footer";
import Instructor from "@/src/components/Instructor";
import Achievements from "@/src/components/Achievements";
import Gallery from "@/src/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Schedule />
      <Philosophy />
      <Pillars />
      <Instructor />
      <Achievements />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
}
