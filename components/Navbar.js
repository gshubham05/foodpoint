"use client";

import { site } from "../data/config";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { count, setOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg text-white">🍽️</span>
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Food<span className="text-brand"> Point</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex">
          <a href="#home" className="hover:text-brand">Home</a>
          <a href="#popular" className="hover:text-brand">Popular</a>
          <a href="#menu" className="hover:text-brand">Menu</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="hidden rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand-light sm:block"
          >
            📞 Call
          </a>
          <button
            onClick={() => setOpen(true)}
            className="relative rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            aria-label="Cart kholo"
          >
            🛒 Cart
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-ink px-1 text-xs">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
