# Food Point

Next.js 14 + Tailwind CSS restaurant ordering website. Cart WhatsApp par order bhejta hai, to koi backend ya database nahi chahiye.

## Run karna

```bash
npm install
npm run dev
```

Browser mein http://localhost:3000 kholo.

## Customize kaise karein

- `data/config.js`: business ka naam, phone, WhatsApp number, address, timing, delivery fee
- `data/menu.js`: categories aur dishes (naam, price, veg/non-veg, popular)
- `tailwind.config.js`: brand colors

WhatsApp number `data/config.js` mein country code ke saath likho, bina + ya space ke (jaise `919876543210`).

## Production

```bash
npm run build
npm start
```

Vercel par deploy karna sabse aasaan hai.
