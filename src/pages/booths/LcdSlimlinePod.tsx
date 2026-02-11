import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Camera, Smartphone, Printer, Sparkles, Users, Clock, Maximize, Star, Heart, Briefcase, GraduationCap, PartyPopper } from 'lucide-react';
import React, { useState, useEffect } from "react";

const features = [
  { icon: Camera, title: 'HD Camera', description: 'Professional quality photos every time with our high-end Canon HD camera system' },
  { icon: Smartphone, title: 'Digital Sharing', description: 'Instant share to social media via email, AirDrop, or QR code' },
  { icon: Printer, title: 'Instant Prints', description: 'Unlimited high-quality 2x6 strip prints on premium photo paper' },
  { icon: Sparkles, title: 'Custom Overlays', description: 'Personalized designs with your names, date, logo, and event branding' },
];
const sliderImages = [
  "/slider/12.jpg",
  "/slider/11.jpg",
  "/slider/10.jpg",
  "/slider/9.jpg",
  "/slider/8.jpg",
  "/slider/7.jpg",
  "/slider/6.jpg",
  "/slider/5.jpg",
  "/slider/4.jpg",
  "/slider/3.jpg",
  "/slider/2.jpg",
  "/slider/1.avif",
];

const circleImages = [
  "/slider/circle/12.avif",
  "/slider/circle/11.avif",
  "/slider/circle/10.avif",
  "/slider/circle/9.avif",
  "/slider/circle/8.avif",
  "/slider/circle/7.avif",
  "/slider/circle/6.avif",
  "/slider/circle/5.avif",
  "/slider/circle/4.avif",
  "/slider/circle/3.avif",
  "/slider/circle/2.avif",
  "/slider/circle/1.avif",
];
const includes = [
  'Professional HD camera',
  'Touchscreen interface',
  'Unlimited prints',
  'Digital copies of all photos',
  'Custom photo templates',
  'Props box included',
  'Professional attendant',
  'Setup and takedown',
  'Green screen option',
  'Boomerang & GIF mode',
  'Social media sharing',
  'Online gallery access',
];

const specifications = [
  { label: 'Footprint', value: '1.2m x 1.2m' },
  // { label: 'Height', value: '2.1m' },
  { label: 'Guest Capacity', value: '1-8 guests' },
  { label: 'Setup Time', value: '45 minutes' },
  { label: 'Power Required', value: 'Standard socket' },
];

const idealEvents = [
  { icon: Heart, name: 'Weddings' },
  { icon: PartyPopper, name: 'Birthday Parties' },
  { icon: Briefcase, name: 'Corporate Events' },
  { icon: GraduationCap, name: 'Graduations' },
];
const reviews = [
  { name: "Chloe", time: "Jan 26, 2026", text: "I booked a photo booth for my wedding at very short notice (less than three weeks!), and the whole experience was fantastic. I spoke with Raj via WhatsApp and he was incredibly attentive, answering all of my questions promptly. " },
  { name: "Callum", time: "Jan 20, 2026", text: "A great service! Speedy set up, very helpful staff, and excellent photos with lots of fun props!" },
  { name: "Ila", time: "Jan 11, 2026", text: "Wonderful services at my sister’s 18th. Was a huge it." },
  { name: "Chloe", time: "Jan 11, 2026", text: "The props were so fun and made the whole experience better. the team were amazing and so thoughtful with a book that people could write stuff in. such an amazing addition" },
  { name: "Kate Eeerah", time: "Jan 11, 2026", text: "Their photo booth was great and everyone at my cousin’s birthday party made the most of it. It made her 18th birthday memorable." },
  { name: "KushvanthSandeepReddy Satti", time: "Dec 17, 2025", text: "Booked for my sister birthday. Raj sir and Maddy ma’am were very cooperative. They made sure best service was provided from the time of enquiry to the end of the event. " },
];
const images = [
  '/combo/a.jpeg', '/combo/b.jpeg', '/combo/c.jpeg', '/combo/d.jpeg',
  '/combo/e.jpeg', '/combo/h.jpeg', '/combo/j.jpeg', '/combo/k.jpeg'
];

const LcdSlimlinePod = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
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
              ⭐ Most Popular Choice
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              LCD Screen Slimline Pod
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Our most popular booth! Sleek, modern design with a stunning LCD touchscreen interface. Perfect for any venue and event type, from intimate gatherings to large corporate functions.
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
                  THE LCD SCREEN SLIMLINE POD
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-lg text-foreground">
                    3 hours for Only £299
                  </p>
                  <p>
                    The LCD Screen Slimline Pod is the ultimate selfie solution for events, blending sleek aesthetics with advanced technology. Featuring a high-resolution LCD screen and HD camera, this modern photo booth is perfect for capturing unforgettable moments at weddings, parties, and corporate functions.
                  </p>
                  <p>
                    A standout feature is the front-facing LCD screen, which allows users to display personalized videos, photos, and messages—making it a truly interactive centerpiece for any occasion. Its compact, stylish design seamlessly fits into any venue while delivering crystal-clear, high-quality images.
                  </p>
                  <p>
                    Designed for effortless use, the Slimline Pod offers a smooth photo-taking experience through intuitive touch-screen controls. Equipped to accommodate large groups, it’s ideal for creating lively and inclusive photo sessions that everyone can enjoy.
                  </p>
                  <p>
                    Whether you're looking to boost brand engagement at a corporate event or create lasting memories at a celebration, the LCD Screen Slimline Pod brings fun, interaction, and professional-grade visuals to every gathering. Make your event stand out with this must-have, all-in-one photo booth experience.
                  </p>
                  <p>
                    The Slimline Pod can also record boomerang GIFs – plus you can share the photos and GIFs digitally by text or email from the pod!
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/light/1.png"
                  alt="LCD Screen Slimline Pod"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl shadow-lg">
          {/* Row: Text + Main Image */}
          <div className="md:flex md:items-center md:gap-16">
            {/* Left: Text */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="uppercase text-sm font-semibold text-gray-500 mb-3 tracking-widest">
                PERSONALISE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
                Flawless Instant <br /> Background Removal
              </h2>
              <p className="text-gray-600 max-w-md leading-relaxed text-lg">
                Our selfie pod features intelligent background removal technology,
                allowing you to instantly replace any setting with a choice of 12
                uniquely stunning backdrops. Completely optional of course.
              </p>
            </div>

            {/* Right: Main Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-500 bg-white p-2">
                <img
                  src={sliderImages[currentIndex]}
                  alt={`Background ${currentIndex + 1}`}
                  className="w-full h-auto rounded-3xl object-cover border border-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Row: Thumbnails */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {circleImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-16 h-16 rounded-full border-4 overflow-hidden transition-all duration-300 transform ${i === currentIndex
                    ? "border-indigo-500 shadow-xl scale-110"
                    : "border-white/70 hover:scale-110 hover:shadow-lg hover:brightness-105"
                  }`}
                aria-label={`Select background ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">

            {/* Compact Glass Container */}
            <div className="relative bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden py-6 px-2 shadow-sm">

              {/* Minimal Header */}
              <div className="flex items-center justify-between px-6 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                    Choose Your  <span className="text-blue-500">Print Layout</span>
                  </h2>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[2px]">Select a stunning template and customize it to perfectly fit your event.</p>
                </div>
                <div className="hidden sm:block text-[10px] font-medium py-1 px-3 bg-white rounded-full border border-slate-200 text-slate-500 shadow-sm">
                  ClickPlick
                </div>
              </div>

              {/* Slider Area */}
              <div className="relative flex overflow-hidden">
                {/* Smooth Infinite Loop */}
                <div className="flex animate-slow-slide group hover:paused">
                  {[...images, ...images].map((src, index) => (
                    <div
                      key={index}
                      className="flex-none mx-2 transition-transform duration-500 hover:scale-105"
                      // Ultra-compact size: 100px width
                      style={{ width: '100px', height: '300px' }}
                    >
                      <div className="w-full h-full rounded-md overflow-hidden shadow-sm border-[3px] border-white ring-1 ring-slate-200">
                        <img
                          src={src}
                          alt={`Combo ${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edge Fades for a cleaner look */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Optimized CSS */}
          <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes slow-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slow-slide {
          animation: slow-slide 20s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}} />
        </section>
        {/* How It Works */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Using our LCD Slimline Pod is incredibly simple. Here's what your guests can expect:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Step Up', description: 'Guests approach the booth and are greeted by a friendly welcome screen with clear instructions.' },
                { step: '2', title: 'Strike a Pose', description: 'Choose from various layouts, grab digital props, and get ready for the countdown timer.' },
                { step: '3', title: 'Capture', description: 'Our advanced HD camera captures stunning, high-resolution photos with perfect lighting.' },
                { step: '4', title: 'Print & Share', description: 'Unlimited instant prints in seconds, and digital copies can be shared via Email, AirDrop, or AirDrop.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content Section */}
              <div className="order-2 lg:order-1">
                <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-3 block">
                  Personalise
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-5">
                  Instant personalised Prints
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                  Pick from our beautiful ready-made templates or share your own branding, and we’ll take care of the rest. Either way, you and your guests will enjoy instant, personalized printouts.            </p>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <Check className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Choose from 8 templates</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <Check className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Add your logo or branding</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <Check className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Personalise with text</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <Check className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Fully customisable</span>
                  </div>
                </div>
              </div>

              {/* Right Images Section (Smaller Size) */}
              <div className="order-1 lg:order-2 relative h-[400px] flex items-center justify-center">
                {/* White Template Print - a.jpeg */}
                <div className="absolute z-20 transform -rotate-12 -translate-x-8 shadow-xl rounded-sm overflow-hidden border-4 border-white w-32 md:w-40 transition-transform hover:-rotate-3 duration-500">
                  <img
                    src="/slider/b.jpeg"
                    alt="White template print"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Black Template Print - b.jpeg */}
                <div className="absolute z-10 transform rotate-6 translate-x-8 shadow-xl rounded-sm overflow-hidden border-4 border-gray-900 bg-gray-900 w-32 md:w-40 transition-transform hover:rotate-12 duration-500">
                  <img
                    src="/slider/a.jpeg"
                    alt="Black template print"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Center soft glow */}
                <div className="absolute w-48 h-48 bg-blue-50 rounded-full blur-[80px] opacity-40 z-0"></div>
              </div>

            </div>
          </div>
        </section>
        {/* What's Included */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Slider / Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/light/led/8.jpg"
                    alt="LCD Slimline Pod Main"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[8, 7, 6, 5, 4, 3, 2, 1].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`/light/led/${i}.jpg`}
                        alt={`LCD Pod view ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details / Services */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Everything You Need
                </div>

                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Services Included
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "GUEST BOOK PHOTO ALBUM",
                    "UNLIMITED PRINTS",
                    "ANIMATED GIFS OF YOUR PHOTOS",
                    "DIGITAL BACKDROP",
                    "PARTY PROPS",
                    "ADD TEXT TO PRINTS",
                    "ADD LOGO/BRANDING TO PRINTS",
                    "EMAIL/AIRDROP PHOTO SHARING",
                    "PHOTO FILTERS",
                    "DELIVERY, INSTALLATION & COLLECTION",
                    "BOOMERANGS",
                    "VIDEO MESSAGE RECORDING",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 mt-8">
                  Add-On Services
                </h3>
                <p className="text-muted-foreground mb-4">(Get in touch to book)</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "CUSTOMIZED GUEST BOOK PHOTO ALBUM",
                    "PHOTOBOOTH ATTENDANT",
                    "BACKDROP",
                    "CUSTOMIZED PHOTO FRAME",
                    "CUSTOMIZED PHOTO PRINTS",
                    "LCD SCREEN BRANDING (VIDEOS/PHOTOS)",
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

        <section className="relative bg-white py-24 px-6 overflow-hidden">
          {/* Niche ki side halka color gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-50 to-transparent z-0"></div>

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Booth Hire Reviews</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              See what others think about the slimline selfie pod
            </p>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Flex container for the single row */}
            <div className="flex flex-nowrap lg:grid lg:grid-cols-6 gap-4 items-center">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className={`bg-white p-5 rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105
                ${i % 2 === 0 ? 'translate-y-6' : '-translate-y-6'} 
                min-w-[200px] flex flex-col`}
                >
                  {/* Header: Trustpilot Logo & Name */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#00b67a] p-1 rounded-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.04 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.962z" />
                      </svg>
                    </div>
                    <span className="font-bold text-gray-800 text-xs tracking-tight">{rev.name}</span>
                  </div>

                  {/* Trustpilot Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <div key={idx} className="bg-[#00b67a] w-4 h-4 flex items-center justify-center rounded-sm">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.04 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.962z" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-gray-400 mb-3 font-medium tracking-wide uppercase">{rev.time}</p>

                  <p className="text-gray-600 text-xs leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Packed with premium features to ensure your guests have an unforgettable experience
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
                    With ClickPlick delivering and setting up the slimline selfie pod, you can relax while we handle all the technical details.
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
                  src="/light/led/1.jpg" // Reusing an existing image path as placeholder
                  alt="Booth Setup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
        {/* --- END NEW SECTION --- */}

        {/* Specifications & Ideal Events */}
        <section className="py-16 md:py-20 bg-background">
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
                  The LCD Slimline Pod is versatile enough for any occasion. It's particularly popular for:
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
                <p className="text-muted-foreground mt-6 text-sm">
                  We've provided our LCD Slimline Pod for hundreds of events across the UK, from intimate family gatherings to large-scale corporate functions with over 500 guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="section-container text-center">
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Why not add our brand new <span className="font-bold">Audio Telephone Guest Book for £49</span> (normally £199) 
              or some giant 4ft light up <span className="font-bold">"LOVE" letters for £100</span> (normally £200) 
              or <span className="font-bold">"MR & MRS" letters for £200</span> (normally £300)
            </p>

            <div className="max-w-md mx-auto relative group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Audio Telephone Guest Book</h3>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-dashed border-pink-200 p-2">
                   {/* Decorative elements from the image */}
                   <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 clip-triangle -rotate-45 transform -translate-x-4 -translate-y-4"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 bg-pink-500 clip-triangle rotate-135 transform translate-x-4 translate-y-4"></div>
                   
                   <img 
                    src="/services/audiobook.jpeg" // Ensure you have a relevant image here
                    alt="Audio Guest Book" 
                    className="w-full h-full object-cover rounded-xl"
                   />
                   <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-xl px-6 py-3 border border-slate-100">
                      <span className="text-3xl font-black text-cyan-500">£49</span>
                   </div>
                </div>
                <Link to="#" className="text-blue-500 font-semibold underline hover:text-blue-700 transition-colors">
                  More About Our Audio Telephone Guest Book
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
                "The LCD Slimline Pod was the highlight of our wedding! Our guests absolutely loved it, and the photos came out beautifully. The attendant was so friendly and professional. Highly recommend ClickPlick!"
              </blockquote>
              <p className="font-semibold text-foreground">Sarah & James</p>
              <p className="text-muted-foreground text-sm">Wedding at The Grand Hotel, Manchester</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Got questions about the LCD Slimline Pod? Here are the answers to our most common queries.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'How much space does the booth need?', a: 'The LCD Slimline Pod requires a minimum floor space of 2.5m x 2.5m (8ft x 8ft) to allow enough room for guests and queuing. The booth itself is compact and stands in just 1.2m x 1.2m.' },
                { q: 'Can we customise the photo templates?', a: 'Standard unlimited prints are included in the package. Bespoke photo templates can be created for each event at an additional charge.' },
                { q: 'How many people can fit in a photo?', a: 'The open design allows for up to 8 guests in a single photo, making it perfect for group shots. Solo and couple photos work beautifully too!' },
                { q: 'Do you provide props?', a: 'Yes! Every hire includes a box of quality props including glasses, hats, signs, and more. We can also source themed props for your specific event.' },
                { q: 'How long does setup take?', a: 'Our team arrives approximately 1-2 hours before your event starts to set up and test everything. Takedown after the event takes about 45 minutes.' },
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
              Ready to Book the LCD Slimline Pod?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Make your event unforgettable with our most popular photo booth. Check availability and book today to secure your date!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/book-now">Check Availability</Link>
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

export default LcdSlimlinePod;
