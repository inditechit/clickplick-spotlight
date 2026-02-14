import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, CalendarCheck, MessageSquare } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 flex items-center justify-center px-4">
        <div className="section-container w-full max-w-4xl">
          
          <div className="relative bg-slate-50 rounded-[3rem] p-8 md:p-20 text-center overflow-hidden shadow-sm border border-slate-100">
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <MessageSquare className="w-64 h-64 text-slate-900" />
            </div>
            {/* ClickPlick Brand Colors (Pink/Cyan accents) */}
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>

            <div className="relative z-10">
              {/* Success Animation */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-8 shadow-inner animate-bounce-slow">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                You're All Set! <br />
                <span className="text-primary">ClickPlick</span> Has Your Info.
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Thanks for your enquiry! We are currently checking our availability for your event date. 
                Get ready to capture some amazing memories—we'll be in touch shortly to finalize the details.
              </p>

              {/* What Happens Next Section */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
                {/* Step 1 */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                      <CalendarCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Availability Check</h3>
                      <p className="text-slate-500 text-sm">Our team is reviewing your date to ensure we have a booth ready for you.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Confirmation</h3>
                      <p className="text-slate-500 text-sm">Expect an email or call from us within 24 hours to confirm your package.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary text-white px-8 h-12 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all w-full sm:w-auto" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" /> Back to ClickPlick
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="border-slate-200 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-full h-12 px-8 w-full sm:w-auto" asChild>
                  <Link to="/hire-photobooth">
                    Explore More Booth
                  </Link>
                </Button>
              </div>

            </div>
          </div>
          
          <p className="text-center text-slate-400 text-sm mt-8">
            Didn't receive a confirmation email? Check your spam folder or email us at <a href="mailto:info@clickplick.co.uk" className="text-primary hover:underline">info@clickplick.co.uk</a>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;