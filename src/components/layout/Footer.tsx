import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

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
    <footer className="bg-primary text-primary-foreground relative">
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

      {/* Bottom Copyright & Payment Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} ClickPlick
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-sm mr-2 hidden sm:inline-block">Secure payments by</span>
            
            {/* Apple Pay Badge */}
            <div className="bg-white px-3 py-1.5 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-black font-bold text-xs tracking-tighter"> Pay</span>
            </div>
            
            {/* Klarna Badge */}
            <div className="bg-[#FFB3C7] px-3 py-1.5 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-black font-bold text-xs">Klarna.</span>
            </div>
            
            {/* Credit Card Badge */}
            <div className="bg-slate-800 px-3 py-1.5 rounded-md flex items-center justify-center gap-1.5 border border-slate-700 shadow-sm">
              <CreditCard className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-xs">Card</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp CTA */}
      <a
        href="https://api.whatsapp.com/send?phone=447931983588&text=Hi! I'm interested in hiring a photobooth."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20b858] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-semibold py-2 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Need help? Chat with us!
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </span>
      </a>
    </footer>
  );
}