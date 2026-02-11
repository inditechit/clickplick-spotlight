import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const booths = [
  {
    id: 'lcd-slimline-pod',
    name: 'LCD Screen Slimline Pod',
    description: 'Sleek, modern design perfect for any venue. Features a stunning LCD touchscreen interface.',
    image: '/images/slime.png',
    popular: true,
  },
  {
    id: 'magic-mirror',
    name: 'Magic Mirror',
    description: 'Interactive full-length mirror with animated graphics and touchscreen technology.',
    image: '/images/imgg7.jpg',
    popular: false,
  },
  {
    id: 'retro-box',
    name: 'Retro Box',
    description: 'Classic vintage-style photo booth bringing nostalgic charm to your celebration.',
    image: '/images/33.jpg',
    popular: false,
  },
  {
    id: 'enchanted-mirror',
    name: 'Enchanted Mirror X Selfie',
    description: 'Our premium mirror booth with voice guidance and stunning visual effects.',
    image: '/images/enhanced.jpg',
    popular: true,
  },
  {
    id: 'inflatable-booth',
    name: 'Inflatable Enclosed Booth',
    description: 'Fun enclosed inflatable booth creating a private photo experience.',
    image: '/light/in/2.png',
    popular: false,
  },
  {
    id: 'wooden-tripod',
    name: 'Wooden Vintage Tripod',
    description: 'Elegant rustic wooden tripod booth ideal for weddings and upscale events.',
    image: '/images/Vintage1.jpg',
    popular: false,
  },
];

export function BoothShowcase() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Choose Your Perfect{' '}
            <span className="gradient-text">Photo Booth</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From sleek modern designs to vintage charm, we have the perfect booth to match your event style.
          </p>
        </div>

        {/* Booths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {booths.map((booth, index) => (
            <Link
              key={booth.id}
              to={`/hire-photobooth/${booth.id}`}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-card card-hover"
            >
              {/* Popular Badge */}
              {booth.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-semibold">
                  Popular
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={booth.image}
                  alt={booth.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {booth.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {booth.description}
                </p>
                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/hire-photobooth">
              View All Photo Booths
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
