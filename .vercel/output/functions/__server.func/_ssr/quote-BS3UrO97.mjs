import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useQuoteStore } from "./router-zUVTaC1S.mjs";
import { t as QuoteForm } from "./quote-form-BkIEYwKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-BS3UrO97.js
var import_jsx_runtime = require_jsx_runtime();
function QuotePage() {
	const items = useQuoteStore((s) => s.items);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
				children: "RFQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Request a quotation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Include size, schedule (40 / 80), class (150), pressure (1000–6000 psi) and quantity. We reply from Bahrain."
			}),
			items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-border rounded-xl border border-border bg-card",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: item.slug },
						className: "font-medium hover:underline",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: [
							item.size,
							item.qty && `Qty ${item.qty}`,
							item.notes
						].filter(Boolean).join(" · ")
					})]
				}, item.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-xl border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground",
				children: [
					"No line items yet.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "font-medium text-foreground underline",
						children: "Add products from the catalogue"
					}),
					" ",
					"or describe what you need below."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-xl border border-border bg-card p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
			})
		]
	});
}
//#endregion
export { QuotePage as component };
