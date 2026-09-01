import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, o as Phone, u as FileDown } from "../_libs/lucide-react.mjs";
import { c as categories, d as products, f as ratingChips, p as Button, s as company } from "./router-zUVTaC1S.mjs";
import { r as ProductCard } from "./product-card-CcQVb6Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXdl4tnb.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = products.filter((p) => p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[34rem] overflow-hidden bg-ink text-paper md:min-h-[38rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/products/hero-gate-valve.jpg",
					alt: "Carbon steel gate valve",
					className: "absolute inset-0 size-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade-mobile absolute inset-0 md:hidden" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0 hidden md:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 py-12 sm:px-6 md:min-h-[38rem] md:justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-sm tracking-[0.28em] text-paper/70 uppercase",
							children: [
								"Est. ",
								company.established,
								" · ",
								company.country
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl",
							children: "Industrial supply, specified and stocked."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg",
							children: "MS welding fittings, CS threaded fittings 1000–6000 psi, Schedule 40 / 80 pipe, Class 150 flanges, and valves in MS, SS, CS and brass."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									children: ["Browse products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quote",
									children: "Request a quote"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-b border-border bg-paper-raised",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4",
				children: ratingChips.slice(0, 4).map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-paper-raised px-4 py-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tracking-tight text-ink",
						children: chip.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
						children: chip.hint
					})]
				}, chip.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-3 gap-px border-t border-border bg-border",
				children: ratingChips.slice(4).map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-paper-raised px-4 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold text-ink",
						children: chip.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
						children: chip.hint
					})]
				}, chip.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
					children: "Stock range"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "What we supply"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						children: ["Full catalogue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products",
					search: { category: c.id },
					className: "group relative overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/9] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: "",
							className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: c.blurb
						})]
					})]
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-muted/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
						children: "Specified lines"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Core products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "The lines our customers quote most often — welding fittings, high-pressure threaded CS, pipe schedules and Class 150 flanges."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
					children: "Profile"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Bahrain stockist since 2006"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground",
					children: company.profile
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-2 text-sm text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary pl-3",
							children: "M.S, S.S, Brass and C.S valves"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary pl-3",
							children: "MS, SS, MI, GI pipes and all fittings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary pl-3",
							children: "Flanges PN16 / Class 150, ½\"–16\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary pl-3",
							children: "Quotations by phone, WhatsApp or email"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "About Markwell"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.cataloguePath,
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), "Download catalogue"]
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/products/pipes.jpg",
					alt: "Stocked carbon and stainless steel pipes",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight",
					children: "Need a price today?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-paper/75",
					children: "Send sizes, schedule and quantity. We reply with availability and a quotation."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							children: "Request a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.phone.href,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone.display]
						})
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
