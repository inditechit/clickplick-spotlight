import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// Note: We rename the Calendar icon to CalendarIcon to avoid conflict with the UI Calendar component
import { Calendar as CalendarIcon, Clock, MapPin, User, Mail, Phone, Send, Users, Camera, PartyPopper } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar'; 
import { toast } from 'sonner';

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

export function AnimatedBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    postcode: '',
    guests: '',
    boothChoice: '',
    eventType: '',
  });
  
  const [selectedDateObj, setSelectedDateObj] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if date is selected to trigger animation
  const isDateSelected = formData.eventDate !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle date selection from the BIG full calendar
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDateObj(date);
    if (date) {
      // Format the date to YYYY-MM-DD avoiding timezone offset issues
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      
      setFormData({
        ...formData,
        eventDate: `${year}-${month}-${day}`
      });
    } else {
      setFormData({
        ...formData,
        eventDate: ''
      });
    }
  };

  // Handle date changes if they manually edit the simple input field later
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, eventDate: val });
    
    if (val) {
      setSelectedDateObj(new Date(val));
    } else {
      setSelectedDateObj(undefined);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const apiPayload = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      event_date: formData.eventDate,
      event_time: formData.eventTime,
      event_postcode: formData.postcode,
      no_of_guests: formData.guests,
      choice_of_photobooth: formData.boothChoice,
      event_type: formData.eventType
    };

    try {
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
      }

      const pdfUrl = "/pdf/final%20clickplick.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "ClickPlick_Brochure.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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
        guests: '',
        boothChoice: '',
        eventType: '',
      });
      setSelectedDateObj(undefined);

    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Submission failed', {
        description: 'Please check your connection or try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="booking-form">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="sticky top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Book Your{' '}
              <span className="gradient-text">Photo Booth</span>
              {' '}Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ready to make your event unforgettable? Select your <strong>Event Date</strong> on the calendar to get started, fill out the details for your <strong>Free Quote</strong>, and instantly download our exclusive brochure.
            </p>
          </div>

          {/* Form Content */}
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10 border border-border transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* BIG CALENDAR: Shows only when no date is selected */}
              {!isDateSelected && (
                <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                  <Label className="text-foreground font-bold text-xl text-center block">
                    When is your event? <span className="text-primary">*</span>
                  </Label>
                  <div className="flex justify-center p-4 rounded-xl border border-border bg-background shadow-sm">
                    <Calendar
                      mode="single"
                      selected={selectedDateObj}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} // Disables past dates
                      className="rounded-md"
                    />
                  </div>
                </div>
              )}

              {/* ANIMATED SECTION: Shows simple inputs once date is selected */}
              <div 
                className={`grid gap-6 overflow-hidden transition-all duration-700 ease-in-out ${
                  isDateSelected ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {/* Simple Event Date Input (Replaces the big calendar) */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-foreground font-medium">
                    Event Date <span className="text-primary">*</span>
                  </Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleDateInputChange}
                      className="pl-11 h-12 bg-primary/5 border-primary/20 focus:border-primary transition-colors"
                      required={isDateSelected}
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-2 pt-2 border-t border-border">
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
                      required={isDateSelected}
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
                      required={isDateSelected}
                    />
                  </div>
                </div>

                {/* Phone & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        required={isDateSelected}
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
                        required={isDateSelected}
                      />
                    </div>
                  </div>
                </div>

                {/* Postcode & Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        required={isDateSelected}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground font-medium">
                      No. of Guests
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="100"
                        className="pl-11 h-12"
                        required={isDateSelected}
                      />
                    </div>
                  </div>
                </div>

                {/* Event Type & Booth Choice Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-foreground font-medium">
                      Type of Event
                    </Label>
                    <div className="relative">
                      <PartyPopper className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-11"
                        required={isDateSelected}
                      >
                        <option value="" disabled>Select event</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="university">University</option>
                        <option value="corporate">Corporate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="boothChoice" className="text-foreground font-medium">
                      Choice of Photobooth
                    </Label>
                    <div className="relative">
                      <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="boothChoice"
                        name="boothChoice"
                        value={formData.boothChoice}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-11"
                        required={isDateSelected}
                      >
                        <option value="" disabled>Select booth</option>
                        <option value="LCD Screen Slimline Pod">LCD Screen Slimline Pod</option>
                        <option value="Magic Mirror">Magic Mirror</option>
                        <option value="Retro Box">Retro Box</option>
                        <option value="Enchanted Mirror X Selfie">Enchanted Mirror X Selfie</option>
                        <option value="Inflatable Enclosed Booth">Inflatable Enclosed Booth</option>
                        <option value="Wooden Vintage Tripod">Wooden Vintage Tripod</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get Free Quote 
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}