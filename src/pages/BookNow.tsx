import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, MapPin, User, Mail, Phone, Send, PartyPopper } from 'lucide-react';
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

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    location: '', // Maps to event_postcode
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      event_postcode: formData.location
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // 3. Handle Success
      toast.success('Quote request submitted!', {
        description: 'We\'ll get back to you within 24 hours. Your brochure is downloading.',
      });

      // --- GOOGLE ADS TRACKING ---
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
        location: '',
      });

    } catch (error) {
      // 4. Handle Error
      console.error('Submission Error:', error);
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
                <PartyPopper className="w-4 h-4 inline mr-2" />
                Start Your Booking
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Book Your{' '}
                <span className="gradient-text-gold">Photo Booth</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Fill out the form below and we'll send you a personalized quote 
                within 24 hours. No obligation, no pressure!
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 border border-border">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                      Your Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="pl-11 h-12"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+44 7931-983-588"
                            className="pl-11 h-12"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                      Event Details
                    </h3>
                    
                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                          <Input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="pl-11 h-12"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventTime">Event Time</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                          <Input
                            id="eventTime"
                            name="eventTime"
                            type="time"
                            value={formData.eventTime}
                            onChange={handleChange}
                            className="pl-11 h-12"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="mt-6 space-y-2">
                      <Label htmlFor="location">Event Location / Postcode</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g., SW1A 1AA or Venue Name, London"
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5" />
                        Get My Free Quote
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We'll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookNow;