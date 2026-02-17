import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images: /review/1.png to /review/7.png
const reviewImages = Array.from({ length: 7 }, (_, i) => `/reviews/${i + 1}.jpeg`);

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limit index so we don't slide into empty space
  const maxIndex = reviewImages.length - slidesPerView;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden mb-20">
      
      {/* Background Decoration (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            What Our Clients{' '}
            <span className="gradient-text-gold">Say About Us</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            See the love from our recent events.
          </p>
        </div>


        {/* Carousel Wrapper */}
        <div className="relative group">
          
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-gold text-white backdrop-blur-md transition-all border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-gold text-white backdrop-blur-md transition-all border border-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
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
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-3" // Adds gap between images via padding
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-2xl">
                    {/* Aspect Ratio Fix:
                       Changed to aspect-video (16:9) or h-64/h-80 fixed height.
                       object-fill ensures it stretches to corners, 
                       OR use object-contain if you don't want text stretched.
                    */}
                    <div className="aspect-[4/3] md:aspect-video w-full relative">
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
      </div>
    </section>
  );
}