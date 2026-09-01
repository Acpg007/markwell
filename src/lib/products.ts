export const categories = [
  {
    id: "valves",
    name: "Valves",
    blurb: "Gate, globe, ball, butterfly, check, foot and Y-strainers.",
    image: "/images/products/globe-valve.jpg",
  },
  {
    id: "pipes",
    name: "Pipes",
    blurb: "MS, CS, SS and GI — Schedule 40 / 80, ERW and seamless.",
    image: "/images/products/pipes.jpg",
  },
  {
    id: "flanges",
    name: "Flanges",
    blurb: "Slip-on, weld neck, socket weld and blind. PN16 / Class 150.",
    image: "/images/products/flanges.jpg",
  },
  {
    id: "weld-fittings",
    name: "MS Welding Fittings",
    blurb: "Butt-weld elbows, tees, reducers and caps in MS and SS.",
    image: "/images/products/weld-fittings.jpg",
  },
  {
    id: "threaded-fittings",
    name: "Threaded Fittings",
    blurb: "CS 1000 / 2000 / 3000 / 6000 psi plus MI, GI, SS and brass.",
    image: "/images/products/threaded-fittings.jpg",
  },
  {
    id: "hose-camlock",
    name: "Hose & Camlock",
    blurb: "Aluminium camlocks A–F, hose nipples and pneumatic fittings.",
    image: "/images/products/camlocks.jpg",
  },
  {
    id: "fasteners",
    name: "Fasteners",
    blurb: "SS, MS and GI nuts, bolts and washers — all types.",
    image: "/images/products/threaded-fittings.jpg",
  },
  {
    id: "gaskets",
    name: "Gaskets & Seals",
    blurb: "Spiral wound, rubber and non-asbestos, PN16 / Class 150.",
    image: "/images/products/flanges.jpg",
  },
  {
    id: "supplies",
    name: "Workshop Supplies",
    blurb: "Cutting wheels, grinding discs, spray paint, WD-40 and gloves.",
    image: "/images/products/pipes.jpg",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  materials: string[];
  sizes: string;
  ratings: string[];
  connections: string[];
  summary: string;
  details: string;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "ms-welding-fittings",
    name: "MS / SS Butt-Weld Fittings",
    category: "weld-fittings",
    materials: ["MS", "SS"],
    sizes: '½" – 8"',
    ratings: ["Sch 40", "Sch 80"],
    connections: ["Butt-weld"],
    summary:
      "Quality mild-steel and stainless welding fittings — elbows, tees, reducers and caps for process and utility lines.",
    details:
      "Butt-welded fittings in S.S and M.S including 90° / 45° elbows, equal and reducing tees, concentric and eccentric reducers. Size range ½\" to 8\". Suitable for Schedule 40 and Schedule 80 piping. Ideal for fabrication shops, plant maintenance and new installations.",
    image: "/images/products/weld-fittings.jpg",
    featured: true,
  },
  {
    slug: "cs-threaded-fittings",
    name: "CS Threaded Fittings — 1000 to 6000 psi",
    category: "threaded-fittings",
    materials: ["CS"],
    sizes: '⅜" – 4"',
    ratings: ["1000 psi", "2000 psi", "3000 psi", "6000 psi"],
    connections: ["Threaded"],
    summary:
      "Forged carbon-steel threaded fittings in 1000, 2000, 3000 and 6000 psi classes.",
    details:
      "High-pressure carbon steel threaded fittings for oil, gas, steam and utility service. Pressure classes 1000, 2000, 3000 and 6000 psi. Range includes elbows, tees, couplings, unions, hex nipples, caps and bushings. Typical sizes ⅜\" to 4\".",
    image: "/images/products/threaded-fittings.jpg",
    featured: true,
  },
  {
    slug: "cs-pipes",
    name: "CS Pipes — Sch 40 / Sch 80",
    category: "pipes",
    materials: ["CS"],
    sizes: '½" – 12"',
    ratings: ["Sch 40", "Sch 80"],
    connections: ["ERW", "Seamless"],
    summary:
      "Carbon steel pipe, Schedule 40 and Schedule 80, ERW and seamless, ½\" to 12\".",
    details:
      "CS pipes SH 40 and SH 80 from ½\" to 12\", available ERW and seamless. Used across construction, oil & gas, HVAC and general mechanical work in Bahrain.",
    image: "/images/products/pipes.jpg",
    featured: true,
  },
  {
    slug: "ss-pipes",
    name: "SS Pipes — Sch 40, ERW & Seamless",
    category: "pipes",
    materials: ["SS"],
    sizes: '½" – 4"',
    ratings: ["Sch 40"],
    connections: ["ERW", "Seamless"],
    summary: "Stainless steel pipe, Schedule 40, ERW and seamless, ½\" to 4\".",
    details:
      "SS pipes SH 40 from ½\" to 4\", ERW and seamless. Stocked for corrosive, hygienic and process duty.",
    image: "/images/products/pipes.jpg",
  },
  {
    slug: "gi-pipes",
    name: "GI Pipes — Class A, B, C",
    category: "pipes",
    materials: ["GI"],
    sizes: '½" – 3"',
    ratings: ["Class A", "Class B", "Class C"],
    connections: ["Threaded", "Plain end"],
    summary: "Galvanized iron pipes in Class A, B and C, ½\" to 3\".",
    details:
      "GI pipes, Class A, B and C, ½\" to 3\". Common for water, fire and general building services.",
    image: "/images/products/pipes.jpg",
  },
  {
    slug: "slip-on-flanges",
    name: "Slip-On, Weld Neck & Socket Weld Flanges",
    category: "flanges",
    materials: ["MS", "SS"],
    sizes: '½" – 16"',
    ratings: ["PN 16", "Class 150"],
    connections: ["Slip-on", "Weld neck", "Socket weld", "Raised face"],
    summary:
      "SS and MS slip-on, weld-neck and socket-weld flanges, PN16 / Class 150, ½\" to 16\".",
    details:
      "SS / MS slip-on flanges, PN-16 and Class 150, raised face, weld neck and socket welded, ½\" to 16\". Also referred to as Schedule 150 class in trade enquiries.",
    image: "/images/products/flanges.jpg",
    featured: true,
  },
  {
    slug: "blind-flanges",
    name: "MS / SS Blind Flanges",
    category: "flanges",
    materials: ["MS", "SS"],
    sizes: '½" – 16"',
    ratings: ["PN 16", "Class 150"],
    connections: ["Raised face"],
    summary: "Blind flanges in mild steel and stainless, PN16 / Class 150.",
    details:
      "M.S and S.S blind flanges, PN-16 and Class 150, ½\" to 16\". Used to blank lines, vessels and valve ends.",
    image: "/images/products/flanges.jpg",
  },
  {
    slug: "globe-valves",
    name: "Globe Valves — CS / SS",
    category: "valves",
    materials: ["CS", "SS"],
    sizes: '½" – 10"',
    ratings: ["Class 150"],
    connections: ["Threaded", "Flanged"],
    summary: "Globe valves in carbon and stainless steel, threaded and flanged, ½\" to 10\".",
    details:
      "Globe valve, C.S and S.S, threaded and flange type, ½\" to 10\". Manual wheel operation for isolation and throttling on steam, water and process lines.",
    image: "/images/products/globe-valve.jpg",
    featured: true,
  },
  {
    slug: "ball-valves-cs",
    name: "Ball Valves — CS 3-Piece / SS",
    category: "valves",
    materials: ["CS", "SS"],
    sizes: '1" – 6"',
    ratings: ["Class 150"],
    connections: ["Flanged"],
    summary: "Three-piece CS and SS ball valves, 1\" to 6\".",
    details:
      "Ball valve, CS 3-piece SS, 1\" to 6\". Full-bore isolation for process and utility duty.",
    image: "/images/products/ball-valve.jpg",
  },
  {
    slug: "ss316-ball-valves",
    name: "SS 316 Ball Valves",
    category: "valves",
    materials: ["SS 316"],
    sizes: '½" – 4"',
    ratings: ["Class 150"],
    connections: ["Threaded", "Flanged"],
    summary: "SS 316 ball valves, threaded and flanged, ½\" to 4\".",
    details:
      "SS ball valves 316, threaded and flange type, ½\" to 4\". Lever operated, including flap/lockable handles.",
    image: "/images/products/ball-valve.jpg",
    featured: true,
  },
  {
    slug: "chrome-ball-valves",
    name: "Chrome Ball Valves",
    category: "valves",
    materials: ["Brass", "Chrome"],
    sizes: '½" – 4"',
    ratings: ["Standard"],
    connections: ["Threaded", "Flanged"],
    summary: "Chrome ball valves, all sizes, threaded and flange type, ½\" to 4\".",
    details:
      "Chrome ball valves, all sizes, threaded and flange type — ½\" to 4\". Used on water, air and general services.",
    image: "/images/products/ball-valve.jpg",
  },
  {
    slug: "butterfly-valves",
    name: "Butterfly Valves",
    category: "valves",
    materials: ["CI", "CS"],
    sizes: "Wafer & lugged, lever and gear",
    ratings: ["PN 16"],
    connections: ["Wafer", "Lugged"],
    summary: "Wafer and lugged butterfly valves with lever or gearbox operation.",
    details:
      "Industrial butterfly valves in wafer and lugged patterns, lever and gear operated. Suitable for water, HVAC and general isolation.",
    image: "/images/products/butterfly-valve.jpg",
  },
  {
    slug: "check-strainers",
    name: "Check Valves, NRV & Y-Strainers",
    category: "valves",
    materials: ["CS", "MS", "Brass"],
    sizes: '½" – 4"',
    ratings: ["Class 150"],
    connections: ["Threaded", "Flanged"],
    summary:
      "Non-return, check valves and Y-strainers in CS, MS and brass, ½\" to 4\".",
    details:
      "Non-return valves, CS / brass / MS Y-strainers and check valves, threaded and flange type, ½\" to 4\". Protect pumps and process equipment from reverse flow and debris.",
    image: "/images/products/strainers.jpg",
  },
  {
    slug: "foot-valves",
    name: "Foot Valves — Brass & CS",
    category: "valves",
    materials: ["Brass", "CS"],
    sizes: '1" – 6"',
    ratings: ["Standard"],
    connections: ["Threaded", "Flanged"],
    summary: "Foot valves in brass and carbon steel, 1\" to 6\".",
    details:
      "Foot valves, brass and C.S, 1\" to 6\". Used on suction lines for pumps and wells.",
    image: "/images/products/strainers.jpg",
  },
  {
    slug: "mixed-threaded-fittings",
    name: "Threaded Fittings — MI, GI, SS, MS, Brass",
    category: "threaded-fittings",
    materials: ["MI", "GI", "SS", "MS", "Brass"],
    sizes: '⅜" – 4"',
    ratings: ["Standard"],
    connections: ["Threaded"],
    summary: "Threaded fittings across malleable iron, GI, stainless, MS and brass.",
    details:
      "Threaded fittings in M.I, G.I, S.S, M.S and brass, sizes ⅜\" × 4\" and the standard range through 4\". Elbows, tees, sockets, unions, nipples and reducers.",
    image: "/images/products/threaded-fittings.jpg",
  },
  {
    slug: "aluminium-camlock",
    name: "Aluminium Camlock Couplings A–F",
    category: "hose-camlock",
    materials: ["Aluminium"],
    sizes: '½" – 6"',
    ratings: ["Standard"],
    connections: ["Camlock A", "B", "C", "D", "E", "F"],
    summary: "Aluminium camlock couplings, types A, B, C, D, E and F, ½\" to 6\".",
    details:
      "Aluminium cam lock, A, B, C, D, E, F, ½\" to 6\". Fast hose and pipe connections for transfer, tanker and plant use.",
    image: "/images/products/camlocks.jpg",
  },
  {
    slug: "hose-connectors",
    name: "SS & Brass Hose Connectors and Nipples",
    category: "hose-camlock",
    materials: ["SS", "Brass"],
    sizes: '¼" – 4"',
    ratings: ["Standard"],
    connections: ["Hose", "Threaded"],
    summary: "Stainless and brass hose connectors and nipples, ¼\" to 4\".",
    details:
      "SS and brass hose connectors and nipples, ¼\" to 4\". For water, air and light oil hoses.",
    image: "/images/products/camlocks.jpg",
  },
  {
    slug: "pneumatic-fittings",
    name: "Pneumatic Fittings",
    category: "hose-camlock",
    materials: ["Brass", "Plastic"],
    sizes: "Push-in & threaded range",
    ratings: ["Standard"],
    connections: ["Push-in", "Threaded"],
    summary: "Pneumatic push-in and threaded fittings for compressed-air lines.",
    details:
      "Full range of pneumatic fittings — tees, elbows, straight connectors and manifolds for instrument and workshop air.",
    image: "/images/products/camlocks.jpg",
  },
  {
    slug: "nuts-bolts",
    name: "SS, MS & GI Nuts and Bolts",
    category: "fasteners",
    materials: ["SS", "MS", "GI"],
    sizes: "All types",
    ratings: ["Standard"],
    connections: ["Hex", "Stud"],
    summary: "Stainless, mild steel and galvanized nuts, bolts and washers — all types.",
    details:
      "SS, MS, GI nut bolts — all types. Hex bolts, studs, nuts and washers for flange and structural assembly.",
    image: "/images/products/threaded-fittings.jpg",
  },
  {
    slug: "gaskets",
    name: "Spiral, Rubber & Non-Asbestos Gaskets",
    category: "gaskets",
    materials: ["Spiral wound", "Rubber", "Non-asbestos"],
    sizes: '½" – 20"',
    ratings: ["PN 16", "Class 150"],
    connections: ["Ring", "Full face"],
    summary:
      "Gasket kits in spiral wound, rubber and non-asbestos, PN16 / Class 150, ½\" to 20\".",
    details:
      "Gas kit spiral, rubber, non-asbestos, all class — PN 16, Class 150, ½\" to 20\". Cut and ring gaskets for valves and flanges.",
    image: "/images/products/flanges.jpg",
  },
  {
    slug: "cutting-grinding-wheels",
    name: "Grinding & Cutting Wheels",
    category: "supplies",
    materials: ["Abrasive"],
    sizes: "Common disc sizes",
    ratings: ["Makita", "Black & Decker", "Norton"],
    connections: ["Disc"],
    summary: "Grinding wheels and cutting wheels — Makita, Black & Decker and Norton.",
    details:
      "Grinding wheels and cutting wheels from Makita, Black & Decker and Norton. Stocked for fabrication and site cutting.",
    image: "/images/products/pipes.jpg",
  },
  {
    slug: "workshop-consumables",
    name: "Spray Paint, WD-40 & Hand Gloves",
    category: "supplies",
    materials: ["Consumable"],
    sizes: "Standard packs",
    ratings: ["Site use"],
    connections: ["—"],
    summary: "Site consumables: spray paint, WD-40 and industrial hand gloves.",
    details:
      "Spray paint, WD-40 and hand gloves for workshop and site maintenance.",
    image: "/images/products/pipes.jpg",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function productsIn(category: CategoryId) {
  return products.filter((p) => p.category === category);
}

export const materials = [
  "MS",
  "CS",
  "SS",
  "SS 316",
  "GI",
  "MI",
  "Brass",
  "Aluminium",
] as const;

export const ratingChips = [
  { label: "Schedule 40", hint: "Pipe wall" },
  { label: "Schedule 80", hint: "Heavy wall" },
  { label: "Class 150", hint: "Flange rating" },
  { label: "1000 psi", hint: "Threaded CS" },
  { label: "2000 psi", hint: "Threaded CS" },
  { label: "3000 psi", hint: "Threaded CS" },
  { label: "6000 psi", hint: "High pressure" },
] as const;
