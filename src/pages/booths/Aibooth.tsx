import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Core UI
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedBookingForm } from '@/components/AnimatedBookingForm';

// Icons
import { 
  Sparkles, Cpu, Wand2, Share2, ShieldCheck, Info, CheckCircle2, 
  ArrowLeft, Zap, Binary, Globe, Camera, Smartphone, Users, 
  Layout, Mail, BarChart3, Fingerprint, History, Trophy,
  Briefcase, ZapIcon
} from 'lucide-react';

// Swiper for attractive sliders
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCoverflow } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';


import useEmblaCarousel from "embla-carousel-react";




const API_BASE_URL = "https://api.clickplick.co.uk";

// Exact content from the screenshot
const aiThemes = [
  { 
    title: 'AI Superhero Generator', 
    desc: "Superhero styles perfect for kids' parties and Bar/Bat Mitzvahs.", 
    image: '/services/ai-superhero.webp' 
  },
  { 
    title: 'AI Time Machine', 
    desc: 'Historical eras from Ancient Egypt to Roaring Twenties.', 
    image: '/services/ai-time-machine.webp' 
  },
  { 
    title: 'AI Travel Destinations', 
    desc: 'Dream locations - Paris, Safari, Venice, Tokyo, and more.', 
    image: '/services/ai-travel.webp' 
  },
  { 
    title: 'AI Art Portraits', 
    desc: 'Art styles from Renaissance to Pop Art to Anime.', 
    image: '/services/ai-art.webp' 
  },
  { 
    title: 'AI Seasonal Magic', 
    desc: "Halloween, Christmas, Valentine's, Summer - match any season.", 
    image: '/services/ai-seasonal.webp' 
  },
  { 
    title: 'AI Career Day', 
    desc: 'Professions - astronaut, chef, doctor, athlete.', 
    image: '/services/ai-career.webp' 
  },
  { 
    title: 'AI Trading Cards', 
    desc: 'Turn guests into collectible trading cards with stats.', 
    image: '/services/ai-trading-cards.webp' 
  },
  { 
    title: 'AI Fantasy Adventure', 
    desc: 'Wizards, dragons, elves, pirates, and mythical creatures.', 
    image: '/services/ai-fantasy.webp' 
  },
];

const aiimages =[
  '/services/ai-slide-1.webp',
  '/services/ai-slide-2.webp',
  '/services/ai-slide-3.webp',
  '/services/ai-slide-4.webp',
  '/services/ai-slide-5.webp',
  '/services/ai-slide-6.webp',
]

const AIBooth = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoadingGallery, setIsLoadingGallery] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "center",
});

useEffect(() => {
  if (!emblaApi) return;

  let autoplay;

  const startAutoplay = () => {
    autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
  };

  const stopAutoplay = () => {
    if (autoplay) clearInterval(autoplay);
  };

  startAutoplay();

  emblaApi.on("pointerDown", stopAutoplay);
  emblaApi.on("pointerUp", startAutoplay);

  return () => stopAutoplay();
}, [emblaApi]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoadingGallery(true);
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        if (response.ok) {
          const data = await response.json();
          const filtered = data.filter(img => img.type === 'AIBooth').slice(0, 10);
          setGalleryImages(filtered);
        }
      } catch (error) { console.error(error); } finally { setIsLoadingGallery(false); }
    };
    fetchGallery();
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToGallery = () => {
    window.location.href = '/gallery';
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* --- HERO SECTION: HIGH TECH --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden text-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e40af_0%,transparent_50%)]" />
          </div>

          <div className="absolute inset-0 opacity-90">
          <img 
            src="/main/ai_banner.png" 
            alt="AI Photo Booth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" /> The Leading AI Photo Booth in London
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-[0.9]">
                AI Photo-<br></br><span className="text-blue-500">booth.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Turn moments into marketing gold with our next-gen generative AI software. Customizable, scalable, and designed for Ultimate Fun.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-bold border-none" onClick={scrollToBooking}>
                  Request Instant Quote
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-white/20 hover:bg-white/10" onClick={goToGallery}>
                  See Real Outputs
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Element: Real-time generation preview placeholder */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-[40%] animate-pulse opacity-20">
            <Binary className="w-full h-full text-blue-500" />
          </div>
        </section>

        {/* --- NEW SECTION: AI HEADSHOTS --- */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="/services/Headshot1.webp" alt="AI Headshot 1" className="rounded-2xl shadow-lg border-4 border-white w-full" />
                    <img src="/services/Headshot5.webp" alt="AI Headshot 3" className="rounded-2xl shadow-lg border-4 border-white w-full" />
                  </div>
                  <div className="pt-8">
                    <img src="/services/Headshot3.webp" alt="AI Headshot 2" className="rounded-2xl shadow-lg border-4 border-white w-full" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-bold uppercase mb-4">
                  <Briefcase className="w-3 h-3" /> Professional Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">AI Headshot Lounge</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Upgrade attendee profiles with photorealistic, high-end headshots delivered in minutes. Our AI analyzes each guest's features and applies professional retouching, lighting, and corporate backgrounds—perfect for LinkedIn and corporate networking.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700 font-medium">Instant Skin Smoothing & Lighting Correction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700 font-medium">Custom Branded Office or Studio Backgrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700 font-medium">100% Likeness Accuracy for Diverse Participants</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={scrollToBooking}>Book Headshot Booth</Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: SUPERHERO GENERATOR --- */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-0" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold uppercase mb-4">
                  <ZapIcon className="w-3 h-3" /> The Hero Activation
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Superhero Generator</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Make your attendees the heroes of the event. Our AI doesn't just swap faces—it learns the intricacy of each person to generate a realistic "Super-Self" in unique poses, armored suits, and cinematic settings that align with your brand's core superpowers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-blue-400 text-lg mb-1">Inclusivity First</h4>
                    <p className="text-sm text-slate-400">Adapts to all races, ages, and backgrounds for authentic representation.</p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-blue-400 text-lg mb-1">Cinematic Styles</h4>
                    <p className="text-sm text-slate-400">From comic-book sketches to high-fidelity 3D movie armor.</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 border-none" onClick={scrollToBooking}>
                  Start Hero Experience
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                  <img src="/services/ai-superhero.webp" alt="Superhero Transformation" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-center leading-none text-xl p-4 shadow-xl rotate-12">
                  BE THE HERO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- IMAGE SLIDER: SEE IT IN ACTION --- */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="section-container mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Real Client <span className="text-blue-600">Transformations</span></h2>
            <p className="text-slate-500">Our AI ensures 100% likeness accuracy across all races, ages, and backgrounds.</p>
          </div>
          
          <div className="px-4">
           {/* <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  loop={true} 
  coverflowEffect={{
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  }}
  autoplay={{ 
    delay: 2500, 
    disableOnInteraction: false 
  }}

  modules={[EffectCoverflow, Autoplay]} 
  className="max-w-6xl"
>
  {aiimages.map((img, index) => (
    <SwiperSlide key={index} className="w-[300px] md:w-[400px]">
      <div className="bg-slate-100 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
        <img 
          src={img} 
          alt={`AI Output ${index}`} 
          className="w-full h-full object-cover aspect-[3/4]" 
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper> */}

             <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
    <div className="flex items-center">
      {aiimages.map((img, index) => (
        <div
          key={index}
          className="flex-[0_0_auto] w-[300px] md:w-[400px] px-3 transition-transform duration-500"
        >
          <div className="bg-slate-100 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105">
            <img
              src={img}
              alt="AI Output"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
          </div>
        </section>

        {/* --- AI THEMES GRID (Replacing Transformation Grid) --- */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="section-container">
            
            {/* --- RESTORED HEADING --- */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Limitless <span className="text-blue-600">Possibilities</span>
              </h2>
              <p className="text-slate-500 text-lg">
                From professional headshots to trading cards, choose a style that aligns with your brand’s superpowers.
              </p>
            </div>

            {/* --- GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
              {aiThemes.map((theme, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-full max-w-[280px] aspect-square mb-6 overflow-hidden rounded-[2rem] shadow-sm">
                    <img 
                      src={theme.image} 
                      alt={theme.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">
                    {theme.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">
                    {theme.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- DATA & ANALYTICS BAR --- */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-1">15s</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider">Processing Time</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">85%+</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider">Likeness Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider">In-Browser Tech</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">10M+</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider">PLI Insurance</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-slate-50">
          <div className="section-container max-w-4xl">
            <h2 className="text-4xl font-heading font-bold text-center mb-16">Everything you need to know</h2>
            <div className="space-y-4">
              {[
                { q: "Is the AI technology safe and secure?", a: "Yes. We use enterprise-grade cloud processing. All user photos are processed in compliance with GDPR, and we never use user data to train public models." },
                { q: "Can we moderate generated portraits?", a: "Absolutely. Our dashboard allows for real-time moderation where you can approve or block images before they appear on live slideshows." },
                { q: "Do you provide staffing?", a: "Our AI systems are designed to be intuitive and self-service, but for large scale activations, we provide professional attendants to ensure smooth operation." },
                { q: "How are photos delivered?", a: "Instantly via a custom-branded HTML email or SMS, containing links to social sharing tools and a high-res download." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" /> {faq.q}
                  </h4>
                  <p className="text-slate-500 leading-relaxed pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BOOKING FORM --- */}
        <div id="booking-form">
          <AnimatedBookingForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIBooth;