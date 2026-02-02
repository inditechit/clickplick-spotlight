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
      
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          About <span className="gradient-text">ClickPlick Photobooths</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Welcome to <strong>ClickPlick Photobooths</strong>! At ClickPlick, we're not just
          capturing moments — we're setting trends.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Inspired by the ever-evolving world of social media and the excitement of capturing
          life’s best moments in style, we’ve created a photobooth experience like no other.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          From stylish setups to seamless experiences, our goal is to help you and your guests
          create memories that are fun, shareable, and truly unforgettable.
        </p>

        <Button variant="accent" size="lg" asChild>
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
            alt="ClickPlick Photobooths at an event"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-8 -left-8 p-6 bg-card rounded-xl shadow-elevated border border-border">
          <div className="text-4xl font-heading font-bold gradient-text mb-1">
            Trend-Driven
          </div>
          <div className="text-sm text-muted-foreground">
            Modern Photo Booth Experiences
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
  <div className="section-container">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
        Our Story
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
        What Makes <span className="gradient-text">ClickPlick Different</span>
      </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* OUR JOURNEY */}
      <div className="p-6 rounded-2xl bg-card border border-border card-hover">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">01</span>
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
          Our Journey
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our journey began with a simple idea: to merge the timeless charm of traditional
          photobooths with the latest trends in technology and design. The result is an
          immersive and interactive experience, perfect for weddings, corporate events,
          birthday parties, and brand activations.
        </p>
      </div>

      {/* WHAT SETS US APART */}
      <div className="p-6 rounded-2xl bg-card border border-border card-hover">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">02</span>
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
          What Sets Us Apart
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We stay ahead of the curve with sleek modern designs and cutting-edge features
          like augmented reality filters and instant social media sharing. But it’s not
          just about technology — it’s about creating moments and memories that truly matter.
        </p>
      </div>

      {/* ABOUT OUR TEAM */}
      <div className="p-6 rounded-2xl bg-card border border-border card-hover">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">03</span>
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
          About Our Team
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our team of experienced professionals is dedicated to making every moment inside
          the booth full of laughter, joy, and unforgettable memories. At ClickPlick
          Photobooths, it’s not just about renting a booth — it’s about creating fun
          memories that last forever.
        </p>
      </div>

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
