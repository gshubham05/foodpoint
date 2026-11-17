// Menu data. Naya item add karna ho to items array mein ek object jod do.
// veg: true = vegetarian, popular: true = "Popular Picks" mein dikhega.

export const categories = [
  { id: "starters", name: "Tandoor & Starters", emoji: "🍢" },
  { id: "veg", name: "Main Course Veg", emoji: "🍛" },
  { id: "nonveg", name: "Main Course Non-Veg", emoji: "🍗" },
  { id: "biryani", name: "Biryani & Rice", emoji: "🍚" },
  { id: "breads", name: "Breads", emoji: "🫓" },
  { id: "chinese", name: "Chinese", emoji: "🍜" },
  { id: "momos", name: "Momos", emoji: "🥟" },
  { id: "quick", name: "Rolls, Pasta & Burgers", emoji: "🌯" },
  { id: "drinks", name: "Drinks & Desserts", emoji: "🥤" },
];

export const items = [
  // Tandoor & Starters
  { id: "s1", cat: "starters", name: "Paneer Tikka", price: 219, veg: true, popular: true, emoji: "🧀", desc: "Angeethi pe pakke marinated paneer cubes, pudina chutney ke saath." },
  { id: "s2", cat: "starters", name: "Tandoori Chaap", price: 189, veg: true, emoji: "🍢", desc: "Soya chaap, smoky tandoori masala mein." },
  { id: "s3", cat: "starters", name: "Chicken Tikka (8 pc)", price: 279, veg: false, popular: true, emoji: "🍗", desc: "Juicy chicken tikka, hari chutney aur pyaaz ke saath." },
  { id: "s4", cat: "starters", name: "Crispy Corn", price: 129, veg: true, emoji: "🌽", desc: "Crunchy corn, namak mirch aur chaat masala ke saath." },
  { id: "s5", cat: "starters", name: "Fish Amritsari (6 pc)", price: 299, veg: false, emoji: "🐟", desc: "Besan batter mein crispy fried fish." },

  // Main Course Veg
  { id: "v1", cat: "veg", name: "Paneer Butter Masala", price: 229, veg: true, popular: true, emoji: "🍛", desc: "Creamy tamatar gravy mein soft paneer." },
  { id: "v2", cat: "veg", name: "Dal Makhani", price: 189, veg: true, emoji: "🥣", desc: "Raat bhar dhimi aanch pe pakayi hui kaali dal." },
  { id: "v3", cat: "veg", name: "Kadhai Paneer", price: 239, veg: true, emoji: "🫕", desc: "Shimla mirch aur kadhai masala ka tadka." },
  { id: "v4", cat: "veg", name: "Mix Veg", price: 169, veg: true, emoji: "🥗", desc: "Mausmi sabziyan, ghar jaisa swaad." },

  // Main Course Non-Veg
  { id: "n1", cat: "nonveg", name: "Butter Chicken", price: 299, veg: false, popular: true, emoji: "🍗", desc: "Makhni gravy mein tandoori chicken, halka meetha aur creamy." },
  { id: "n2", cat: "nonveg", name: "Chicken Curry", price: 259, veg: false, emoji: "🍲", desc: "Desi masale ki traditional chicken curry." },
  { id: "n3", cat: "nonveg", name: "Mutton Rogan Josh", price: 369, veg: false, emoji: "🥘", desc: "Slow cooked mutton, Kashmiri mirch ke rang mein." },

  // Biryani & Rice
  { id: "b1", cat: "biryani", name: "Veg Dum Biryani", price: 179, veg: true, emoji: "🍚", desc: "Basmati chawal aur sabziyan, dum pe pakka hua." },
  { id: "b2", cat: "biryani", name: "Chicken Dum Biryani", price: 249, veg: false, popular: true, emoji: "🍛", desc: "Khushboodar basmati, tender chicken aur raita ke saath." },
  { id: "b3", cat: "biryani", name: "Jeera Rice", price: 99, veg: true, emoji: "🍚", desc: "Ghee aur jeera ka tadka lagaya hua chawal." },

  // Breads
  { id: "r1", cat: "breads", name: "Butter Naan", price: 45, veg: true, emoji: "🫓", desc: "Tandoor se seedha, upar se makhan." },
  { id: "r2", cat: "breads", name: "Garlic Naan", price: 59, veg: true, emoji: "🧄", desc: "Lahsun aur dhaniya ke saath." },
  { id: "r3", cat: "breads", name: "Tandoori Roti", price: 20, veg: true, emoji: "🫓", desc: "Gehu ki garam tandoori roti." },
  { id: "r4", cat: "breads", name: "Laccha Paratha", price: 49, veg: true, emoji: "🥞", desc: "Parat wala crispy paratha." },

  // Chinese
  { id: "c1", cat: "chinese", name: "Veg Hakka Noodles", price: 139, veg: true, emoji: "🍜", desc: "Wok mein tosse hue noodles, taaza sabziyan." },
  { id: "c2", cat: "chinese", name: "Chicken Hakka Noodles", price: 169, veg: false, emoji: "🍜", desc: "Chicken ke tukde aur chatpata sauce." },
  { id: "c3", cat: "chinese", name: "Veg Manchurian (Gravy)", price: 159, veg: true, popular: true, emoji: "🥘", desc: "Crispy veg balls, tikhi manchurian gravy mein." },
  { id: "c4", cat: "chinese", name: "Chilli Chicken (8 pc)", price: 279, veg: false, emoji: "🌶️", desc: "Indo-Chinese style tikha chilli chicken." },
  { id: "c5", cat: "chinese", name: "Hot & Sour Soup", price: 99, veg: true, emoji: "🍲", desc: "Garma garam, khatti aur teekhi." },

  // Momos
  { id: "m1", cat: "momos", name: "Veg Steamed Momos (8 pc)", price: 89, veg: true, popular: true, emoji: "🥟", desc: "Pahadi style momos, laal chutney ke saath." },
  { id: "m2", cat: "momos", name: "Chicken Steamed Momos (8 pc)", price: 119, veg: false, emoji: "🥟", desc: "Juicy chicken filling, soft wrapper." },
  { id: "m3", cat: "momos", name: "Paneer Fried Momos (8 pc)", price: 129, veg: true, emoji: "🥟", desc: "Bahar se crispy, andar se soft paneer." },
  { id: "m4", cat: "momos", name: "Peri Peri Momos (8 pc)", price: 139, veg: true, emoji: "🌶️", desc: "Peri peri masale mein tosse hue momos." },

  // Rolls, Pasta & Burgers
  { id: "q1", cat: "quick", name: "Paneer Tikka Roll", price: 109, veg: true, popular: true, emoji: "🌯", desc: "Paneer tikka, pyaaz aur chutney, soft roll mein." },
  { id: "q2", cat: "quick", name: "Chicken Seekh Roll", price: 139, veg: false, emoji: "🌯", desc: "Seekh kebab ke saath laccha pyaaz." },
  { id: "q3", cat: "quick", name: "White Sauce Pasta (Veg)", price: 159, veg: true, emoji: "🍝", desc: "Creamy white sauce, herbs aur cheese." },
  { id: "q4", cat: "quick", name: "Red Sauce Pasta (Chicken)", price: 189, veg: false, emoji: "🍝", desc: "Tikhi tamatar sauce mein chicken." },
  { id: "q5", cat: "quick", name: "Veg Cheese Burger", price: 119, veg: true, emoji: "🍔", desc: "Crispy patty, cheese slice aur fresh veggies." },

  // Drinks & Desserts
  { id: "d1", cat: "drinks", name: "Masala Chaas", price: 39, veg: true, emoji: "🥛", desc: "Thandi, jeera wali chaas." },
  { id: "d2", cat: "drinks", name: "Fresh Lime Soda", price: 59, veg: true, emoji: "🍋", desc: "Meetha ya namkeen, jaisa pasand." },
  { id: "d3", cat: "drinks", name: "Cold Coffee", price: 99, veg: true, emoji: "🧋", desc: "Creamy, thandi cold coffee." },
  { id: "d4", cat: "drinks", name: "Gulab Jamun (2 pc)", price: 69, veg: true, emoji: "🍮", desc: "Garam garam, chashni mein dooba hua." },
];
