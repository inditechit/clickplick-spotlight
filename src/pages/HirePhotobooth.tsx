import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const booths = [
  {
    id: 'lcd-slimline-pod',
    name: 'LCD Screen Slimline Pod',
    description: 'Our most popular booth! Sleek, modern design with a stunning LCD touchscreen interface. Perfect for any venue and event type.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    features: ['Touchscreen interface', 'Instant prints', 'Digital sharing', 'Custom overlays'],
    popular: true,
  },
  {
    id: 'magic-mirror',
    name: 'Magic Mirror',
    description: 'Interactive full-length mirror with animated graphics, voice guidance, and touchscreen technology. A truly magical experience!',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop',
    features: ['Full-length mirror', 'Voice guidance', 'Animations', 'Signature capture'],
    popular: true,
  },
  {
    id: 'retro-box',
    name: 'Retro Box',
    description: 'Classic vintage-style photo booth bringing nostalgic charm to your celebration. Features authentic retro styling with modern technology inside.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    features: ['Vintage design', 'Strip photos', 'Props included', 'Classic flash'],
    popular: false,
  },
  {
    id: 'enchanted-mirror',
    name: 'Enchanted Mirror X Selfie',
    description: 'Our premium mirror booth with voice guidance, stunning visual effects, and elegant design. Perfect for luxury weddings and upscale events.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    features: ['Premium finish', 'Emoji stamps', 'Green screen', 'GIF creation'],
    popular: false,
  },
  {
    id: 'inflatable-booth',
    name: 'Inflatable Enclosed Booth',
    description: 'Fun enclosed inflatable booth creating a private photo experience. Great for parties and festivals where you want that classic booth feel.',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=800&auto=format&fit=crop',
    features: ['Enclosed design', 'LED lighting', 'Privacy curtain', 'Festival ready'],
    popular: false,
  },
  {
    id: 'wooden-tripod',
    name: 'Wooden Vintage Tripod',
    description: 'Elegant rustic wooden tripod booth ideal for weddings and upscale events. Beautiful craftsmanship meets modern photo technology.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    features: ['Handcrafted wood', 'DSLR camera', 'Rustic props', 'Compact setup'],
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
            <div className="space-y-16">
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
                      <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={booth.image}
                        alt={booth.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {booth.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {booth.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {booth.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="accent" asChild>
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
