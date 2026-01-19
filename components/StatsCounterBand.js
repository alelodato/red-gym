"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1200;
        const step = Math.max(1, Math.floor(to / (duration / 16)));

        const interval = setInterval(() => {
          start += step;
          if (start >= to) {
            setValue(to);
            clearInterval(interval);
          } else {
            setValue(start);
          }
        }, 16);

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function StatsCounterBand() {
  const topClip = "[clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]";
  const bottomClip = "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/diagonal1.jpg"
          alt="Red Gym"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* TAGLIO DIAGONALE SUPERIORE */}
      <div
        className={[
          "absolute -top-1 left-0 right-0 bg-brand-red",
          "h-16 sm:h-20 lg:h-24",
          topClip,
        ].join(" ")}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "min-h-[240px] sm:min-h-[260px] lg:min-h-[300px]",
            "py-20 sm:py-24 lg:py-28",
            "flex items-center",
          ].join(" ")}
        >
          {/* PANNELLO GLASS */}
          <div
            className={[
              "w-full",
              "rounded-2xl",
              "bg-black/25 backdrop-blur-sm",
              "border border-white/15",
              "shadow-soft",
              "px-5 py-8 sm:px-8 sm:py-10 lg:px-10",
            ].join(" ")}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 text-white text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-heading leading-none">
                  <Counter to={1800} />
                  <span className="text-xl sm:text-2xl ml-1">mq</span>
                </p>
                <p className="mt-2 text-sm sm:text-[15px] opacity-90">
                  Struttura
                </p>
              </div>

              <div>
                <p className="text-4xl sm:text-5xl font-heading leading-none">
                  <Counter to={25} suffix="+" />
                </p>
                <p className="mt-2 text-sm sm:text-[15px] opacity-90">Corsi</p>
              </div>

              <div>
                <p className="text-4xl sm:text-5xl font-heading leading-none">
                  <Counter to={20} suffix="+" />
                </p>
                <p className="mt-2 text-sm sm:text-[15px] opacity-90">
                  Istruttori
                </p>
              </div>

              <div>
                <p className="text-4xl sm:text-5xl font-heading leading-none">
                  <Counter to={4} />
                </p>
                <p className="mt-2 text-sm sm:text-[15px] opacity-90">Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAGLIO DIAGONALE INFERIORE */}
      <div
        className={[
          "absolute -bottom-1 left-0 right-0 bg-brand-red",
          "h-16 sm:h-20 lg:h-24",
          bottomClip,
        ].join(" ")}
      />
    </section>
  );
}