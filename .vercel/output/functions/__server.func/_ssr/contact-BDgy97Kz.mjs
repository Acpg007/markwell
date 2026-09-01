import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Printer, l as Mail, o as Phone } from "../_libs/lucide-react.mjs";
import { s as company } from "./router-zUVTaC1S.mjs";
import { t as QuoteForm } from "./quote-form-BkIEYwKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BDgy97Kz.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-[0.22em] text-primary uppercase",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Talk to Markwell"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: [
					"Phone, WhatsApp or email — send sizes and we will quote. ",
					company.country,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), " Phone"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.phone.href,
									className: "mt-2 block font-display text-2xl font-semibold",
									children: company.phone.display
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), " Fax"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl font-semibold",
									children: company.fax.display
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-muted-foreground uppercase",
									children: "Mobile / WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1",
									children: company.mobiles.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: m.href,
											className: "font-medium hover:underline",
											children: m.display
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: m.wa,
											className: "text-sm text-primary hover:underline",
											target: "_blank",
											rel: "noreferrer",
											children: "WhatsApp"
										})]
									}, m.href))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), " Email"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1",
									children: company.emails.map((email) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${email}`,
										className: "break-all text-sm font-medium hover:underline",
										children: email
									}) }, email))
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-6 lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Send an enquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 mb-6 text-sm text-muted-foreground",
							children: "Opens your email or WhatsApp with the message filled in — nothing is stored on this site."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
					]
				})]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
