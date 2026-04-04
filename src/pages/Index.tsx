import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import ClientLogos from "@/components/home/ClientLogos";
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { BoothShowcase } from '@/components/home/BoothShowcase';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BookingForm } from '@/components/home/BookingForm';
import { InstagramSection } from '@/components/home/InstagramSection';
import InstagramFeed from '@/components/home/Instagram';
import ElfsightInstagramWidget from '@/components/home/ElfsightInstagramWidget';
import { CorporatePromoSection } from '@/components/home/CorporatePromoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        
        <HeroSection />
        <ClientLogos />
        <BoothShowcase />
        <CorporatePromoSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ElfsightInstagramWidget />
        <BookingForm />
        {/* <InstagramSection /> */}
        <InstagramFeed/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
