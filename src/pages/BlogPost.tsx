import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  Tag
} from 'lucide-react';

// --- MOCK DATA ---
// In a real app, you would fetch this data based on the slug param.
// I've expanded the data slightly to include 'content', 'author', and 'tags' for the detail view.
const allPostsData = [
  {
    slug: 'top-10-photo-booth-poses',
    title: 'Top 10 Photo Booth Poses Your Guests Will Love',
    excerpt: 'Get your guests striking the perfect poses with these fun and creative photo booth ideas that are guaranteed to create memorable shots.',
    // Using HTML string to simulate rich text content from a CMS
    content: `
      <p>Photo booths are the highlight of any event, but sometimes guests freeze up when the countdown begins. To ensure everyone leaves with a keepsake they love, we've compiled the ultimate list of poses that are guaranteed to get genuine smiles and laughs.</p>
      
      <h2>1. The Classic "Charlie's Angels"</h2>
      <p>Back to back, imaginary guns drawn toward the ceiling. It’s a classic for a reason. It gets people interacting immediately and always results in a fierce, dynamic photo. It works best with groups of three, but any number can join in.</p>
      
      <h2>2. The "Surprise" Face</h2>
      <p>On the count of three, everyone looks at the camera with their most shocked expression. Wide eyes, open mouths, hands on cheeks—the more dramatic, the better. The key here is commitment; if one person hesitates, the effect is lost!</p>
      
      <h2>3. The Prom Pose</h2>
      <p>Perfect for couples or best friends. Stand slightly turned toward each other, one hand on the waist or shoulder, smiling nicely at the camera. It’s cheesy, nostalgic, and ironically cool again.</p>
      
      <h2>4. Use the Props Interactively</h2>
      <p>Don't just hold the props next to your face. Put on the oversized glasses, wear the hats, and interact with each other using them. Have a sword fight with foam noodles or hide behind a mustache stick.</p>

      <p>Remember, the best photos happen when people stop overthinking it and just have fun. Encourage your guests to mix and match these poses for their photo strips!</p>
    `,
    image: 'https://images.unsplash.com/photo-1529543544277-750e-58e8f5fd808c?q=80&w=800&auto=format&fit=crop',
    category: 'Tips & Ideas',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Sarah Jenkins',
    tags: ['Events', 'Photography Tips', 'Fun Ideas']
  },
  {
    slug: 'wedding-photo-booth-guide',
    title: 'The Complete Guide to Wedding Photo Booths',
    excerpt: 'Everything you need to know about adding a photo booth to your wedding day, from choosing the right booth to creating the perfect setup.',
    content: '<p>Weddings are about capturing memories, and nothing does that quite like a photo booth...</p>', // Simplified for brevity
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    category: 'Weddings',
    date: '2024-01-10',
    readTime: '8 min read',
    author: 'Michael Ross',
    tags: ['Wedding Planning', 'Reception Ideas']
  },
  {
    slug: 'corporate-events-photo-booth-benefits',
    title: 'Why Every Corporate Event Needs a Photo Booth',
    excerpt: 'Discover how photo booths can boost engagement, create brand awareness, and make your corporate event unforgettable.',
    content: '<p>Corporate events can sometimes feel stiff. A photo booth is the perfect icebreaker...</p>',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    category: 'Corporate',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Jessica Lee',
    tags: ['Branding', 'Corporate Events', 'Engagement']
  },
  // Add a few more for related posts to work
  {
    slug: 'photo-booth-props-ideas',
    title: '50 Creative Photo Booth Props Ideas for 2024',
    excerpt: 'Looking for prop inspiration? Check out our curated list of the most fun and on-trend photo booth props for your next event.',
    content: '<p>Props make the booth. Here are the best ideas for this year...</p>',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    category: 'Tips & Ideas',
    date: '2024-01-01',
    readTime: '7 min read',
    author: 'Sarah Jenkins',
    tags: ['Props', 'DIY', 'Party Planning']
  },
];


const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API Fetching behavior
    setIsLoading(true);
    window.scrollTo(0, 0); // Reset scroll to top on url change
    
    setTimeout(() => {
      const foundPost = allPostsData.find(p => p.slug === slug);
      setPost(foundPost || null);

      if (foundPost) {
        // Find related posts in the same category, excluding current one
        const related = allPostsData
          .filter(p => p.category === foundPost.category && p.slug !== foundPost.slug)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setIsLoading(false);
    }, 300); // Slight delay to simulate load
    
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-secondary rounded mb-4"></div>
          <div className="h-4 w-48 bg-secondary/60 rounded"></div>
        </div>
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* --- Header Section (Text over background, not image) --- */}
        {/* Using bg-secondary/30 creates a subtle contrast header area within theme */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-secondary/30">
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
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                {post.title}
              </h1>

              {/* Metadata Items */}
              <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-muted-foreground text-sm md:text-base pt-2">
                <span className="flex items-center gap-2 font-medium text-foreground/80">
                  <User className="w-5 h-5 text-accent" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Featured Image Section --- */}
        {/* Overlaps the header section slightly for a modern look */}
        <section className="px-4 relative z-20 -mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- Article Content Section --- */}
        <section className="py-16 md:py-24">
          <div className="section-container max-w-3xl mx-auto">
            <article>
              {/* Lead Excerpt */}
              <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-6 py-2 italic font-heading">
                {post.excerpt}
              </p>

              {/* Main Content Body using Tailwind Typography plugin ('prose') 
                This automatically styles raw HTML content.
                We customize the theme colors to match our design.
              */}
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

              {/* Article Footer (Tags & Share) */}
              <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag className="w-4 h-4 text-accent mb-1 mr-2" />
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share Article
                  </span>
                  <div className="flex gap-3">
                    {/* Social buttons - using hover colors aligned with theme */}
                    <button aria-label="Share on Facebook" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button aria-label="Share on Twitter" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button aria-label="Share on LinkedIn" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </section>

        {/* --- Related Posts Section --- */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-secondary/20 border-t border-border">
            <div className="section-container">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">
                More from <span className="text-accent">{post.category}</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    key={relatedPost.slug}
                    className="group bg-card rounded-2xl overflow-hidden border border-border card-hover flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
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