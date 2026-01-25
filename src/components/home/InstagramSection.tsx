import { Instagram } from 'lucide-react';

const instagramPosts = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529543544277-750e-58e8f5fd808c?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=400&auto=format&fit=crop',
];

export function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Follow Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Join Us On{' '}
            <span className="gradient-text">Instagram</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See the latest from our events and get inspired for your own celebration.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/clickplickuk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Handle */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/clickplickuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            <Instagram className="w-5 h-5" />
            @clickplickuk
          </a>
        </div>
      </div>
    </section>
  );
}
