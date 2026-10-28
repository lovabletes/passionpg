import ContactNumbers from "@/components/ContactNumbers";

export default function ListYourPG() {
  return (
    <details className="relative">
      <summary className="btn-primary list-none cursor-pointer [&::-webkit-details-marker]:hidden" style={{ padding: "10px 24px", fontSize: "0.88rem" }}>
        List Your PG
      </summary>
      <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-emerald-200 bg-white p-5 shadow-xl">
        <p className="font-bold text-slate-900">List your property</p>
        <p className="mt-1 text-sm text-slate-600">Contact our team:</p>
        <ContactNumbers />
      </div>
    </details>
  );
}
