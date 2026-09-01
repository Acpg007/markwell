import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { d as products, l as getCategory, n as Route, p as Button, u as getProduct } from "./router-zUVTaC1S.mjs";
import { n as Badge, r as ProductCard, t as AddToQuote } from "./product-card-CcQVb6Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-DfLQFjRb.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "Product not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "That line is not in the current catalogue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Back to products"
				})
			})
		]
	});
	const category = getCategory(product.category);
	const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products",
				search: { category: product.category },
				className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), category?.name ?? "Products"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
						children: category?.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: product.details
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
								label: "Materials",
								value: product.materials.join(", ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
								label: "Size range",
								value: product.sizes
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
								label: "Ratings",
								value: product.ratings.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
								label: "Connections",
								value: product.connections.join(", ")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-1.5",
						children: product.ratings.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "crimson",
							children: r
						}, r))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddToQuote, { product }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								children: "Send quotation"
							})
						})]
					})
				] })]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-semibold",
					children: ["Related in ", category?.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			}) : null
		]
	});
}
function Spec({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted-foreground uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-medium",
			children: value
		})]
	});
}
//#endregion
export { ProductDetail as component };
