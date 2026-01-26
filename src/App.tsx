import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import HirePhotobooth from "./pages/HirePhotobooth";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/hire-photobooth" element={<HirePhotobooth />} />
          <Route path="/hire-photobooth/lcd-slimline-pod" element={<LcdSlimlinePod />} />
          <Route path="/hire-photobooth/magic-mirror" element={<MagicMirror />} />
          <Route path="/hire-photobooth/retro-box" element={<RetroBox />} />
          <Route path="/hire-photobooth/enchanted-mirror" element={<EnchantedMirror />} />
          <Route path="/hire-photobooth/inflatable-booth" element={<InflatableBooth />} />
          <Route path="/hire-photobooth/wooden-tripod" element={<WoodenTripod />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
