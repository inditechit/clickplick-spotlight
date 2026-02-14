import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, MapPin, User, Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
// Add this at the top of BookingForm.tsx
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
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    postcode: '',
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
      event_postcode: formData.postcode
    };

    try {
      // 2. Send Data to Backend
      // NOTE: Ensure this URL matches your backend port (default 5000 or 8080)
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
      link.download = "ClickPlick_Brochure.pdf"; // Suggest a filename
      link.target = "_blank"; // Opens in new tab if cross-origin blocks auto-download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // --- PDF DOWNLOAD LOGIC END ---

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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Book Your{' '}
              <span className="gradient-text">Photo Booth</span>
              {' '}Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ready to make your event unforgettable? Fill out the form to get your <strong>Free Quote</strong> and instantly download our exclusive brochure.
            </p>

            {/* Benefits List */}
            {/* <div className="space-y-4">
              {[
                'Free setup and collection',
                'Professional booth attendant included',
                'Unlimited prints for all guests',
                'Custom branding available',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Your Name
                </Label>
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

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address
                </Label>
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

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone Number
                </Label>
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

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-foreground font-medium">
                    Event Date
                  </Label>
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
                  <Label htmlFor="eventTime" className="text-foreground font-medium">
                    Event Time
                  </Label>
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

              {/* Postcode */}
              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-foreground font-medium">
                  Event Postcode
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="SW1A 1AA"
                    className="pl-11 h-12"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get Free Quote 
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}