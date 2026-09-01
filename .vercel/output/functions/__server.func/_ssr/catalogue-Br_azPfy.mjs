import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as FileDown } from "../_libs/lucide-react.mjs";
import { p as Button, s as company } from "./router-zUVTaC1S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-Br_azPfy.js
var import_jsx_runtime = require_jsx_runtime();
var pages = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8
];
var captions = [
	"Cover — company profile",
	"Globe, ball and SS 316 valves",
	"SS / CS / GI pipes and flanges",
	"Threaded, butt-weld and camlock fittings",
	"Chrome ball, NRV, strainers and foot valves",
	"Fasteners, hose connectors and cutting wheels",
	"Pneumatic fittings, gaskets and site supplies",
	"Back cover — contact"
];
function CataloguePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
					children: "Print"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Company catalogue"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: "The original Markwell International profile — eight pages covering valves, pipes, fittings, flanges and workshop supplies."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: company.cataloguePath,
					download: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), "Download PDF"]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 sm:grid-cols-2",
			children: pages.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: company.cataloguePath,
					target: "_blank",
					rel: "noreferrer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/images/catalogue/page-${n}.jpg`,
						alt: `Catalogue page ${n}: ${captions[n - 1]}`,
						className: "w-full bg-muted object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "border-t border-border px-4 py-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-foreground",
							children: [
								"Page ",
								n,
								"."
							]
						}),
						" ",
						captions[n - 1]
					]
				})]
			}, n))
		})]
	});
}
//#endregion
export { CataloguePage as component };
