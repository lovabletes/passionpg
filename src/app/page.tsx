import { residencyImages } from "@/data/residency-images";
import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import SiteFooter from "@/components/SiteFooter";
import OwnerDeskActions from "@/components/OwnerDeskActions";
import ListYourPG from "@/components/ListYourPG";

// ─── Data ───────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Browse PGs", href: "#listings" },
  { label: "Amenities", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];


const features = [
  {
    icon: "🛡️",
    title: "Verified Properties",
    desc: "Every PG and hostel is physically verified by our team before listing.",
  },
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Book your room in minutes. No lengthy paperwork or broker fees.",
  },
  {
    icon: "🍽️",
    title: "Meals Included",
    desc: "Choose PGs with fresh home-cooked meals, tiffin services, or self-cooking.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    desc: "24/7 CCTV surveillance, biometric access, and dedicated security guards.",
  },
  {
    icon: "📶",
    title: "High-Speed Wi-Fi",
    desc: "Stay connected with ultra-fast broadband and power backup included.",
  },
  {
    icon: "🧹",
    title: "Housekeeping",
    desc: "Regular room cleaning, sanitized washrooms, and laundry assistance.",
  },
];

const listings = [
  {
    id: 1,
    name: "PASSION DREAMS",
    location: "Knowledge Park, Greater Noida (G.B. Nagar)",
    price: "₹8,500",
    period: "/month",
    rating: 5.0,
    reviews: 48,
    type: "Student & Executive PG",
    tags: ["College Lunch Delivery", "4 Meals Daily", "AC & Cooler Rooms", "Deposit: 1+1 Mo"],
    badge: "Top Verified PG",
    badgeColor: "#059669",
    img: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994110/passion%20pg/Room1_1.png",
    images: [
      { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994110/passion%20pg/Room1_1.png", label: "Room 1 (Main)" },
      { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994164/passion%20pg/Room4_1.png", label: "Room 4" },
      { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994116/passion%20pg/Room1_2.png", label: "Room 1 (Interior)" },
      { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994167/passion%20pg/Room4_2.png", label: "Room 4 (Study)" },
    ],
  },
  {
    id: 2,
    name: "PASSION Residency",
    location: "Plot No. 28B & 29, Near IILM & Lloyd College, Knowledge Park - 2, Greater Noida",
    price: "₹7,200",
    period: "/month",
    rating: 4.7,
    reviews: 96,
    type: "Student PG",
    tags: ["Study Lounge", "WiFi", "24/7 Security"],
    badge: "Trending",
    badgeColor: "#10B981",
    img: residencyImages[0].src,
    images: residencyImages,

  },
];



const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Infosys",
    text: "PassionPG made my relocation to Bangalore completely stress-free. Found a clean, safe PG within 2 days. The room was exactly as pictured!",
    rating: 5,
    avatar: "PS",
    city: "Bangalore",
  },
  {
    name: "Arjun Mehta",
    role: "MBA Student, IIM Ahmedabad",
    text: "The verified listings gave me total peace of mind. I booked from Delhi and everything was seamless when I arrived. The meals are delicious!",
    rating: 5,
    avatar: "AM",
    city: "Ahmedabad",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Designer",
    text: "Affordable, sparkling clean, and super safe. The housekeeping is on-point and the community vibe is great. Highly recommend PassionPG!",
    rating: 5,
    avatar: "SR",
    city: "Hyderabad",
  },
];

// ─── Subcomponents ──────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{ color: s <= rating ? "#10B981" : "#CBD5E1", fontSize: "0.85rem" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", color: "#0F172A" }}>
      {/* ── Fixed Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 32px",
            minHeight: "78px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src="https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994172/passion%20pg/PassionPg.png"
              alt="PassionPG Logo"
              width={72}
              height={56}
              unoptimized
              style={{
                height: "56px",
                width: "auto",
                objectFit: "contain",
              }}
              priority
            />
            <span
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #059669, #10B981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
              }}
            >
              PassionPG
            </span>
          </Link>

          {/* Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <style>{`
              @media(min-width:768px){.nav-desktop{display:flex!important;gap:28px;align-items:center}}
              @media(min-width:1024px){.hero-grid{display:grid!important;grid-template-columns:1.15fr 0.85fr;gap:48px;align-items:center}}
            `}</style>
            <div className="nav-desktop" style={{ display: "none", gap: "28px", alignItems: "center" }}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="nav-link"
                  style={{
                    color: "#1E293B",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <ListYourPG />
          </div>
        </div>
      </nav>

      {/* ── Hero Section (Full-Width Background Image) ── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
          paddingBottom: "40px",
          overflow: "hidden",
        }}
      >
        {/* Full-width background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994110/passion%20pg/Room1_1.png"
            alt="Bright Modern PG Room"
            fill
            unoptimized
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center right" }}
            priority
          />
          {/* Balanced light gradient: background image is clearly visible and vibrant */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.48) 45%, rgba(255,255,255,0.08) 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "50px 5%",
            maxWidth: "760px",
          }}
        >

          <h1
            className="animate-slide-up delay-100"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "18px",
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Find Your Perfect
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                textShadow: "none",
                fontWeight: 900,
              }}
            >
              Home Away
            </span>
            <br />
            From Home
          </h1>

          <p
            className="animate-slide-up delay-200"
            style={{
              fontSize: "1.12rem",
              color: "#0F172A",
              lineHeight: 1.65,
              marginBottom: "28px",
              maxWidth: "560px",
              fontWeight: 500,
              textShadow: "0 1px 2px rgba(255,255,255,0.9)",
            }}
          >
            Discover 20+ verified PGs and hostels in Greater Noida city. Clean,
            fully-furnished rooms, home-cooked food, high-speed Wi-Fi, and <strong>zero brokerage</strong>.
          </p>



          {/* Quick Filter Tags */}
          <div
            className="animate-slide-up delay-400"
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}
          >
            {["Students", "Working Women", "Boys", "Girls", "Co-Living", "With AC"].map((tag) => (
              <button
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(226,232,240,0.9)",
                  color: "#0F172A",
                  padding: "7px 16px",
                  borderRadius: "50px",
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-slide-up delay-500"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}
          >
            <a href="#listings" className="btn-primary">
              <span>🏠 Browse All PGs</span>
            </a>
            <a href="#features" className="btn-outline">
              <span>✨ Explore Amenities</span>
            </a>
          </div>
        </div>

        {/* Floating Social Proof Card on Right */}
        <div
          className="animate-float"
          style={{
            position: "absolute",
            right: "6%",
            bottom: "16%",
            borderRadius: "20px",
            padding: "20px 24px",
            zIndex: 2,
            minWidth: "250px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
            display: "none",
          }}
        >
          <style>{`@media(min-width:1024px){.float-card{display:block!important}}`}</style>
          <div className="float-card" style={{ display: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #059669, #10B981)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 12px rgba(5,150,105,0.3)",
                }}
              >
                🎉
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "#64748B", fontWeight: 600 }}>Just Booked!</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0F172A" }}>Priya reserved a room</div>
              </div>
            </div>
            <div style={{ fontSize: "0.82rem", color: "#64748B" }}>Koramangala, Bangalore • 2 mins ago</div>
          </div>
        </div>
      </section>


      {/* ── Featured Listings ── */}
      <section id="listings" style={{ padding: "100px 5%", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                marginBottom: "14px",
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#0F172A",
              }}
            >
              Handpicked <span className="gradient-text">Premium PGs</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
              Curated properties verified for safety, hygiene, food quality, and comfort.
            </p>
          </div>

          {/* Cards Grid (2 Cards) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
              maxWidth: "960px",
              margin: "0 auto",
              alignItems: "stretch",
            }}
          >
            {listings.map((pg) => (
              <PropertyCard key={pg.id} pg={pg} />
            ))}
          </div>

        </div>
      </section>



      {/* ── Features & Amenities ── */}
      <section
        id="features"
        style={{
          padding: "100px 5%",
          background: "#F8FAFC",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                fontFamily: "'Playfair Display', Georgia, serif",
                marginBottom: "14px",
                color: "#0F172A",
              }}
            >
              Why Choose <span className="gradient-text">PassionPG?</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
              Every property comes with top-tier amenities so you can focus on studies and career.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover"
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    background: "#ECFDF5",
                    border: "1px solid #A7F3D0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
                    {f.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        style={{
          padding: "100px 5%",
          background: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                fontFamily: "'Playfair Display', Georgia, serif",
                marginBottom: "14px",
                color: "#0F172A",
              }}
            >
              Loved by <span className="gradient-text">1000+ Tenants</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: "460px", margin: "0 auto" }}>
              Real experiences from students and professionals who found their room with us.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  padding: "34px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                }}
              >
                {/* Rating */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} style={{ color: "#10B981", fontSize: "1rem" }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color: "#334155",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Profile */}
                <div style={{ display: "grid", gridTemplateColumns: "44px minmax(0, 1fr)", alignItems: "start", columnGap: "14px", rowGap: "10px", marginTop: "auto" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #059669, #10B981)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div style={{ minWidth: 0, minHeight: "64px" }}>
                    <div style={{ fontWeight: 800, fontSize: "0.98rem", color: "#0F172A" }}>{t.name}</div>
                    <div style={{ color: "#64748B", fontSize: "0.82rem" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Owner CTA Section ── */}
      <section
        style={{
          padding: "100px 5%",
          background: "linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 50%, #F8FAFC 100%)",
          borderTop: "1px solid #A7F3D0",
          borderBottom: "1px solid #A7F3D0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 900,
              fontFamily: "'Playfair Display', Georgia, serif",
              marginBottom: "18px",
              lineHeight: 1.2,
              color: "#0F172A",
            }}
          >
            Own a PG or Hostel?{" "}
            <span className="gradient-text">List It For Free!</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px" }}>
            Reach thousands of verified tenants in your area. Listing takes under 10 minutes.
            Zero commission on your first 3 bookings!
          </p>
          <OwnerDeskActions />

          {/* Guarantees */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginTop: "44px",
              flexWrap: "wrap",
            }}
          >
            {["✅ 100% Free Listing", "⚡ Instant Verification", "🔒 Background-Checked Tenants"].map((item) => (
              <div key={item} style={{ color: "#475569", fontSize: "0.92rem", fontWeight: 600 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <SiteFooter />
    </div>
  );
}
