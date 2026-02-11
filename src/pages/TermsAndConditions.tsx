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
                Last updated: February 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                
                {/* Introduction */}
                <div className="p-6 bg-secondary/20 rounded-xl border border-border">
                  <p className="text-foreground font-medium leading-relaxed">
                    These Terms & Conditions set out an agreement between the Hire Provider (Click Plick Photobooths) and the Hirer (the person, organisation or company booking the equipment for hire from Click Plick Photobooths). Upon booking (either verbally or electronically), it is deemed that the Hirer has read, fully understood, and agreed to Click Plick Photobooths' Terms & Conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    1. Equipment
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipment consists of any item of hire, including props. All equipment remains, at all times, the property of Click Plick Photobooths. All our equipment is for indoor use only in a weatherproof area on dry, level, hard surface flooring/ground.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    2. Event Attendance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In the event of Click Plick Photobooths being unable to attend your event due to reasons beyond their control such as (but not limited to) adverse weather conditions, road closures, vehicle breakdown, illness, death, or equipment failure, Click Plick Photobooths’ liability will be limited to refunding all monies already paid by the Hirer to Click Plick Photobooths for that service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    3. Photo Booth Hire
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Photo Booth Hire Delivery & Collection is free within 40 miles of our base in Milton Keynes. Every mile thereafter will be charged at a rate of 50p per mile.
                    </p>
                    <p>
                      We’ll need one and a half hours to set up the photo booth - if we cannot get access to the venue one and a half hours before the agreed start time to set up - the photo booth may run later than expected. We will not be held liable for any costs and no discount will be applied.
                    </p>
                    <p>
                      There may be an additional surcharge of up to £20 for events being held in London - to cover the cost of parking and congestion charge.
                    </p>
                    <p>
                      On receipt of a £99 deposit, Click Plick Photobooths will provide a Photo Booth for your event. The balance of this hire is payable via debit/credit card/paypal or BACS, 1 month before the date of your event. The operator will not operate the booth until payment has been made in full.
                    </p>
                    <p>
                      Photo Booth Hire time is the length of actual time outlined on your chosen hire package, plus any additional hours pre-ordered and pre-paid for. Unless otherwise agreed, Guests will receive the number of photos outlined in your chosen hire package i.e. one per group or one per guest. Guests may use the booth as many times as they like within the hire period.
                    </p>
                    <p>
                      Your guests can upload their pictures to Facebook in real time, but this is subject to wifi connectivity / availability at the event. Please request this service in advance if required. Facebook and twitter uploads are subject to Facebook and Twitter allowing 3rd party uploads. If they update their API to not allow 3rd party uploads then this feature will cease to exist. We cannot be held liable if this occurs. However guests will always be able to email photos to themselves to share on social media.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    4. Rules and Regulations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whilst we encourage the fun use of the booth, if we feel that the booth is not being treated in a respectful manner we will ask the guest(s) involved to leave the booth, and they will not be permitted to re-enter. We will not accept any threatening behaviour. If this occurs we will stop the use of the booth and dismantle with no refund. Smoking, food and beverages are not permitted in the Photo Booth at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    5. Force Majeure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Neither Click Plick Photobooths nor Client shall be held responsible or liable if the fulfilment of any terms or provisions of this Agreement are delayed or prevented by revolutions or other disorders, wars, acts of enemies, fires, floods, acts of God, or without limiting the foregoing by any other cause not within the control of the party whose performance is interfered with, and which by the exercise of reasonable diligence, the party is unable to prevent, whether of the class of causes enumerated before or not. In the event the events contemplated by this paragraph occur, Click Plick Photobooths shall be entitled to retain any and all retainer amounts previously paid by Client.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    6. Damage and Refunds
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any damage / loss to Click Plick Photobooths' equipment through misuse, negligence, abuse or theft by the Hirer, their guests, or affiliates, becomes the responsibility of the Hirer. The Hirer shall bear the cost of any such repair. In the event that the equipment becomes damaged beyond repair, the Hirer shall bear the replacement cost, and any additional cost as a result of affected future hire. In the unlikely event of a technical problem with the Photo Booth, or in any event beyond our control which renders the Photo Booth unusable, a refund will be given pro rata to any time lost.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    7. Image Usage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Images taken by our Booths may be used by us to assist with promoting our services. This may include printed publications as well as online images. Click Plick Photobooths owns all copyright on any image or video taken by our photo and video booths. Please let us know in advance if you don't wish for us to use images from your event.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    8. Cancellations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If the Client cancels the event date, the client will immediately notify Click Plick Photobooths in writing (email suffices). Irrespective of when a cancellation is made, the £99 deposit is non-refundable. If a cancellation is made for any reason:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                    <li><strong className="text-foreground">6 weeks or more prior to the event date:</strong> 25% of the total agreed price becomes payable.</li>
                    <li><strong className="text-foreground">4 – 6 weeks prior to the event date:</strong> 50% of the total agreed price becomes payable.</li>
                    <li><strong className="text-foreground">2 – 4 weeks prior to the event date:</strong> 75% of the total agreed price becomes payable.</li>
                    <li><strong className="text-foreground">Under 2 weeks prior to the event date:</strong> 100% of the agreed price becomes payable.</li>
                  </ul>
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