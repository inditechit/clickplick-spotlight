import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { X } from 'lucide-react';

const categories = ['All', 'Weddings', 'Parties', 'Corporate', 'Booths'];

const galleryImages = [
  { src: '/gallery/1.jpeg', category: 'Weddings' },
  { src: '/gallery/2.jpeg', category: 'Weddings' },
  { src: '/gallery/3.jpeg', category: 'Weddings' },
  { src: '/gallery/4.jpeg', category: 'Parties' },
  { src: '/gallery/5.jpeg', category: 'Parties' },
  { src: '/gallery/6.jpeg', category: 'Parties' },
  { src: '/gallery/7.jpeg', category: 'Parties' },
  { src: '/gallery/8.jpeg', category: 'Corporate' },
  { src: '/gallery/9.jpeg', category: 'Corporate' },
  { src: '/gallery/10.jpeg', category: 'Corporate' },
  { src: '/gallery/11.jpeg', category: 'Corporate' },
  { src: '/gallery/12.jpeg', category: 'Booths' },
  { src: '/gallery/13.jpeg', category: 'Booths' },
  { src: '/gallery/14.jpeg', category: 'Booths' },
  { src: '/gallery/15.jpeg', category: 'Booths' },
  { src: '/gallery/16.jpeg', category: 'Weddings' },
  { src: '/gallery/17.jpeg', category: 'Weddings' },
  { src: '/gallery/18.jpeg', category: 'Parties' },
  { src: '/gallery/19.jpeg', category: 'Parties' },
  { src: '/gallery/20.jpeg', category: 'Corporate' },
  { src: '/gallery/21.jpeg', category: 'Corporate' },
  { src: '/gallery/22.jpeg', category: 'Booths' },
  { src: '/gallery/23.jpeg', category: 'Booths' },
  { src: '/gallery/24.jpeg', category: 'Weddings' },
  { src: '/gallery/25.jpeg', category: 'Parties' },
  { src: '/gallery/26.jpeg', category: 'Corporate' },
  { src: '/gallery/27.jpeg', category: 'Booths' },
  { src: '/gallery/28.jpeg', category: 'Weddings' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Event{' '}
                <span className="gradient-text-gold">Gallery</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Browse through photos from our past events and see the fun in action!
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-accent text-accent-foreground shadow-accent'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(image.src)}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
