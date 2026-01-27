import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Tent, Lightbulb, Lock, Music, Star, Heart, Briefcase, GraduationCap, PartyPopper, Zap, Palette, Users } from 'lucide-react';

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
  { label: 'Footprint', value: '2.4m x 2.4m' },
  { label: 'Height', value: '2.4m' },
  { label: 'Guest Capacity', value: '1-10 guests' },
  { label: 'Setup Time', value: '45 minutes' },
  { label: 'Power Required', value: 'Standard 13A socket' },
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
                  Maximum Fun, Maximum Impact
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Looking for a photo booth that makes a statement? Our Inflatable Enclosed Booth is impossible to miss! This eye-catching booth combines the classic enclosed photo booth experience with modern technology and vibrant aesthetics.
                  </p>
                  <p>
                    The moment guests see our inflatable booth, they're drawn to its inviting glow. The colour-changing LED lights visible through the walls create an irresistible beacon of fun that gets everyone excited to take part. Once inside, the privacy curtain creates an intimate space where guests can let loose and be themselves.
                  </p>
                  <p>
                    What makes this booth particularly special is its capacity. Unlike traditional enclosed booths that fit 2-3 people, our inflatable design accommodates up to 10 guests at once. That means epic group photos, squad shots, and those chaotic, joyful moments that make the best memories.
                  </p>
                  <p>
                    Built to withstand the demands of busy events, the Inflatable Enclosed Booth is perfect for festivals, garden parties, school events, and anywhere you want to create a fun, high-energy atmosphere. It's also suitable for outdoor use (weather permitting) making it ideal for summer events.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=800&auto=format&fit=crop"
                  alt="Inflatable Enclosed Booth"
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
        <section className="py-16 md:py-20 bg-background">
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
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=800&auto=format&fit=crop"
                    alt="Inflatable Enclosed Booth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=400&auto=format&fit=crop`}
                        alt={`Inflatable Booth view ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-celebration/10 text-celebration text-sm font-semibold mb-6">
                  All-Inclusive Fun
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  What's Included
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Our Inflatable Enclosed Booth hire includes everything you need for a fantastic photo booth experience. The package is designed for maximum fun with no hidden extras.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {includes.map((item) => (
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
              <p className="text-muted-foreground text-sm">30th Birthday Festival Party, Sheffield</p>
            </div>
          </div>
        </section>

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
                { q: 'How much space do I need for this booth?', a: 'The booth itself is 2.4m x 2.4m and requires a ceiling height of 2.6m (or outdoor space). We recommend a total area of 4m x 4m to allow for the inflation equipment and guest flow.' },
                { q: 'Is it suitable for indoor venues?', a: 'Yes! The booth works brilliantly indoors provided you have the ceiling height and adequate ventilation. It\'s popular at large halls, marquees, sports centres, and industrial-style venues.' },
                { q: 'What happens if it rains during an outdoor event?', a: 'The booth can handle light drizzle, but for the safety of guests and equipment, we may need to pause operation during heavy rain. We always bring protective covers and will work with you to maximise availability.' },
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
