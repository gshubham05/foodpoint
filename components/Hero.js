import { site } from "../data/config";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-light to-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand shadow-card">
            🔥 Garma garam, taaza banta hai
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-ink/70">
            Indian, Chinese, Tandoor, Biryani, Momos aur aur bhi bahut kuch, ek hi jagah. Order karo, hum 30 se 40 minute mein pahuncha denge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-brand px-7 py-3 font-bold text-white shadow-card hover:bg-brand-dark">
              Order Now
            </a>
            <a href="#popular" className="rounded-full border-2 border-ink px-7 py-3 font-bold text-ink hover:bg-ink hover:text-white">
              Popular Dishes
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
            <li>✅ Fresh ingredients</li>
            <li>🛵 Home delivery</li>
            <li>🥡 Pickup & Dine-in</li>
          </ul>
        </div>

        <div className="relative mx-auto grid max-w-sm grid-cols-2 gap-4">
          {[
            { e: "🍛", t: "Biryani", c: "bg-amber-100" },
            { e: "🥟", t: "Momos", c: "bg-rose-100" },
            { e: "🍢", t: "Tandoor", c: "bg-orange-100" },
            { e: "🍜", t: "Chinese", c: "bg-lime-100" },
          ].map((x) => (
            <div key={x.t} className={`${x.c} flex aspect-square flex-col items-center justify-center rounded-3xl shadow-card`}>
              <span className="text-6xl">{x.e}</span>
              <span className="mt-2 font-bold text-ink">{x.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
