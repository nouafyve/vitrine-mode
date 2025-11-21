// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/collections", label: "Collections" },
  { href: "/sur-mesure", label: "Sur mesure" },
  { href: "/textile-bio-africain", label: "Textile bio africain" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // fermer le menu quand on change de page
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("is-menu-open");
    } else {
      document.body.classList.remove("is-menu-open");
    }
  }, [menuOpen]);

  return (
    <header>
      <div className="logo-burger">
        <Link href="/" className="logo-mark">
          M
        </Link>
        <Link href="/" className="logo-name">
          MARQUE
        </Link>
      </div>

      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "active" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-right">
        <a href="#" className="search-icon" aria-label="Recherche" />
        <button
          className="burger-btn"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

