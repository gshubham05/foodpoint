import { site } from "../data/config";

export default function About() {
  const points = [
    { e: "🥬", t: "Fresh Ingredients", d: "Roz subah taaza sabzi aur masale, koi shortcut nahi." },
    { e: "👨‍🍳", t: "Ghar Jaisa Swaad", d: "Authentic recipes, sahi aanch aur sahi time pe pakayi hui." },
    { e: "🛵", t: "Fast Delivery", d: "Garma garam khana seedha aapke darwaze tak." },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-ink">About {site.name}</h2>
          <p className="mt-4 text-lg text-ink/70">
            {site.name} mein hum alag alag cuisines ka swaad ek hi chhat ke neeche laate hain. Indian, Chinese, Tandoor, Biryani, Momos, Pasta aur bahut kuch, har craving ke liye kuch na kuch hai.
          </p>
          <p className="mt-4 font-bold text-brand">Fresh. Flavourful. Made with care.</p>
        </div>
        <div className="grid gap-4">
          {points.map((p) => (
            <div key={p.t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
              <span className="text-3xl">{p.e}</span>
              <div>
                <h3 className="font-bold text-ink">{p.t}</h3>
                <p className="text-sm text-ink/60">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
