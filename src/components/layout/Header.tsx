import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Hire Photobooth',
    href: '/hire-photobooth',
    children: [
      { name: 'LCD Screen Slimline Pod', href: '/hire-photobooth/lcd-slimline-pod' },
      { name: 'Magic Mirror', href: '/hire-photobooth/magic-mirror' },
      { name: 'Retro Box', href: '/hire-photobooth/retro-box' },
      { name: 'Enchanted Mirror X Selfie', href: '/hire-photobooth/enchanted-mirror' },
      { name: 'Inflatable Enclosed Booth', href: '/hire-photobooth/inflatable-booth' },
      { name: 'Wooden Vintage Tripod', href: '/hire-photobooth/wooden-tripod' },
    ],
  },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-soft',
        isScrolled ? 'py-3' : 'py-4'
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex justify-center items-baseline gap-2 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              {/* <span className="text-white font-heading font-bold text-xl">CP</span> */}
              <img src="/main/logo1.png" alt="icon logo" width={120}/>
            </div>
            <div className="flex flex-col">
              <img src="/main/logo2.png" alt="text logo" width={120}/>
              {/* <span className="font-heading font-bold text-xl tracking-tight text-primary">
                ClickPlick
              </span>
              <span className="text-xs font-medium -mt-1 text-muted-foreground">
                UK Photo Booths
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all text-foreground hover:text-primary hover:bg-primary/10"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                      )}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="bg-white rounded-xl shadow-elevated p-2 min-w-[250px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+447123456789" className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>07123 456789</span>
            </a>
            <Button variant="accent" asChild>
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-foreground hover:text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-elevated p-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-200",
                      openDropdown === item.name ? "max-h-96" : "max-h-0"
                    )}>
                      <div className="pl-4 space-y-1 pt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 rounded-lg text-muted-foreground hover:text-accent transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-accent/10 hover:text-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:+447123456789" className="flex items-center gap-2 px-4 py-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span>07123 456789</span>
              </a>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/book-now">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
