import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, TreePine, Camera, Gift, Minimize, Star, Heart, Briefcase, GraduationCap, PartyPopper, Leaf, Gem, Hammer } from 'lucide-react';

const features = [
  { icon: TreePine, title: 'Handcrafted Wood', description: 'Beautifully handcrafted from sustainable wood with artisan attention to detail and natural finish' },
  { icon: Camera, title: 'DSLR Camera', description: 'Professional Canon DSLR delivers stunning photo quality with every shot, regardless of lighting conditions' },
  { icon: Gift, title: 'Rustic Props', description: 'Curated collection of rustic and vintage props that perfectly complement the booth\'s natural aesthetic' },
  { icon: Minimize, title: 'Compact Design', description: 'Elegant minimal footprint makes it perfect for intimate venues and spaces with limited room' },
];

const includes = [
  'Handcrafted wooden tripod',
  'Professional DSLR camera',
  'Rustic props collection',
  'Compact footprint',
  'Unlimited prints',
  'Digital gallery',
  'Custom templates',
  'Professional attendant',
  'Ring light setup',
  'Social media sharing',
  'Personalised overlays',
  'Online gallery access',
];

const specifications = [
  { label: 'Footprint', value: '1m x 1m' },
  { label: 'Height', value: '1.8m' },
  { label: 'Guest Capacity', value: '1-6 guests' },
  { label: 'Setup Time', value: '30 minutes' },
  { label: 'Power Required', value: 'Standard 13A socket' },
];

const idealEvents = [
  { icon: Heart, name: 'Rustic Weddings' },
  { icon: Leaf, name: 'Garden Parties' },
  { icon: Briefcase, name: 'Brand Events' },
  { icon: PartyPopper, name: 'Celebrations' },
];

const WoodenTripod = () => {
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
              🌿 Wedding Favourite
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Wooden Vintage Tripod
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Elegant rustic wooden tripod booth ideal for weddings and upscale events. Beautiful handcrafted design meets modern photo technology for a uniquely charming experience.
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
          The Wooden Vintage Tripod
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Clicks amazing professional grade photos with a DSLR camera. We use
            high quality photo-paper so your prints are safe for life. Capture
            timeless memories with vintage photo booth hire from ClickPlick.
          </p>

          <p>
            Our charming Wooden Vintage Tripod photo booth is the ideal addition
            to weddings, parties, corporate events, and celebrations. Offering a
            nostalgic touch, it combines classic retro aesthetics with advanced
            photographic backdrops, fun props, and customizable photo strip
            designs.
          </p>

          <p>
            Whether you're searching for a vintage photo booth near me or want to
            add a unique element to your special day, ClickPlick provides
            hassle-free setup and friendly service to ensure everything runs
            smoothly.
          </p>

          <p>
            Our vintage photo booth hire service allows you to tailor the
            experience to suit your event’s theme, giving guests the chance to
            have fun while capturing beautiful moments. With this stylish,
            high-quality booth, you'll not only entertain your guests but also
            create lasting memories with printed photos they can take home.
          </p>

          <p>
            Let us make your event unforgettable with our vintage photo booth
            options and excellent service. Rent our Wooden Vintage Tripod photo
            booth today and let the fun begin!
          </p>
        </div>
      </div>

      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="/light/3.png"
          alt="Wooden Vintage Tripod Photo Booth"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>


        {/* The Rustic Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              The Rustic Experience
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Nature-inspired design meets professional photo quality
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Hammer, title: 'Artisan Crafted', description: 'Each Wooden Tripod is handcrafted by skilled craftspeople using traditional woodworking techniques. The natural grain and warm tones make every booth unique.' },
                { icon: Leaf, title: 'Venue Friendly', description: 'The compact, open design means no bulky structures. It blends beautifully with floral arrangements, fairy lights, and natural décor – enhancing your venue styling.' },
                { icon: Gem, title: 'Timeless Photos', description: 'The warm wood tones create a distinctive frame for photos. Combined with professional lighting and DSLR quality, every image has a timeless, editorial feel.' },
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

        {/* Perfect for Small Spaces */}
        {/* <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop"
                    alt="Compact Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Space Efficient
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Perfect for Intimate Venues
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Not every venue has space for a large photo booth setup. The Wooden Vintage Tripod was designed with intimate venues in mind – its compact 1m x 1m footprint means it can fit comfortably in even the cosiest spaces.
                  </p>
                  <p>
                    From converted barns to boutique hotels, from restaurant private rooms to garden marquees, this booth brings professional photo booth entertainment to venues that might otherwise go without.
                  </p>
                  <p>
                    The open design also means it doesn't create visual barriers or block sightlines. Your guests can move freely around it, and it becomes part of your event rather than an obstacle to work around.
                  </p>
                  <p>
                    Despite its compact size, the Wooden Tripod still accommodates groups of up to 6 guests in each photo. The wide-angle lens and professional lighting ensure everyone looks fantastic.
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
            src="/light/wo/1.jpg"
            alt="Wooden Photo Booth"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {["2.jpg", "3.webp", "4.webp"].map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`/light/wo/${img}`}
                alt={`Wooden Photo Booth view ${index + 1}`}
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
            "WHITE OR BLACK BACKDROP",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          Add On Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "CUSTOMIZED PHOTO FRAME",
            "CUSTOMIZED GUEST BOOK",
            "OTHER BACKDROPS",
            "CUSTOMIZED PHOTO PRINTS",
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
              Natural beauty combined with professional performance
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
                  * The compact footprint makes this our most space-efficient booth option, perfect for venues with limited floor space.
                </p>
              </div>

              {/* Ideal Events */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Perfect For
                </h2>
                <p className="text-muted-foreground mb-6">
                  The Wooden Vintage Tripod complements these event styles beautifully:
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
                  Especially popular for barn weddings, boho celebrations, forest venues, and any event embracing natural, organic aesthetics.
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
                "We had a rustic barn wedding and the Wooden Tripod booth was absolutely perfect! It looked like it belonged there – our guests thought it was part of the venue décor. The photos were gorgeous and the compact size meant it fit perfectly in our cosy reception barn."
              </blockquote>
              <p className="font-semibold text-foreground">Lucy & Tom</p>
              <p className="text-muted-foreground text-sm">Barn Wedding, Cotswolds</p>
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
              Common questions about the Wooden Vintage Tripod
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'Is the wood sustainably sourced?', a: 'Yes! We\'re committed to environmental responsibility. All our wooden tripods are crafted from sustainably sourced timber, and we work with local craftspeople to minimise our carbon footprint.' },
                { q: 'Can it be used outdoors?', a: 'Yes, the Wooden Tripod works beautifully at outdoor events, though it should be positioned under cover (marquee, gazebo, etc.) to protect from rain. It looks stunning in garden and woodland settings.' },
                { q: 'How does the open design work for photos?', a: 'The open design actually creates a more relaxed photo experience. Guests can approach naturally, and the wide-angle lens captures groups of up to 6 people. It encourages spontaneous, natural poses.' },
                { q: 'What props come with it?', a: 'We provide a rustic-themed prop collection including vintage frames, floral crowns, wooden signs, and nature-inspired accessories that complement the booth\'s aesthetic.' },
                { q: 'Will it match my venue décor?', a: 'The natural wood finish and minimal design mean it complements most décor styles. It\'s particularly suited to rustic, boho, vintage, and natural themes, but also works well in contemporary spaces that use natural materials.' },
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
              Ready for Rustic Elegance?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Add natural charm to your event with our Wooden Vintage Tripod. Book today to secure your date!
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

export default WoodenTripod;
