"use client";

import { residencyImages } from "@/data/residency-images";
import React, { useState, useEffect, useLayoutEffect, Suspense, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { primaryPhone, whatsappNumber } from "@/data/contacts";

// ─── TYPES & DATA ─────────────────────────────────────────────────────────────

interface RoomType {
  type: string;
  category: "AC" | "Cooler";
  seater: number;
  priceNum: number;
  price: string;
  deposit: string;
  electricity: string;
  dimensions?: string;
  floor?: string;
  amenities: string[];
  popular?: boolean;
}

interface PropertyDetails {
  id: string;
  title: string;
  tagline: string;
  location: string;
  city: string;
  mapCoordinates: string;
  googleMapsUrl: string;
  rating: number;
  reviewCount: number;
  price: string;
  deposit: string;
  availableFor: string;
  genderAllowed: string;
  preferredTenant: string;
  availableFrom: string;
  foodIncluded: string;
  acRoom: string;
  parking: string;
  laundry: string;
  roomCleaning: string;
  noticePeriod: string;
  electricityRule: string;
  about: string;
  ownerName: string;
  ownerPhone: string;
  ownerWhatsApp: string;
  images: {
    main: string;
    gallery: { src: string; label: string; category: "Bedrooms" | "Living & Dining" | "Amenities" }[];
  };
  roomTypes: RoomType[];
  bankDetails: {
    accountName: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branch: string;
    upiId: string;
    favourOf: string;
    paymentModes: string[];
  };
  meals: {
    meal: string;
    timing: string;
    description: string;
    icon: string;
    highlight?: string;
  }[];
  landmarks: {
    category: "Colleges" | "Transit" | "Shopping" | "Health";
    name: string;
    dist: string;
    time: string;
  }[];
}

const propertiesData: Record<string, PropertyDetails> = {
  "1": {
    id: "1",
    title: "PASSION DREAMS",
    tagline: "Ultra-Premium Student & Executive PG Accommodation with Daily Campus Food Delivery",
    location: "Knowledge Park, Greater Noida, G.B. Nagar, Uttar Pradesh 201310",
    city: "Greater Noida",
    mapCoordinates: "28.4682° N, 77.4990° E",
    googleMapsUrl: "https://maps.google.com/?q=Knowledge+Park+Greater+Noida",
    rating: 5.0,
    reviewCount: 48,
    price: "₹8,500",
    deposit: "1+1 Month Rent",
    availableFor: "Students & Executives",
    genderAllowed: "Co-ed / Separate Wings Available",
    preferredTenant: "College Students & Working Professionals",
    availableFrom: "Immediate Move-in Available",
    foodIncluded: "4 Meals Daily + College Lunch Delivery",
    acRoom: "Split AC & High-Flow Cooler Options",
    parking: "Secure Car & Two-Wheeler Parking",
    laundry: "Semi-Automatic Washing Machines & Drying Areas",
    roomCleaning: "Daily Housekeeping & Bathroom Sanitization",
    noticePeriod: "1 Month Formal Notice",
    electricityRule: "Sub-meter billing @ ₹10 per unit",
    about:
      "Welcome to PASSION DREAMS in Knowledge Park, Greater Noida — the premier accommodation designed specifically for university students and young corporate executives. Each room is meticulously furnished with orthopaedic mattresses, ergonomic study desks with reading lamps, and dedicated lockable wardrobes. Our crown jewel is our nutritious 4-meal arrangement featuring freshly prepared homestyle meals, including our signature Hot College Lunch Delivery straight to your lecture hall or campus gate every single afternoon. With biometric entry, 24/7 power backup, high-speed fiber Wi-Fi, and spotless daily maintenance, we provide everything you need to study, thrive, and feel at home.",
    ownerName: "Property Manager - Passion Dreams",
    ownerPhone: primaryPhone,
    ownerWhatsApp: whatsappNumber,
    images: {
      main: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994110/passion%20pg/Room1_1.png",
      gallery: [
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994110/passion%20pg/Room1_1.png", label: "Executive AC Twin Room", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994164/passion%20pg/Room4_1.png", label: "Furnished 3-Seater Room", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994116/passion%20pg/Room1_2.png", label: "Personal Study & Storage Area", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994167/passion%20pg/Room4_2.png", label: "Bright Window View Bedroom", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994132/passion%20pg/Room1_3.png", label: "Clean Wardrobes & Almirahs", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994143/passion%20pg/Room1_4.png", label: "Deluxe Cooler Twin Room", category: "Bedrooms" },
      ],
    },
    roomTypes: [
      {
        type: "2 Seater AC Room",
        category: "AC",
        seater: 2,
        priceNum: 12000,
        price: "₹12,000",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "180 sq.ft.",
        floor: "1st & 2nd Floor",
        popular: true,
        amenities: [
          "Split Inverter AC",
          "Box Beds with Cushioned Mattresses",
          "Individual Ergonomic Study Tables & Chairs",
          "Separate Lockable Wooden Wardrobes",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
      {
        type: "3 Seater AC Room",
        category: "AC",
        seater: 3,
        priceNum: 11000,
        price: "₹11,000",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "220 sq.ft.",
        floor: "2nd & 3rd Floor",
        amenities: [
          "Split Inverter AC",
          "Individual Storage Beds",
          "Study Desks for each resident",
          "Individual Wardrobe Cupboard",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
      {
        type: "4 Seater AC Room",
        category: "AC",
        seater: 4,
        priceNum: 10000,
        price: "₹10,000",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "260 sq.ft.",
        floor: "3rd Floor",
        amenities: [
          "Split AC Coverage",
          "Comfortable Individual Bedding",
          "Dedicated Study Area",
          "Separate Almirahs",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
      {
        type: "2 Seater Cooler Room",
        category: "Cooler",
        seater: 2,
        priceNum: 10500,
        price: "₹10,500",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "180 sq.ft.",
        floor: "1st & 2nd Floor",
        amenities: [
          "Heavy-Duty Air Cooler",
          "Premium Box Beds & Pillows",
          "Dedicated Study Desk & Chair",
          "Separate Lockable Wardrobe",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
      {
        type: "3 Seater Cooler Room",
        category: "Cooler",
        seater: 3,
        priceNum: 9500,
        price: "₹9,500",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "220 sq.ft.",
        floor: "2nd & 3rd Floor",
        popular: false,
        amenities: [
          "Large Air Cooler",
          "Comfortable Single Beds",
          "Study Tables & Chairs",
          "Separate Almirahs",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
      {
        type: "4 Seater Cooler Room",
        category: "Cooler",
        seater: 4,
        priceNum: 8500,
        price: "₹8,500",
        deposit: "1+1 Month Rent",
        electricity: "+ Electric Bill @ ₹10/unit",
        dimensions: "260 sq.ft.",
        floor: "Ground & 3rd Floor",
        amenities: [
          "Air Cooler Included",
          "Individual Single Beds",
          "Study Desks",
          "Separate Almirahs",
          "Free Campus Lunch Delivery",
          "High-Speed Fiber Wi-Fi",
        ],
      },
    ],
    bankDetails: {
      accountName: "PASSION DREAMS",
      bankName: "IDFC FIRST Bank",
      accountNumber: "10120739029",
      ifscCode: "IDFB0021256",
      branch: "Greater Noida, G.B. Nagar (U.P.)",
      upiId: "passiondreams@idfcbank",
      favourOf: "PASSION DREAMS",
      paymentModes: ["UPI / GooglePay", "NEFT / RTGS", "Cheque", "Demand Draft (D.D)", "Cash"],
    },
    meals: [
      {
        meal: "Breakfast",
        timing: "07:30 AM – 09:30 AM",
        description: "Hot stuffed Parathas / Poha / Idli Sambar / Puri Bhaji, boiled eggs, fresh curd, tea & milk.",
        icon: "🍳",
      },
      {
        meal: "Campus Lunch Delivery",
        timing: "12:30 PM – 01:30 PM",
        description:
          "Packed fresh in insulated tiffin containers and delivered directly to your college campus gate or library.",
        icon: "🍱",
        highlight: "Signature Feature",
      },
      {
        meal: "Evening Snacks & Chai",
        timing: "05:00 PM – 06:15 PM",
        description: "Special Masala Chai accompanied with hot pakoras, samosas, biscuits, or roasted snacks.",
        icon: "☕",
      },
      {
        meal: "Dinner",
        timing: "08:00 PM – 10:00 PM",
        description: "Seasonal Sabzi, Dal Tadka/Makhani, Paneer dish (twice a week), hot Tawa Rotis, Jeera Rice & Sweet dish.",
        icon: "🍲",
      },
    ],
    landmarks: [
      { category: "Colleges", name: "Knowledge Park University Hub (GL Bajaj, Galgotias, IIMT)", dist: "300 meters", time: "4 mins walk" },
      { category: "Colleges", name: "Sharda University Campus", dist: "1.4 km", time: "4 mins auto" },
      { category: "Transit", name: "Knowledge Park II Metro Station (Aqua Line)", dist: "850 meters", time: "8 mins walk" },
      { category: "Transit", name: "Pari Chowk Bus Terminal & Metro", dist: "2.1 km", time: "6 mins drive" },
      { category: "Shopping", name: "The Grand Venice Mega Mall", dist: "2.8 km", time: "7 mins drive" },
      { category: "Shopping", name: "Ansal Plaza & Jagat Farm Market", dist: "3.2 km", time: "9 mins drive" },
      { category: "Health", name: "Sharda Super Speciality Hospital", dist: "1.4 km", time: "4 mins drive" },
      { category: "Health", name: "Yatharth Super Speciality Hospital", dist: "3.8 km", time: "10 mins drive" },
    ],
  },
  "2": {
    id: "2",
    title: "PASSION Residency",
    tagline: "Modern Student Living with Biometric Security & Study Hubs",
    location: "Plot No. 28B & 29, Near IILM & Lloyd College, Knowledge Park - 2, Greater Noida",
    city: "Greater Noida",
    mapCoordinates: "28.4573963, 77.4896179",
    googleMapsUrl: "https://www.google.com/maps?q=28.4573963,77.4896179&z=17&hl=en",
    rating: 4.8,
    reviewCount: 96,
    price: "₹7,200",
    deposit: "1+1 Month Rent",
    availableFor: "Student PG",
    genderAllowed: "Separate Wings for Men & Women",
    preferredTenant: "Students & University Scholars",
    availableFrom: "Immediate Move-in Available",
    foodIncluded: "3 Meals Daily (Home-style Chef)",
    acRoom: "Central AC Available",
    parking: "Bike Parking",
    laundry: "Included In-house Laundry",
    roomCleaning: "Daily Professional Cleaning",
    noticePeriod: "1 Month Notice",
    electricityRule: "Electricity Included in Rent",
    about:
      "Modern student living spaces equipped with study rooms, high-speed broadband, home-cooked food, and strict 24/7 biometric security.",
    ownerName: "Manager - PASSION Residency",
    ownerPhone: primaryPhone,
    ownerWhatsApp: whatsappNumber,
    images: {
      main: residencyImages[0].src,
      gallery: [
        ...residencyImages,
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994146/passion%20pg/Room2_1.png", label: "Executive AC Twin Room", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994157/passion%20pg/Room3_1.png", label: "Single Bedroom", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994148/passion%20pg/Room2_2.png", label: "Study Desk", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994151/passion%20pg/Room2_3.png", label: "Wardrobe & Storage", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994153/passion%20pg/Room2_4.png", label: "Modern AC Interior", category: "Bedrooms" },
        { src: "https://res.cloudinary.com/dgg6e3flf/image/upload/f_auto,q_auto/v1791994162/passion%20pg/Room3_3.png", label: "Study Hub & Bookshelf", category: "Bedrooms" },
      ],
    },
    roomTypes: [
      {
        type: "Single Bed AC",
        category: "AC",
        seater: 1,
        priceNum: 14000,
        price: "₹14,000",
        deposit: "1+1 Month Rent",
        electricity: "Included in Rent",
        dimensions: "140 sq.ft.",
        floor: "2nd Floor",
        amenities: ["Private Single Bed", "Smart TV", "Dedicated Study Desk", "Large Wardrobe", "Split AC"],
      },
      {
        type: "Double Bed AC",
        category: "AC",
        seater: 2,
        priceNum: 7200,
        price: "₹7,200",
        deposit: "1+1 Month Rent",
        electricity: "Included in Rent",
        dimensions: "190 sq.ft.",
        floor: "1st & 2nd Floor",
        popular: true,
        amenities: ["Twin Beds", "Smart TV", "Study Desks", "Individual Wardrobes", "Split AC"],
      },
      {
        type: "Triple Bed Cooler",
        category: "Cooler",
        seater: 3,
        priceNum: 6500,
        price: "₹6,500",
        deposit: "1+1 Month Rent",
        electricity: "Included in Rent",
        dimensions: "240 sq.ft.",
        floor: "3rd Floor",
        amenities: ["Three Single Beds", "Room Cooler", "Study Desks", "Individual Wardrobes", "Balcony View"],
      },
    ],
    bankDetails: {
      accountName: "PASSION DREAMS",
      bankName: "IDFC FIRST Bank",
      accountNumber: "10120739029",
      ifscCode: "IDFB0021256",
      branch: "Greater Noida, G.B. Nagar (U.P.)",
      upiId: "scholarpg@idfcbank",
      favourOf: "PASSION DREAMS",
      paymentModes: ["Cash", "Cheque", "Demand Draft (D.D)", "NEFT"],
    },
    meals: [
      { meal: "Breakfast", timing: "08:00 AM – 10:00 AM", description: "Fresh morning breakfast with hot chai/coffee.", icon: "🍳" },
      { meal: "Lunch", timing: "01:00 PM – 02:30 PM", description: "Wholesome lunch served fresh in dining hall.", icon: "🍱" },
      { meal: "Dinner", timing: "08:30 PM – 10:30 PM", description: "Balanced dinner with sweet dessert on weekends.", icon: "🍲" },
    ],
    landmarks: [],
  },
};

const initialReviews = [
  {
    id: 1,
    name: "Anurag Kaswan",
    college: "GL Bajaj Institute (B.Tech)",
    date: "2 months ago",
    rating: 5,
    tag: "College Lunch Lover",
    avatar: "AK",
    verified: true,
    text: "This PG has all facilities at their absolute best. The food is exceptionally hygienic and the college lunch delivery right to our campus gate every day saves me so much money and canteen junk. Wi-Fi speed is 200 Mbps without interruptions.",
  },
  {
    id: 2,
    name: "Sunil Kumar",
    college: "Galgotias University (MBA)",
    date: "3 months ago",
    rating: 5,
    tag: "Verified Resident",
    avatar: "SK",
    verified: true,
    text: "Very cooperative staff and prompt management. Any maintenance or AC filter cleaning issue is resolved within 2 hours. Peaceful study atmosphere, safe biometric gate access, and daily room cleaning.",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    college: "Corporate Associate @ Tech Park",
    date: "4 months ago",
    rating: 5,
    tag: "Working Professional",
    avatar: "RS",
    verified: true,
    text: "Relocated from Jaipur for my new job in Knowledge Park. This place was within walking distance of my office. Zero brokerage, genuine rental agreement, and transparent electric sub-meter billing @ ₹10/unit.",
  },
  {
    id: 4,
    name: "Pooja Deshmukh",
    college: "Sharda University (B.Des)",
    date: "5 months ago",
    rating: 5,
    tag: "Student",
    avatar: "PD",
    verified: true,
    text: "Felt like home since day one. Security is 24/7 with strict visitor logs. RO water is always cool, power backup works instantly during outages, and management is very friendly and supportive.",
  },
];

// ─── SVG ICONS ────────────────────────────────────────────────────────────────


function SvgCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SvgStar({ className = "w-4 h-4", fill = true }: { className?: string; fill?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SvgMapPin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SvgShare({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function SvgHeart({ className = "w-4 h-4", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "#EF4444" : "none"} stroke={filled ? "#EF4444" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SvgZap({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SvgCopy({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function SvgPhone({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SvgClose({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SvgBed({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v4" />
    </svg>
  );
}

function SvgWifi({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h.01M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0" />
    </svg>
  );
}

function SvgUtensils({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2v20M21 2v6a3 3 0 0 1-3 3M6 2v6a3 3 0 0 0 3 3v11M3 2v6a3 3 0 0 0 3 3" />
    </svg>
  );
}

function SvgArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function SvgCalendar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

function PropertyDetailsContent({
  paramsPromise,
}: Readonly<{
  paramsPromise: Promise<{ id: string }>;
}>) {
  const unwrappedParams = React.use(paramsPromise);
  const id = unwrappedParams?.id || "1";
  const property = propertiesData[id] || propertiesData["1"];

  // Reset after the destination renders, without animating the previous page.
  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [id]);

  // State
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [roomFilter, setRoomFilter] = useState<"All" | "AC" | "Cooler">("All");
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Gallery Modal
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);


  // Reviews State
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewFilter, setReviewFilter] = useState<"all" | "highest" | "students">("all");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    college: "",
    rating: 5,
    tag: "Verified Resident",
    text: "",
  });

  // Electricity Calculator State
  const [unitsConsumed, setUnitsConsumed] = useState<number>(60); // 60 units typical

  const revNameId = useId();
  const revCollegeId = useId();
  const revTextId = useId();

  // Toast auto-clear
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isGalleryOpen || isReviewModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isGalleryOpen, isReviewModalOpen]);

  // Gallery keyboard controls (Esc to close, Arrow keys to navigate)
  useEffect(() => {
    if (!isGalleryOpen) return;
    const totalPhotos = property.images.gallery.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGalleryOpen(false);
      if (e.key === "ArrowLeft") {
        setGalleryActiveIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setGalleryActiveIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, property.images.gallery.length]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleCopy = (text: string, label: string) => {
    if (navigator?.clipboard?.writeText) {
      void navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: property.title,
          text: `Check out ${property.title} in ${property.location}!`,
          url: window.location.href,
        })
        .catch(() => {
          handleCopy(window.location.href, "Property link");
        });
    } else {
      handleCopy(window.location.href, "Property link");
    }
  };


  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.text.trim()) return;

    const added = {
      id: Date.now(),
      name: newReview.name,
      college: newReview.college || "Resident",
      date: "Just now",
      rating: newReview.rating,
      tag: newReview.tag,
      avatar: newReview.name.slice(0, 2).toUpperCase(),
      verified: true,
      text: newReview.text,
    };
    setReviews([added, ...reviews]);
    setIsReviewModalOpen(false);
    setNewReview({ name: "", college: "", rating: 5, tag: "Verified Resident", text: "" });
    showToast("Thank you! Your verified review has been published.");
  };

  // Filtered rooms
  const filteredRooms = property.roomTypes.filter((r) => {
    if (roomFilter === "All") return true;
    return r.category === roomFilter;
  });

  const selectedRoom = property.roomTypes[selectedRoomIndex] || property.roomTypes[0];

  // Estimated Monthly Cost Calculation
  const estimatedElectricity = unitsConsumed * 10;
  const estimatedTotal = selectedRoom.priceNum + estimatedElectricity;


  // Filtered reviews
  const displayReviews = reviews.filter((r) => {
    if (reviewFilter === "highest") return r.rating === 5;
    if (reviewFilter === "students") return r.tag.toLowerCase().includes("student") || r.college.includes("B.Tech") || r.college.includes("University");
    return true;
  });

  const navSections = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Rooms & Pricing" },
    { id: "calculator", label: "Cost Calculator" },
    { id: "meals", label: "Campus Food Menu" },
    { id: "amenities", label: "Amenities" },
    { id: "rules", label: "House Rules" },
    { id: "location", label: "Neighbourhood" },
    { id: "reviews", label: `Reviews (${reviews.length})` },
  ];

  const scrollTo = (sectionId: string) => {
    setActiveTab(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -130;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-emerald-500/20 selection:text-emerald-700">
      {/* ── TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[210] flex items-center gap-3 bg-[#0F172A] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 animate-slide-up backdrop-blur-xl">
          <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
            <SvgCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* ── TOP NAV BAR (Exact match to Home Page alignment & branding) ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
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
          {/* Logo & Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
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

            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span>/</span>
              <Link href="/" className="hover:text-[#059669] transition-colors text-slate-500">
                {property.city}
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-bold truncate max-w-[220px]">
                {property.title}
              </span>
            </nav>
          </div>

          {/* Nav Links & Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="hidden xl:flex items-center gap-7">
              {[
                { label: "Browse PGs", href: "/#listings" },
                { label: "Amenities", href: "/#features" },
                { label: "Reviews", href: "/#testimonials" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <Link
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
                </Link>
              ))}
            </div>

            <Link
              href="/"
              style={{
                fontSize: "0.88rem",
                color: "#64748B",
                textDecoration: "none",
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hover:border-slate-300 hover:text-slate-900 transition-all"
            >
              ← Back to Listings
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
              title="Share this property"
            >
              <SvgShare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={() => {
                setIsSaved(!isSaved);
                showToast(!isSaved ? "Saved to your wishlisted PGs" : "Removed from wishlist");
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                isSaved
                  ? "bg-rose-50 border-rose-200 text-rose-600"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
              title="Save property"
            >
              <SvgHeart className="w-3.5 h-3.5" filled={isSaved} />
              <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
            </button>

            <a
              href={`tel:${property.ownerPhone.replace(/\s+/g, "")}`}
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: "0.85rem" }}
            >
              Call Owner
            </a>
          </div>
        </div>

        {/* ── Sub Navigation Tabs Bar (Full Width aligned with 32px padding) ── */}
        <div
          style={{
            width: "100%",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            overflowX: "auto",
            scrollbarWidth: "none",
            borderTop: "1px solid #F1F5F9",
            background: "#FFFFFF",
          }}
        >
          {navSections.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                style={{
                  background: isActive ? "rgba(5,150,105,0.1)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "#047857" : "#475569",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  margin: "6px 0",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* ── MAIN CONTENT (Full Width Aligned to 32px Padding, matching Home Page) ── */}
      <main style={{ width: "100%", padding: "28px 32px 80px" }}>
        {/* ── HERO HEADER INFO ── */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {property.title}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 flex items-center gap-1.5">
            <SvgMapPin className="w-4 h-4 text-[#059669] shrink-0" />
            <span>{property.location}</span>
            <a
              href={property.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#059669] hover:underline ml-2"
            >
              (View on Map ↗)
            </a>
          </p>
        </div>

        {/* ── PHOTO GALLERY MOSAIC ── */}
        <section aria-label="Photo Gallery" className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[380px] sm:h-[460px] rounded-3xl overflow-hidden relative shadow-lg shadow-slate-200/60 border border-slate-200/80">
            {/* Main Primary Image */}
            <div
              onClick={() => {
                setGalleryActiveIndex(0);
                setIsGalleryOpen(true);
              }}
              className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden bg-slate-800"
            >
              <Image
                src={property.images.gallery[0].src}
                alt={property.images.gallery[0].label}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md mb-1.5 inline-block">
                    Featured Room
                  </span>
                  <div className="text-base sm:text-lg font-bold">{property.images.gallery[0].label}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  🔍
                </div>
              </div>
            </div>

            {/* 3 Secondary Grid Images */}
            {property.images.gallery.slice(1, 4).map((img, idx) => (
              <div
                key={img.src}
                onClick={() => {
                  setGalleryActiveIndex(idx + 1);
                  setIsGalleryOpen(true);
                }}
                className="relative group cursor-pointer overflow-hidden bg-slate-800 hidden md:block"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  priority
                  unoptimized
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold drop-shadow-md">
                  {img.label}
                </div>
              </div>
            ))}

            {/* 5th Image with 'View All' Overlay */}
            <div
              onClick={() => {
                setGalleryActiveIndex(4);
                setIsGalleryOpen(true);
              }}
              className="relative group cursor-pointer overflow-hidden bg-slate-800 hidden md:block"
            >
              <Image
                src={property.images.gallery[4]?.src || property.images.gallery[0].src}
                alt="More Photos"
                fill
                priority
                unoptimized
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/75 transition-colors flex flex-col items-center justify-center text-white gap-2 p-4 text-center">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
                  📸
                </div>
                <div className="font-bold text-sm tracking-wide">
                  View all {property.images.gallery.length} photos
                </div>
                <span className="text-[11px] text-slate-300 font-medium">Bedrooms, Food & Facilities</span>
              </div>
            </div>

            {/* Mobile View All Button Floating Overlay */}
            <button
              onClick={() => {
                setGalleryActiveIndex(0);
                setIsGalleryOpen(true);
              }}
              className="md:hidden absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2"
            >
              <span>📷</span>
              <span>View all {property.images.gallery.length} photos</span>
            </button>
          </div>
        </section>

        {/* ── 2-COLUMN MAIN LAYOUT ── */}
        <div className="property-layout-grid items-start gap-8">
          {/* ═══════════ LEFT COLUMN (DETAILS & FEATURES) ═══════════ */}
          <div className="min-w-0 space-y-8">
            {/* ── OVERVIEW & QUICK MATRIX ── */}
            <section id="overview" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Key Property Highlights</h2>
                  <p className="text-slate-500 text-sm mt-1">{property.tagline}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200/60">
                    ● Move-in Ready
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200/60">
                    1+1 Deposit
                  </span>
                </div>
              </div>

              {/* 9-Box Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-6">
                {[
                  { icon: "👥", label: "GENDER / OCCUPANCY", val: property.availableFor, sub: property.genderAllowed },
                  { icon: "🎓", label: "PREFERRED TENANT", val: property.preferredTenant, sub: "College ID / Proof required" },
                  { icon: "📅", label: "AVAILABILITY", val: property.availableFrom, sub: "Immediate Keys Handover" },
                  { icon: "🍱", label: "FOOD SERVICE", val: property.foodIncluded, sub: "Free Campus Delivery" },
                  { icon: "❄️", label: "AIR CONDITIONING", val: property.acRoom, sub: "Inverter AC / Desert Cooler" },
                  { icon: "🅿️", label: "PARKING", val: property.parking, sub: "CCTV Monitored Parking" },
                  { icon: "🧺", label: "LAUNDRY", val: property.laundry, sub: "Washing machines provided" },
                  { icon: "🧹", label: "DAILY CLEANING", val: property.roomCleaning, sub: "Sanitized Washrooms" },
                  { icon: "⏱️", label: "NOTICE PERIOD", val: property.noticePeriod, sub: "Standard 30 Days" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <span className="text-base">{spec.icon}</span>
                      <span>{spec.label}</span>
                    </div>
                    <div className="font-bold text-slate-900 text-sm leading-snug">{spec.val}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">{spec.sub}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── ROOM SELECTION & PRICING ── */}
            <section id="rooms" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Room Types & Monthly Tariffs</h2>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Select a room to update the booking summary and monthly cost calculator
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600 shrink-0">
                  {(["All", "AC", "Cooler"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setRoomFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        roomFilter === cat ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
                      }`}
                    >
                      {cat === "All" ? "All Options" : cat === "AC" ? "❄️ AC Rooms" : "💨 Cooler Rooms"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Cards Grid (All 3 in one row) ── */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {filteredRooms.map((room) => {
                  const originalIndex = property.roomTypes.findIndex((r) => r.type === room.type);
                  const isSelected = selectedRoomIndex === originalIndex;

                  return (
                    <div
                      key={room.type}
                      onClick={() => setSelectedRoomIndex(originalIndex)}
                      className={`p-4 sm:p-4.5 rounded-2xl border-2 cursor-pointer transition-all relative flex flex-col justify-between h-full ${
                        isSelected
                          ? "border-[#059669] bg-gradient-to-b from-[#ECFDF5]/70 to-white shadow-lg shadow-[#059669]/10 ring-1 ring-[#059669]/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {room.popular && (
                        <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-teal-600 to-[#059669] text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                          Popular Choice
                        </div>
                      )}

                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-sm shrink-0">
                              {room.category === "AC" ? "❄️" : "💨"}
                            </span>
                            <div className="min-w-0">
                              <div className="font-extrabold text-slate-900 text-sm sm:text-[15px] truncate">{room.type}</div>
                              <div className="text-slate-400 text-[11px] truncate">
                                {room.seater} Sharing • {room.dimensions} • {room.floor}
                              </div>
                            </div>
                          </div>

                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected ? "border-[#059669] bg-[#059669]" : "border-slate-300"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="my-2.5 pb-2.5 border-b border-slate-100 flex items-baseline gap-1.5 flex-wrap">
                          <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{room.price}</span>
                          <span className="text-[11px] font-semibold text-slate-500">/mo</span>
                          <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                            {room.electricity}
                          </span>
                        </div>

                        {/* Furnishing Badges */}
                        <div className="space-y-1.5 mb-3.5">
                          {room.amenities.map((am) => (
                            <div key={am} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700 font-medium leading-snug">
                              <SvgCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{am}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                        <span className="text-[11px] text-slate-500 font-medium leading-tight">
                          Deposit: <strong className="text-slate-800 font-bold">{room.deposit}</strong>
                        </span>
                        <button
                          type="button"
                          className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shrink-0 ${
                            isSelected
                              ? "bg-[#059669] text-white shadow-xs"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {isSelected ? "Selected ✓" : "Choose"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Informative terms callout */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start gap-3.5 text-xs text-emerald-950">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-base">
                  ⚡
                </div>
                <div>
                  <div className="font-bold text-emerald-950 text-sm">Transparent Sub-Meter Electricity Rule</div>
                  <p className="mt-0.5 text-emerald-900/90 leading-relaxed">
                    Every room has an independent certified sub-meter. Electricity is billed at actual meter reading @ ₹10 per unit consumed.
                    No hidden maintenance charges or surprise bills. Security deposit is 1+1 month rent refundable upon peaceful move-out.
                  </p>
                </div>
              </div>
            </section>

            {/* ── INTERACTIVE COST CALCULATOR (GAME CHANGER) ── */}
            <section id="calculator" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] uppercase tracking-wider mb-1">
                    <SvgZap className="w-3.5 h-3.5" />
                    <span>Real-Time Estimation</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Monthly Expense Calculator</h2>
                  <p className="text-slate-500 text-sm">
                    Estimate your exact total monthly out-of-pocket costs with zero surprises
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                  Selected: <strong className="text-slate-900">{selectedRoom.type}</strong>
                </div>
              </div>

              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-5">
                {/* Electricity Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="elec-slider" className="text-xs font-bold text-slate-700 flex items-center gap-2">
                      <span>⚡ Estimated Electricity Usage:</span>
                      <span className="text-[#059669] font-extrabold text-sm">{unitsConsumed} units / month</span>
                    </label>
                    <span className="text-xs font-semibold text-slate-500">
                      ₹{unitsConsumed * 10} (@ ₹10/unit)
                    </span>
                  </div>
                  <input
                    id="elec-slider"
                    type="range"
                    min="10"
                    max="180"
                    step="5"
                    value={unitsConsumed}
                    onChange={(e) => setUnitsConsumed(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                    <span>10 units (Minimal)</span>
                    <span>60 units (Typical AC/Cooler)</span>
                    <span>180 units (Heavy AC Summer)</span>
                  </div>
                </div>

                {/* Itemized Table */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Monthly Room Rent ({selectedRoom.type})</span>
                    <span className="font-semibold text-slate-900">{selectedRoom.price}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span>4 Meals Daily + College Lunch Delivery</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                        INCLUDED
                      </span>
                    </span>
                    <span className="font-bold text-emerald-600">₹0 (Free)</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span>High-Speed Fiber Wi-Fi + Daily Cleaning</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                        INCLUDED
                      </span>
                    </span>
                    <span className="font-bold text-emerald-600">₹0 (Free)</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Electric Bill ({unitsConsumed} units × ₹10)</span>
                    <span className="font-semibold text-slate-900">₹{estimatedElectricity.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="pt-4 border-t-2 border-dashed border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      TOTAL ESTIMATED MONTHLY OUTFLOW
                    </div>
                    <div className="text-xs text-slate-500">Includes all food, stay, wi-fi, and estimated power</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-[#059669]">
                      ₹{estimatedTotal.toLocaleString("en-IN")}
                      <span className="text-xs font-semibold text-slate-500">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FOOD ARRANGEMENT & COLLEGE LUNCH PREVIEW ── */}
            <section id="meals" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-2 border border-emerald-200/80">
                    <span>🍱 Signature Student Benefit</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4 Fresh Daily Meals & Campus Delivery</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Prepared daily in our hygienic commercial kitchen by experienced chefs with RO water cooking
                  </p>
                </div>
              </div>

              {/* Meal Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.meals.map((m) => (
                  <div
                    key={m.meal}
                    className={`p-5 rounded-2xl border transition-all ${
                      m.highlight
                        ? "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white border-emerald-300 shadow-sm"
                        : "bg-slate-50/70 border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{m.icon}</span>
                        <div>
                          <div className="font-extrabold text-slate-900 text-base">{m.meal}</div>
                          <div className="text-xs font-semibold text-slate-400">{m.timing}</div>
                        </div>
                      </div>
                      {m.highlight && (
                        <span className="bg-[#059669] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {m.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{m.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-center gap-3">
                <span className="text-xl shrink-0">🎒</span>
                <span>
                  <strong>How College Lunch Works:</strong> Inform the dining desk before 09:30 AM with your college name & campus gate number.
                  Our delivery vehicle reaches all major institutes in Knowledge Park by 12:45 PM sharp with hot insulated containers!
                </span>
              </div>
            </section>

            {/* ── ALL AMENITIES & FACILITIES ── */}
            <section id="amenities" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Comprehensive Amenities</h2>
              <p className="text-slate-500 text-sm mb-6">All facilities included with your accommodation</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                {[
                  { icon: "🍱", title: "College Lunch Delivery", desc: "Direct to your campus" },
                  { icon: "🍽️", title: "4 Fresh Daily Meals", desc: "Breakfast, Lunch, Snacks, Dinner" },
                  { icon: "❄️", title: "AC & Air Cooler", desc: "Room temperature comfort" },
                  { icon: "🛏️", title: "Box Bed & Mattress", desc: "Individual clean bedding" },
                  { icon: "🚪", title: "Separate Almirah", desc: "Lockable personal storage" },
                  { icon: "📚", title: "Study Table & Chair", desc: "Dedicated work desk" },
                  { icon: "📶", title: "High-Speed Wi-Fi", desc: "Fiber broadband backup" },
                  { icon: "🔋", title: "24/7 Power Backup", desc: "Silent diesel generator" },
                  { icon: "🚰", title: "RO Water Cooler", desc: "Purified drinking water" },
                  { icon: "🧹", title: "Daily Sweeper", desc: "Room & bathroom cleaning" },
                  { icon: "🛡️", title: "Biometric & CCTV", desc: "Round the clock safety" },
                  { icon: "🚿", title: "Geyser & Hot Water", desc: "Available 24/7 winter" },
                  { icon: "🧺", title: "Washing Machines", desc: "Self-laundry area" },
                  { icon: "🧊", title: "Common Refrigerator", desc: "Store beverages & medicines" },
                  { icon: "🩹", title: "First Aid Kit", desc: "Emergency medical supplies" },
                  { icon: "🏍️", title: "Vehicle Parking", desc: "Two & four wheeler spots" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors"
                  >
                    <div className="text-2xl mb-1.5">{item.icon}</div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{item.title}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>


            {/* ── HOUSE RULES & POLICIES ── */}
            <section id="rules" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">PG House Rules & Code of Conduct</h2>
              <p className="text-slate-500 text-sm mb-6">Designed to keep our residence peaceful, safe, and disciplined</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { rule: "Smoking Strictly Prohibited", desc: "Inside bedrooms, corridors and common washrooms.", pass: false },
                  { rule: "Alcohol & Substances Banned", desc: "Zero tolerance policy with immediate security notice.", pass: false },
                  { rule: "Main Gate Closes at 11:00 PM", desc: "Late arrivals require prior management intimation via register.", pass: true },
                  { rule: "Quiet Study Hours (11 PM - 7 AM)", desc: "Maintain low volume in corridors and common study areas.", pass: true },
                  { rule: "Strict ₹10/Unit Power Metering", desc: "Sub-meter readings photographed on the 1st of every month.", pass: true },
                  { rule: "1+1 Month Security Deposit", desc: "Payable at admission, 100% refundable with 30-day notice.", pass: true },
                  { rule: "Visitor & Parent Timings", desc: "Visitors permitted in lobby between 10:00 AM – 07:00 PM.", pass: true },
                  { rule: "Lunch Delivery Timings", desc: "Intimate campus drop before 09:30 AM on weekdays.", pass: true },
                ].map((item) => (
                  <div
                    key={item.rule}
                    className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-black mt-0.5 ${
                        item.pass ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {item.pass ? "✓" : "✕"}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{item.rule}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LOCATION & NEIGHBOURHOOD ── */}
            <section id="location" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{property.landmarks.length ? "Location & Transit Distance" : "Location"}</h2>
                  <p className="text-slate-500 text-sm mt-0.5">{property.location}</p>
                </div>
                <a
                  href={property.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline !py-2 !px-4 !text-xs !rounded-xl"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {property.id === "2" && (
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <iframe
                    title="PASSION Residency location on Google Maps"
                    src={`${property.googleMapsUrl}&output=embed`}
                    className="h-80 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <p className="bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {property.title} · GPS: {property.mapCoordinates}
                  </p>
                </div>
              )}

              {/* Styled Interactive Mock Map */}
              {property.id !== "2" && <div className="h-64 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center shadow-inner">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(#94A3B8 1px, transparent 1px), radial-gradient(#94A3B8 1px, #F8FAFC 1px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 12px 12px",
                  }}
                />
                <div className="absolute w-full h-3 bg-white top-1/2 -rotate-3" />
                <div className="absolute w-3 h-full bg-white left-1/2 rotate-12" />

                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 text-center max-w-sm">
                  <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center mx-auto mb-2 shadow-md text-lg">
                    📍
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">{property.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Knowledge Park, Greater Noida</div>
                  <div className="mt-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                    Walking distance to top institutes & Aqua Line Metro
                  </div>
                </div>
              </div>}

              {/* Transit Distances */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {property.landmarks.map((l) => (
                  <div
                    key={l.name}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="text-base shrink-0">
                        {l.category === "Colleges" ? "🎓" : l.category === "Transit" ? "🚇" : l.category === "Shopping" ? "🛒" : "🏥"}
                      </span>
                      <span className="text-xs font-bold text-slate-800 truncate">{l.name}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-black text-[#059669]">{l.dist}</div>
                      <div className="text-[10px] text-slate-400">{l.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── RATINGS & REVIEWS ── */}
            <section id="reviews" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Student & Resident Reviews</h2>
                  <p className="text-slate-500 text-sm mt-0.5">Authentic feedback from verified residents</p>
                </div>

                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="btn-outline !py-2.5 !px-4 !text-xs !rounded-xl"
                >
                  ✍️ Write a Review
                </button>
              </div>

              {/* Rating Stats Summary */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-8 mb-6">
                <div className="text-center sm:text-left sm:pr-8 sm:border-r border-slate-200 shrink-0">
                  <div className="text-5xl font-black text-slate-900 tracking-tight">5.0</div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 my-1.5 text-emerald-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <SvgStar key={s} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-slate-500">Based on {reviews.length} reviews</div>
                </div>

                <div className="flex-1 w-full space-y-1.5 text-xs font-semibold">
                  {[
                    { stars: 5, pct: 100, count: reviews.length },
                    { stars: 4, pct: 0, count: 0 },
                    { stars: 3, pct: 0, count: 0 },
                    { stars: 2, pct: 0, count: 0 },
                    { stars: 1, pct: 0, count: 0 },
                  ].map((row) => (
                    <div key={row.stars} className="flex items-center gap-3">
                      <span className="w-8 text-slate-600 font-bold">{row.stars} stars</span>
                      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${row.pct}%` }} />
                      </div>
                      <span className="w-6 text-right text-slate-400 text-[11px]">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Filter Pills */}
              <div className="flex gap-2 mb-6">
                {[
                  { id: "all", label: "All Reviews" },
                  { id: "highest", label: "5-Star Only" },
                  { id: "students", label: "College Students" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setReviewFilter(f.id as typeof reviewFilter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      reviewFilter === f.id
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Review Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayReviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-950 text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
                          {rev.avatar}
                        </div>
                        <div>
                          <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                            <span>{rev.name}</span>
                            {rev.verified && (
                              <span className="text-emerald-600" title="Verified Resident">
                                <SvgCheck className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </div>
                          <div className="text-slate-400 text-xs">{rev.college}</div>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-600">
                        {rev.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-emerald-500">
                      {[1, 2, 3, 4, 5].slice(0, rev.rating).map((star) => (
                        <SvgStar key={star} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                      ))}
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">{rev.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ═══════════ RIGHT COLUMN (STICKY BOOKING CARD) ═══════════ */}
          <aside className="sticky top-28 w-full space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#059669]/20 shadow-xl shadow-slate-200/70 relative overflow-hidden">
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#059669] via-emerald-500 to-teal-400" />

              {/* Selected Room Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                  Active Selection
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  ● Available
                </span>
              </div>

              <div className="font-extrabold text-slate-900 text-lg leading-tight mb-2">
                {selectedRoom.type}
              </div>

              {/* Price Banner */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {selectedRoom.price}
                </span>
                <span className="text-xs font-bold text-slate-500">/ month</span>
              </div>

              {/* Highlights List */}
              <div className="space-y-2 py-4 border-y border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span>
                  <span>4 Meals Daily + Campus Lunch Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span>
                  <span>{selectedRoom.electricity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span>
                  <span>Deposit: {selectedRoom.deposit} (Refundable)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span>
                  <span>High-Speed Fiber Wi-Fi & Daily Sweeper</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-5 space-y-2.5">
                <a
                  href={`tel:${property.ownerPhone.replace(/\s+/g, "")}`}
                  className="w-full btn-primary !py-3.5 !text-sm !font-bold !rounded-2xl justify-center shadow-lg shadow-[#059669]/25"
                >
                  <SvgPhone className="w-4 h-4" />
                  <span>Call Owner: {property.ownerPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${property.ownerWhatsApp}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.title + " - " + selectedRoom.type
                  )}.%20Please%20share%20room%20availability.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100/80 border border-emerald-200/80 text-xs font-bold transition-all"
                >
                  <span>💬</span>
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] font-semibold text-slate-400">
                  🔒 Zero Brokerage Fee • Direct Owner Allotment
                </span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{property.ownerName}</div>
                  <div className="text-slate-500 text-[11px]">Knowledge Park Admissions Desk</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                  Verified Owner
                </span>
              </div>
              <div className="pt-2 flex items-center justify-between font-mono font-bold text-slate-800 border-t border-slate-200/60">
                <span className="text-sm">{property.ownerPhone}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(property.ownerPhone, "Phone number")}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-bold hover:bg-slate-50 transition-colors"
                  >
                    Copy
                  </button>
                  <a
                    href={`tel:${property.ownerPhone.replace(/\s+/g, "")}`}
                    className="px-3 py-1 rounded-lg bg-[#059669] text-white text-[11px] font-bold hover:bg-[#047857] transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ── MOBILE FIXED BOTTOM ACTION BAR ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-3.5 px-4 flex items-center justify-between shadow-2xl">
        <div>
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">Starting from</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl font-black text-slate-900">{selectedRoom.price}</span>
            <span className="text-[10px] text-slate-500 font-semibold">/mo</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${property.ownerWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg shadow-md"
            title="Chat on WhatsApp"
          >
            💬
          </a>
          <a
            href={`tel:${property.ownerPhone.replace(/\s+/g, "")}`}
            className="btn-primary !py-2.5 !px-4 !text-xs !rounded-xl flex items-center gap-1.5 font-bold"
          >
            <SvgPhone className="w-3.5 h-3.5" />
            <span>Call Owner</span>
          </a>
        </div>
      </div>

      {/* ── FULLSCREEN PHOTO GALLERY MODAL / LIGHTBOX ── */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in text-white overflow-hidden">
          {/* Floating Close Button */}
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all shadow-lg backdrop-blur-md"
            title="Close gallery (Esc)"
          >
            <SvgClose className="w-5 h-5" />
          </button>

          {/* Floating Photo Counter */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-30 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white/80">
            {galleryActiveIndex + 1} / {property.images.gallery.length}
          </div>

          {/* Main Large Image Display */}
          <div className="relative flex-1 max-w-5xl w-full mx-auto my-auto flex items-center justify-center min-h-0 pt-8 pb-2">
            {property.images.gallery[galleryActiveIndex] && (
              <div className="relative w-full h-[72vh] sm:h-[78vh] flex items-center justify-center">
                <Image
                  src={property.images.gallery[galleryActiveIndex].src}
                  alt={property.images.gallery[galleryActiveIndex].label}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/10 shadow-lg">
                  {property.images.gallery[galleryActiveIndex].label}
                </div>
              </div>
            )}

            {/* Prev / Next navigation arrows */}
            <button
              onClick={() =>
                setGalleryActiveIndex((prev) => (prev === 0 ? property.images.gallery.length - 1 : prev - 1))
              }
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all shadow-xl backdrop-blur-md"
              title="Previous photo (Left arrow)"
            >
              ◀
            </button>
            <button
              onClick={() =>
                setGalleryActiveIndex((prev) => (prev === property.images.gallery.length - 1 ? 0 : prev + 1))
              }
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all shadow-xl backdrop-blur-md"
              title="Next photo (Right arrow)"
            >
              ▶
            </button>
          </div>

          {/* Thumbnail Filmstrip */}
          <div className="max-w-4xl w-full mx-auto overflow-x-auto py-2 flex items-center justify-center gap-2 shrink-0">
            {property.images.gallery.map((thumb, idx) => (
              <button
                key={thumb.src}
                onClick={() => setGalleryActiveIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  galleryActiveIndex === idx ? "border-[#059669] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={thumb.src} alt={thumb.label} fill unoptimized className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}



      {/* ── WRITE REVIEW MODAL ── */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-slide-up">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <SvgClose className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-1">Write a Verified Review</h3>
            <p className="text-slate-500 text-xs mb-5">
              Share your genuine feedback on food quality, room cleanliness, and management behavior.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label htmlFor={revNameId} className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  id={revNameId}
                  required
                  type="text"
                  placeholder="e.g. Priya Deshmukh"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#059669]"
                />
              </div>

              <div>
                <label htmlFor={revCollegeId} className="block text-xs font-bold text-slate-700 mb-1">College or Company Name</label>
                <input
                  id={revCollegeId}
                  type="text"
                  placeholder="e.g. Sharda University (CSE 2nd Year)"
                  value={newReview.college}
                  onChange={(e) => setNewReview({ ...newReview, college: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#059669]"
                />
              </div>

              <div>
                <div className="block text-xs font-bold text-slate-700 mb-1">Your Rating *</div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="text-2xl transition-transform hover:scale-110"
                    >
                      <SvgStar
                        className={`w-7 h-7 ${star <= newReview.rating ? "text-emerald-500 fill-emerald-500" : "text-slate-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor={revTextId} className="block text-xs font-bold text-slate-700 mb-1">Detailed Review *</label>
                <textarea
                  id={revTextId}
                  required
                  rows={4}
                  placeholder="How was the food hygiene, Wi-Fi reliability, room cleaning, and lunch delivery?"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#059669] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary !py-3 !rounded-xl justify-center text-sm font-bold shadow-md shadow-[#059669]/20"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── FOOTER (Exact match to Home Page alignment & structure) ── */}
      <SiteFooter />
    </div>
  );
}

export default function PropertyDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-slate-500 font-semibold text-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-3 border-[#059669] border-t-transparent rounded-full animate-spin" />
            <span>Loading verified property details...</span>
          </div>
        </div>
      }
    >
      <PropertyDetailsContent paramsPromise={params} />
    </Suspense>
  );
}
