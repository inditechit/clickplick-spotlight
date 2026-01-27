import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Camera, Smartphone, Printer, Sparkles, Users, Clock, Maximize, Star, Heart, Briefcase, GraduationCap, PartyPopper } from 'lucide-react';

const features = [
  { icon: Camera, title: 'DSLR Camera', description: 'Professional quality photos every time with our high-end Canon DSLR camera system' },
  { icon: Smartphone, title: 'Digital Sharing', description: 'Instant share to social media via email, SMS, or QR code' },
  { icon: Printer, title: 'Instant Prints', description: 'Unlimited high-quality 6x4 or 2x6 strip prints on premium photo paper' },
  { icon: Sparkles, title: 'Custom Overlays', description: 'Personalized designs with your names, date, and event branding' },
];

const includes = [
  'Professional DSLR camera',
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
  { label: 'Height', value: '2.1m' },
  { label: 'Guest Capacity', value: '1-8 guests' },
  { label: 'Setup Time', value: '45 minutes' },
  { label: 'Power Required', value: 'Standard 13A socket' },
];

const idealEvents = [
  { icon: Heart, name: 'Weddings' },
  { icon: PartyPopper, name: 'Birthday Parties' },
  { icon: Briefcase, name: 'Corporate Events' },
  { icon: GraduationCap, name: 'Graduations' },
];

const LcdSlimlinePod = () => {
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
                  The Ultimate Photo Booth Experience
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The LCD Screen Slimline Pod represents the perfect fusion of cutting-edge technology and elegant design. Its sleek, contemporary profile makes it an ideal addition to any event space, from grand ballrooms to intimate garden parties.
                  </p>
                  <p>
                    Featuring a large, vibrant LCD touchscreen display, guests can easily navigate through various photo options, choose from a wide selection of digital props and filters, and instantly see their captured moments. The intuitive interface ensures that guests of all ages can enjoy the experience without any assistance.
                  </p>
                  <p>
                    What sets this booth apart is its versatility. Whether you're hosting an elegant wedding reception, a lively birthday celebration, or a professional corporate event, the LCD Slimline Pod adapts seamlessly to your requirements. The sleek white exterior can be customised with branded wraps or left pristine to complement any décor.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                  alt="LCD Screen Slimline Pod"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
                { step: '2', title: 'Strike a Pose', description: 'Choose from various layouts, add digital props, and get ready for the countdown timer.' },
                { step: '3', title: 'Capture', description: 'Our professional DSLR camera captures stunning, high-resolution photos with perfect lighting.' },
                { step: '4', title: 'Print & Share', description: 'Photos print instantly in seconds, and digital copies can be shared via email, SMS, or social media.' },
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

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                    alt="LCD Screen Slimline Pod Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop`}
                        alt={`LCD Pod view ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Everything You Need
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  What's Included
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Every LCD Slimline Pod hire comes complete with everything you need for a fantastic photo booth experience. No hidden costs, no surprises.
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
                { q: 'How much space does the booth need?', a: 'The LCD Slimline Pod requires a minimum floor space of 2.5m x 2.5m (8ft x 8ft) to allow enough room for guests and queuing. The booth itself is compact at just 1.2m x 1.2m.' },
                { q: 'Can we customise the photo templates?', a: 'Absolutely! We create bespoke photo templates for every event at no extra charge. Send us your event details, colour scheme, and any logos or images you\'d like included.' },
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
