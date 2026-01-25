import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Bride',
    event: 'Wedding',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    content: 'ClickPlick made our wedding day even more special! The Magic Mirror was a huge hit with all our guests. The prints were gorgeous and the attendant was so professional.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Event Manager',
    event: 'Corporate Event',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    content: 'We\'ve used ClickPlick for three company events now. Always reliable, always amazing quality, and our team absolutely loves the photo booths.',
    rating: 5,
  },
  {
    name: 'Emma Davies',
    role: 'Birthday Host',
    event: '30th Birthday Party',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    content: 'The Retro Box was perfect for my 30th birthday! Everyone had so much fun, and I now have an amazing album of memories from the night.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            What Our Clients{' '}
            <span className="gradient-text-gold">Say About Us</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Don't just take our word for it – hear from some of our amazing clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role} • {testimonial.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
