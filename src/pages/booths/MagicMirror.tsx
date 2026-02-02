import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Mic, Sparkles, Pen, Video, Users, Star, Heart, Briefcase, GraduationCap, PartyPopper, Wand2, MessageSquare } from 'lucide-react';

const features = [
  { icon: Mic, title: 'Voice Guidance', description: 'Interactive voice prompts guide guests through the entire experience, making it easy and fun for everyone' },
  { icon: Sparkles, title: 'Stunning Animations', description: 'Beautiful visual effects and animations displayed on the mirror surface create a truly magical atmosphere' },
  { icon: Pen, title: 'Signature Capture', description: 'Guests can sign directly on the mirror screen and have their signature printed on their photos' },
  { icon: Video, title: 'Video Messages', description: 'Record personal video messages for the happy couple or birthday person to treasure forever' },
];

const includes = [
  'Full-length mirror design',
  'Voice guidance system',
  'Animated graphics',
  'Signature capture',
  'Unlimited prints',
  'Digital gallery',
  'Props collection',
  'Professional attendant',
  'Custom animations',
  'Emoji stamps',
  'Social media sharing',
  'Video message recording',
];

const specifications = [
  { label: 'Footprint', value: '1.5m x 1.5m' },
  { label: 'Height', value: '2m' },
  { label: 'Guest Capacity', value: '1-6 guests' },
  { label: 'Setup Time', value: '60 minutes' },
  { label: 'Power Required', value: 'Standard 13A socket' },
];

const idealEvents = [
  { icon: Heart, name: 'Weddings' },
  { icon: PartyPopper, name: 'Celebrations' },
  { icon: Briefcase, name: 'Brand Launches' },
  { icon: GraduationCap, name: 'Proms' },
];

const MagicMirror = () => {
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
              ✨ Premium Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Magic Mirror
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Interactive full-length mirror with animated graphics, voice guidance, and touchscreen technology. Create truly magical moments with this showstopping centrepiece.
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
          THE AUGMENTED REALITY MAGIC MIRROR PHOTOBOOTH
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Clicks amazing professional grade photos with a DSLR camera. We use high-quality photo paper so your prints are safe for life. Welcome to ClickPlick and our fantastic Magic Mirror Photo Booth services! If you're looking to elevate your event with something truly unique, our Magic Mirror Photo Booth Hire is the perfect choice. This innovative and interactive entertainment option brings an unforgettable experience to your party, wedding, or corporate event.
          </p>
          <p>
            Our Magic Selfie Mirror is the brand-new must-have attraction, providing great fun for your guests. This touch-sensitive full-length mirror allows groups of friends to enjoy hilarious photo opportunities. The Magic Mirror Booth offers full instructions, prompting you to pose before capturing the perfect picture. As an added bonus, the mirror will interact with you, displaying amusing phrases on its interactive screen, ensuring laughter all around.
          </p>
          <p>
            Whether you’re searching for a magic mirror photo booth near me or planning to hire a magic mirror photo booth, ClickPlick has everything you need to elevate your event. Our magic mirror hire service combines elegance and fun, offering your guests an interactive and unforgettable experience. From weddings to corporate events, this stunning addition is sure to create lasting memories for everyone.
          </p>
          <p>
            Excited to make your event unforgettable? Book your magic mirror photo booth today with ClickPlick!
          </p>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="/light/magic.jpg"
          alt="Magic Mirror Booth"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


        {/* The Magic Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              The Magic Experience
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Watch your guests' faces light up as they discover the magic within the mirror
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Wand2, title: 'Attract & Engage', description: 'Eye-catching animations and a friendly greeting draw guests to the mirror. The sleeper mode displays beautiful patterns that catch attention from across the room.' },
                { icon: MessageSquare, title: 'Interact & Play', description: 'Touch the screen to wake the mirror, then follow voice prompts to pose, add digital props, sign your name, or record a video message. The interactive experience delights guests of all ages.' },
                { icon: Sparkles, title: 'Capture & Share', description: 'The hidden camera captures stunning photos with professional lighting. Prints emerge in seconds, and digital copies can be shared instantly via email or social media.' },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
            src="/light/magic/4.jpeg"
            alt="Magic Mirror Booth"
            className="w-full h-full object-cover"
          />
        </div>
                <div className="grid grid-cols-3 gap-4">
                 {["3.jpg", "2.jpeg", "1.jpeg"].map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`/light/magic/${img}`}
                alt={`Magic Mirror view ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
                </div>
              </div>
      {/* Details */}
      <div>
        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          All-Inclusive Package
        </div>

        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Services Included
        </h2>

        <p className="text-muted-foreground mb-6">
          Every Magic Mirror hire comes with everything you need for an unforgettable experience. No hidden costs, no surprises. Here’s what’s included:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "GUEST BOOK PHOTO ALBUM",
            "UNLIMITED PRINTS",
            "DIGITAL COPIES OF PICTURES TAKEN DURING THE HIRE",
            "ANIMATED GIFS OF YOUR PHOTOS",
            "EMAIL AND AIRDROP PHOTOS",
            "PHOTOBOOTH ATTENDANT",
            "INSTANT PRINTS (20 SECONDS)",
            "USE OF A WIDE RANGE OF PROPS",
            "PERSONALIZED TEXT AND LOGO",
            "SEND EMAILS",
            "FILTERS AND PHOTO EFFECTS",
            "WHITE OR BLACK BACKDROP",
            "CUSTOMIZED PHOTO FRAME",
            "CUSTOMIZED GUEST BOOK PHOTO ALBUM",
            "CUSTOMIZED BACKGROUND",
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
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              Magical Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Discover the enchanting features that make the Magic Mirror a guest favourite
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
                  The Magic Mirror creates an unforgettable impression at premium events:
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
                  The Magic Mirror is particularly popular for weddings where the signature feature allows guests to sign directly on the mirror – creating a unique digital guestbook!
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
                "The Magic Mirror was absolutely incredible! Our guests couldn't stop talking about it. The voice guidance made it so easy for everyone, and the signature feature was a beautiful touch. The video messages from our guests made us cry!"
              </blockquote>
              <p className="font-semibold text-foreground">Emma & David</p>
              <p className="text-muted-foreground text-sm">Wedding at Thornton Manor, Wirral</p>
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
              Everything you need to know about the Magic Mirror
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'How does the signature feature work?', a: 'Guests touch the mirror screen and use their finger to sign their name or write a message. This signature is then printed directly onto their photo strip as a unique keepsake.' },
                { q: 'Can guests record video messages?', a: 'Yes! Guests can record personal video messages up to 30 seconds long. These are compiled and delivered to you after the event on a USB drive or via cloud link.' },
                { q: 'Is it suitable for outdoor events?', a: 'The Magic Mirror is designed for indoor use. For outdoor events, we can set it up under a marquee or covered area to protect the equipment from the elements.' },
                { q: 'What animations are available?', a: 'We have a library of over 50 animations including seasonal themes, romantic designs for weddings, corporate-friendly options, and birthday celebrations. We can also create custom animations.' },
                { q: 'How loud is the voice guidance?', a: 'The volume is fully adjustable and we set it appropriately for your venue. For quieter ceremonies, we can reduce the volume or switch to on-screen text prompts.' },
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
              Ready to Add Some Magic?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Create enchanting memories with our Magic Mirror. Check availability and book today!
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

export default MagicMirror;
