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
    question: 'What is included in the photo booth hire package?',
    answer: 'Our packages include the photo booth of your choice, a professional booth attendant, unlimited prints for all guests, digital copies of all photos, a selection of fun props, custom photo templates with your event details, and free setup and collection.',
  },
  {
    question: 'How many prints can guests have?',
    answer: 'All our packages include unlimited prints! Every guest can have as many photos as they like throughout your event. We believe everyone should take home memories from your special day.',
  },
  {
    question: 'Can photos be shared digitally?',
    answer: 'Yes! Our booths offer instant digital sharing. Guests can email photos to themselves, share directly to social media, or send via text message. We also provide a USB drive with all photos after the event.',
  },
  {
    question: 'Do you provide a booth attendant?',
    answer: 'Yes, every booking includes a friendly, professional booth attendant who will set up the booth, assist your guests, manage the props, and ensure everything runs smoothly throughout your event.',
  },
  {
    question: 'What backup options do you have?',
    answer: 'We take reliability seriously. All photos are backed up in real-time to the cloud. We also provide a USB drive after the event and can set up an online gallery for easy access and downloads.',
  },
  {
    question: 'How much space does the photo booth need?',
    answer: 'Space requirements vary by booth type. Generally, we need approximately 8ft x 8ft for most booths. We\'ll confirm exact requirements when you book and can advise on the best booth for your venue.',
  },
  {
    question: 'Can we customize the photo template?',
    answer: 'Absolutely! We create custom photo templates for every event. You can include your names, event date, logos, custom messages, and choose colors and designs that match your theme.',
  },
  {
    question: 'Do you offer green screen backgrounds?',
    answer: 'Yes, green screen is available with our LCD Slimline Pod and other select booths. Guests can choose from a variety of fun backgrounds or we can create custom backgrounds for your event.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We cover all of London and the surrounding areas including Kent, Essex, Surrey, Hertfordshire, and beyond. Contact us with your postcode for a quote including any travel fees.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking as early as possible, especially for peak dates like Saturdays and holiday periods. However, we sometimes have last-minute availability, so always reach out to check!',
  },
  {
    question: 'Can you accommodate outdoor events?',
    answer: 'Yes, we can set up at outdoor events with a few considerations. We\'ll need access to power, protection from rain (a marquee or tent), and a stable, flat surface for the booth.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, credit/debit cards, and PayPal. We require a deposit to secure your date, with the balance due 7 days before your event.',
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
