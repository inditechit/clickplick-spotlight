import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Star, Camera } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Animated Particles/Bokeh Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-celebration/20 rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-down">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-white/90 text-sm font-medium">Rated 5 Stars by 500+ Happy Clients</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Capture Every{' '}
            <span className="gradient-text">Magical Moment</span>
            <br />
            With Our Photo Booths
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Premium photo booth hire for weddings, parties, and corporate events across the UK. 
            Unlimited prints, instant sharing, and memories that last forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-now">
                <Camera className="w-5 h-5" />
                Book Your Booth
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/gallery">
                <Play className="w-5 h-5" />
                View Gallery
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">500+</div>
                <div className="text-white/60 text-sm">Events Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">50K+</div>
                <div className="text-white/60 text-sm">Photos Taken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">6</div>
                <div className="text-white/60 text-sm">Booth Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">100%</div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
