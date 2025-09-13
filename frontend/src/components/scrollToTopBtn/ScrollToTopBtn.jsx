import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import "./ScrollToTopBtn.css";

export const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setProgress(scrolled);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <div
          className="scroll-top-fill"
          style={{ height: `${progress}%` }}
        ></div>
        <FaArrowUp className="scroll-top-icon" />
      </button>
    )
  );
};