"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ListingItem {
  id: number;
  name: string;
  location: string;
  price: string;
  period: string;
  rating: number;
  reviews: number;
  type: string;
  tags: string[];
  badge: string;
  badgeColor: string;
  img: string;
  images: { src: string; label: string }[];
}

export default function PropertyCard({ pg }: Readonly<{ pg: ListingItem }>) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === 0 ? pg.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === pg.images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImgIndex(index);
  };

  const currentImage = pg.images[activeImgIndex] || { src: pg.img, label: "Room" };

  return (
    <Link
      href={`/property/${pg.id}`}
      scroll={false}
      className="card-hover"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 6px 25px rgba(0,0,0,0.04)",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Image & Badges */}
      <div style={{ position: "relative", height: "230px", flexShrink: 0 }}>
        <Image
          src={currentImage.src}
          alt={`${pg.name} - ${currentImage.label}`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          style={{ objectFit: "cover", transition: "opacity 0.25s ease" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: pg.badgeColor,
            color: "white",
            padding: "5px 14px",
            borderRadius: "50px",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 2,
          }}
        >
          {pg.badge}
        </div>

        {/* Property Type */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(8px)",
            color: "#0F172A",
            padding: "5px 14px",
            borderRadius: "50px",
            fontSize: "0.75rem",
            fontWeight: 700,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 2,
          }}
        >
          {pg.type}
        </div>


        {/* Carousel Prev / Next Controls */}
        {pg.images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.85)",
                border: "none",
                color: "#0F172A",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 3,
                transition: "background 0.2s ease",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={nextImage}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.85)",
                border: "none",
                color: "#0F172A",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 3,
                transition: "background 0.2s ease",
              }}
            >
              ›
            </button>

            {/* Indicator Dots */}
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                right: "14px",
                display: "flex",
                gap: "6px",
                zIndex: 2,
              }}
            >
              {pg.images.map((img, i) => (
                <button
                  type="button"
                  key={img.src}
                  aria-label={`Show ${img.label}`}
                  onClick={(e) => selectImage(e, i)}
                  style={{
                    width: activeImgIndex === i ? "16px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: activeImgIndex === i ? "#059669" : "rgba(255,255,255,0.7)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#0F172A",
              marginBottom: "6px",
              lineHeight: 1.3,
            }}
          >
            {pg.name}
          </h3>
          <p
            style={{
              color: "#64748B",
              fontSize: "0.88rem",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              minHeight: "22px",
            }}
          >
            <span>📍</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {pg.location}
            </span>
          </p>

          {/* Amenities Tags */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              minHeight: "68px",
              alignContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            {pg.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#ECFDF5",
                  border: "1px solid #A7F3D0",
                  color: "#047857",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  fontSize: "0.76rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer & Price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #F1F5F9",
            paddingTop: "16px",
            marginTop: "auto",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span
                className="gradient-text"
                style={{ fontSize: "1.55rem", fontWeight: 900 }}
              >
                {pg.price}
              </span>
              <span style={{ color: "#64748B", fontSize: "0.85rem" }}>{pg.period}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    style={{ color: s <= Math.round(pg.rating) ? "#10B981" : "#CBD5E1", fontSize: "0.85rem" }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 500 }}>
                {pg.rating} ({pg.reviews})
              </span>
            </div>
          </div>

          <span
            className="btn-primary"
            style={{
              padding: "11px 22px",
              fontSize: "0.88rem",
              borderRadius: "14px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Book Now</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
