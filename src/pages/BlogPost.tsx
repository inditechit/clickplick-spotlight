import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // <--- IMPORT THIS
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowRight,
  Tag,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

// API Configuration
const API_BASE_URL = "https://api.clickplick.co.uk/api/posts";

// Interface for Post Data
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  short_content: string;
  content: string;
  category_name: string;
  created_at: string;
  link?: string;
  image?: string;
  author?: string;
  tag?: string; 
  views?: number;
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        window.scrollTo(0, 0);

        if (!slug) return;

        // 1. Fetch Single Post
        const response = await fetch(`${API_BASE_URL}/${slug}`);
        if (!response.ok) throw new Error("Post not found");
        
        const data = await response.json();
        setPost(data);

        // 2. Fetch Related Posts
        const allPostsRes = await fetch(API_BASE_URL);
        const allPosts = await allPostsRes.json();
        
        if (Array.isArray(allPosts)) {
          const related = allPosts
            .filter((p: BlogPost) => 
              p.category_name === data.category_name && p.slug !== data.slug
            )
            .slice(0, 3);
          setRelatedPosts(related);
        }

      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  // --- HELPER: Read Time ---
  const calculateReadTime = (content: string) => {
    if (!content) return "1 min read";
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
  };

  // --- HELPER: Get Image ---
  const getImageUrl = (p: BlogPost) => {
    const baseUrl = "https://api.clickplick.co.uk";
    if (p.image) return p.image.startsWith('http') ? p.image : `${baseUrl}${p.image}`;
    if (p.link) return p.link.startsWith('http') ? p.link : `${baseUrl}${p.link}`;
    return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop";
  };

  const getTags = (tagString?: string) => {
    if (!tagString) return [];
    return tagString.split(',').map(t => t.trim());
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you are looking for doesn't exist.</p>
            <button onClick={() => navigate('/blog')} className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- SEO IMAGE URL ---
  const seoImage = getImageUrl(post);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* --- DYNAMIC SEO TAGS --- */}
      <Helmet>
        {/* Standard Metadata */}
        <title>{post.title} | ClickPlick Blog</title>
        <meta name="description" content={post.short_content || "Read this article on ClickPlick."} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.short_content} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.short_content} />
        <meta name="twitter:image" content={seoImage} />
      </Helmet>

      <Header />
      <main className="flex-grow">
        <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-secondary/30 relative">
           <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
          <div className="section-container max-w-4xl mx-auto relative z-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-sm">
                  {post.category_name || "General"}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-muted-foreground text-sm md:text-base pt-2">
                <span className="flex items-center gap-2 font-medium text-foreground/80">
                  <User className="w-5 h-5 text-accent" />
                  {post.author || "ClickPlick Team"}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(post.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {calculateReadTime(post.content)}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 relative z-20 -mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-muted">
              <img 
                src={getImageUrl(post)} 
                alt={post.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/1200x600?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-container max-w-3xl mx-auto">
            <article>
              {post.short_content && (
                <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-6 py-2 italic font-heading">
                  {post.short_content}
                </p>
              )}

              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-ul:my-6 prose-li:my-2 prose-li:text-muted-foreground
                  prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag className="w-4 h-4 text-accent mb-1 mr-2" />
                  {getTags(post.tag).length > 0 ? (
                    getTags(post.tag).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">No tags</span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share Article
                  </span>
                  <div className="flex gap-3">
                    {/* Updated Share Links for Real Sharing */}
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="py-20 bg-secondary/20 border-t border-border">
            <div className="section-container">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">
                More from <span className="text-accent">{post.category_name}</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    key={relatedPost.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border card-hover flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={getImageUrl(relatedPost)}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                        {relatedPost.short_content}
                      </p>
                      <div className="mt-auto">
                         <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;