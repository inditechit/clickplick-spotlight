import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top whenever the path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: use "smooth" if you prefer a scrolling animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;