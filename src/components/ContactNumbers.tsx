import { contactNumbers } from "@/data/contacts";

export default function ContactNumbers() {
  return (
    <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-emerald-700">
      {contactNumbers.map((number) => (
        <a key={number} href={`tel:+91${number}`}>
          Call: {number}
        </a>
      ))}
    </div>
  );
}
