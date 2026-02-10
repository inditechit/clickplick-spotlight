import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Hire Photobooth', href: '/hire-photobooth' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

const boothLinks = [
  { name: 'LCD Screen Slimline Pod', href: '/hire-photobooth/lcd-slimline-pod' },
  { name: 'Magic Mirror', href: '/hire-photobooth/magic-mirror' },
  { name: 'Retro Box', href: '/hire-photobooth/retro-box' },
  { name: 'Enchanted Mirror X Selfie', href: '/hire-photobooth/enchanted-mirror' },
  { name: 'Inflatable Enclosed Booth', href: '/hire-photobooth/inflatable-booth' },
  { name: 'Wooden Vintage Tripod', href: '/hire-photobooth/wooden-tripod' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">CP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  ClickPlick
                </span>
                <span className="text-xs font-medium -mt-1 text-white/70">
                  UK Photo Booths
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium photo booth hire for weddings, parties, and corporate events across the UK. 
              Creating unforgettable memories.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Booths */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Booths</h4>
            <ul className="space-y-3">
              {boothLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+447123456789" className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>+44 7931-983-588</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@clickplick.co.uk" className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>info@clickplick.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>Syon Gardrens, Newport Pagnell, Milton Keynes</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ClickPlick UK. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/60 text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
