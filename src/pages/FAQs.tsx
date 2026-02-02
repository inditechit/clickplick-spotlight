import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
 {
    question: "What’s included in your photobooth hire packages?",
    answer: `All of our full-service photobooth packages include:
1. Totally unlimited prints – every person in the photo gets a print, plus one extra for the guest book
2. A free guest book, with glue sticks and pens included
3. GIFs and fun filters available on all booths
4. Instant sharing of photos via Airdrop or Email
5. A DSLR professional-grade camera for studio-quality photos
6. A photo backdrop (provided with all booths except the LCD Slimline Pod)
7. A USB with all photos from the event (excluded from LCD Slimline Pod package)
8. A tall standing banner to direct guests to the booth
9. A friendly photobooth attendant on-site throughout the event (except with the LCD Slimline Pod)`
  },
  {
    question: "What does “unlimited prints” mean?",
    answer: "It means exactly that—unlimited use of the booth during your hire! Every guest in the photo receives their own copy, and we print one extra copy for your guest book."
  },
  {
    question: "Is a guest book included?",
    answer: "Yes! We provide a complimentary guest book with glue sticks and pens so your guests can add their photos and leave personal messages. Our booth attendant helps manage this throughout the event."
  },
  {
    question: "Can guests share their photos digitally?",
    answer: "Absolutely. All our booths allow guests to instantly send their photos via Airdrop or Email, right from the booth interface."
  },
  {
    question: "Are filters and GIFs available?",
    answer: "Yes! Every photobooth comes equipped with fun filters and the ability to create GIFs—great for creating memorable, shareable content."
  },
  {
    question: "Will there be someone to help with the booth during the event?",
    answer: "Yes, a dedicated booth attendant is always present to assist guests and maintain smooth operation—except with the LCD Slimline Pod, which is a self-service booth."
  },
  {
    question: "Do all booths come with a backdrop?",
    answer: "All of our booths include a high-quality backdrop, except for the LCD Slimline Pod, which is designed for minimal setups or tight spaces."
  },
  {
    question: "Will we receive digital copies of all the photos?",
    answer: "Yes, at the end of your event, you’ll receive a USB with all digital images captured—except for the LCD Slimline Pod, which does not include USB transfer."
  },
  {
    question: "What kind of camera do you use in the booths?",
    answer: "We only use professional DSLR cameras in all our booths to deliver crisp, high-resolution photos every time."
  },
  {
    question: "How will guests find the photobooth?",
    answer: "We provide a tall standing branded banner at the event to clearly signal where your photobooth is located."
  },
  {
    question: "Are there any venue requirements for setup?",
    answer: "Yes. Our Original Magic Mirror requires step-free access to the venue due to its size and mobility.\nAll other photobooths can be installed in venues with stairs or steps."
  },
  {
    question: "What is the LCD Slimline Pod and what makes it special?",
    answer: "The LCD Slimline Pod is a sleek, compact photo booth featuring a large front-facing LCD screen. This screen can be branded with any image or video, making it ideal for product launches and corporate activations.\nIt’s a self-service booth without an attendant, backdrop, or USB output—but perfect for modern, high-traffic events."
  },
  {
    question: "Do you offer branding options for corporate or branded events?",
    answer: "Yes! We specialize in full photobooth branding for corporate clients and branded experiences. You can customize:\n1. The booth’s start screen\n2. The photo print layout\n3. The backdrop design\n4. The guest book cover\n5. Even selfie frames and signage\nPerfect for brand activations, marketing campaigns, and company parties."
  },
  {
    question: "What types of events do you cover?",
    answer: "We cover weddings, birthday parties, corporate and university events, private parties, and community events, providing memorable experiences with high-quality prints, digital sharing, and fun features like GIFs and filters."
  },
];

const FAQs = () => {
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
                Help Center
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Frequently Asked{' '}
                <span className="gradient-text-gold">Questions</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Got questions? We've got answers. Find everything you need to know 
                about our photo booth hire services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Still Have Questions */}
              <div className="mt-16 text-center p-8 rounded-2xl bg-secondary/50">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Can't find what you're looking for? We're here to help!
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
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

export default FAQs;
