import { Camera, Printer, Share2, Palette, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'DSLR Quality Photos',
    description: 'Professional-grade cameras capture stunning, high-resolution images every time.',
  },
  {
    icon: Printer,
    title: 'Unlimited Prints',
    description: 'Every guest gets unlimited instant prints to take home as keepsakes.',
  },
  {
    icon: Share2,
    title: 'Instant Digital Sharing',
    description: 'Share photos instantly via email, text, or social media directly from the booth.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Personalized overlays and templates to match your event theme perfectly.',
  },
  {
    icon: Users,
    title: 'Professional Attendant',
    description: 'A friendly booth attendant ensures smooth operation throughout your event.',
  },
  {
    icon: Shield,
    title: 'Green Screen',
    description: 'Transport guests anywhere with our professional green screen backgrounds.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Everything You Need For{' '}
            <span className="gradient-text">Perfect Photos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our photo booths come packed with premium features to ensure your guests have an unforgettable experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
