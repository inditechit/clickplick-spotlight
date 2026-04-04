import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // <--- 1. Import this

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import HirePhotobooth from "./pages/HirePhotobooth";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";     // The listing page
import BlogPost from "./pages/BlogPost"; // The detail page
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

// Individual booth pages
import LcdSlimlinePod from "./pages/booths/LcdSlimlinePod";
import MagicMirror from "./pages/booths/MagicMirror";
import RetroBox from "./pages/booths/RetroBox";
import EnchantedMirror from "./pages/booths/EnchantedMirror";
import InflatableBooth from "./pages/booths/InflatableBooth";
import WoodenTripod from "./pages/booths/WoodenTripod";
import ScrollToTop from "./components/ScrollToTop";
import AudioGuestBook from './pages/AudioGuestBook';
import ThankYou from "./pages/Thankyou";
import AIBooth from "./pages/booths/Aibooth";
import { CorporatePage } from "./pages/booths/CoporatePhotoBooths";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* 2. Wrap everything with HelmetProvider for SEO */}
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/contact.php" element={<Contact />} />

            {/* Booth Routes */}
            <Route path="/hire-photobooth" element={<HirePhotobooth />} />
            <Route path="/hire-photobooth/lcd-slimline-pod" element={<LcdSlimlinePod />} />
            <Route path="/hire-photobooth/magic-mirror" element={<MagicMirror />} />
            <Route path="/hire-photobooth/AI-Photobooth" element={<AIBooth />} />
            <Route path="/hire-photobooth/Corporate-Photobooth" element={<CorporatePage />} />
            <Route path="/hire-photobooth/retro-box" element={<RetroBox />} />
            <Route path="/hire-photobooth/enchanted-mirror" element={<EnchantedMirror />} />
            <Route path="/hire-photobooth/inflatable-booth" element={<InflatableBooth />} />
            <Route path="/hire-photobooth/wooden-tripod" element={<WoodenTripod />} />
            <Route path="/audio-guest-book" element={<AudioGuestBook />} />

            <Route path="/the-lcd-screen-slimline-pod.php" element={<LcdSlimlinePod />} />
            <Route path="/the-magic-mirror.php" element={<MagicMirror />} />
            <Route path="/the-retro-box.php" element={<RetroBox />} />
            <Route path="/the-enchanted-mirror-x-selfie.php" element={<EnchantedMirror />} />
            <Route path="/the-inflatable-enclosed-photobooth.php" element={<InflatableBooth />} />
            <Route path="/the-wooden-vintage-tripod.php" element={<WoodenTripod />} />

            <Route path="/service1.php" element={<LcdSlimlinePod />} />
            <Route path="/service2.php" element={<MagicMirror />} />
            <Route path="/service3.php" element={<RetroBox />} />
            <Route path="/service4.php" element={<EnchantedMirror />} />
            <Route path="/thankyou.php" element={<ThankYou />} />
            <Route path="/thankyou" element={<ThankYou />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/events" element={<Events />} />
            
            {/* Blog Routes - Fixed Conflict */}
            <Route path="/blog" element={<Blog />} />          {/* Listing Page */}
            <Route path="/:slug" element={<BlogPost />} /> {/* Detail Page */}

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;