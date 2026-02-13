import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Tent, Lightbulb, Lock, Music, Star, Heart, Briefcase, GraduationCap, PartyPopper, Zap, Palette, Users } from 'lucide-react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
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

        {/* Outdoor Ready Section */}
        {/* <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop"
                    alt="Outdoor Festival Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Outdoor Ready
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Built for Outdoor Events
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Unlike many photo booths that are strictly indoor-only, our Inflatable Enclosed Booth is designed to work brilliantly at outdoor events. From summer garden parties to music festivals, this booth brings the fun wherever you need it.
                  </p>
                  <p>
                    The robust inflatable structure is weather-resistant and stable in moderate conditions. For your peace of mind, we stake or weight the booth securely and monitor conditions throughout your event.
                  </p>
                  <p>
                    The enclosed design means guests are protected from light breezes while they're taking photos, and the LED lighting looks even more spectacular as the sun goes down.
                  </p>
                  <p className="text-sm italic">
                    Note: In case of heavy rain or high winds, we may need to temporarily pause operation for safety. We'll always work with you to maximise booth availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
            "SEND EMAILS"
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
                  src="/light/in/2.png" // Reusing an existing image path as placeholder
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
        <section className="py-20 bg-slate-50">
          <div className="section-container text-center">
            {/* <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Why not add our brand new <span className="font-bold">Add an Audio Telephone Guest Book for £49</span> (normally £199) 
              or some giant 4ft light up <span className="font-bold">"LOVE" letters for £100</span> (normally £200) 
              or <span className="font-bold">"MR & MRS" letters for £200</span> (normally £300)
            </p> */}

            <div className="max-w-md mx-auto relative group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Add an Audio Telephone Guest Book</h3>
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
              {/* <p className="text-muted-foreground text-sm">30th Birthday Festival Party, Sheffield</p> */}
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
                // { q: 'What happens if it rains during an outdoor event?', a: 'The booth can handle light drizzle, but for the safety of guests and equipment, we may need to pause operation during heavy rain. We always bring protective covers and will work with you to maximise availability.' },
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
