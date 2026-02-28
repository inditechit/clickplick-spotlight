import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowRight, Phone } from 'lucide-react';
const heroSlides = [
  {
    image: "/main/hero1.png",
    alt: "ClickPlick Photo Booth - Event Entertainment"
  },{
    image: "/main/hero2.png",
    alt: "ClickPlick Photo Booth - Event Entertainment"
  },{
    image: "/main/hero3.png",
    alt: "ClickPlick Photo Booth - Event Entertainment"
  },
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
      {/* Hero Slider - HEIGHT INCREASED BELOW */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[850px] overflow-hidden">
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
              Get an extra 10% off when you book for an event from Monday-Thursday
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
      <div className="w-full flex flex-col md:flex-row items-stretch overflow-hidden">
      
      {/* Left Side: Image Content */}
      <div className="w-full md:w-1/2">
        <img 
          src="http://localhost:8080/imgg7.jpg" 
          alt="ClickPlick Magic Mirror" 
          className="w-full h-full object-cover min-h-[400px]"
        />
      </div>

      {/* Right Side: Pink Content Section */}
      <div className="w-full md:w-1/2 bg-[#FFB5C2] p-8 md:p-16 flex flex-col justify-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Why Us?
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed font-medium">
          <p>
            At ClickPlick, we believe memories are more than just photos – they're the threads that hold families, friends, and celebrations together. What began as a small family passion has grown into a business that we nurture with the same care, creativity, and warmth we bring to our own gatherings. Every booth, every print, and every smile carries a piece of that story.
          </p>
          <p>
            We bring you the most exclusive photo-booths equipped with intuitive touch screens and the latest technology to capture and instantly print your moments. With Canon DSLR cameras, iPad HD lenses, and professional-grade printers, your memories aren't just pictures – they're timeless keepsakes.
          </p>
          <p>
            From personalized photo-prints and guest albums to customized selfie-frames and screen designs, we make sure every detail reflects your celebration.
          </p>
          <p className="font-semibold">
            At ClickPlick, your joy fuels our journey — because your smile is, and always will be, our family's greatest happiness.
          </p>
        </div>

        {/* Buttons with Space at Bottom */}
        <div className="mt-10 mb-10 flex flex-wrap items-center gap-8">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Know More <ArrowRight className="w-5 h-5" />
          </button>
          
          <a href="tel:+447931983588" className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity">
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>
      </div>

    </div>
    </section>
    
  );
}