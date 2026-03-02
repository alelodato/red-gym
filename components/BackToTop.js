"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna su"
      className="
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        bg-brand-red text-white
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-brand-red/90 hover:-translate-y-1
        active:translate-y-0
      "
    >
      {/* Chevron */}
      <span
        className="
          block h-3 w-3
          border-t-2 border-l-2 border-white
          rotate-45
          translate-y-[2px]
        "
      />
    </button>
  );
}