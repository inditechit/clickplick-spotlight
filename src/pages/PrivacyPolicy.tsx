import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Privacy Policy
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
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, including your name, 
                    email address, phone number, and event details when you book our services 
                    or contact us. We also collect photos taken at events with your consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to provide our photo booth services, 
                    communicate with you about your booking, send you marketing communications 
                    (with your consent), and improve our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    3. Photo Usage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Photos taken at events remain the property of the event host. We may 
                    request permission to use photos for marketing purposes. All photos 
                    are stored securely and can be deleted upon request.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal 
                    information. However, no method of transmission over the Internet is 
                    100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    5. Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal information. 
                    You can opt out of marketing communications at any time. Contact us to 
                    exercise these rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    6. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at 
                    info@clickplick.co.uk or call us at +44 7931-983-588.
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

export default PrivacyPolicy;
