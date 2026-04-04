import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const booths = [
  {
    id: 'lcd-slimline-pod',
    name: 'LCD Screen Slimline Pod',
    description: 'Sleek, modern design perfect for any venue. Features a stunning LCD touchscreen interface.',
    image: '/images/slime.png',
    popular: true,
  },
  {
    id: 'magic-mirror',
    name: 'Magic Mirror',
    description: 'Interactive full-length mirror with animated graphics and touchscreen technology.',
    image: '/images/imgg7.jpg',
    popular: false,
  },
  {
    id: 'retro-box',
    name: 'Retro Box',
    description: 'Classic vintage-style photo booth bringing nostalgic charm to your celebration.',
    image: '/images/33.jpg',
    popular: false,
  },
  {
    id: 'enchanted-mirror',
    name: 'Enchanted Mirror X Selfie',
    description: 'Our premium mirror booth with voice guidance and stunning visual effects.',
    image: '/images/enhanced.jpg',
    popular: true,
  },
  {
    id: 'inflatable-booth',
    name: 'Inflatable Enclosed Booth',
    description: 'Fun enclosed inflatable booth creating a private photo experience.',
    image: '/light/in/2.png',
    popular: false,
  },
  {
    id: 'wooden-tripod',
    name: 'Wooden Vintage Tripod',
    description: 'Elegant rustic wooden tripod booth ideal for weddings and upscale events.',
    image: '/images/Vintage1.jpg',
    popular: false,
  },
  {
    id: 'AI-Photobooth',
    name: 'AI Photobooth',
    description: 'Transform guests into digital art with real-time AI generation and custom prompts.',
    image: '/imgg7.jpg', 
    popular: true,
  },
  {
    id: 'Corporate-Photobooth',
    name: 'Corporate Booth',
    description: 'Fully wrapped photobooth experience. Our premium solution for corporate events and brand activations.',
    image: '/main/hero2.png', 
    popular: true,
  },
];

export function BoothShowcase() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-pink-100/50 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="section-container relative z-10 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[#ec4899] text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            Our Collection
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Choose Your Perfect <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#a855f7] to-[#ec4899]">
              Photo Booth
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            From sleek modern designs to vintage charm and next-gen AI, we have the perfect booth to match your event's unique style.
          </p>
        </div>

        {/* Booths Grid: 4 Columns ensures exactly 2 rows for 8 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {booths.map((booth) => (
            <Link
              key={booth.id}
              to={`/hire-photobooth/${booth.id}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* Popular Badge */}
                {booth.popular && (
                  <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    Popular
                  </div>
                )}
                
                <img
                  src={booth.image}
                  alt={booth.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content Container - Scaled for 4 columns */}
              <div className="p-6 flex-1 flex flex-col relative bg-white">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#ec4899] transition-colors duration-300 line-clamp-1">
                  {booth.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {booth.description}
                </p>
                
                {/* Animated "Learn More" Link */}
                <div className="mt-auto flex items-center text-[#0ea5e9] font-bold text-sm group-hover:text-[#ec4899] transition-colors duration-300">
                  <span className="relative">
                    Learn More
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ec4899] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 md:mt-20">
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg font-bold border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-xl group"
            asChild
          >
            <Link to="/hire-photobooth">
              View All Photo Booths
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}