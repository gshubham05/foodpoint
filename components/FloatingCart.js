"use client";

import { useCart } from "./CartProvider";

// Mobile pe neeche chipka hua cart bar
export default function FloatingCart() {
  const { count, subtotal, setOpen, open } = useCart();
  if (count === 0 || open) return null;

  return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-4 left-4 right-4 z-30 mx-auto flex max-w-md items-center justify-between rounded-full bg-brand px-6 py-4 font-bold text-white shadow-2xl hover:bg-brand-dark"
    >
      <span>
        🛒 {count} item{count > 1 ? "s" : ""}
      </span>
      <span>₹{subtotal} · Cart dekho →</span>
    </button>
  );
}
