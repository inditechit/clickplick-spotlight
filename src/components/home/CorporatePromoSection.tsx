import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

export function CorporatePromoSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden border-t border-slate-100">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0ea5e9] text-sm font-bold tracking-widest uppercase border border-blue-100 shadow-sm">
              <Briefcase className="w-4 h-4" />
              Corporate Events
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              Brand Activations & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#ec4899]">Corporate Booths</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-xl">
              Elevate your next product launch, awards gala, or team-building event. Our fully-customisable corporate photo booths offer instant branded prints, seamless data capture, brand surveys, and highly shareable digital content.
            </p>
            
            <ul className="space-y-4 pt-4 pb-2">
              <li className="flex items-center gap-3 font-semibold text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-[#ec4899] shrink-0" />
                Custom Vinyl Booth Wrapping & Screen Branding
              </li>
              <li className="flex items-center gap-3 font-semibold text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-[#0ea5e9] shrink-0" />
                Bespoke Prints & Smart Data Capture
              </li>
              <li className="flex items-center gap-3 font-semibold text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-[#a855f7] shrink-0" />
                Instant Social Media, Air Drop & Email Sharing
              </li>
            </ul>
            
            <div className="pt-6">
              <Button 
                asChild 
                size="lg" 
                className="h-14 px-8 text-lg bg-[#ec4899] hover:bg-[#db2777] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <Link to="/hire-photobooth/Corporate-Photobooth">
                  Discover Corporate Packages 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Decorative offset background block for a modern 3D feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] to-[#ec4899] rounded-3xl transform translate-x-4 translate-y-4 opacity-20 -z-10"></div>
            
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img 
                src="/main/hero2.png" 
                alt="Corporate Photo Booth Hire" 
                className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle inner overlay for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}