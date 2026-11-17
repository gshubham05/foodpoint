import ItemCard from "./ItemCard";
import { items } from "../data/menu";

export default function PopularPicks() {
  const popular = items.filter((i) => i.popular);

  return (
    <section id="popular" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-ink">Popular Picks</h2>
        <p className="mt-1 text-ink/60">Jo sabse zyada order hota hai, ek baar zaroor try karo.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
