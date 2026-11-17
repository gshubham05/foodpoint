import { site } from "../data/config";

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-extrabold">
            Food<span className="text-brand"> Point</span>
          </h3>
          <p className="mt-3 text-sm text-white/70">{site.description}</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              📞 <a className="hover:text-brand" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              ✉️ <a className="hover:text-brand" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              📍 {site.address}{" "}
              <a className="text-brand underline" href={mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Timing & Payment</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>🕚 {site.hours}</li>
            <li>💳 {site.upiNote}</li>
            <li>🛵 Free delivery ₹{site.freeDeliveryAbove} se upar ke order par</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
