// components/AnimationsRoot.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationsRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (revealEls.length === 0) return;

    const isHomePage = pathname === "/";

    if (isHomePage) {
      // INDEX : animation qui se rejoue à chaque scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0.18 }
      );
      revealEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // AUTRES PAGES : animation une seule fois
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );
      revealEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, [pathname]);

  // Parallax sur la home uniquement
  useEffect(() => {
    if (pathname !== "/") return;

    const heroImg = document.querySelector<HTMLElement>(".hero-placeholder");
    if (!heroImg) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const offset = scrolled * 0.08;
      heroImg.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

