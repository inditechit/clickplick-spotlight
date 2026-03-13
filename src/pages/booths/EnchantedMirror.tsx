import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Smile, Video, Image, Layers, Star, Heart, Briefcase, GraduationCap, PartyPopper, Crown, Gem, Wand2 } from 'lucide-react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { Phone, QrCode, BookImage, Printer, Key, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedBookingForm } from '@/components/AnimatedBookingForm';
// Import your new animated booking form

const API_BASE_URL = "https://api.clickplick.co.uk"; // Your Backend URL

const features = [
  // { icon: Smile, title: 'Emoji Stamps', description: 'Fun interactive emoji overlays that guests can place anywhere on their photos for added personality' },
  { icon: Layers, title: 'Green Screen', description: 'Transport guests to any location with our professional green screen and library of stunning backgrounds' },
  { icon: Video, title: 'Animated GIFs', description: 'Create animated GIFs that capture the fun and energy of your celebration' },
  { icon: Image, title: 'Premium Finish', description: 'Elegant high-end design with luxurious detailing that complements the most sophisticated venues' },
];

const includes = [
  'Premium mirror finish',
  'Voice guidance',
  'Emoji stamps',
  'Green screen option',
  'GIF & boomerang mode',
  'Unlimited prints',
  'Digital gallery',
  'Professional attendant',
  'Custom backgrounds',
  'Signature capture',
  'Social media sharing',
  'Video message recording',
];

const specifications = [
  { label: 'Footprint', value: '2FT x 2FT' },
  // { label: 'Height', value: '2m' },
  { label: 'Guest Capacity', value: '15-20 guests' },
  { label: 'Setup Time', value: '75 minutes' },
  { label: 'Power Required', value: 'Standard socket' },
];

const idealEvents = [
  { icon: Crown, name: 'Luxury Weddings' },
  { icon: Briefcase, name: 'Compact spaces' },
  { icon: Gem, name: 'Gala Dinners' },
  { icon: GraduationCap, name: 'Proms' },
];

const EnchantedMirror = () => {
  // State for Gallery Images
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoadingGallery, setIsLoadingGallery] = useState(true);

  // Helper to ensure full image URL
  const getImageUrl = (path) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
  };

  // Fetch Gallery Images on Mount
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoadingGallery(true);
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery');
        }
        
        const data = await response.json();
        
        // Filter for "EnchantedMirror" type and take exactly 6 images
        const filteredMirrorImages = data
          .filter(img => img.type === 'EnchantedMirror')
          .slice(0, 6);
          
        setGalleryImages(filteredMirrorImages);
      } catch (error) {
        console.error("Gallery fetch error:", error);
      } finally {
        setIsLoadingGallery(false);
      }
    };

    fetchGallery();
  }, []);

  // Function to smoothly scroll to the booking form
  const scrollToBooking = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
          </div>
          <div className="section-container relative">
            <Link to="/hire-photobooth" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Booths
            </Link>
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              💎 Luxury Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Enchanted Mirror X Selfie
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Our premium mirror booth combining elegant design with cutting-edge technology. Voice guidance, stunning visual effects, and a luxurious finish that elevates any celebration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" onClick={scrollToBooking}>
                Book This Booth
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  The Enchanted Mirror X Selfie Booth
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Clicks amazing professional grade photos with a DSLR camera. We use high quality photo paper so your prints are safe for life. Introducing the ultimate fusion of style and technology: the Magic Mirror X Selfie Pod! Step into the future of photo booths with this sleek and innovative design, combining the elegance of a mirror with the functionality of a selfie pod.
                  </p>
                  <p>
                    Say goodbye to bulky setups and hello to seamless elegance, as this cutting-edge device effortlessly captures your best moments with style.
                  </p>
                  <p>
                    Our unlimited prints truly mean unlimited. If there are 8 people in the photo, all 8 will receive a print! Plus, we’ll include an extra copy for the guest book, so your guests can leave a special message beside their photo.
                  </p>
                </div>
              </div>

              {/* --- Image Fix: Poori photo dikhane ke liye --- */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-elevated flex items-center justify-center p-4" 
                   style={{ minHeight: '500px', maxHeight: '700px' }}> 
                <img
                  src="/light/3.jpg"
                  alt="Enchanted Mirror X Selfie Booth"
                  className="w-full h-full object-contain" // 'contain' se photo kabhi nahi kategi
                />
                
                {/* Optional: Subtle glow effect behind the mirror */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* The Enchanted Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* --- Left Column: Image --- */}
              <div className="">
                <img
                  src="/services/bs.jpg" 
                  alt="Enchanted Magic Mirror Photobooth"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* --- Right Column: Text Content --- */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  The Enchanted Experience
                </h2>
                <p className="text-muted-foreground max-w-xl mb-10">
                  Every interaction is designed to delight, surprise, and create unforgettable memories with our Magic Mirror.
                </p>
                
                <div className="space-y-8"> 
                  {[
                    { 
                      icon: Crown, 
                      title: 'Regal Welcome', 
                      description: 'The Magic Mirror can have your choice of start screen. Just send us your design/LOGO and we will do the rest.' 
                    },
                    { 
                      icon: Gem, 
                      title: 'Premium Output', 
                      description: 'Photos are printed on premium quality paper with a luxurious finish. Digital copies are delivered via a beautifully designed online gallery perfect for sharing.' 
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4"> 
                      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/light/en/1.jpeg"
                    alt="Enchanted Mirror X Selfie Booth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["3.jpeg", "2.jpeg", "4.jpg"].map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`/light/en/${img}`}
                        alt={`Enchanted Mirror view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                  Premium Package
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Services Included
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "WHITE OR BLACK BACKDROP",
                    "GUEST BOOK",
                    "UNLIMITED PRINT OUTS",
                    "INSTANTLY DOWNLOAD TO PHONE",
                    "USB DATA TRANSFER AT END OF EVENT",
                    "PHOTOBOOTH ATTENDANT",
                    "WIDE RANGE OF PROPS",
                    "CHOICE OF PHOTO LAYOUT (2x6 OR 4x6)",
                    "PERSONALIZED TEXT OR LOGO",
                    "TALL STANDING BANNER SIGNALING TOWARDS PHOTO BOOTH"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Add On Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "CUSTOMIZED GUEST BOOK",
                    "CUSTOMIZED PHOTO FRAMES",
                    "CUSTOM BACKDROPS",
                    "CUSTOMIZED PHOTO PRINTS"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={scrollToBooking}>
                    Book This Booth
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Optional Add-Ons Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl"></div>

          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Enhance Your Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Popular Add-Ons
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Level up your event with our exclusive extras and premium keepsakes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* 1. Audio Guest Book (Featured) */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-blue-100 relative group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  SAVE £150
                </div>
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Audio Guest Book</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  Let guests leave heartfelt or hilarious voice messages on a vintage telephone. A timeless audio keepsake.
                </p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 line-through block mb-0.5">£199</span>
                    <span className="text-2xl font-black text-slate-900">£49</span>
                  </div>
                  <Link to="/audio-guest-book" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 2. Guest QR Code */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                  NEW
                </div>
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                  <QrCode className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Guest QR Code</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  Guests can upload the photos and videos they take during the event straight to a shared album in real time, so the host can later look back and enjoy all the fun, candid moments captured by everyone throughout the celebration.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {/* <span className="text-2xl font-black text-slate-900">£65</span> */}
                </div>
              </div>

              {/* 3. Customized Guest Album */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                  <BookImage className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Customized Guest Album</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  A beautiful, premium personalized photo album where guests can stick their extra photo strips and write a special message.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {/* <span className="text-2xl font-black text-slate-900">£60</span> */}
                </div>
              </div>

              {/* 4. Customized Print Outs */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Printer className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Customized Print Outs</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  Bespoke print designs featuring your names, dates, specific color themes, or corporate branding seamlessly integrated.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {/* <span className="text-2xl font-black text-slate-900">£30</span> */}
                </div>
              </div>

              {/* 5. Photo Key Chains */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Key className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Photo Key Chains</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  Turn your guests' favorite photo memories into lovely acrylic keychains they can carry with them everywhere.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {/* <span className="text-2xl font-black text-slate-900">£1.75 <span className="text-sm font-medium text-slate-400">each</span></span> */}
                </div>
              </div>

              {/* 6. Photo Fridge Magnets */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Photo Fridge Magnets</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  High-quality magnetic sleeves for your photo prints so your guests can stick their fun memories straight onto their fridge.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  {/* <span className="text-2xl font-black text-slate-900">£1.75 <span className="text-sm font-medium text-slate-400">each</span></span> */}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Premium Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Cutting-edge technology wrapped in elegant design
            </p>
            <div className="max-w-6xl mx-auto"> 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                {features.map((feature) => (
                  <div 
                    key={feature.title} 
                    className="bg-card rounded-2xl p-8 shadow-card text-center border border-slate-50 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION ADDED FROM SCREENSHOT --- */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Text from Screenshot */}
              <div>
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2 block">
                  Effortless Setup
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Relax and Enjoy: <br />
                  We’ll Handle Setup
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    With ClickPlick delivering and setting up The Enchanted Magic Mirror, you can relax while we handle all the technical details.
                  </p>
                  <p>
                    From ensuring perfect positioning to seamless operation, we'll take care of everything so you can enjoy a stress-free event.
                  </p>
                  <p className="font-semibold text-primary">
                    Setup is included outside of your hire time.
                  </p>
                </div>
              </div>

              {/* Right Side: Image instead of Specs (as requested) */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
                <img
                  src="/services/bhabi.jpg" 
                  alt="Booth Setup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
        {/* --- END NEW SECTION --- */}

        {/* Specifications & Ideal Events */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Technical Specifications
                </h2>
                <div className="bg-card rounded-xl p-6 shadow-card">
                  {specifications.map((spec, index) => (
                    <div key={spec.label} className={`flex justify-between py-3 ${index !== specifications.length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Events */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Perfect For
                </h2>
                <p className="text-muted-foreground mb-6">
                  The Enchanted Mirror X Selfie is designed for the most prestigious occasions:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {idealEvents.map((event) => (
                    <div key={event.name} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground">{event.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Gallery Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">
                Event Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                See It In Action
              </h2>
            </div>

            {isLoadingGallery ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : galleryImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {galleryImages.map((img, index) => (
                  <div key={img.id || index} className="aspect-square rounded-2xl overflow-hidden group relative shadow-md bg-slate-100 cursor-pointer">
                    <img
                      src={getImageUrl(img.image_url)} 
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-75" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground bg-slate-50 p-8 rounded-xl">
                Gallery images coming soon.
              </p>
            )}
            
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="section-container text-center">
            <div className="max-w-md mx-auto relative group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Add an Audio Telephone Guest Book</h3>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-dashed border-pink-200 p-2">
                   <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 clip-triangle -rotate-45 transform -translate-x-4 -translate-y-4"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 bg-pink-500 clip-triangle rotate-135 transform translate-x-4 translate-y-4"></div>
                   
                   <img 
                    src="/services/audiobook.jpeg" 
                    alt="Audio Guest Book" 
                    className="w-full h-full object-cover rounded-xl"
                   />
                   <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-xl px-6 py-3 border border-slate-100">
                      <span className="text-3xl font-black text-cyan-500">£49</span>
                   </div>
                </div>
                <Link to="/audio-guest-book" className="text-blue-500 font-semibold underline hover:text-blue-700 transition-colors"> 
                  More About Our Audio Telephone Guest Book Hire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
                "We wanted something special for our wedding at The Shard and the Enchanted Mirror exceeded our expectations. The green screen transported our guests to locations around the world, and the quality matched the venue perfectly. Absolutely stunning!"
              </blockquote>
              <p className="font-semibold text-foreground">Alexandra</p>
            </div>
          </div>
        </section>

        <div className="section-container py-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 p-8 md:p-12 shadow-sm">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#27aae1]/5 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-soft flex items-center justify-center border border-blue-50">
                  <ShieldCheck className="w-10 h-10 text-[#27aae1]" />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#27aae1] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Professional Standard
                  </span>
                  <Info className="w-4 h-4 text-slate-400" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-4">
                  Rest Assured, We Are <span className="text-[#27aae1]">Fully Insured</span>
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                  We carry <strong className="text-slate-900">£10 Million Public Liability Insurance</strong>. 
                  This is a standard requirement for most premium venues across the UK, ensuring 
                  complete peace of mind for you and your guests.
                </p>
              </div>

              <div className="hidden lg:block bg-white/80 backdrop-blur-sm border border-white p-4 rounded-2xl shadow-sm rotate-3">
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Venue Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ADDED BOOKING FORM HERE --- */}
        <AnimatedBookingForm />

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Questions about our premium Enchanted Mirror X Selfie
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'What makes this booth "premium"?', a: 'Every aspect is elevated – from the luxurious mirror finish and elegant frame to the superior print quality and advanced interactive features. We also provide attendant service with this booth.' },
                { q: 'Can we have custom green screen backgrounds?', a: 'Absolutely! We can create bespoke backgrounds featuring your venue, branding, wedding theme, or any imagery you provide.' },
                { q: 'Is this suitable for very formal events?', a: 'Perfectly suited! The Enchanted Mirror X Selfie is designed to complement black-tie events, luxury weddings, and sophisticated corporate functions. It adds entertainment without compromising elegance.' },
                { q: 'What about the Animated GIFs?', a: 'These fun modes capture short animated sequences that guests can share instantly via email or social media. They\'re hugely popular and create shareable content that extends your event\'s reach.' },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready for the Enchanted Experience?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Elevate your event with our premium Enchanted Mirror X Selfie. Book today for an unforgettable experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Note: I changed this button to scroll to our new form */}
              <Button variant="secondary" size="lg" onClick={scrollToBooking}>
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnchantedMirror;