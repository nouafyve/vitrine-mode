// app/page.tsx
import Link from "next/link";
import HomeHero from "@/components/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="about reveal-on-scroll">
        <Link href="/a-propos" className="about-visual">
          <img
            className="img-cover"
            src="https://source.unsplash.com/featured/600x800/?fashion,portrait"
            alt="Portrait de créatrice"
          />
        </Link>
        <div className="about-text">
          <h2 className="section-title">À propos</h2>
          <p>
            Styliste-modéliste, je crée des pièces uniques qui font dialoguer
            les codes du luxe contemporain et la richesse des cultures africaines,
            avec une attention particulière portée aux textiles bio et responsables.
          </p>
          <Link href="/a-propos" className="btn btn-ghost">
            Découvrir mon univers
          </Link>
        </div>
      </section>

      <section className="collections reveal-on-scroll">
        <h2 className="section-title">Collections</h2>
        <div className="collection-grid">
          <article className="collection-card">
            <Link href="/collections" className="collection-image">
              <img
                src="https://source.unsplash.com/featured/600x900/?african,fashion"
                alt="Élégance à l’africaine"
              />
            </Link>
            <Link href="/collections" className="collection-name">
              Élégance à l’africaine
            </Link>
          </article>

          <article className="collection-card">
            <Link href="/collections" className="collection-image">
              <img
                src="https://source.unsplash.com/featured/600x900/?wedding,dress"
                alt="Robe de mariée"
              />
            </Link>
            <Link href="/collections" className="collection-name">
              Robe de mariée
            </Link>
          </article>

          <article className="collection-card">
            <Link href="/collections" className="collection-image">
              <img
                src="https://source.unsplash.com/featured/600x900/?fashion,editorial"
                alt="Osons, posons"
              />
            </Link>
            <Link href="/collections" className="collection-name">
              Osons, posons
            </Link>
          </article>
        </div>
        <Link href="/collections" className="btn btn-ghost btn-line">
          Voir toutes les collections
        </Link>
      </section>

      <section className="textile-bio reveal-on-scroll">
        <div className="textile-inner">
          <div className="textile-text">
            <h2>Un textile bio africain d’exception</h2>
            <p>
              Au cœur de mes créations se trouve un textile bio issu de terres
              africaines, cultivé et transformé dans le respect de la nature
              et des communautés. Une matière noble, éthique et profondément
              contemporaine.
            </p>
            <Link href="/textile-bio-africain" className="btn btn-gold">
              Découvrir la matière
            </Link>
          </div>
          <Link href="/textile-bio-africain" className="textile-image">
            <img
              className="img-cover"
              src="https://source.unsplash.com/featured/800x600/?african,fabric"
              alt="Textile africain bio"
            />
          </Link>
        </div>
      </section>

      <section className="bespoke reveal-on-scroll">
        <Link href="/sur-mesure" className="bespoke-visual">
          <img
            className="img-cover"
            src="https://source.unsplash.com/featured/700x500/?tailor,atelier"
            alt="Atelier de couture sur mesure"
          />
        </Link>
        <div>
          <h2>Sur mesure & collaborations</h2>
          <p>
            De la première rencontre aux dernières finitions, chaque création
            sur mesure est une expérience intime, pensée pour sublimer votre
            silhouette et raconter votre histoire.
          </p>
          <Link href="/sur-mesure" className="btn btn-ghost">
            En savoir plus
          </Link>
        </div>
      </section>

      <section className="blog-strip reveal-on-scroll">
        <h2>Blog & inspirations</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-soft)" }}>
          Tendances, coulisses d’atelier, focus sur les textiles africains,
          réflexions sur un luxe responsable : entrez dans les coulisses de
          la maison.
        </p>
        <Link href="/blog" className="btn btn-ghost">
          Lire les articles
        </Link>
      </section>
    </>
  );
}

