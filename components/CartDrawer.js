"use client";

import { useState } from "react";
import { site } from "../data/config";
import { useCart } from "./CartProvider";
import { VegBadge } from "./ItemCard";

const ORDER_TYPES = [
  { id: "Delivery", label: "🛵 Delivery" },
  { id: "Pickup", label: "🥡 Pickup" },
  { id: "Dine-in", label: "🍽️ Dine-in" },
];

export default function CartDrawer() {
  const { items, subtotal, open, setOpen, add, dec, remove, clear } = useCart();
  const [type, setType] = useState("Delivery");
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [error, setError] = useState("");

  if (!open) return null;

  const isDelivery = type === "Delivery";
  const deliveryFee = isDelivery && subtotal > 0 && subtotal < site.freeDeliveryAbove ? site.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function placeOrder() {
    setError("");
    if (items.length === 0) return setError("Cart khali hai.");
    if (subtotal < site.minOrder) return setError(`Minimum order ₹${site.minOrder} ka hona chahiye.`);
    if (!form.name.trim()) return setError("Apna naam likho.");
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) return setError("Sahi 10 digit mobile number daalo.");
    if (isDelivery && form.address.trim().length < 8) return setError("Poora delivery address likho.");

    const lines = items.map((i, idx) => `${idx + 1}. ${i.name} x ${i.qty} = ₹${i.qty * i.price}`);
    const message = [
      `*Naya Order - ${site.name}*`,
      ``,
      `Order type: ${type}`,
      `Naam: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      isDelivery ? `Address: ${form.address.trim()}` : null,
      ``,
      `*Items:*`,
      ...lines,
      ``,
      `Subtotal: ₹${subtotal}`,
      isDelivery ? `Delivery: ${deliveryFee === 0 ? "Free" : "₹" + deliveryFee}` : null,
      `*Total: ₹${total}*`,
      form.note.trim() ? `\nNote: ${form.note.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    clear();
    setOpen(false);
  }

  const inputCls =
    "w-full rounded-xl border border-orange-200 bg-cream px-3 py-2 text-sm outline-none focus:border-brand";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-xl font-extrabold text-ink">Aapka Cart</h2>
          <button onClick={() => setOpen(false)} className="text-2xl leading-none text-ink/60 hover:text-ink" aria-label="Band karo">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-20 text-center text-ink/60">
              <p className="text-5xl">🛒</p>
              <p className="mt-3">Cart abhi khali hai.</p>
              <button onClick={() => setOpen(false)} className="mt-4 font-semibold text-brand underline">
                Menu dekho
              </button>
            </div>
          ) : (
            <>
              <ul className="divide-y">
                {items.map((i) => (
                  <li key={i.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <VegBadge veg={i.veg} />
                        <span className="truncate font-semibold text-ink">{i.name}</span>
                      </div>
                      <button onClick={() => remove(i.id)} className="mt-1 text-xs text-red-600 hover:underline">
                        Hatao
                      </button>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <div className="flex items-center gap-3 rounded-full bg-brand px-3 py-1 text-white">
                        <button onClick={() => dec(i.id)} className="font-bold" aria-label="Kam karo">−</button>
                        <span className="text-sm font-bold">{i.qty}</span>
                        <button onClick={() => add(i)} className="font-bold" aria-label="Badhao">+</button>
                      </div>
                      <span className="w-16 text-right font-bold">₹{i.qty * i.price}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {ORDER_TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold ${
                      type === t.id ? "border-brand bg-brand text-white" : "border-orange-200 text-ink hover:bg-brand-light"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <input className={inputCls} placeholder="Aapka naam" value={form.name} onChange={update("name")} />
                <input className={inputCls} placeholder="Mobile number" inputMode="numeric" value={form.phone} onChange={update("phone")} />
                {isDelivery && (
                  <textarea
                    className={inputCls}
                    rows={2}
                    placeholder="Poora delivery address (ghar/flat no., area, landmark)"
                    value={form.address}
                    onChange={update("address")}
                  />
                )}
                <input className={inputCls} placeholder="Koi special request? (optional)" value={form.note} onChange={update("note")} />
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-5 py-4">
            <div className="space-y-1 text-sm text-ink/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {isDelivery && (
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                </div>
              )}
              <div className="flex justify-between pt-1 text-lg font-extrabold text-ink">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
            <button
              onClick={placeOrder}
              className="mt-3 w-full rounded-full bg-leaf py-3 font-bold text-white hover:opacity-90"
            >
              WhatsApp pe Order Karo
            </button>
            <p className="mt-2 text-center text-xs text-ink/50">Order WhatsApp par aayega, hum confirm kar denge.</p>
          </div>
        )}
      </aside>
    </div>
  );
}
