import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image - Full width, image contains its own text */}
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
          alt="ClickPlick Photo Booth"
          className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
        />
      </div>

      {/* Promo Banner - Scrolling text */}
      <div className="bg-primary overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-primary-foreground font-semibold text-lg">
              4 Hours For The Price Of 3
            </span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="bg-background py-8 md:py-12">
        <div className="section-container flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" asChild className="min-w-[160px]">
            <Link to="/book-now">Book Now</Link>
          </Button>
          <Button variant="accent" size="lg" asChild className="min-w-[160px]">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
