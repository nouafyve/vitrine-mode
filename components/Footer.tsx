// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="#">Mentions légales</Link>
      <div className="footer-icons">
        <a href="#" className="footer-icon" />
        <a href="#" className="footer-icon" />
        <a href="#" className="footer-icon" />
      </div>
    </footer>
  );
}

