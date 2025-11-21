// components/HomeHero.tsx
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Le luxe à la croisée
          <br />
          de l’Afrique et de l’Occident
        </h1>
        <p className="subtitle">
          Une maison de mode qui fusionne élégance occidentale, héritages africains
          et textile bio d’exception.
        </p>
        <div className="hero-buttons">
          <Link href="/collections" className="btn btn-primary">
            Découvrir les créations
          </Link>
          <Link href="/textile-bio-africain" className="btn btn-ghost">
            Explorer le textile bio
          </Link>
        </div>
      </div>
      <div className="hero-figure">
        <Link href="/collections" className="hero-placeholder">
          <img
            className="img-cover"
            src="https://source.unsplash.com/featured/600x800/?fashion,runway"
            alt="Silhouette mode luxe"
          />
        </Link>
      </div>
    </section>
  );
}

