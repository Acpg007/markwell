import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Mail, s as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as formatQuoteMessage, i as Input, m as cn, o as useQuoteStore, p as Button, s as company } from "./router-zUVTaC1S.mjs";
import { t as Label } from "./label-DeKsJYmS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-BkIEYwKz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-input bg-paper-raised px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function QuoteForm() {
	const items = useQuoteStore((s) => s.items);
	const [name, setName] = (0, import_react.useState)("");
	const [companyName, setCompanyName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function payload() {
		return formatQuoteMessage(items, {
			name,
			company: companyName,
			email,
			phone,
			message
		});
	}
	function onEmail(e) {
		e.preventDefault();
		if (!name.trim()) {
			toast.error("Please add your name");
			return;
		}
		const subject = encodeURIComponent(`Quotation request — ${companyName || name}`);
		const body = encodeURIComponent(payload());
		window.location.href = `mailto:${company.emails[0]}?subject=${subject}&body=${body}`;
		toast.success("Opening your email app");
	}
	function onWhatsApp() {
		if (!name.trim()) {
			toast.error("Please add your name");
			return;
		}
		const text = encodeURIComponent(payload());
		window.open(`${company.mobiles[0].wa}?text=${text}`, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: onEmail,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "rfq-name",
						children: "Your name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rfq-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true,
						autoComplete: "name"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "rfq-company",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rfq-company",
						value: companyName,
						onChange: (e) => setCompanyName(e.target.value),
						autoComplete: "organization"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "rfq-email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rfq-email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						autoComplete: "email"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "rfq-phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rfq-phone",
						type: "tel",
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						autoComplete: "tel"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "rfq-message",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "rfq-message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "List sizes, schedules, quantities and delivery site…"
				})]
			}),
			items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					items.length,
					" line ",
					items.length === 1 ? "item" : "items",
					" from your quotation list will be included."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "You can send a general enquiry, or add products from the catalogue first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					className: "sm:flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Email request"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "secondary",
					className: "sm:flex-1",
					onClick: onWhatsApp,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "WhatsApp"]
				})]
			})
		]
	});
}
//#endregion
export { QuoteForm as t };
