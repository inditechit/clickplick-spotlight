import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    alt: "ClickPlick Photo Booth - Event Entertainment"
  },
  {
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    alt: "ClickPlick Photo Booth - Party Fun"
  },
  {
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    alt: "ClickPlick Photo Booth - Wedding Celebrations"
  },
  {
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    alt: "ClickPlick Photo Booth - Corporate Events"
  },
  {
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    alt: "ClickPlick Photo Booth - Festival Fun"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative pt-20">
      {/* Hero Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary w-8' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
