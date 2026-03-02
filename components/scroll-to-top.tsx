"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-16 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.65_0.06_55)] text-white shadow-lg transition-all duration-300 hover:bg-[oklch(0.55_0.06_55)] active:scale-90 cursor-pointer md:right-5 md:h-11 md:w-11 xl:bottom-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}
