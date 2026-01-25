import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'top-10-photo-booth-poses',
    title: 'Top 10 Photo Booth Poses Your Guests Will Love',
    excerpt: 'Get your guests striking the perfect poses with these fun and creative photo booth ideas that are guaranteed to create memorable shots.',
    image: 'https://images.unsplash.com/photo-1529543544277-750e-58e8f5fd808c?q=80&w=800&auto=format&fit=crop',
    category: 'Tips & Ideas',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    slug: 'wedding-photo-booth-guide',
    title: 'The Complete Guide to Wedding Photo Booths',
    excerpt: 'Everything you need to know about adding a photo booth to your wedding day, from choosing the right booth to creating the perfect setup.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    category: 'Weddings',
    date: '2024-01-10',
    readTime: '8 min read',
  },
  {
    slug: 'corporate-events-photo-booth-benefits',
    title: 'Why Every Corporate Event Needs a Photo Booth',
    excerpt: 'Discover how photo booths can boost engagement, create brand awareness, and make your corporate event unforgettable.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    category: 'Corporate',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    slug: 'photo-booth-props-ideas',
    title: '50 Creative Photo Booth Props Ideas for 2024',
    excerpt: 'Looking for prop inspiration? Check out our curated list of the most fun and on-trend photo booth props for your next event.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
    category: 'Tips & Ideas',
    date: '2024-01-01',
    readTime: '7 min read',
  },
  {
    slug: 'magic-mirror-vs-traditional-booth',
    title: 'Magic Mirror vs Traditional Booth: Which is Right for You?',
    excerpt: 'A detailed comparison to help you choose between our popular Magic Mirror and traditional enclosed photo booths.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop',
    category: 'Guides',
    date: '2023-12-20',
    readTime: '5 min read',
  },
  {
    slug: 'birthday-party-photo-booth-themes',
    title: 'Amazing Birthday Party Photo Booth Theme Ideas',
    excerpt: 'Make your birthday celebration extra special with these creative theme ideas for your photo booth setup.',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=800&auto=format&fit=crop',
    category: 'Parties',
    date: '2023-12-15',
    readTime: '4 min read',
  },
];

const categories = ['All', 'Weddings', 'Corporate', 'Parties', 'Tips & Ideas', 'Guides'];

const Blog = () => {
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
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    category === 'All'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
