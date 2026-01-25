import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion for Memories',
    description: 'We believe every event deserves to be remembered. Our passion drives us to capture those perfect moments.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'From our equipment to our service, we never compromise on quality. Only the best for your special day.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to ensure every event is a success.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We continuously update our booths with the latest technology to give you cutting-edge experiences.',
  },
];

const About = () => {
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
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Creating Memories{' '}
                <span className="gradient-text-gold">Since 2015</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                ClickPlick UK has been bringing joy to events across the United Kingdom, 
                one photo at a time. We're passionate about capturing the magic of your celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  From a Simple Idea to{' '}
                  <span className="gradient-text">500+ Events</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ClickPlick UK started with a simple vision: to bring the joy of photo booths 
                  to events of all sizes across the UK. What began as a passion project has grown 
                  into one of the most trusted photo booth hire companies in the country.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Over the years, we've had the privilege of being part of countless weddings, 
                  corporate events, birthday parties, and celebrations. Each event has taught us 
                  something new and helped us perfect our craft.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Today, we offer a diverse range of photo booths to suit every style and budget, 
                  backed by a team of dedicated professionals who share our passion for creating 
                  unforgettable memories.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                    alt="ClickPlick team at an event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 p-6 bg-card rounded-xl shadow-elevated border border-border">
                  <div className="text-4xl font-heading font-bold gradient-text mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                What Drives{' '}
                <span className="gradient-text">Everything We Do</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                "To bring joy and laughter to every celebration by providing exceptional 
                photo booth experiences that create lasting memories for guests of all ages."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
