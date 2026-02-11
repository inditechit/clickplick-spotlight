import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Camera, Zap, Film, Gift, Star, Heart, Briefcase, GraduationCap, PartyPopper, Clock, Palette } from 'lucide-react';

const features = [
  { icon: Film, title: 'Classic Strip Photos', description: 'Authentic photo strip format just like the vintage arcade booths of yesteryear' },
  { icon: Camera, title: 'Vintage Aesthetics', description: 'Beautifully designed exterior with authentic retro styling and warm, inviting appearance' },
  { icon: Zap, title: 'Classic Flash Lighting', description: 'Soft, flattering lighting that recreates the warm glow of vintage photography' },
  { icon: Gift, title: 'Themed Props', description: 'Curated vintage prop collection including classic hats, glasses, and period accessories' },
];

const includes = [
  'Vintage-style booth design',
  'Classic strip photos (2x6)',
  'Retro props collection',
  'Authentic flash lighting',
  'Unlimited prints',
  'Digital copies',
  'Custom branding options',
  'Professional attendant',
  'Vintage filters',
  'Black & white option',
  'Sepia tone option',
  'Online gallery access',
];

const specifications = [
  { label: 'Footprint', value: '1.3m x 1.3m' },
  // { label: 'Height', value: '2.2m' },
  { label: 'Guest Capacity', value: '10-15 guests' },
  { label: 'Setup Time', value: '90 minutes' },
  { label: 'Power Required', value: 'Standard socket' },
];

const idealEvents = [
  { icon: Heart, name: 'Vintage Weddings' },
  { icon: PartyPopper, name: 'Themed Parties' },
  { icon: Briefcase, name: 'Retro Events' },
  { icon: GraduationCap, name: 'School Proms' },
];

const RetroBox = () => {
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
              🎞️ Vintage Charm
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Retro Box
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Step back in time with our classic vintage-style photo booth. Authentic retro styling meets modern technology for a nostalgic experience your guests will adore.
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
          The Retro White Box Booth
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Clicks amazing professional grade photos with a DSLR camera. We use high quality photo paper so your prints are safe for life. Step back in time with our retro-inspired white box photobooth, a fusion of classic charm and cutting-edge technology.
          </p>
          <p>
            Encased in pristine white, this photobooth exudes elegance and nostalgia, invoking memories of vintage snapshots while delivering modern-day magic. At its core lies a DSLR camera, capturing every moment with pristine clarity and precision, ensuring that each image preserves the essence of your experience in exquisite detail.
          </p>
          <p>
            Step inside, strike a pose, and watch as the magic unfolds. Whether it's a wedding, corporate event, or birthday celebration, our retro white box photobooth promises to capture memories that transcend time, leaving you with cherished mementos to treasure for years to come.
          </p>
          <p>
            Our unlimited prints truly mean unlimited. If there are 8 people in the photo, all 8 will receive a print! Plus, we’ll include an extra copy for the guest book, so your guests can leave a special message beside their photo.
          </p>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="/light/2.png"
          alt="Retro White Box Booth"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


        {/* The Retro Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              The Retro Experience
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Relive the magic of classic photo booths with a modern twist
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: 'Step Into the Past', description: 'The moment guests see our beautifully styled Retro Box, they\'re transported to another era. The vintage design is an instant conversation starter and perfect photo opportunity in itself.' },
                { icon: Film, title: 'Classic Strip Format', description: 'Four poses captured in quick succession, just like the original booths. The excitement builds with each flash as guests strike their best poses, silly faces, and group hugs.' },
                { icon: Palette, title: 'Vintage Finish Options', description: 'Choose from classic black and white, warm sepia, or authentic retro colour processing. Each option recreates the distinctive look of different photography eras.' },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
      <section className="py-16 md:py-20 bg-background">
  <div className="section-container">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/light/retro/4.jpeg"
            alt="Retro White Box Booth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["3.jpeg", "2.jpg", "1.jpg"].map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`/light/retro/${img}`}
                alt={`Retro Booth view ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
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
            "WHITE OR BLACK BACKDROP"
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


        {/* Features Grid */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Classic charm with all the modern conveniences
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
                  src="/light/retro/1.jpg" // Reusing an existing image path as placeholder
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
                  The Retro Box is ideal for events with a vintage, nostalgic, or classic theme:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {idealEvents.map((event) => (
                    <div key={event.name} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="font-semibold text-foreground">{event.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  Particularly popular for vintage-themed weddings, 1950s/60s/70s/80s themed parties, and events at heritage venues where modern-looking equipment would feel out of place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="section-container text-center">
            {/* <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Why not add our brand new <span className="font-bold">Audio Telephone Guest Book for £49</span> (normally £199) 
              or some giant 4ft light up <span className="font-bold">"LOVE" letters for £100</span> (normally £200) 
              or <span className="font-bold">"MR & MRS" letters for £200</span> (normally £300)
            </p> */}

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
                "We had a 1960s themed party and the Retro Box was absolutely perfect! It looked like it had come straight from that era. The black and white strips were gorgeous and everyone wanted to take one home. Such a brilliant addition to our event!"
              </blockquote>
              <p className="font-semibold text-foreground">Michael & Susan</p>
              <p className="text-muted-foreground text-sm">50th Birthday Party, Birmingham</p>
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
              Common questions about the Retro Box
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'Is it really enclosed like the old booths?', a: 'Yes! The Retro Box features a classic enclosed design with a curtain for privacy, just like the original arcade photo booths. This creates an intimate, authentic experience.' },
                { q: 'How many photos are on each strip?', a: 'Each photo strip features 4 individual poses arranged vertically, exactly like traditional photo booth strips. We can customise the number if you prefer 2 or 3 poses.' },
                { q: 'Can we get both vintage and colour photos?', a: 'Absolutely! You can choose to have all photos in one style, or we can print one colour and one vintage-filtered strip for each session so guests get both options.' },
                { q: 'What props come with the Retro Box?', a: 'We provide a specially curated vintage prop collection including fedoras, bowler hats, feather boas, vintage glasses, bow ties, and period-appropriate accessories.' },
                { q: 'Will it match our venue decor?', a: 'The Retro Box has a timeless design that complements most venues. It looks particularly stunning at heritage venues, barn weddings, and spaces with classic or industrial styling.' },
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
              Ready to Go Retro?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Bring vintage charm to your event with our Retro Box. Check availability and book today!
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

export default RetroBox;
