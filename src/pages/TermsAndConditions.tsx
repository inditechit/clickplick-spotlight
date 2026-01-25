import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-white/70">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    1. Booking & Payment
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A 50% deposit is required to secure your booking date. The remaining 
                    balance is due 7 days before your event. All prices are quoted in GBP 
                    and include VAT where applicable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    2. Cancellation Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cancellations made more than 30 days before the event will receive a 
                    full deposit refund. Cancellations within 30 days will forfeit the 
                    deposit. Rescheduling is subject to availability.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    3. Setup Requirements
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The venue must provide access to a standard electrical outlet within 
                    10 meters of the booth location. The area should be flat, dry, and 
                    protected from weather elements. We require at least 1 hour for setup.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    4. Damage & Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The client is responsible for any damage to our equipment caused by 
                    guests or venue conditions. We carry public liability insurance for 
                    our services. We are not liable for delays caused by circumstances 
                    beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    5. Photos & Data
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All photos taken remain available for 30 days after your event via 
                    our online gallery. We retain backups for 90 days. Event photos may 
                    be used for marketing with prior consent from the client.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    6. Service Changes
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to substitute equipment with equivalent or 
                    superior alternatives if necessary. Any significant changes will 
                    be communicated in advance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    7. Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these terms, please contact us at 
                    info@clickplick.co.uk or call 07123 456789.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
