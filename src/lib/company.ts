export const company = {
  name: "Markwell International W.L.L.",
  shortName: "Markwell",
  legalName: "Markwell International W.L.L.",
  established: 2006,
  country: "Kingdom of Bahrain",
  tagline: "Pipes, fittings, flanges and valves — specified and stocked.",
  profile:
    "Markwell International is a leading industrial supplier in Bahrain, established in early 2006, for industrial and engineering products. We supply M.S, S.S, Brass and C.S valves and flanges, plus MS, SS, MI and GI pipes and fittings to contractors, plants and trading partners across the Kingdom.",
  lines:
    "M.S, S.S, Brass, C.S valves, flanges, MS / SS / MI / GI pipes and all fittings",
  emails: [
    "markwellinternational3@gmail.com",
    "jjjub@yahoo.com",
  ] as const,
  phone: {
    label: "Phone",
    display: "+973 17 233 856",
    href: "tel:+97317233856",
  },
  fax: {
    label: "Fax",
    display: "+973 17 233 859",
  },
  mobiles: [
    {
      display: "+973 34 417 641",
      href: "tel:+97334417641",
      wa: "https://wa.me/97334417641",
    },
    {
      display: "+973 39 722 669",
      href: "tel:+97339722669",
      wa: "https://wa.me/97339722669",
    },
    {
      display: "+973 39 263 681",
      href: "tel:+97339263681",
      wa: "https://wa.me/97339263681",
    },
  ],
  cataloguePath: "/markwell-catalogue.pdf",
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
