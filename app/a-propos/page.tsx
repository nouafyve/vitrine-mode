// app/a-propos/page.tsx
import Link from "next/link";

export default function AProposPage() {
  return (
    <>
      <section className="about reveal-on-scroll">
        <Link href="/collections" className="about-visual">
          <img
            className="img-cover"
            src="https://source.unsplash.com/featured/600x800/?fashion,studio"
            alt="Studio de création"
          />
        </Link>
        <div className="about-text">
          <h2 className="section-title">Mon histoire</h2>
          <p>
            Formée en stylisme-modélisme et en management du luxe, je construis
            une maison de mode qui puise à la fois dans l’élégance des lignes
            occidentales et dans la force des héritages africains.
          </p>
          <p>
            Mon travail est centré sur le sur-mesure, l’écoute du corps et de
            l’identité de chaque personne, ainsi que sur l’usage de textiles
            bio issus d’Afrique, pour créer un luxe conscient et porteur de sens.
          </p>
          <Link href="/textile-bio-africain" className="btn btn-ghost">
            En savoir plus sur le textile bio africain
          </Link>
        </div>
      </section>
    </>
  );
}

