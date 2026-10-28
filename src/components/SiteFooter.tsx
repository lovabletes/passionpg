import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { contactNumbers } from "@/data/contacts";


const footerStyles: Record<string, CSSProperties> = {
  footer: { background: "#f4f8f5", borderTop: "1px solid #dce8df", padding: "44px max(24px, 5vw) 32px", color: "#53665e" },
  inner: { maxWidth: 1200, margin: "0 auto" },
  grid: { display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" },
  brandColumn: { flex: "1 1 260px" },
  brand: { display: "inline-flex", alignItems: "center", gap: 12, color: "#059669", fontSize: 25, fontWeight: 800, textDecoration: "none" },
  logo: { width: 52, height: 52, objectFit: "contain" },
  description: { maxWidth: 300, margin: "14px 0", fontSize: 14, lineHeight: 1.8 },
  location: { fontSize: 12, color: "#698276" },
  explore: { display: "flex", flexDirection: "column", gap: 14, flex: "0 1 140px", paddingTop: 8 },
  heading: { color: "#183e2e", fontSize: 15, fontWeight: 750, margin: "0 0 5px" },
  link: { color: "#53665e", textDecoration: "none", fontSize: 14 },
  contact: { flex: "1 1 280px", padding: 22, border: "1px solid #dcebe3", borderRadius: 18, background: "#eaf3ed" },
  contactText: { fontSize: 13, lineHeight: 1.7, margin: "8px 0 16px", maxWidth: 300 },
  numbers: { display: "flex", flexWrap: "wrap", gap: 10 },
  phone: { display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #cce1d4", background: "white", padding: "10px 12px", borderRadius: 10, color: "#047857", fontSize: 13, fontWeight: 700, textDecoration: "none" },
  bottom: { borderTop: "1px solid #dfe9e3", marginTop: 32, paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#718279" },
};

export default function SiteFooter() {
  return (
    <footer id="contact" style={footerStyles.footer}>
      <div style={footerStyles.inner}>
        <div style={footerStyles.grid}>
          <div style={footerStyles.brandColumn}>
            <Link href="/" style={footerStyles.brand}>
              <Image src="/PassionPg.png" alt="" width={52} height={52} style={footerStyles.logo} />
              <span>PassionPG</span>
            </Link>
            <p style={footerStyles.description}>A place to study, settle in, and feel at home. Find your PG in Greater Noida.</p>
            <span style={footerStyles.location}>Greater Noida, Uttar Pradesh</span>
          </div>
          <nav aria-label="Footer navigation" style={footerStyles.explore}>
            <h3 style={footerStyles.heading}>Explore</h3>
            <Link style={footerStyles.link} href="/#listings">Browse PGs</Link>
            <Link style={footerStyles.link} href="/#features">Amenities</Link>
            <Link style={footerStyles.link} href="/#testimonials">Reviews</Link>
          </nav>
          <div style={footerStyles.contact}>
            <h3 style={footerStyles.heading}>Let’s find your space</h3>
            <p style={footerStyles.contactText}>Bookings, property listings, or a quick question — talk to our team.</p>
            <div style={footerStyles.numbers}>
              {contactNumbers.map((number) => (
                <a style={footerStyles.phone} key={number} href={`tel:+91${number}`} aria-label={`Call ${number}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.57 2.79.69A2 2 0 0 1 22 16.92Z" /></svg>
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={footerStyles.bottom}>
          <span>© 2026 PassionPG. All rights reserved.</span>
          <span>Student living. Made personal.</span>
        </div>
      </div>
    </footer>
  );
}
