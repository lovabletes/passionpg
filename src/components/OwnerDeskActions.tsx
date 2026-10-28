"use client";

import { useState } from "react";
import { contactNumbers } from "@/data/contacts";

export default function OwnerDeskActions() {
  const [purpose, setPurpose] = useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }} onClick={() => setPurpose("List Your Property")} aria-expanded={purpose !== null} aria-controls="owner-desk-contact">
          🚀 List Your Property
        </button>
        <button type="button" className="btn-outline" style={{ fontSize: "1rem", padding: "15px 36px" }} onClick={() => setPurpose("Contact Owner Desk")} aria-expanded={purpose !== null} aria-controls="owner-desk-contact">
          📞 Contact Owner Desk
        </button>
      </div>
      {purpose && (
        <section id="owner-desk-contact" aria-label={purpose} className="mt-6 rounded-2xl border border-emerald-200 bg-white p-6 text-left shadow-sm" aria-live="polite">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900">{purpose}</h3>
            <button type="button" onClick={() => setPurpose(null)} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
          </div>
          <p className="mt-2 text-sm text-slate-600">Call or message our team using either number below.</p>
          <div className="mt-4 flex flex-col gap-4">
            {contactNumbers.map((number) => (
              <div key={number} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-emerald-50 p-4">
                <span className="font-bold text-slate-900">{number}</span>
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:+91${number}`} className="font-semibold text-emerald-800">Call</a>
                  <a href={`https://wa.me/91${number}?text=${encodeURIComponent(purpose === "List Your Property" ? "Hi, I would like to list my property on PassionPG." : "Hi, I would like to contact the PassionPG owner desk.")}`} target="_blank" rel="noreferrer" className="font-semibold text-emerald-800">WhatsApp ↗</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
