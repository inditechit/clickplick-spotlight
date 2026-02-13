import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Who we are', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  { name: 'Careers', href: 'https://orig.clickplick.co.uk/careers.php' },
  { name: 'Blog', href: '/blog' },
];

const boothLinks = [
  { name: 'The LCD Screen', href: '/hire-photobooth/lcd-slimline-pod' },
  { name: 'Slimline Pod', href: '/hire-photobooth/slimline-pod' },
  { name: 'The Magic Mirror', href: '/hire-photobooth/magic-mirror' },
  { name: 'The Retro Box', href: '/hire-photobooth/retro-box' },
  { name: 'The Enchanted', href: '/hire-photobooth/enchanted-mirror' },
  { name: 'Mirror X Selfie', href: '/hire-photobooth/mirror-x' },
  { name: 'The Wooden Vintage', href: '/hire-photobooth/wooden-tripod' },
  { name: 'Tripod', href: '/hire-photobooth/tripod' },
];

const customerLinks = [
  { name: 'Client support', href: 'https://api.whatsapp.com/send?phone=447931983588&text=hii.' },
  { name: 'Terms and conditions', href: '/terms-and-conditions' },
  { name: 'Privacy and Policy', href: '/privacy-policy' },
];

const locations = [
  "Cambridge", "Oxford", "Guildford", "Milton Keynes", "Slough",
  "Peterborough", "Reading", "Northampton", "Leicester", "Hertfordshire",
  "Barnet", "Birmingham", "Buckinghamshire", "Nottingham", "London"
];

export function Footer() {
  return (
    
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand, Address Box, Contact & Socials */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">CP</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                ClickPlick
              </span>
            </Link>

            {/* Blue Location Box */}
            <div className="bg-[#0ea5e9] rounded-lg p-4 text-white shadow-lg max-w-[280px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-white/90" />
                <p className="text-sm font-medium leading-relaxed">
                  Location: Syon Gardens,<br />
                  Newport Pagnell, Milton Keynes
                </p>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:+447931983588" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +44 7931-983-588
              </a>
              <a href="mailto:info@clickplick.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@clickplick.co.uk
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    {link.name === 'Who we are' && (
                      <span className="px-1.5 py-0.5 bg-slate-800 text-[10px] font-bold rounded-full text-white border border-slate-700">HOT</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Photobooths */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-sm">Photobooths</h4>
            <ul className="space-y-3">
              {boothLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm uppercase transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Customer</h4>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Locations We Serve */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Locations We Serve</h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc}>
                  {/* Using 'a' tag here since .php usually implies a specific server-side page/SEO link */}
                  <a 
                    href={`https://orig.clickplick.co.uk/photo-booth-hire-in-${loc.toLowerCase().replace(' ', '-')}.php`} 
                    className="text-white/60 hover:text-white text-sm transition-colors block"
                  >
                    {loc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 text-center">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} ClickPlick
          </p>
        </div>
      </div>
    </footer>
  );
}