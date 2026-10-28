import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PassionPG – Find Your Perfect PG & Hostel",
  description:
    "Discover premium paying guest accommodations and hostels near you. Safe, affordable, and fully-furnished rooms with all amenities included.",
  keywords: "PG, paying guest, hostel, accommodation, furnished rooms, student hostel",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

