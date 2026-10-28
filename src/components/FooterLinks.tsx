import Link from "next/link";
import { contactNumbers } from "@/data/contacts";

export default function FooterLinks() {
  return (
    <nav aria-label="Footer navigation">
      <h4 className="mb-4 font-extrabold text-slate-900">Explore</h4>
      <ul className="flex flex-col gap-3">
        {[
          { label: "Browse PGs", href: "/#listings" },
          { label: "Amenities", href: "/#features" },
          { label: "Reviews", href: "/#testimonials" },
        ].map((link) => (
          <li key={link.href}><Link href={link.href} className="footer-link">{link.label}</Link></li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-slate-500">
        To list your PG or contact the owner desk, call{" "}
        <a href={`tel:+91${contactNumbers[0]}`} className="footer-link">{contactNumbers[0]}</a>
        {" or "}
        <a href={`tel:+91${contactNumbers[1]}`} className="footer-link">{contactNumbers[1]}</a>.
      </p>
    </nav>
  );
}
