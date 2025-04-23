// Create a function to shuffle an array
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Original product data
const originalProducts = [
  {
    id: 1,
    name: "Nat Habit Kacchi Neem Wooden Comb",
    description: "Soaked in 13 herbs, neem & sesame oil for detangling, frizz control & shine.",
    detailedDescription:
      "Handcrafted from antimicrobial neem wood, this Ayurvedic comb features wide-spaced teeth for gentle detangling. Infused with 13 herbal oils to nourish scalp, reduce dandruff, and promote hair growth. 100% biodegradable and sustainable.",
    price: 197.0,
    image: "p3.jpg",
    link: "https://www.amazon.in/Nat-Habit-Hairfall-Straightening-Bhringraj/dp/B09GKXLVBZ",
    features: [
      "Natural neem wood construction",
      "Herbal oil infusion",
      "Reduces static and breakage",
      "Biodegradable packaging",
    ],
    category: "bathroom",
  },
  {
    id: 2,
    name: "ECO SOUL Biodegradable Ripple Cups",
    description: "Sturdy, microwave safe, brown, eco-friendly hot cups.",
    detailedDescription:
      "Made from renewable bamboo fiber, these compostable cups withstand temperatures up to 100°C. Ripple design ensures secure grip, while natural brown color avoids harmful dyes. Breaks down in 12 weeks in compost.",
    price: 200.0,
    image: "p6.jpg",
    link: "https://www.amazon.in/ECO-SOUL-Biodegradable-Sustainable-Eco-Friendly/dp/B0CP9ML7TV",
    features: ["100% plant-based materials", "Microwave and freezer safe", "Leak-proof design", "FDA approved"],
    category: "kitchen",
  },
  {
    id: 3,
    name: "Sow and Grow Plantable Seed Paper Pen",
    description: "Eco-friendly, sustainable, and biodegradable pens made from recycled materials.",
    detailedDescription:
      "Body made from recycled newspaper embedded with basil seeds. After use, plant the pen body to grow herbs. Ink is non-toxic and soy-based. Packaging doubles as planting pot.",
    price: 593.0,
    image: "p5.jpg",
    link: "https://www.amazon.in/Sow-Grow-Individually-Eco-Friendly-Biodegradable/dp/B0C1GX1JWL",
    features: ["Grows into basil plant", "Soy-based ink", "Recycled newspaper body", "Zero plastic components"],
    category: "home",
  },
  {
    id: 4,
    name: "Jute Club Reusable Vegetable Bags",
    description: "Eco-friendly, reusable, and washable jute vegetable bags.",
    detailedDescription:
      "Set of 5 breathable jute bags with drawstring closure. Natural fiber prevents produce sweating, extends freshness. Machine washable. Supports fair trade practices.",
    price: 359.0,
    image: "p4.jpg",
    link: "https://www.amazon.in/Jute-Club-Friendly-Vegetable-Reusable/dp/B0CYDRKFQH",
    features: ["100% organic jute", "Reinforced stitching", "Weight: 200 GSM", "Carries up to 5kg"],
    category: "home",
  },
  {
    id: 5,
    name: "Dencrus NATURAL CLEAN Bamboo Toothbrush",
    description: "Biodegradable and compostable handle with charcoal activated soft bristles.",
    detailedDescription:
      "Bamboo handle with charcoal-infused nylon-4 bristles. BPA-free, antimicrobial properties. 100% compostable (snap off head for recycling). Angled head for better reach.",
    price: 149.0,
    image: "p2.jpg",
    link: "https://www.amazon.in/Toothbrush-Activated-Biodegradable-Compostable-Eco-friendly/dp/B0D9MCFTTL",
    features: ["Mosuo bamboo handle", "Charcoal bristles", "Ergonomic design", "6-month compost cycle"],
    category: "bathroom",
  },
  {
    id: 6,
    name: "Non-Coated Eco-Friendly Paper Plates",
    description: "Eco-friendly, non-coated, recyclable paper plates.",
    detailedDescription:
      "Made from 100% recycled sugarcane fiber. Oil and water resistant without plastic coating. Holds hot foods up to 95°C. Composts in 60 days.",
    price: 250.0,
    image: "p1.jpg",
    link: "https://www.amazon.in/AIPL-Non-Coated-Eco-Friendly-Recyclable-Non-Printed/dp/B0BX9Y3XC9",
    features: ["12-inch diameter", "Holds 500ml liquid", "Microwave safe", "Unbleached material"],
    category: "kitchen",
  },
  {
    id: 7,
    name: "Reusable Silicone Food Storage Bags",
    description: "Leak-proof, freezer-safe, and dishwasher-friendly silicone food storage bags.",
    detailedDescription:
      "Plastic-free alternative with airtight seal. Withstands -40°C to 230°C. Non-toxic platinum silicone. Includes date tracker and write-on surface.",
    price: 499.0,
    image: "silbag.jpg",
    link: "https://www.amazon.in/SGMSC-Eco-Friendly-Preservation-Leakproof-Microwave/dp/B08W25KH9N",
    features: ["3 sizes (S/M/L)", "Stackable design", "FDA grade silicone", "10-year warranty"],
    category: "kitchen",
  },
  {
    id: 8,
    name: "Bamboo Fiber Dish Cloths",
    description: "Absorbent, quick-drying, and naturally antibacterial dish cloths.",
    detailedDescription:
      "8-pack of reusable cloths made from 70% bamboo fiber + 30% cotton. Replaces 15 rolls of paper towels. Machine washable up to 100 times.",
    price: 299.0,
    image: "dishclothes.webp",
    link: "https://www.amazon.in/Beco-Eco-Friendly-Reusable-Kitchen-Towel/dp/B07PJQX981?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A15APWRK6P7LBV&gPromoCode=sns_in_en_15_2025Q1&th=1",
    features: ["40x40cm size", "300 GSM weight", "Oeko-Tex certified", "Dries 50% faster"],
    category: "kitchen",
  },
  {
    id: 9,
    name: "Solar-Powered Outdoor Lights",
    description: "Energy-efficient, weather-resistant solar lights for garden and patio.",
    detailedDescription:
      "Set of 6 LED lights with dusk-to-dawn operation. IP65 waterproof rating. 2000mAh battery provides 12hr runtime. Stainless steel construction.",
    price: 799.0,
    image: "solar.webp",
    link: "https://www.flipkart.com/flyder-security-motion-sensor-solar-light-home-garden-restaurant-set/p/itmaf97e7b41d9de?pid=SLEGWEFVQPZ7VRNG&lid=LSTSLEGWEFVQPZ7VRNG5Y6JCI&marketplace=FLIPKART&cmpid=content_solar-light-set_8965229628_gmc",
    features: ["2 lighting modes", "Adjustable panels", "2h charge = 8h light", "5-year lifespan"],
    category: "outdoor",
  },
  {
    id: 10,
    name: "Organic Cotton Tote Bag",
    description: "Durable, washable, and eco-friendly shopping bag made from organic cotton.",
    detailedDescription:
      "GOTS certified organic cotton. Reinforced seams support 25kg weight. Features inner pocket and flat base. Printed with vegetable-based dyes.",
    price: 399.0,
    image: "tote.webp",
    link: "https://blily.in/shop/stylish-100-organic-tote-bags/?wcpbc-manual-country=IN&srsltid=AfmBOoomx6qsSBc7sQJjPKKe9kpjnVALg1A7zJDO1Ta3lQ38KGJ6yEICp50",
    features: ["40x40x10cm dimensions", "300 GSM fabric", "Machine washable", "Supports 25kg"],
    category: "home",
  },
  {
    id: 11,
    name: "Stainless Steel Lunch Box Set",
    description: "Leak-proof, BPA-free stainless steel containers for food storage.",
    detailedDescription:
      "3-tier system with vacuum insulation. Keeps food hot 6hrs/cold 12hrs. Includes bamboo cutlery set and carrying pouch. Dishwasher safe.",
    price: 899.0,
    image: "lunchh.webp",
    link: "https://www.meesho.com/stainless-steel-lunch-box-set/p/79g7ox",
    features: ["1000ml capacity", "18/8 stainless steel", "Non-slip silicone grip", "Lifetime warranty"],
    category: "kitchen",
  },
  {
    id: 12,
    name: "Biodegradable Phone Case",
    description: "Protective phone case made from compostable materials.",
    detailedDescription:
      "Made from flax straw and plant-based polymers. Shock-absorbent design. Breaks down in 6 months in compost. Compatible with wireless charging.",
    price: 599.0,
    image: "phone case.jpg",
    link: "https://www.amazon.in/Biodegradable-Plastic-Friendly-Compostable-Zero-Waste/dp/B0BCGTQ2D4",
    features: ["2m drop protection", "0.8mm thickness", "Supports MagSafe", "Composts in 180 days"],
    category: "home",
  },
  {
    id: 13,
    name: "Reusable Produce Mesh Bags",
    description: "Set of washable, see-through mesh bags for fruits and vegetables.",
    detailedDescription:
      "5-pack of lightweight bags with tare weight labels. Made from recycled PET bottles. Machine washable, dries quickly. Reduces plastic use by 90%.",
    price: 349.0,
    image: "mesh.jpg",
    link: "https://www.amazon.in/Friendly-Weight-Reusable-Produce-Vegetable/dp/B0CBCG1CB1",
    features: ["30x40cm size", "Gusseted design", "Tare weight printed", "0.2oz weight"],
    category: "kitchen",
  },
  {
    id: 14,
    name: "Bamboo Cutlery Travel Set",
    description: "Portable, reusable bamboo utensils with carrying case.",
    detailedDescription:
      "Includes bamboo spork, knife, chopsticks, and straw. Comes with organic cotton pouch. FDA-approved food-safe finish. Weighs just 80g.",
    price: 449.0,
    image: "cutelery.webp",
    link: "https://www.meesho.com/bamboo-cutlery-set-travel-cutlery-set/p/15enkn",
    features: ["4-in-1 set", "Water-resistant case", "Naturally antibacterial", "1-year warranty"],
    category: "kitchen",
  },
  {
    id: 15,
    name: "Natural Loofah Sponges",
    description: "Biodegradable, exfoliating bath and kitchen sponges.",
    detailedDescription:
      "Grown organically, hand-harvested loofahs. Great for body scrub or dish cleaning. Lasts 2-3 months. Composts completely in 8 weeks.",
    price: 199.0,
    image: "loofah.jpg",
    link: "https://www.amazon.in/dp/B08LYJ5DTC/?_encoding=UTF8&_encoding=UTF8&pd_rd_i=B08LYJ5DTC&ref_=sxts_sparkle_sbv&ref_=sbx_be_s_sparkle_ssd_vid&qid=1744638161&pd_rd_w=99ki5&content-id=amzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d%3Aamzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_p=df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_r=702KBD8FS2QEBS3G0T5E&pd_rd_wg=IAY9q&pd_rd_r=12844493-c9f3-424c-bcf9-99b1f263dc4f",
    features: ["2-pack", "15cm length", "Natural exfoliation", "Vegan & cruelty-free"],
    category: "bathroom",
  },
  {
    id: 16,
    name: "Recycled Plastic Outdoor Rug",
    description: "Durable, weather-resistant rug made from recycled plastic bottles.",
    detailedDescription:
      "2x3m rug woven from 15,000 recycled PET bottles. UV-resistant colors. Easy to clean with hose. Includes anti-slip backing.",
    price: 1299.0,
    image: "rug.webp",
    link: "https://www.meesho.com/nature-miracle-recycled-rug-size-inches-2436quantity-of-1/p/2lz12r",
    features: ["5-year warranty", "Mold & mildew resistant", "20 color options", "Withstands -20°C to 60°C"],
    category: "outdoor",
  },
  // Ayurvedic products
  {
    id: 17,
    name: "Be-Pure Syrup",
    description: "Ayurvedic herbal syrup for detoxification and purification of blood.",
    detailedDescription:
      "Be-Pure Syrup is an Ayurvedic formulation designed to cleanse and purify the blood. Contains natural herbs that help remove toxins from the body, improve skin health, and boost overall immunity.",
    price: 517.86,
    image: "https://www.vaidyansh777.com/web/image/product.template/20/image_512/Be-Pure%20Syrup?unique=804ec32",
    link: "https://www.vaidyansh777.com/shop/be-pure-syrup-20",
    features: [
      "Natural Ayurvedic ingredients",
      "No artificial preservatives",
      "Helps in detoxification",
      "Improves skin health",
    ],
    category: "health",
  },
  {
    id: 18,
    name: "Be-Pure Syrup (SUGAR FREE)",
    description: "Sugar-free Ayurvedic herbal syrup for detoxification, suitable for diabetics.",
    detailedDescription:
      "Sugar-free version of the Be-Pure Syrup, specially formulated for those with diabetes or those avoiding sugar. Contains the same powerful Ayurvedic herbs for blood purification and detoxification.",
    price: 517.86,
    image:
      "https://www.vaidyansh777.com/web/image/product.template/28/image_512/Be-Pure%20Syrup%20(SUGAR%20FREE)?unique=0b2fdfa",
    link: "https://www.vaidyansh777.com/shop/be-pure-syrup-sugar-free-28",
    features: [
      "Sugar-free formulation",
      "Diabetic-friendly",
      "Natural Ayurvedic ingredients",
      "Helps in detoxification",
    ],
    category: "health",
  },
  {
    id: 19,
    name: "Glamour Stone Free Syrup",
    description: "Ayurvedic syrup for kidney and gallbladder stone prevention and treatment.",
    detailedDescription:
      "Glamour Stone Free Syrup is an Ayurvedic formulation designed to help prevent and treat kidney and gallbladder stones. Contains herbs that help dissolve stones naturally and improve urinary tract health.",
    price: 214.29,
    image:
      "https://www.vaidyansh777.com/web/image/product.template/29/image_512/Glamour%20Stone%20Free%20Syrup?unique=88ed0d3",
    link: "https://www.vaidyansh777.com/shop/glamour-stone-free-syrup-29",
    features: [
      "Helps dissolve kidney stones",
      "Prevents stone formation",
      "Improves urinary tract health",
      "100% natural ingredients",
    ],
    category: "health",
  },
  {
    id: 20,
    name: "RE-FIT SYRUP (PACK OF 2)",
    description: "Dual pack of Ayurvedic syrup for digestive health and metabolism boost.",
    detailedDescription:
      "Value pack containing two bottles of RE-FIT Syrup. This Ayurvedic formulation helps improve digestion, boost metabolism, and support weight management. Contains herbs that enhance the body's natural digestive processes.",
    price: 799.0,
    image:
      "https://www.vaidyansh777.com/web/image/product.template/26/image_512/RE-FIT%20SYRUP%20(PACK%20OF%202)?unique=65ab3fa",
    link: "https://www.vaidyansh777.com/shop/re-fit-syrup-pack-of-2-26",
    features: ["Value pack of two bottles", "Improves digestion", "Supports metabolism", "Aids in weight management"],
    category: "health",
  },
  {
    id: 21,
    name: "Re-Fit Syrup",
    description: "Ayurvedic syrup for improved digestion and metabolism support.",
    detailedDescription:
      "Re-Fit Syrup is an Ayurvedic formulation that helps improve digestive health, boost metabolism, and support weight management. Contains traditional herbs that enhance the body's natural digestive processes and nutrient absorption.",
    price: 526.78,
    image: "https://www.vaidyansh777.com/web/image/product.template/19/image_512/Re-Fit%20Syrup?unique=a384b7c",
    link: "https://www.vaidyansh777.com/shop/re-fit-syrup-19",
    features: [
      "Improves digestion",
      "Boosts metabolism",
      "Supports weight management",
      "Natural Ayurvedic ingredients",
    ],
    category: "health",
  },
  {
    id: 22,
    name: "Re-fit Syrup (Sugar free)",
    description: "Sugar-free Ayurvedic syrup for digestion and metabolism, suitable for diabetics.",
    detailedDescription:
      "Sugar-free version of the Re-Fit Syrup, specially formulated for those with diabetes or those avoiding sugar. Contains the same powerful Ayurvedic herbs to improve digestion, boost metabolism, and support weight management.",
    price: 526.78,
    image:
      "https://www.vaidyansh777.com/web/image/product.template/27/image_512/Re-fit%20Syrup%20(Sugar%20free)?unique=31f6879",
    link: "https://www.vaidyansh777.com/shop/re-fit-syrup-sugar-free-27",
    features: ["Sugar-free formulation", "Diabetic-friendly", "Improves digestion", "Supports weight management"],
    category: "health",
  },
]

// Separate Ayurvedic products and other products
const ayurvedicProducts = originalProducts.filter((p) => p.id >= 17 && p.id <= 22)
const otherProducts = originalProducts.filter((p) => p.id < 17)

// Shuffle both arrays
const shuffledAyurvedic = shuffleArray(ayurvedicProducts)
const shuffledOther = shuffleArray(otherProducts)

// Create the final shuffled array with Ayurvedic products in alternating positions
const products = []
let ayurvedicIndex = 0
let otherIndex = 0

// Fill the array with products, placing Ayurvedic products at positions 1, 3, 5, 7, etc. (0-indexed)
for (let i = 0; i < originalProducts.length; i++) {
  if (i % 2 === 1 && ayurvedicIndex < shuffledAyurvedic.length) {
    // Odd positions (2nd, 4th, 6th, etc. in 1-indexed counting)
    products.push(shuffledAyurvedic[ayurvedicIndex])
    ayurvedicIndex++
  } else if (otherIndex < shuffledOther.length) {
    // Even positions or after we've used all Ayurvedic products
    products.push(shuffledOther[otherIndex])
    otherIndex++
  } else if (ayurvedicIndex < shuffledAyurvedic.length) {
    // If we've used all other products but still have Ayurvedic products
    products.push(shuffledAyurvedic[ayurvedicIndex])
    ayurvedicIndex++
  }
}

export { products }
