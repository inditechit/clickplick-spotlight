import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

// API Configuration
const API_BASE_URL = "https://api.clickplick.co.uk/api/posts"; 

// Interface for Post Data from API
interface BlogPost {
  id: number;
  slug: string; // Added slug here
  title: string;
  short_content: string; 
  content: string;
  category_name: string; 
  created_at: string;
  link?: string; 
  image?: string; 
}

interface Category {
  id: number;
  name: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // --- 1. FETCH DATA ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch Posts
        const postsRes = await fetch(`${API_BASE_URL}`);
        const postsData = await postsRes.json();

        // Fetch Categories
        const catsRes = await fetch(`${API_BASE_URL}/categories/all`);
        const catsData = await catsRes.json();

        if (Array.isArray(postsData)) {
          setPosts(postsData);
        }

        if (Array.isArray(catsData)) {
          // Extract names and add 'All' at the beginning
          const catNames = ['All', ...catsData.map((c: Category) => c.name)];
          setCategories(catNames);
        }

      } catch (error) {
        console.error("Error fetching blog data:", error);
        toast.error("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- 2. HELPER: Calculate Read Time ---
  const calculateReadTime = (content: string) => {
    if (!content) return "1 min read";
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
  };

  // --- 3. HELPER: Get Image URL ---
  const getImageUrl = (post: BlogPost) => {
    // If backend returns a relative path (e.g., /uploads/img.jpg), prepend API domain
    const baseUrl = "https://api.clickplick.co.uk";
    
    if (post.image) {
      return post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
    }
    if (post.link) {
      return post.link.startsWith('http') ? post.link : `${baseUrl}${post.link}`;
    }
    
    return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"; // Fallback
  };

  // --- 4. FILTER LOGIC ---
  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category_name === activeCategory);

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
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Tips, Ideas &{' '}
                <span className="gradient-text-gold">Inspiration</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Expert advice and creative ideas to make your photo booth 
                experience even more amazing.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="section-container">
            
            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              <>
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-5 py-2 rounded-full font-medium transition-all ${
                        activeCategory === category
                          ? 'bg-accent text-accent-foreground shadow-sm'
                          : 'bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Blog Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="group bg-card rounded-2xl overflow-hidden border border-border card-hover flex flex-col h-full"
                      >
                        {/* Link to Detail Page using SLUG */}
                        <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                          <div className="relative h-52 overflow-hidden shrink-0 bg-muted">
                            <img
                              src={getImageUrl(post)}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=No+Image";
                              }}
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                                {post.category_name || "General"}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.created_at).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {calculateReadTime(post.content)}
                              </span>
                            </div>
                            
                            <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                              {post.short_content}
                            </p>
                            
                            <div className="mt-auto pt-2">
                              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-muted-foreground">
                    <p>No posts found in this category.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;