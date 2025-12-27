'use client';

import * as React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  yOffsetPx?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  durationMs = 600,
  yOffsetPx = 24,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={
        `${className ?? ""} transition-all will-change-transform will-change-opacity ` +
        (isVisible ? "opacity-100 translate-y-0" : "opacity-0")
      }
      style={{
        transform: isVisible ? "translateY(0px)" : `translateY(${yOffsetPx}px)`,
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
