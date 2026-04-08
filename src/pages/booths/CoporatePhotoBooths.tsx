import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Share2, 
  Database, 
  Camera, 
  Sparkles, 
  Briefcase, 
  Phone,
  CheckCircle2,
  Printer,
  Users,
  Image as ImageIcon,
  ShieldCheck,
  CalendarCheck,
  Wand2,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  MonitorPlay
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export function CorporatePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });


  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Array of your 4 images to map through cleanly
  const galleryImages = [
    { src: "/coporate.jpeg", alt: "Brand Activation 1" },
    { src: "/coporate9.jpeg", alt: "Brand Activation 2" },
    { src: "/coporate3.jpeg", alt: "Brand Activation 3" },
    { src: "/coporate4.jpeg", alt: "Brand Activation 4" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
       <Header />
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-36 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/main/hero2.png" 
            alt="Corporate Event Photo Booth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 text-sm font-bold tracking-widest uppercase">
              <Briefcase className="w-4 h-4 text-[#0ea5e9]" />
              Corporate & Brand Activations
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Elevate Your Corporate Event with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#ec4899]">ClickPlick</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
              From high-profile product launches to team-building days. Create an unforgettable, fully-branded experience that boosts visibility and keeps your guests engaged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#ec4899] hover:bg-[#db2777] text-white h-14 px-8 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" asChild>
                <Link to="/book-now">Get a Corporate Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 h-14 px-8 text-lg w-full sm:w-auto backdrop-blur-sm transition-all hover:-translate-y-1" asChild>
                <a href="tel:+447931983588">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28">
        <div className="section-container text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Smile, Snap, and Stand Out
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            We understand that your company's events reflect your brand. Our premium photo booths are the perfect addition to any corporate gathering across the UK. Equipped with intuitive touch screens, Canon DSLR cameras, and instant professional-grade printers, we provide hours of entertainment while giving your brand the maximum exposure it deserves.
          </p>
        </div>
      </section>
{/* 
      Features Grid */}
     
     <section className="py-20 md:py-28 bg-slate-50">
      {/* 1. WIDER CONTAINER: max-w-[1600px] gives 5 columns room to breathe */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Smart Features for Business</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Everything you need to make your brand activation a measurable success.
          </p>
        </div>

        {/* 2. SMARTER BREAKPOINTS: xl:grid-cols-5 ensures it only goes 5-wide on large enough screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-pink-100 text-[#ec4899] rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Fully Branded</h3>
            <p className="text-slate-500 text-base leading-relaxed flex-1">
              Brand the entire exterior of the photo booth, the user interface, and the instant printouts. We can also fully wrap your photobooth in your brand style.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-blue-100 text-[#0ea5e9] rounded-2xl flex items-center justify-center mb-6">
              <Database className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Data Collection</h3>
            <p className="text-slate-500 text-base leading-relaxed flex-1">
              Seamlessly collect emails, phone numbers, or survey answers from guests right at the booth. Perfect for generating ROI.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-purple-100 text-[#a855f7] rounded-2xl flex items-center justify-center mb-6">
              <Share2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Social Sharing</h3>
            <p className="text-slate-500 text-base leading-relaxed flex-1">
              Increase brand awareness instantly. Guests can email or text their branded photos and GIFs directly to their phones.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Camera className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Backdrops</h3>
            <p className="text-slate-500 text-base leading-relaxed flex-1">
              From custom-printed step-and-repeat banner walls featuring your logo to advanced green screen tech, we make your background pop.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col">
            {/* Swapped to MonitorPlay icon for a better visual representation of Advertising/Screens */}
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <MonitorPlay className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Advertising</h3>
            <p className="text-slate-500 text-base leading-relaxed flex-1">
              We can totally customize the screens of the Photo Booths with your Brand Logo, Advertisement or Picture Slides. Represent your Product/Brand in a Classy way.
            </p>
          </div>

        </div>
      </div>
    </section>
      {/* 2. Embla Carousel Image Gallery Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Header */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">See It In Action</h2>
            <p className="text-slate-500 text-xl">
              Take a look at our immersive photo booth experiences. Swipe to explore.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="max-w-[80vw] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            {/* Embla Container */}
            <div className="flex -ml-4 md:-ml-8">
             {galleryImages.map((image, index) => (
  <div 
    key={index} 
    className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4 md:pl-8"
  >
    <div className="group overflow-hidden rounded-3xl shadow-sm border border-slate-100 bg-slate-100 aspect-[4/5] relative">
      
      {/* ---> ADJUST THE BRIGHTNESS CLASS HERE <--- */}
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none brightness-110"
      />
      {/* ------------------------------------------ */}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </div>
))}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Arrows (Visible only on small screens) */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-10 px-4">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-md active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      {/* NEW: What's Included Section */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What's Included as Standard</h2>
            <p className="text-xl text-muted-foreground">Every corporate package is bundled with premium features to ensure a flawless experience.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-8">
            <div className="flex items-start gap-4">
              <Printer className="w-8 h-8 text-[#0ea5e9] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Truly Unlimited Prints</h4>
                <p className="text-muted-foreground">Studio-quality prints for every guest in the photo, within 9 seconds.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-[#ec4899] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Professional Attendant</h4>
                <p className="text-muted-foreground">A smartly dressed, fully-trained operator to assist guests and manage the booth.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Camera className="w-8 h-8 text-[#a855f7] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Canon DSLR Quality</h4>
                <p className="text-muted-foreground">We don't use webcams. Expect crisp, high-resolution imagery every time clicked with a professional photography camera.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Wand2 className="w-8 h-8 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Curated Prop Box</h4>
                <p className="text-muted-foreground">A huge selection of fun, high-quality props (custom branded props available on request).</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ImageIcon className="w-8 h-8 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Digital Online Gallery</h4>
                <p className="text-muted-foreground">A secure link containing all high-res digital copies from your event to use in marketing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-slate-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Fully Insured</h4>
                <p className="text-muted-foreground">Complete peace of mind with full Public Liability Insurance and PAT tested equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booth Highlights */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          
          {/* Highlight 1: AI */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                <img src="/aiimage.webp" alt="ClickPlick AI Booth" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0ea5e9] mb-6 text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Next-Gen Tech
              </div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">AI Photo Booths for Brand Activations</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Looking for a truly viral way to engage guests? Our AI Photo Booth transforms simple photos into fully-customised digital art in real-time. Whether you want guests to see themselves as superheroes, magazine cover stars, or in a branded futuristic setting, we create a bespoke prompt tailored entirely to your campaign.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Unmatched user engagement</li>
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Highly shareable on Social Media</li>
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Real-time processing & printing</li>
              </ul>
              <Button asChild variant="default" size="lg" className="h-14 px-8 text-lg"><Link to="/hire-photobooth/AI-Photobooth">Explore AI Booths</Link></Button>
            </div>
          </div>

          {/* Highlight 2: Magic Mirror */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                <img src="/magicmirror.png" alt="Corporate Magic Mirror" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">The Magic Mirror & Slimline Pods</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                If you need something sleek that fits perfectly into a black-tie gala, an awards dinner, or a busy exhibition stand, our Magic Mirrors and Slimline Pods are the ideal choice. They take up minimal floor space while delivering maximum visual impact with personalised screens and bespoke vinyl wrapping.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Custom animations on the mirror screen</li>
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Full-length photo capabilities</li>
                <li className="flex items-center gap-4 text-lg font-medium"><CheckCircle2 className="w-6 h-6 text-green-500"/> Interactive touch-screen signing</li>
              </ul>
              <Button asChild variant="default" size="lg" className="h-14 px-8 text-lg"><Link to="/hire-photobooth/magic-mirror">Explore Magic Mirrors</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: How it Works Process */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-slate-300">A seamless, stress-free process from the first hello to the final photo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#ec4899] to-transparent opacity-30"></div>

            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                <CalendarCheck className="w-10 h-10 text-[#ec4899]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Enquire & Quote</h3>
              <p className="text-slate-300 text-lg">Tell us about your event goals, dates, and venue. We'll provide a transparent, tailored quote immediately.</p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                <Palette className="w-10 h-10 text-[#0ea5e9]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">2. Design & Brand</h3>
              <p className="text-slate-300 text-lg">Work with our team or use our templates to design your printouts, booth wraps, and digital interfaces.</p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <Sparkles className="w-10 h-10 text-[#a855f7]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3. The Event Day</h3>
              <p className="text-slate-300 text-lg">Our professional attendants arrive early to set up. You relax, while we engage your guests and capture the memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Corporate FAQs */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6">Corporate FAQs</h2>
              <p className="text-xl text-muted-foreground mb-8">Got questions about logistics, branding, or technical requirements? We've got answers.</p>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-soft">
                <HelpCircle className="w-10 h-10 text-[#ec4899] mb-4" />
                <h4 className="text-xl font-bold mb-2">Still need help?</h4>
                <p className="text-muted-foreground mb-6">Our corporate team is ready to discuss your custom requirements.</p>
                <Button asChild variant="outline" className="w-full h-12 text-base"><Link to="/contact">Contact Support</Link></Button>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold mb-3">How much space do I need for a booth?</h4>
                <p className="text-muted-foreground text-lg">Our standard footprint is approximately 2m x 2m. However, options like the Slimline Pod or Magic Mirror can fit comfortably into tighter spaces or exhibition stands if required.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold mb-3">Can we completely wrap the booth in our logo?</h4>
                <p className="text-muted-foreground text-lg">Absolutely! We offer full vinyl wrapping for the exterior of our booths. We will provide you with a design template for your graphic designer, or our in-house team can design it for you.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold mb-3">Does the booth need Wi-Fi for social sharing?</h4>
                <p className="text-muted-foreground text-lg">We carry our own 4G/5G mobile internet routers for social sharing and data capture. However, if your event is in a basement or area with poor cellular reception, access to the venue's Wi-Fi is highly recommended.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold mb-3">Can you provide Risk Assessments and PLI?</h4>
                <p className="text-muted-foreground text-lg">Yes, we regularly work in top-tier London and UK venues. We are fully insured with Public Liability Insurance and all our electrical equipment is PAT tested. Documents are available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0ea5e9] via-[#a855f7] to-[#ec4899] py-20 md:py-28 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-md tracking-tight">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            From multi-day exhibitions to intimate team parties, we handle the logistics, the tech, and the smiles. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-black hover:bg-slate-100 h-16 px-10 text-xl font-bold shadow-xl transition-transform hover:-translate-y-1" asChild>
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-black h-16 px-10 text-xl font-bold backdrop-blur-sm shadow-xl transition-transform hover:-translate-y-1" asChild>
              <a href="tel:+447931983588">Call +44 7931-983-588</a>
            </Button>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
}