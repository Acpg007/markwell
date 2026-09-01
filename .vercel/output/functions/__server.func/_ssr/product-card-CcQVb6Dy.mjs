import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Input, l as getCategory, m as cn, o as useQuoteStore, p as Button } from "./router-zUVTaC1S.mjs";
import { t as Label } from "./label-DeKsJYmS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-CcQVb6Dy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border border-border bg-card text-card-foreground shadow-[var(--shadow-card)]", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col gap-1.5 p-5", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-display text-xl font-semibold leading-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-5 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-5 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva("inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-muted text-foreground",
		crimson: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border text-muted-foreground",
		ink: "border-transparent bg-ink text-paper"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-card)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 text-left", className),
	...props
});
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-2xl font-semibold leading-none", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function AddToQuote({ product, size = "default" }) {
	const add = useQuoteStore((s) => s.add);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [qty, setQty] = (0, import_react.useState)("");
	const [itemSize, setItemSize] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		add({
			slug: product.slug,
			name: product.name,
			qty: qty.trim() || "1",
			size: itemSize.trim() || product.sizes,
			notes: notes.trim()
		});
		toast.success("Added to quotation list", { description: product.name });
		setOpen(false);
		setQty("");
		setItemSize("");
		setNotes("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size,
				variant: "default",
				children: "Add to quotation"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add to quotation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: product.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `size-${product.slug}`,
						children: "Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `size-${product.slug}`,
						value: itemSize,
						onChange: (e) => setItemSize(e.target.value),
						placeholder: product.sizes
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `qty-${product.slug}`,
						children: "Quantity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `qty-${product.slug}`,
						value: qty,
						onChange: (e) => setQty(e.target.value),
						placeholder: "e.g. 20 pcs / 12 lengths"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `notes-${product.slug}`,
						children: "Notes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `notes-${product.slug}`,
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						placeholder: "Schedule, class, end connection…"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add to list"
				})
			]
		})] })]
	});
}
function ProductCard({ product }) {
	const category = getCategory(product.category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex h-full flex-col overflow-hidden rounded-xl p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/products/$slug",
			params: { slug: product.slug },
			className: "block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/3] overflow-hidden bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: "size-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: category?.name
					}), product.ratings.slice(0, 2).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: r }, r))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$slug",
					params: { slug: product.slug },
					className: "hover:underline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold leading-snug",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: product.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-wide text-steel uppercase",
					children: [
						product.materials.join(" · "),
						" · ",
						product.sizes
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddToQuote, {
						product,
						size: "sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: product.slug },
						className: "px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
						children: "Specs"
					})]
				})
			]
		})]
	});
}
//#endregion
export { Badge as n, ProductCard as r, AddToQuote as t };
