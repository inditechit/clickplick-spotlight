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
                Effective Date: 30/03/2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-10 p-6 bg-secondary/20 rounded-xl border border-border">
                <p className="text-foreground font-medium leading-relaxed">
                  ClickPlick Photo-booths, a brand of VR Lucky Entertainment Limited, is committed to protecting the privacy of our clients. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you hire our photobooth services.
                </p>
              </div>

              <div className="space-y-10">
                
                {/* 1. Information We Collect */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you book our photobooth services, we may collect the following personal information:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and postal code.</li>
                    <li><strong className="text-foreground">Event Details:</strong> Date, time, and location of your event.</li>
                    <li><strong className="text-foreground">Photographs:</strong> Photos taken during the event using our photobooth.</li>
                  </ul>
                </div>

                {/* 2. How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We use the information collected for the following purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-4">
                    <li>To provide and manage our photobooth services.</li>
                    <li>To communicate with you regarding your booking.</li>
                    <li>To improve our services and customer experience.</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing & Promotions:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>We may use event photos for promotional purposes on our website, social media, and marketing materials.</li>
                    <li>
                      We may use your email to send promotional offers, updates, or other marketing communications. If you wish to opt out of promotional emails, you can contact us at <a href="mailto:info.clickplick@gmail.com" className="text-accent hover:underline">info.clickplick@gmail.com</a>.
                    </li>
                  </ul>
                </div>

                {/* 3. Photo Usage & Consent */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    3. Photo Usage & Consent
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our photobooth services, you agree that we may store and use event photos for promotional purposes. However, if you prefer that your photos not be used, you can request removal by contacting us at <a href="mailto:info.clickplick@gmail.com" className="text-accent hover:underline">info.clickplick@gmail.com</a>.
                  </p>
                </div>

                {/* 4. Data Security & Retention */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    4. Data Security & Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We take appropriate security measures to protect your personal data from unauthorized access, loss, or misuse. We retain your data only for as long as necessary to fulfill the purposes stated in this policy or as required by law.
                  </p>
                </div>

                {/* 5. Sharing of Information */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    5. Sharing of Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We do not sell, rent, or share your personal information with third parties, except:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>When required by law or legal processes.</li>
                    <li>When necessary to fulfill our service obligations (e.g., with trusted service providers assisting in operations).</li>
                  </ul>
                </div>

                {/* 6. Your Rights & Choices */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    6. Your Rights & Choices
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                    <li>
                      <strong className="text-foreground">Opt-Out of Marketing:</strong> You can unsubscribe from our promotional emails by emailing <a href="mailto:info.clickplick@gmail.com" className="text-accent hover:underline">info.clickplick@gmail.com</a>.
                    </li>
                    <li>
                      <strong className="text-foreground">Request Data Removal:</strong> If you want your photos or personal data deleted from our records, email us at <a href="mailto:info.clickplick@gmail.com" className="text-accent hover:underline">info.clickplick@gmail.com</a>.
                    </li>
                  </ul>
                </div>

                {/* 7. Changes to This Policy */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on our website, and we encourage you to review it periodically.
                  </p>
                </div>

                {/* 8. Contact Us */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    8. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
                  </p>
                  
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <p className="mb-4">
                      <span className="font-semibold text-foreground">Email: </span>
                      <a href="mailto:info.clickplick@gmail.com" className="text-accent hover:underline">
                        info.clickplick@gmail.com
                      </a>
                    </p>
                    <div className="text-muted-foreground">
                      <p className="font-bold text-foreground">VR Lucky Entertainment Limited</p>
                      <p>135 Park Road, Peterborough</p>
                      <p>United Kingdom, PE1 2UD</p>
                    </div>
                  </div>

                  <p className="mt-8 text-sm italic text-muted-foreground">
                    By using our services, you acknowledge that you have read and agreed to this Privacy Policy.
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