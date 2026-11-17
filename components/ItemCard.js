"use client";

import { useCart } from "./CartProvider";

export function VegBadge({ veg }) {
  const color = veg ? "border-green-600" : "border-red-600";
  const dot = veg ? "bg-green-600" : "bg-red-600";
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded-sm border-2 ${color}`}
      title={veg ? "Veg" : "Non-Veg"}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} />
    </span>
  );
}

export default function ItemCard({ item }) {
  const { getQty, add, dec } = useCart();
  const qty = getQty(item.id);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="flex h-28 items-center justify-center bg-gradient-to-br from-brand-light to-amber-100 text-6xl">
        {item.emoji}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold leading-snug text-ink">{item.name}</h3>
          <VegBadge veg={item.veg} />
        </div>
        <p className="mt-1 flex-1 text-sm text-ink/60">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-ink">₹{item.price}</span>
          {qty === 0 ? (
            <button
              onClick={() => add(item)}
              className="rounded-full border-2 border-brand px-5 py-1.5 text-sm font-bold text-brand hover:bg-brand hover:text-white"
            >
              Add +
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-full bg-brand px-3 py-1.5 text-white">
              <button onClick={() => dec(item.id)} className="px-1 text-lg font-bold leading-none" aria-label="Kam karo">
                −
              </button>
              <span className="min-w-[1ch] text-sm font-bold">{qty}</span>
              <button onClick={() => add(item)} className="px-1 text-lg font-bold leading-none" aria-label="Badhao">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
