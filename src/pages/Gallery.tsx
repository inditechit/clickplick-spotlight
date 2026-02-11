import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const categories = ['All', 'Weddings', 'Parties', 'Corporate', 'Booths'];
const API_BASE_URL = "https://api.clickplick.co.uk"; // Your Backend URL

// Define the shape of the data coming from your DB
interface GalleryImage {
  id: number;
  image_url: string;
  type: string; // This maps to our categories
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // State for dynamic data
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH IMAGES FROM API ---
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery');
        }
        
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error("Gallery fetch error:", error);
        toast.error("Could not load gallery images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // --- FILTER LOGIC ---
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => (img.type || 'All') === activeCategory);

  // Helper to ensure full image URL
  const getImageUrl = (path: string) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
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

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : filteredImages.length > 0 ? (
              /* Gallery Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setLightboxImage(getImageUrl(image.image_url))}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-muted"
                  >
                    <img
                      src={getImageUrl(image.image_url)}
                      alt={`Gallery image ${image.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x600?text=No+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 text-muted-foreground">
                <p>No images found for "{activeCategory}".</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
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