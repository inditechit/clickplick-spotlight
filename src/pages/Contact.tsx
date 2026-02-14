import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { toast } from 'sonner';

// Add global declaration for Google Ads
declare global {
  interface Window {
    gtag: (
      command: 'event', 
      action: string, 
      params: { 
        send_to: string; 
        value?: number; 
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+44 7931-983-588',
    link: 'tel:+447931983588',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@clickplick.co.uk',
    link: 'mailto:info@clickplick.co.uk',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Syon Gardens, Newport Pagnell, Milton Keynes',
    link: null,
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon - Sun: 9am - 9pm',
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    postcode: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Map frontend state to API expected format
    const apiPayload = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      event_date: formData.eventDate,
      event_time: formData.eventTime,
      event_postcode: formData.postcode,
      message: formData.message, // Sending message as well, in case backend accepts it
    };
    
    try {
      // 2. Send Data to Backend
      const response = await fetch('https://api.clickplick.co.uk/api/leads/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      // 3. Handle Success
      toast.success('Request submitted!', {
        description: 'We\'ll get back to you within 24 hours. Your brochure is downloading.',
      });

      // --- GOOGLE ADS CONVERSION START ---
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', { 
          'send_to': 'AW-16532736774/CMhJCNyo27YbEIaWtss9', 
          'value': 1.0, 
          'currency': 'GBP' 
        });
        console.log("Google Ads Conversion Sent");
      } else {
        console.warn("Google Ads tag not found (AdBlocker might be active)");
      }
      // --- GOOGLE ADS CONVERSION END ---

      // --- PDF DOWNLOAD LOGIC START ---
      const pdfUrl = "/pdf/final%20clickplick.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "ClickPlick_Brochure.pdf";
      link.target = "_blank"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // --- PDF DOWNLOAD LOGIC END ---

      // Redirect to Thank You page
      setTimeout(() => {
        window.location.href = "/thankyou.php";
      }, 1000);
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        eventDate: '',
        eventTime: '',
        postcode: '',
        message: '' 
      });

    } catch (err) {
      console.error('Contact form error:', err);
      toast.error('Submission failed', {
        description: 'Please check your connection or try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Contact{' '}
                <span className="gradient-text-gold">ClickPlick</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Have questions about our photo booths? Ready to book? 
                We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.title}>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                            <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{item.title}</div>
                            <div className="text-muted-foreground group-hover:text-accent transition-colors">
                              {item.details}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{item.title}</div>
                            <div className="text-muted-foreground">{item.details}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/447931983588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10 border border-border">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Send Us a Message / Get a Quote
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone & Postcode */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7931-983-588"
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postcode">Event Postcode</Label>
                        <Input
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="SW1A 1AA"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventTime">Event Time</Label>
                        <Input
                          id="eventTime"
                          name="eventTime"
                          type="time"
                          value={formData.eventTime}
                          onChange={handleChange}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="accent" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Get Quote & Brochure
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-secondary/50">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Map integration coming soon</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;