
import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Animated section that fades in/up on scroll
 */
const Section = ({
  children,
  className = "",
  threshold = 0.3,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 56 });
    const onEnter = () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out"
      });
    };
    // viewport observer
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onEnter();
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default Section;
