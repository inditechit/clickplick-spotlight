import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Tent, Lightbulb, Lock, Music, Star, Heart, Briefcase, GraduationCap, PartyPopper, Zap, Palette, Users } from 'lucide-react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { Phone, QrCode, BookImage, Printer, Key, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';

const API_BASE_URL = "https://api.clickplick.co.uk"; // Your Backend URL

const features = [
  { icon: Tent, title: 'Enclosed Design', description: 'Full privacy curtain creates an intimate, classic photo booth experience for your guests' },
  { icon: Lightbulb, title: 'LED Lighting', description: 'Colour-changing LED lights create an exciting atmosphere and can match your event theme' },
  { icon: Lock, title: 'Complete Privacy', description: 'Heavy-duty privacy curtain lets guests express themselves freely without an audience' },
  { icon: Music, title: 'Festival Ready', description: 'Robust design perfect for outdoor festivals, garden parties, and marquee events' },
];

const includes = [
  'Inflatable enclosed booth',
  'LED lighting system',
  'Privacy curtain',
  'DSLR camera',
  'Unlimited prints',
  'Digital copies',
  'Fun props selection',
  'Professional attendant',
  'Custom templates',
  'Social media sharing',
  'Green screen option',
  'Online gallery access',
];

const specifications = [
  { label: 'Footprint', value: '2.5m x 2.5m' },
  // { label: 'Height', value: '2.4m' },
  { label: 'Guest Capacity', value: '10-15 guests' },
  { label: 'Setup Time', value: '90 minutes' },
  { label: 'Power Required', value: 'Standard socket' },
];

const idealEvents = [
  { icon: PartyPopper, name: 'Birthday Parties' },
  { icon: Music, name: 'Festivals' },
  { icon: GraduationCap, name: 'School Events' },
  { icon: Briefcase, name: 'Corporate Fun Days' },
];

const InflatableBooth = () => {
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
        
        // Filter for "InflatableBooth" type and take exactly 6 images
        const filteredImages = data
          .filter(img => img.type === 'InflatableBooth')
          .slice(0, 6);
          
        setGalleryImages(filteredImages);
      } catch (error) {
        console.error("Gallery fetch error:", error);
      } finally {
        setIsLoadingGallery(false);
      }
    };

    fetchGallery();
  }, []);

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
              🎉 Party Favourite
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Inflatable Enclosed Booth
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              The ultimate party booth! Fun enclosed inflatable design with colourful LED lighting creates an exciting private photo experience. Perfect for parties, festivals, and events where fun is the priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/book-now">Book This Booth</Link>
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
                  The Inflatable Enclosed Photobooth
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">
                    Step Inside the Fun – Inflatable Enclosed Photo Booth Experience
                  </p>

                  <p>
                    Bring the party to life with our Inflatable Enclosed Photo Booth – a
                    unique, eye-catching feature that adds excitement and unforgettable
                    memories to any event. Measuring 2.5m x 2.5m, this stylish enclosed
                    space offers guests a fun and private photo experience inside a
                    beautifully lit booth.
                  </p>

                  <p>
                    The booth features customizable LED lighting, allowing you to match
                    your event’s theme or color palette perfectly. Whether it’s a
                    wedding, birthday, corporate event, or any special celebration, this
                    modern setup creates an immersive and exciting photo experience.
                  </p>

                  <p>
                    Enjoy totally unlimited high-quality prints so every guest leaves
                    with a keepsake to cherish. A friendly and professional photobooth
                    attendant is present throughout your event to guide guests, manage
                    the booth, and keep the fun flowing smoothly.
                  </p>

                  <p>
                    With its striking design, premium features, and hassle-free setup,
                    the Inflatable Enclosed Photo Booth is the perfect way to elevate
                    your event and keep guests entertained from start to finish.
                  </p>
                </div>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/light/4.png"
                  alt="Inflatable Enclosed Photo Booth"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>


        {/* The Party Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              The Party Experience
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              An experience designed to maximise fun and create unforgettable group moments
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Instant Attraction', description: 'The glowing LED walls act as a beacon, drawing guests from across the venue. The exciting appearance creates anticipation and gets everyone in the party mood.' },
                { icon: Users, title: 'Group Friendly', description: 'Bring the whole squad! The spacious interior fits up to 10 people for epic group photos. Perfect for those "everyone in!" moments that define great events.' },
                { icon: Palette, title: 'Customisable Vibe', description: 'LED lighting can be set to match your event colours or cycle through a rainbow of hues. Create the perfect atmosphere for your celebration.' },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-celebration/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-celebration" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
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
                    src="/light/in/4.png"
                    alt="Retro White Box Booth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["3.png", "2.png", "1.png"].map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`/light/in/${img}`}
                        alt={`Retro White Box Booth view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                  Complete Package
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Services Included
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "TOTALLY UNLIMITED PRINTS",
                    "TALL STANDING BANNER SIGNALING THE DIRECTION TO BOOTH",
                    "GUEST BOOK (NORMAL)",
                    "WIDE RANGE OF PROPS",
                    "ATTENDANT",
                    "PERSONALIZE WITH TEXT AND LOGO",
                    "GREEN SCREEN",
                    "FILTERS AND PHOTO EFFECTS",
                    "USB WITH DIGITAL COPIES",
                    "CHOICE OF PHOTO LAYOUT",
                    "INSTANTLY DOWNLOAD TO PHONE",
                    "SEND EMAILS",
                    "PROFESSIONAL GRADE CAMERA",
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
                    "CUSTOMIZED PHOTO FRAME",
                    "CUSTOMIZED GUEST BOOK",
                    "OTHER BACKDROPS",
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
                  <Button size="lg" asChild>
                    <Link to="/book-now">Book This Booth</Link>
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
              Key Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Everything that makes our Inflatable Booth a party essential
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card rounded-xl p-6 shadow-card text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
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
                    With ClickPlick delivering and setting up The Inflatable Photo-booth, you can relax while we handle all the technical details.
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
                  src="/light/in/2.png" 
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
                <p className="text-muted-foreground mt-4 text-sm">
                  * Requires a clear ceiling height of 2.6m or outdoor space. Please ensure adequate ventilation for indoor use.
                </p>
              </div>

              {/* Ideal Events */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Perfect For
                </h2>
                <p className="text-muted-foreground mb-6">
                  The Inflatable Enclosed Booth brings maximum fun to these events:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {idealEvents.map((event) => (
                    <div key={event.name} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-celebration/10 flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-celebration" />
                      </div>
                      <span className="font-semibold text-foreground">{event.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  The Inflatable Booth is a hit at events where fun and high energy are the priority. It's particularly loved by younger guests and creates amazing group photo opportunities.
                </p>
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
                   {/* Decorative elements from the image */}
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
                <Link to="/audio-guest-book"  className="text-blue-500 font-semibold underline hover:text-blue-700 transition-colors">
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
                "The inflatable booth was absolutely perfect for our festival-themed 30th birthday! It looked amazing as the sun went down with all the LED lights glowing. We had groups of 8-10 friends piling in for photos – the pictures are hilarious and everyone loved it!"
              </blockquote>
              <p className="font-semibold text-foreground">Chris & Friends</p>
            </div>
          </div>
        </section>
        
        <div className="section-container py-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 p-8 md:p-12 shadow-sm">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#27aae1]/5 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Icon Part */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-soft flex items-center justify-center border border-blue-50">
                  <ShieldCheck className="w-10 h-10 text-[#27aae1]" />
                </div>
              </div>

              {/* Content Part */}
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

              {/* Badge Part */}
              <div className="hidden lg:block bg-white/80 backdrop-blur-sm border border-white p-4 rounded-2xl shadow-sm rotate-3">
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Venue Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Everything you need to know about the Inflatable Enclosed Booth
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'How much space do I need for this booth?', a: 'The booth itself is 2.4m x 2.4m and requires a ceiling height of 2.6m (or outdoor space). We recommend a total area of 2.5m x 2.5m to allow for the inflation equipment and guest flow.' },
                { q: 'Is it suitable for indoor venues?', a: 'Yes! The booth works brilliantly indoors provided you have the ceiling height and adequate ventilation. It\'s popular at large halls, marquees, sports centres, and industrial-style venues.' },
                { q: 'How many people can fit inside at once?', a: 'The spacious interior can accommodate up to 10 people comfortably, making it perfect for group shots. Solo photos and couples work great too – you\'ll have plenty of space to strike poses!' },
                { q: 'Can the LED colours be customised?', a: 'Absolutely! We can set the LEDs to match your event colours or have them cycle through different shades. Popular choices include event theme colours, school colours, or a party-style rainbow cycle.' },
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
              Ready to Bring the Fun?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Make your event unforgettable with our Inflatable Enclosed Booth. Perfect for parties, festivals, and high-energy celebrations!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/book-now">Book Now</Link>
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

export default InflatableBooth;