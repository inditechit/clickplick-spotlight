import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images: /review/1.png to /review/7.png
const reviewImages = Array.from({ length: 7 }, (_, i) => `/reviews/${i + 1}.jpeg`);

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const trustBoxRef = useRef<HTMLDivElement>(null);

  // 1. Responsive handler for Carousel
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Trustpilot Script Loader & Initializer
  useEffect(() => {
    // Check if script is already loaded to avoid duplicates
    const scriptId = 'trustpilot-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // If the window.Trustpilot object exists, we need to refresh the widget
    // This handles client-side navigation where the script is loaded but the widget isn't rendered yet
    if (window.Trustpilot && trustBoxRef.current) {
      window.Trustpilot.loadFromElement(trustBoxRef.current, true);
    }

    // Listener for when the script finishes loading (for the very first load)
    script.onload = () => {
       if (window.Trustpilot && trustBoxRef.current) {
         window.Trustpilot.loadFromElement(trustBoxRef.current, true);
       }
    };
  }, []);

  // Carousel Logic
  const maxIndex = reviewImages.length - slidesPerView;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden mb-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Client <span className="text-gold">Love</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-gold text-white backdrop-blur-md transition-all border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-gold text-white backdrop-blur-md transition-all border border-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {reviewImages.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-3">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-2xl">
                    <div className="aspect-[20/7] w-full relative">
                      <img
                        src={src}
                        alt={`Review ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-fill" 
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- TRUSTPILOT WIDGET --- */}
        <div className="w-full flex justify-center mt-12 bg-white/5 rounded-xl p-4 border border-white/5">
            <div 
              ref={trustBoxRef}
              className="trustpilot-widget w-full" 
              data-locale="en-US" 
              data-template-id="56278e9abfbbba0bdcd568bc" 
              data-businessunit-id="67ac3a3e3abf0d2eed0cffdb" 
              data-style-height="52px" 
              data-style-width="100%" 
              data-token="0f9d2ced-763e-45f6-aba5-d6277028089f"
            >
              <a href="https://www.trustpilot.com/review/clickplick.co.uk" target="_blank" rel="noopener noreferrer">
                Trustpilot
              </a>
            </div>
        </div>

      </div>
    </section>
  );
}

// Add TypeScript declaration for global window object if needed
declare global {
  interface Window {
    Trustpilot: any;
  }
}