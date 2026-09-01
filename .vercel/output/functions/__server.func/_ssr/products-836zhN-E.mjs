import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Search } from "../_libs/lucide-react.mjs";
import { c as categories, d as products, i as Input, m as cn, r as Route$2 } from "./router-zUVTaC1S.mjs";
import { r as ProductCard } from "./product-card-CcQVb6Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-836zhN-E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const search = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const [q, setQ] = (0, import_react.useState)(search.q ?? "");
	const category = search.category ?? "all";
	const filtered = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return products.filter((p) => {
			if (category !== "all" && p.category !== category) return false;
			if (!query) return true;
			return [
				p.name,
				p.summary,
				p.details,
				p.materials.join(" "),
				p.ratings.join(" "),
				p.sizes
			].join(" ").toLowerCase().includes(query);
		});
	}, [category, q]);
	function setCategory(id) {
		navigate({ search: (prev) => ({
			...prev,
			category: id === "all" ? void 0 : id
		}) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
				children: "Catalogue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Products"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: "MS welding fittings, CS threaded 1000–6000 psi, Sch 40 / 80 pipe, Class 150 flanges, valves and site supplies — as listed in our printed catalogue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search size, material, schedule…",
					className: "pl-10",
					"aria-label": "Search products"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-2 overflow-x-auto pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: category === "all",
					onClick: () => setCategory("all"),
					children: "All"
				}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: category === c.id,
					onClick: () => setCategory(c.id),
					children: c.name
				}, c.id))]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted-foreground",
				children: "No products match that filter. Try another material or category."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-sm text-muted-foreground",
				children: [
					"Prefer the original print?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalogue",
						className: "font-medium text-foreground underline",
						children: "Open the scanned catalogue"
					}),
					"."
				]
			})
		]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-11 shrink-0 rounded-md border px-3 text-sm font-medium transition-colors", active ? "border-ink bg-ink text-paper" : "border-border bg-card text-foreground hover:bg-muted"),
		children
	});
}
//#endregion
export { ProductsPage as component };
