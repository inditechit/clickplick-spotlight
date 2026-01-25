import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Cake, Building, GraduationCap, ArrowRight } from 'lucide-react';

const eventTypes = [
  {
    id: 'weddings',
    title: 'Weddings',
    icon: Heart,
    description: 'Make your special day even more memorable with our elegant photo booth options. From romantic Magic Mirrors to rustic Wooden Tripods, we have the perfect booth to complement your wedding theme.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    features: ['Custom wedding templates', 'Guest book prints', 'Elegant props', 'Same-day gallery'],
  },
  {
    id: 'birthdays',
    title: 'Birthday Parties',
    icon: Cake,
    description: 'Whether it\'s a milestone birthday or a fun family celebration, our photo booths add excitement and create lasting memories for guests of all ages.',
    image: 'https://images.unsplash.com/photo-1529543544277-750e-58e8f5fd808c?q=80&w=800&auto=format&fit=crop',
    features: ['Themed props', 'Party templates', 'GIF creation', 'Social sharing'],
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    icon: Building,
    description: 'Elevate your company events, product launches, and team celebrations with our professional photo booth services. Custom branding available for all corporate bookings.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    features: ['Company branding', 'Data capture', 'Professional prints', 'Event analytics'],
  },
  {
    id: 'university',
    title: 'University Events',
    icon: GraduationCap,
    description: 'Perfect for freshers\' weeks, graduation balls, and student union events. Our booths bring energy and fun to any campus celebration.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    features: ['Social sharing', 'Green screen', 'Video messages', 'Budget packages'],
  },
];

const Events = () => {
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
                Event Types
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Photo Booths For{' '}
                <span className="gradient-text-gold">Every Occasion</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                From intimate weddings to large corporate events, we bring the 
                photo booth experience that matches your celebration perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="space-y-24">
              {eventTypes.map((event, index) => (
                <div 
                  key={event.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-accent">
                      <event.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {event.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {event.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="accent" asChild>
                      <Link to="/book-now">
                        Book For Your {event.title.replace(/s$/, '')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
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
                Don't See Your Event Type?
              </h2>
              <p className="text-muted-foreground mb-8">
                We cater to all types of events! Get in touch and let us know about your celebration.
              </p>
              <Button variant="accent" size="lg" asChild>
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

export default Events;
