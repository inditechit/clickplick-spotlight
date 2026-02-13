import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Music, Mic, Heart, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudioGuestBook = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-slate-50">
          <div className="section-container">
            <Link to="/retro-box" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Retro Box
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-4 uppercase tracking-wider">
                  New Addition
                </span>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  The Audio <span className="text-primary">Telephone</span> Guest Book
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Ditch the traditional pen and paper. Let your guests leave heartfelt, funny, and tipsy voice messages that you can keep forever.
                </p>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-bold text-slate-900">£49</span>
                  <span className="text-xl text-slate-400 line-through">Normally £199</span>
                </div>
                <Button size="lg" className="bg-primary text-white px-8 h-14 text-lg rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/book-now">Get in Touch to Book</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-cyan-200 rounded-[2rem] blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/services/ghf.jpg" 
                    alt="Vintage Audio Phone" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: Phone, 
                  title: "Pick up the Phone", 
                  description: "Guests hear a pre-recorded greeting from you asking them to leave a message." 
                },
                { 
                  icon: Mic, 
                  title: "Leave a Message", 
                  description: "They talk, laugh, sing, or share advice after the beep. No time limits!" 
                },
                { 
                  icon: Music, 
                  title: "Keep the Memories", 
                  description: "After the event, we send you all the recordings as high-quality digital files." 
                }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Audio? */}
        <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 mb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Music className="w-64 h-64" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-8 italic">"Voices carry more emotion than ink ever could."</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Heart className="text-pink-400 shrink-0" />
                  <p className="text-slate-300">Hear the laughter of your grandmother or the cheers of your best friends.</p>
                </div>
                <div className="flex gap-4">
                  <Star className="text-yellow-400 shrink-0" />
                  <p className="text-slate-300">A unique vintage aesthetic that looks amazing on your guest-book table.</p>
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

export default AudioGuestBook;