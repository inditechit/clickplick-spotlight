import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, Phone, Sparkles } from 'lucide-react';

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
      {/* Hero Slider */}
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
              fetchPriority="high"
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
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* MAGICAL FLOATING PROMO BANNER (Refined) */}
      <div className="relative z-20 px-4 w-full max-w-[95%] md:max-w-5xl mx-auto -mt-8 md:-mt-12 mb-8 md:mb-10">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_15px_40px_-10px_rgba(236,72,153,0.4)] bg-gradient-to-r from-[#27aae2] to-[#ec4899] border border-white/20">
          
          {/* Glassmorphism Inner Container - Slimmer padding */}
          <div className="relative bg-black/15 backdrop-blur-md py-4 md:py-5 px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x-2 divide-white/20">
            
            {/* Offer 1: 5% Off */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center w-full md:w-1/2 pt-2 md:pt-0 group">
              <div className="flex items-center justify-center bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm whitespace-nowrap border border-white/30 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="w-4 h-4 mr-1.5 text-yellow-300 animate-pulse" /> 
                Special Offer
              </div>
              <p className="text-white/95 font-medium text-base sm:text-lg md:text-left drop-shadow-sm leading-relaxed">
                Get an extra <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 text-xl mx-0.5 drop-shadow-md">5% OFF</span> bookings for <span className="underline decoration-white/60 decoration-2 underline-offset-4 font-bold text-white">Mon–Thu</span>
              </p>
            </div>

            {/* Offer 2: 5 Hours for 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center w-full md:w-1/2 pt-4 md:pt-0 group">
              <div className="flex items-center justify-center bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm whitespace-nowrap border border-white/30 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="w-4 h-4 mr-1.5 text-yellow-300 animate-pulse" /> 
                Limited Time
              </div>
              <p className="text-white/95 font-medium text-base sm:text-lg md:text-left drop-shadow-sm leading-relaxed">
                Book <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 text-xl mx-0.5 drop-shadow-md">4 Hours</span> for the price of 3!
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="bg-background pb-12 md:pb-16 pt-2">
        <div className="section-container flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="default" size="lg" asChild className="min-w-[200px] text-lg h-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Link to="/book-now">Book Now</Link>
          </Button>
          <Button variant="accent" size="lg" asChild className="min-w-[200px] text-lg h-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-[#ec4899] hover:bg-[#db2777]">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Left Side: Image Content */}
        <div className="w-full md:w-1/2">
          <img 
            src="/imgg7.jpg" 
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