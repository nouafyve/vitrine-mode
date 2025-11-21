// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationsRoot from "@/components/AnimationsRoot";

export const metadata: Metadata = {
  title: "Marque – Mode luxe Afrique x Occident",
  description: "Maison de mode alliant luxe, Afrique, Occident et textile bio africain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="page">
          <Header />
          {/* Composant client qui gère animations + parallax */}
          <AnimationsRoot />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
