import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Smile, Video, Image, Layers } from 'lucide-react';

const features = [
  { icon: Smile, title: 'Emoji Stamps', description: 'Fun emoji overlays for photos' },
  { icon: Layers, title: 'Green Screen', description: 'Custom background options' },
  { icon: Video, title: 'GIF Creation', description: 'Animated GIFs for sharing' },
  { icon: Image, title: 'Premium Finish', description: 'Elegant high-end design' },
];

const includes = [
  'Premium mirror finish',
  'Voice guidance',
  'Emoji stamps',
  'Green screen option',
  'GIF creation',
  'Unlimited prints',
  'Digital gallery',
  'Professional attendant',
];

const EnchantedMirror = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Enchanted Mirror X Selfie
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Our premium mirror booth with voice guidance, stunning visual effects, and elegant design. Perfect for luxury weddings and upscale events.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop"
                    alt="Enchanted Mirror X Selfie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&auto=format&fit=crop`}
                        alt={`Enchanted Mirror view ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                  Luxury Experience
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  What's Included
                </h2>
                
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
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
              Key Features
            </h2>
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

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Book?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Elevate your event with our Enchanted Mirror X Selfie. Contact us today for availability.
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

export default EnchantedMirror;
