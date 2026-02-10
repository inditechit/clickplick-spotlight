import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const InstagramFeed = ({ 
  title = 'Follow Us on Instagram', 
  handle = '@clickplickphoto',
  profileUrl = 'https://www.instagram.com/clickplickphoto',
  embedUrl = 'https://www.instagram.com/clickplickphoto/embed',
  businessId = '9F1CK_' // Add business ID as prop
}) => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <div className="p-3 bg-background rounded-full shadow-md border border-border/50">
            <Instagram className="w-8 h-8 text-pink-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            {title}
          </h2>
          
          <a 
            href={profileUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg text-muted-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 group"
          >
            {handle}
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>

        {/* Feed Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden relative">
            <div className="relative w-full" style={{ height: '500px' }}>
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title="Instagram Feed"
                style={{ border: 'none' }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/95 via-background/50 to-transparent pointer-events-none" />
          </div>

          {/* CTA Buttons - Both buttons side by side on desktop, stacked on mobile */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* View Full Feed Button */}
            <a 
              href={profileUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex-1 sm:flex-none max-w-xs justify-center"
            >
              <Instagram className="w-5 h-5" />
              View Full Feed
            </a>

            {/* Instagram Business Chat Button */}
            <a 
              href={`https://www.instagram.com/business_chats?business_id=${businessId}&utm_source=ig_embed&utm_campaign=business_chat`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 flex-1 sm:flex-none max-w-xs h-11 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#0095F6',
                borderRadius: '8px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontSize: '16px',
                lineHeight: '44px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                padding: '0 20px',
                height: '44px'
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
                  fill="white"
                />
              </svg>
              <span>Message on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
