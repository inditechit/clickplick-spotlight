import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Smile, Video, Image, Layers, Star, Heart, Briefcase, GraduationCap, PartyPopper, Crown, Gem, Wand2 } from 'lucide-react';

const features = [
  { icon: Smile, title: 'Emoji Stamps', description: 'Fun interactive emoji overlays that guests can place anywhere on their photos for added personality' },
  { icon: Layers, title: 'Green Screen', description: 'Transport guests to any location with our professional green screen and library of stunning backgrounds' },
  { icon: Video, title: 'GIF & Boomerang', description: 'Create animated GIFs and boomerangs that capture the fun and energy of your celebration' },
  { icon: Image, title: 'Premium Finish', description: 'Elegant high-end design with luxurious detailing that complements the most sophisticated venues' },
];

const includes = [
  'Premium mirror finish',
  'Voice guidance',
  'Emoji stamps',
  'Green screen option',
  'GIF & boomerang mode',
  'Unlimited prints',
  'Digital gallery',
  'Professional attendant',
  'Custom backgrounds',
  'Signature capture',
  'Social media sharing',
  'Video message recording',
];

const specifications = [
  { label: 'Footprint', value: '1.4m x 1.4m' },
  // { label: 'Height', value: '2m' },
  { label: 'Guest Capacity', value: '15-20 guests' },
  { label: 'Setup Time', value: '75 minutes' },
  { label: 'Power Required', value: 'Standard socket' },
];

const idealEvents = [
  { icon: Crown, name: 'Luxury Weddings' },
  { icon: Briefcase, name: 'Award Ceremonies' },
  { icon: Gem, name: 'Gala Dinners' },
  { icon: GraduationCap, name: 'Proms' },
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
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              💎 Luxury Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Enchanted Mirror X Selfie
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Our premium mirror booth combining elegant design with cutting-edge technology. Voice guidance, stunning visual effects, and a luxurious finish that elevates any celebration.
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
          The Enchanted Mirror X Selfie Booth
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Clicks amazing professional grade photos with a DSLR camera. We use high quality photo paper so your prints are safe for life. Introducing the ultimate fusion of style and technology: the Magic Mirror X Selfie Pod! Step into the future of photo booths with this sleek and innovative design, combining the elegance of a mirror with the functionality of a selfie pod.
          </p>
          <p>
            Say goodbye to bulky setups and hello to seamless elegance, as this cutting-edge device effortlessly captures your best moments with style.
          </p>
          <p>
            Our unlimited prints truly mean unlimited. If there are 8 people in the photo, all 8 will receive a print! Plus, we’ll include an extra copy for the guest book, so your guests can leave a special message beside their photo.
          </p>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="/light/3.jpg"
          alt="Enchanted Mirror X Selfie Booth"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

        {/* The Enchanted Experience */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
              The Enchanted Experience
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Every interaction is designed to delight, surprise, and create unforgettable memories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Crown, title: 'Regal Welcome', description: 'Guests are welcomed with elegant animations and a sophisticated voice greeting. The mirror awakens with a flourish that immediately captures attention and creates excitement.' },
                { icon: Wand2, title: 'Interactive Magic', description: 'Touch the screen to add emoji stamps, choose stunning backgrounds, or record personal video messages. The intuitive interface makes every guest feel like a VIP.' },
                { icon: Gem, title: 'Premium Output', description: 'Photos are printed on premium quality paper with a luxurious finish. Digital copies are delivered via a beautifully designed online gallery perfect for sharing.' },
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

        {/* Green Screen Feature */}
        {/* <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop"
                    alt="Green Screen Feature"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Featured Technology
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Green Screen Magic
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Take your guests anywhere in the world with our professional green screen technology. From the streets of Paris to a tropical beach, from outer space to your company's branded backdrop – the possibilities are endless.
                  </p>
                  <p>
                    Our green screen setup is seamlessly integrated into the Enchanted Mirror experience. Guests can choose from our extensive library of backgrounds or we can create custom backgrounds featuring your branding, wedding venue, or any image you desire.
                  </p>
                  <p>
                    The results are stunning and indistinguishable from real location photos. It's the perfect way to add an extra element of fun and creativity to your event.
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
            src="/light/en/1.jpeg"
            alt="Enchanted Mirror X Selfie Booth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["3.jpeg", "2.jpeg", "4.jpg"].map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`/light/en/${img}`}
                alt={`Enchanted Mirror view ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          Premium Package
        </div>
        
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Services Included
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {[
            "WHITE OR BLACK BACKDROP",
            "GUEST BOOK",
            "UNLIMITED PRINT OUTS",
            "INSTANTLY DOWNLOAD TO PHONE",
            "USB DATA TRANSFER AT END OF EVENT",
            "PHOTOBOOTH ATTENDANT",
            "WIDE RANGE OF PROPS",
            "CHOICE OF PHOTO LAYOUT (2x6 OR 4x6)",
            "PERSONALIZED TEXT OR LOGO",
            "TALL STANDING BANNER SIGNALING TOWARDS PHOTO BOOTH"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Add On Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "CUSTOMIZED GUEST BOOK",
            "CUSTOMIZED PHOTO FRAMES",
            "CUSTOM BACKDROPS",
            "CUSTOMIZED PHOTO PRINTS"
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
              Premium Features
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Cutting-edge technology wrapped in elegant design
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

         {/* --- NEW SECTION ADDED FROM SCREENSHOT --- */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Text from Screenshot */}
              <div>
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2 block">
                  Effortless Setup
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Relax and Enjoy: <br />
                  We’ll Handle Setup
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    With ClickPlick delivering and setting up the slimline selfie pod, you can relax while we handle all the technical details.
                  </p>
                  <p>
                    From ensuring perfect positioning to seamless operation, we'll take care of everything so you can enjoy a stress-free event.
                  </p>
                  <p className="font-semibold text-primary">
                    Setup is included outside of your hire time.
                  </p>
                </div>
              </div>

              {/* Right Side: Image instead of Specs (as requested) */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
                <img
                  src="/light/en/4.jpg" // Reusing an existing image path as placeholder
                  alt="Booth Setup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
        {/* --- END NEW SECTION --- */}

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
              </div>

              {/* Ideal Events */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Perfect For
                </h2>
                <p className="text-muted-foreground mb-6">
                  The Enchanted Mirror X Selfie is designed for the most prestigious occasions:
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
                  {/* We've provided the Enchanted Mirror X Selfie for luxury weddings at 5-star venues, Fortune 500 corporate events, celebrity parties, and exclusive private celebrations. */}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="section-container text-center">
            {/* <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Why not add our brand new <span className="font-bold">Audio Telephone Guest Book for £49</span> (normally £199) 
              or some giant 4ft light up <span className="font-bold">"LOVE" letters for £100</span> (normally £200) 
              or <span className="font-bold">"MR & MRS" letters for £200</span> (normally £300)
            </p> */}

            <div className="max-w-md mx-auto relative group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Audio Telephone Guest Book</h3>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-dashed border-pink-200 p-2">
                   {/* Decorative elements from the image */}
                   <div className="absolute top-0 left-0 w-8 h-8 bg-cyan-400 clip-triangle -rotate-45 transform -translate-x-4 -translate-y-4"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 bg-pink-500 clip-triangle rotate-135 transform translate-x-4 translate-y-4"></div>
                   
                   <img 
                    src="/services/audiobook.jpeg" // Ensure you have a relevant image here
                    alt="Audio Guest Book" 
                    className="w-full h-full object-cover rounded-xl"
                   />
                   <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-xl px-6 py-3 border border-slate-100">
                      <span className="text-3xl font-black text-cyan-500">£49</span>
                   </div>
                </div>
                <Link to="#" className="text-blue-500 font-semibold underline hover:text-blue-700 transition-colors">
                  More About Our Audio Telephone Guest Book
                </Link>
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
                "We wanted something special for our wedding at The Shard and the Enchanted Mirror exceeded our expectations. The green screen transported our guests to locations around the world, and the quality matched the venue perfectly. Absolutely stunning!"
              </blockquote>
              <p className="font-semibold text-foreground">Alexandra & Charles</p>
              <p className="text-muted-foreground text-sm">Wedding at The Shard, London</p>
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
              Questions about our premium Enchanted Mirror X Selfie
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'What makes this booth "premium"?', a: 'Every aspect is elevated – from the luxurious mirror finish and elegant frame to the superior print quality and advanced interactive features. We also provide white-glove attendant service with this booth.' },
                { q: 'Can we have custom green screen backgrounds?', a: 'Absolutely! We can create bespoke backgrounds featuring your venue, branding, wedding theme, or any imagery you provide. We include up to 5 custom backgrounds at no extra charge.' },
                { q: 'How do the emoji stamps work?', a: 'After taking photos, guests can use the touchscreen to add fun emoji graphics anywhere on their images. They can choose from hundreds of options including themed seasonal emojis.' },
                { q: 'Is this suitable for very formal events?', a: 'Perfectly suited! The Enchanted Mirror X Selfie is designed to complement black-tie events, luxury weddings, and sophisticated corporate functions. It adds entertainment without compromising elegance.' },
                { q: 'What about the GIF and boomerang features?', a: 'These fun modes capture short animated sequences that guests can share instantly via email or social media. They\'re hugely popular and create shareable content that extends your event\'s reach.' },
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
              Ready for the Enchanted Experience?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Elevate your event with our premium Enchanted Mirror X Selfie. Book today for an unforgettable experience.
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
