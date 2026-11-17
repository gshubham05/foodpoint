"use client";

import { useMemo, useState } from "react";
import ItemCard from "./ItemCard";
import { categories, items } from "../data/menu";

export default function MenuSection() {
  const [activeCat, setActiveCat] = useState("all");
  const [vegOnly, setVegOnly] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (activeCat !== "all" && i.cat !== activeCat) return false;
      if (vegOnly && !i.veg) return false;
      if (q && !(i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [activeCat, vegOnly, query]);

  // "All" view mein category ke hisaab se group karke dikhao
  const grouped = useMemo(() => {
    return categories
      .map((c) => ({ ...c, list: filtered.filter((i) => i.cat === c.id) }))
      .filter((c) => c.list.length > 0);
  }, [filtered]);

  return (
    <section id="menu" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Hamara Menu</h2>
            <p className="mt-1 text-ink/60">Apni pasand ki dish chuno aur cart mein daalo.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Dish search karo..."
              className="w-full rounded-full border border-orange-200 bg-cream px-4 py-2 text-sm outline-none focus:border-brand md:w-64"
            />
            <button
              onClick={() => setVegOnly((v) => !v)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                vegOnly ? "border-green-600 bg-green-600 text-white" : "border-green-600 text-green-700"
              }`}
            >
              🟢 Veg Only
            </button>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4">
          <button
            onClick={() => setActiveCat("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
              activeCat === "all" ? "bg-ink text-white" : "bg-cream text-ink hover:bg-brand-light"
            }`}
          >
            Sab kuch
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                activeCat === c.id ? "bg-ink text-white" : "bg-cream text-ink hover:bg-brand-light"
              }`}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        {grouped.length === 0 ? (
          <p className="py-16 text-center text-ink/60">Koi dish nahi mili. Dusra search ya filter try karo.</p>
        ) : (
          <div className="space-y-12">
            {grouped.map((c) => (
              <div key={c.id}>
                <h3 className="mb-4 text-xl font-extrabold text-ink">
                  {c.emoji} {c.name}
                </h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {c.list.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
