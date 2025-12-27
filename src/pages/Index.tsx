import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import SchemesSection from "@/components/SchemesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanline">
      <Header />
      <NewsTicker />
      <main>
        <HeroSection />
        <SchemesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
