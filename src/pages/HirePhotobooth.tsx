import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Users, Maximize, Tag } from 'lucide-react';

const booths = [
  {
    id: 'lcd-slimline-pod',
    name: 'LCD Screen Slimline Pod',
    tagline: 'Modern & Versatile',
    description: 'Our most popular booth! Sleek, modern design with a stunning LCD interface. Perfect for any venue and event type.',
    image: '/light/1.png',
    features: ['Customizable LCD Screen', 'Instant prints', 'Digital sharing', 'Custom overlays'],
    specs: { footprint: '2ft x 2ft', height: '2m', guests: '10-15 people' },
    idealFor: ['Weddings', 'Corporate Events', 'Birthdays'],
    startingPrice: '£299',
    popular: true,
  },
  {
    id: 'magic-mirror',
    name: 'Magic Mirror',
    tagline: 'Interactive Experience',
    description: 'Interactive full-length mirror with animated graphics, voice guidance, and touchscreen technology. A truly magical experience!',
    image: '/light/magic.jpg',
    features: ['Full-length mirror', 'Voice guidance', 'Animations', 'Pro. Canon Camera'],
    specs: { footprint: '1.2m x 1.2m', height: '2.1m', guests: '15-20 people' },
    idealFor: ['Weddings', 'Proms', 'Fancy Dress Events'],
    startingPrice: '£349',
    popular: true,
  },
  {
    id: 'retro-box',
    name: 'Retro Box',
    tagline: 'Vintage Charm',
    description: 'Classic vintage-style photo booth bringing nostalgic charm to your celebration. Features authentic retro styling with modern technology inside.',
    image: '/light/2.png',
    features: ['Retro TV design', 'Strip photos', 'Props included', 'Pro. Canon Camera'],
    specs: { footprint: '2ft X 2ft', height: '2.2m', guests: '15-20 people' },
    idealFor: ['Retro Theme Parties', 'Weddings', 'Exhibitions'],
    startingPrice: '£279',
    popular: false,
  },
  {
    id: 'enchanted-mirror',
    name: 'Enchanted Mirror X Selfie',
    tagline: 'Premium Luxury',
    description: 'Our premium mirror booth with voice guidance, stunning visual effects, and elegant design. Perfect for luxury weddings and upscale events.',
    image: '/light/3.jpg',
    features: ['Customisable Likes', 'Magic mirror screen', 'Pro. Canon Camera', 'GIF creation'],
    specs: { footprint: '2ft X 2ft', height: '2m', guests: '15-20 people' },
    idealFor: ['Luxury Weddings', 'Corporate Events', 'Brand Activations'],
    startingPrice: '£399',
    popular: false,
  },
  {
    id: 'inflatable-booth',
    name: 'Inflatable Enclosed Booth',
    tagline: 'Party Favorite',
    description: 'Fun enclosed inflatable booth creating a private photo experience. Great for parties and festivals where you want that classic booth feel.',
    image: '/light/4.png',
    features: ['Enclosed design', 'Customizable LED lighting', 'Privacy curtain', 'Instant Prints'],
    specs: { footprint: '2.5m x 2.5m', height: '2.4m', guests: '15-20 people' },
    idealFor: ['Festivals', 'Outdoor Events', 'House Parties'],
    startingPrice: '£249',
    popular: false,
  },
  {
    id: 'wooden-tripod',
    name: 'Wooden Vintage Tripod',
    tagline: 'Rustic Elegance',
    description: 'Elegant rustic wooden tripod booth ideal for weddings and upscale events. Beautiful craftsmanship meets modern photo technology.',
    image: '/light/3.png',
    features: ['Handcrafted wood', 'DSLR camera', 'Instant Prints', 'Compact setup'],
    specs: { footprint: '2ft X 2ft', height: '1.8m', guests: '15-20 people' },
    idealFor: ['Rustic Weddings', 'Garden Parties', 'Weddings'],
    startingPrice: '£329',
    popular: false,
  },
];

const HirePhotobooth = () => {
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
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
                Our Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Hire A{' '}
                <span className="gradient-text-gold">Photo Booth</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Choose from our stunning range of photo booths. Each one designed 
                to bring fun, laughter, and unforgettable memories to your event.
              </p>
            </div>
          </div>
        </section>

        {/* Booths Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="space-y-20">
              {booths.map((booth, index) => (
                <div 
                  key={booth.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {booth.popular && (
                      <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    {/* <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                      From {booth.startingPrice}
                    </div> */}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={booth.image}
                        alt={booth.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {booth.tagline}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                      {booth.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {booth.description}
                    </p>
                    
                    {/* Specifications */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <Maximize className="w-4 h-4 text-primary" />
                        <span>{booth.specs.footprint}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{booth.specs.guests}</span>
                      </div>
                      {/* <div className="flex items-center gap-2 text-foreground">
                        <Tag className="w-4 h-4 text-primary" />
                        <span>From {booth.startingPrice}</span>
                      </div> */}
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground mb-2">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {booth.idealFor.map((event) => (
                          <span key={event} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {booth.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild>
                        <Link to={`/hire-photobooth/${booth.id}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/book-now">Book This Booth</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Not Sure Which Booth to Choose?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us and we'll help you find the perfect photo booth for your event.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">Get Expert Advice</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/faqs">View FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HirePhotobooth;
