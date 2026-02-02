import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Clock, MapPin, User, Mail, Phone, Send, PartyPopper } from 'lucide-react';
import { toast } from 'sonner';

const eventTypes = [
  'Wedding',
  'Birthday Party',
  'Corporate Event',
  'University Event',
  'Graduation',
  'Christmas Party',
  'Prom',
  'Other',
];

const boothTypes = [
  'LCD Screen Slimline Pod',
  'Magic Mirror',
  'Retro Box',
  'Enchanted Mirror X Selfie',
  'Inflatable Enclosed Booth',
  'Wooden Vintage Tripod',
  'Not Sure - Need Advice',
];

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    boothType: '',
    eventDate: '',
    eventTime: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Booking request submitted!', {
      description: 'We\'ll send you a personalized quote within 24 hours.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      boothType: '',
      eventDate: '',
      eventTime: '',
      location: '',
    });
    setIsSubmitting(false);
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
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Event Type</Label>
                        <Select 
                          value={formData.eventType}
                          onValueChange={(value) => handleSelectChange('eventType', value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card">
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Booth</Label>
                        <Select 
                          value={formData.boothType}
                          onValueChange={(value) => handleSelectChange('boothType', value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select booth type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card">
                            {boothTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
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
                    {isSubmitting ? 'Submitting...' : (
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
