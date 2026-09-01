import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, c as DialogTrigger, d as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, d as ClipboardList, n as TriangleAlert, o as Phone, r as Trash2, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BLyfSlC9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "hover:bg-muted text-foreground",
			ink: "bg-ink text-paper hover:bg-ink-soft",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/products-CPeGhGk_.js
var categories = [
	{
		id: "valves",
		name: "Valves",
		blurb: "Gate, globe, ball, butterfly, check, foot and Y-strainers.",
		image: "/images/products/globe-valve.jpg"
	},
	{
		id: "pipes",
		name: "Pipes",
		blurb: "MS, CS, SS and GI — Schedule 40 / 80, ERW and seamless.",
		image: "/images/products/pipes.jpg"
	},
	{
		id: "flanges",
		name: "Flanges",
		blurb: "Slip-on, weld neck, socket weld and blind. PN16 / Class 150.",
		image: "/images/products/flanges.jpg"
	},
	{
		id: "weld-fittings",
		name: "MS Welding Fittings",
		blurb: "Butt-weld elbows, tees, reducers and caps in MS and SS.",
		image: "/images/products/weld-fittings.jpg"
	},
	{
		id: "threaded-fittings",
		name: "Threaded Fittings",
		blurb: "CS 1000 / 2000 / 3000 / 6000 psi plus MI, GI, SS and brass.",
		image: "/images/products/threaded-fittings.jpg"
	},
	{
		id: "hose-camlock",
		name: "Hose & Camlock",
		blurb: "Aluminium camlocks A–F, hose nipples and pneumatic fittings.",
		image: "/images/products/camlocks.jpg"
	},
	{
		id: "fasteners",
		name: "Fasteners",
		blurb: "SS, MS and GI nuts, bolts and washers — all types.",
		image: "/images/products/threaded-fittings.jpg"
	},
	{
		id: "gaskets",
		name: "Gaskets & Seals",
		blurb: "Spiral wound, rubber and non-asbestos, PN16 / Class 150.",
		image: "/images/products/flanges.jpg"
	},
	{
		id: "supplies",
		name: "Workshop Supplies",
		blurb: "Cutting wheels, grinding discs, spray paint, WD-40 and gloves.",
		image: "/images/products/pipes.jpg"
	}
];
var products = [
	{
		slug: "ms-welding-fittings",
		name: "MS / SS Butt-Weld Fittings",
		category: "weld-fittings",
		materials: ["MS", "SS"],
		sizes: "½\" – 8\"",
		ratings: ["Sch 40", "Sch 80"],
		connections: ["Butt-weld"],
		summary: "Quality mild-steel and stainless welding fittings — elbows, tees, reducers and caps for process and utility lines.",
		details: "Butt-welded fittings in S.S and M.S including 90° / 45° elbows, equal and reducing tees, concentric and eccentric reducers. Size range ½\" to 8\". Suitable for Schedule 40 and Schedule 80 piping. Ideal for fabrication shops, plant maintenance and new installations.",
		image: "/images/products/weld-fittings.jpg",
		featured: true
	},
	{
		slug: "cs-threaded-fittings",
		name: "CS Threaded Fittings — 1000 to 6000 psi",
		category: "threaded-fittings",
		materials: ["CS"],
		sizes: "⅜\" – 4\"",
		ratings: [
			"1000 psi",
			"2000 psi",
			"3000 psi",
			"6000 psi"
		],
		connections: ["Threaded"],
		summary: "Forged carbon-steel threaded fittings in 1000, 2000, 3000 and 6000 psi classes.",
		details: "High-pressure carbon steel threaded fittings for oil, gas, steam and utility service. Pressure classes 1000, 2000, 3000 and 6000 psi. Range includes elbows, tees, couplings, unions, hex nipples, caps and bushings. Typical sizes ⅜\" to 4\".",
		image: "/images/products/threaded-fittings.jpg",
		featured: true
	},
	{
		slug: "cs-pipes",
		name: "CS Pipes — Sch 40 / Sch 80",
		category: "pipes",
		materials: ["CS"],
		sizes: "½\" – 12\"",
		ratings: ["Sch 40", "Sch 80"],
		connections: ["ERW", "Seamless"],
		summary: "Carbon steel pipe, Schedule 40 and Schedule 80, ERW and seamless, ½\" to 12\".",
		details: "CS pipes SH 40 and SH 80 from ½\" to 12\", available ERW and seamless. Used across construction, oil & gas, HVAC and general mechanical work in Bahrain.",
		image: "/images/products/pipes.jpg",
		featured: true
	},
	{
		slug: "ss-pipes",
		name: "SS Pipes — Sch 40, ERW & Seamless",
		category: "pipes",
		materials: ["SS"],
		sizes: "½\" – 4\"",
		ratings: ["Sch 40"],
		connections: ["ERW", "Seamless"],
		summary: "Stainless steel pipe, Schedule 40, ERW and seamless, ½\" to 4\".",
		details: "SS pipes SH 40 from ½\" to 4\", ERW and seamless. Stocked for corrosive, hygienic and process duty.",
		image: "/images/products/pipes.jpg"
	},
	{
		slug: "gi-pipes",
		name: "GI Pipes — Class A, B, C",
		category: "pipes",
		materials: ["GI"],
		sizes: "½\" – 3\"",
		ratings: [
			"Class A",
			"Class B",
			"Class C"
		],
		connections: ["Threaded", "Plain end"],
		summary: "Galvanized iron pipes in Class A, B and C, ½\" to 3\".",
		details: "GI pipes, Class A, B and C, ½\" to 3\". Common for water, fire and general building services.",
		image: "/images/products/pipes.jpg"
	},
	{
		slug: "slip-on-flanges",
		name: "Slip-On, Weld Neck & Socket Weld Flanges",
		category: "flanges",
		materials: ["MS", "SS"],
		sizes: "½\" – 16\"",
		ratings: ["PN 16", "Class 150"],
		connections: [
			"Slip-on",
			"Weld neck",
			"Socket weld",
			"Raised face"
		],
		summary: "SS and MS slip-on, weld-neck and socket-weld flanges, PN16 / Class 150, ½\" to 16\".",
		details: "SS / MS slip-on flanges, PN-16 and Class 150, raised face, weld neck and socket welded, ½\" to 16\". Also referred to as Schedule 150 class in trade enquiries.",
		image: "/images/products/flanges.jpg",
		featured: true
	},
	{
		slug: "blind-flanges",
		name: "MS / SS Blind Flanges",
		category: "flanges",
		materials: ["MS", "SS"],
		sizes: "½\" – 16\"",
		ratings: ["PN 16", "Class 150"],
		connections: ["Raised face"],
		summary: "Blind flanges in mild steel and stainless, PN16 / Class 150.",
		details: "M.S and S.S blind flanges, PN-16 and Class 150, ½\" to 16\". Used to blank lines, vessels and valve ends.",
		image: "/images/products/flanges.jpg"
	},
	{
		slug: "globe-valves",
		name: "Globe Valves — CS / SS",
		category: "valves",
		materials: ["CS", "SS"],
		sizes: "½\" – 10\"",
		ratings: ["Class 150"],
		connections: ["Threaded", "Flanged"],
		summary: "Globe valves in carbon and stainless steel, threaded and flanged, ½\" to 10\".",
		details: "Globe valve, C.S and S.S, threaded and flange type, ½\" to 10\". Manual wheel operation for isolation and throttling on steam, water and process lines.",
		image: "/images/products/globe-valve.jpg",
		featured: true
	},
	{
		slug: "ball-valves-cs",
		name: "Ball Valves — CS 3-Piece / SS",
		category: "valves",
		materials: ["CS", "SS"],
		sizes: "1\" – 6\"",
		ratings: ["Class 150"],
		connections: ["Flanged"],
		summary: "Three-piece CS and SS ball valves, 1\" to 6\".",
		details: "Ball valve, CS 3-piece SS, 1\" to 6\". Full-bore isolation for process and utility duty.",
		image: "/images/products/ball-valve.jpg"
	},
	{
		slug: "ss316-ball-valves",
		name: "SS 316 Ball Valves",
		category: "valves",
		materials: ["SS 316"],
		sizes: "½\" – 4\"",
		ratings: ["Class 150"],
		connections: ["Threaded", "Flanged"],
		summary: "SS 316 ball valves, threaded and flanged, ½\" to 4\".",
		details: "SS ball valves 316, threaded and flange type, ½\" to 4\". Lever operated, including flap/lockable handles.",
		image: "/images/products/ball-valve.jpg",
		featured: true
	},
	{
		slug: "chrome-ball-valves",
		name: "Chrome Ball Valves",
		category: "valves",
		materials: ["Brass", "Chrome"],
		sizes: "½\" – 4\"",
		ratings: ["Standard"],
		connections: ["Threaded", "Flanged"],
		summary: "Chrome ball valves, all sizes, threaded and flange type, ½\" to 4\".",
		details: "Chrome ball valves, all sizes, threaded and flange type — ½\" to 4\". Used on water, air and general services.",
		image: "/images/products/ball-valve.jpg"
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
		details: "Industrial butterfly valves in wafer and lugged patterns, lever and gear operated. Suitable for water, HVAC and general isolation.",
		image: "/images/products/butterfly-valve.jpg"
	},
	{
		slug: "check-strainers",
		name: "Check Valves, NRV & Y-Strainers",
		category: "valves",
		materials: [
			"CS",
			"MS",
			"Brass"
		],
		sizes: "½\" – 4\"",
		ratings: ["Class 150"],
		connections: ["Threaded", "Flanged"],
		summary: "Non-return, check valves and Y-strainers in CS, MS and brass, ½\" to 4\".",
		details: "Non-return valves, CS / brass / MS Y-strainers and check valves, threaded and flange type, ½\" to 4\". Protect pumps and process equipment from reverse flow and debris.",
		image: "/images/products/strainers.jpg"
	},
	{
		slug: "foot-valves",
		name: "Foot Valves — Brass & CS",
		category: "valves",
		materials: ["Brass", "CS"],
		sizes: "1\" – 6\"",
		ratings: ["Standard"],
		connections: ["Threaded", "Flanged"],
		summary: "Foot valves in brass and carbon steel, 1\" to 6\".",
		details: "Foot valves, brass and C.S, 1\" to 6\". Used on suction lines for pumps and wells.",
		image: "/images/products/strainers.jpg"
	},
	{
		slug: "mixed-threaded-fittings",
		name: "Threaded Fittings — MI, GI, SS, MS, Brass",
		category: "threaded-fittings",
		materials: [
			"MI",
			"GI",
			"SS",
			"MS",
			"Brass"
		],
		sizes: "⅜\" – 4\"",
		ratings: ["Standard"],
		connections: ["Threaded"],
		summary: "Threaded fittings across malleable iron, GI, stainless, MS and brass.",
		details: "Threaded fittings in M.I, G.I, S.S, M.S and brass, sizes ⅜\" × 4\" and the standard range through 4\". Elbows, tees, sockets, unions, nipples and reducers.",
		image: "/images/products/threaded-fittings.jpg"
	},
	{
		slug: "aluminium-camlock",
		name: "Aluminium Camlock Couplings A–F",
		category: "hose-camlock",
		materials: ["Aluminium"],
		sizes: "½\" – 6\"",
		ratings: ["Standard"],
		connections: [
			"Camlock A",
			"B",
			"C",
			"D",
			"E",
			"F"
		],
		summary: "Aluminium camlock couplings, types A, B, C, D, E and F, ½\" to 6\".",
		details: "Aluminium cam lock, A, B, C, D, E, F, ½\" to 6\". Fast hose and pipe connections for transfer, tanker and plant use.",
		image: "/images/products/camlocks.jpg"
	},
	{
		slug: "hose-connectors",
		name: "SS & Brass Hose Connectors and Nipples",
		category: "hose-camlock",
		materials: ["SS", "Brass"],
		sizes: "¼\" – 4\"",
		ratings: ["Standard"],
		connections: ["Hose", "Threaded"],
		summary: "Stainless and brass hose connectors and nipples, ¼\" to 4\".",
		details: "SS and brass hose connectors and nipples, ¼\" to 4\". For water, air and light oil hoses.",
		image: "/images/products/camlocks.jpg"
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
		details: "Full range of pneumatic fittings — tees, elbows, straight connectors and manifolds for instrument and workshop air.",
		image: "/images/products/camlocks.jpg"
	},
	{
		slug: "nuts-bolts",
		name: "SS, MS & GI Nuts and Bolts",
		category: "fasteners",
		materials: [
			"SS",
			"MS",
			"GI"
		],
		sizes: "All types",
		ratings: ["Standard"],
		connections: ["Hex", "Stud"],
		summary: "Stainless, mild steel and galvanized nuts, bolts and washers — all types.",
		details: "SS, MS, GI nut bolts — all types. Hex bolts, studs, nuts and washers for flange and structural assembly.",
		image: "/images/products/threaded-fittings.jpg"
	},
	{
		slug: "gaskets",
		name: "Spiral, Rubber & Non-Asbestos Gaskets",
		category: "gaskets",
		materials: [
			"Spiral wound",
			"Rubber",
			"Non-asbestos"
		],
		sizes: "½\" – 20\"",
		ratings: ["PN 16", "Class 150"],
		connections: ["Ring", "Full face"],
		summary: "Gasket kits in spiral wound, rubber and non-asbestos, PN16 / Class 150, ½\" to 20\".",
		details: "Gas kit spiral, rubber, non-asbestos, all class — PN 16, Class 150, ½\" to 20\". Cut and ring gaskets for valves and flanges.",
		image: "/images/products/flanges.jpg"
	},
	{
		slug: "cutting-grinding-wheels",
		name: "Grinding & Cutting Wheels",
		category: "supplies",
		materials: ["Abrasive"],
		sizes: "Common disc sizes",
		ratings: [
			"Makita",
			"Black & Decker",
			"Norton"
		],
		connections: ["Disc"],
		summary: "Grinding wheels and cutting wheels — Makita, Black & Decker and Norton.",
		details: "Grinding wheels and cutting wheels from Makita, Black & Decker and Norton. Stocked for fabrication and site cutting.",
		image: "/images/products/pipes.jpg"
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
		details: "Spray paint, WD-40 and hand gloves for workshop and site maintenance.",
		image: "/images/products/pipes.jpg"
	}
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function getCategory(id) {
	return categories.find((c) => c.id === id);
}
var ratingChips = [
	{
		label: "Schedule 40",
		hint: "Pipe wall"
	},
	{
		label: "Schedule 80",
		hint: "Heavy wall"
	},
	{
		label: "Class 150",
		hint: "Flange rating"
	},
	{
		label: "1000 psi",
		hint: "Threaded CS"
	},
	{
		label: "2000 psi",
		hint: "Threaded CS"
	},
	{
		label: "3000 psi",
		hint: "Threaded CS"
	},
	{
		label: "6000 psi",
		hint: "High pressure"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-zUVTaC1S.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function MarkwellMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "22.5",
				className: "fill-ink stroke-primary",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 33V15h4.2l5.3 11.4L26.8 15H31v18h-3.6V20.4L22.2 33h-3.4L13.6 20.4V33H12Z",
				className: "fill-paper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "32.2",
				y: "15",
				width: "4.2",
				height: "18",
				className: "fill-primary"
			})
		]
	});
}
function Logo({ compact = false, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkwellMark, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-lg font-semibold tracking-wide uppercase", inverted ? "text-paper" : "text-ink"),
				children: "Markwell"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-0.5 text-xs font-medium tracking-[0.18em] uppercase leading-none", inverted ? "text-paper/70" : "text-muted-foreground"),
				children: "International W.L.L."
			}) : null]
		})]
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-card p-6 text-card-foreground shadow-[var(--shadow-card)] transition ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=open]:duration-250", {
	variants: { side: {
		right: "inset-y-0 right-0 h-full w-full border-l border-border sm:max-w-md data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
		left: "inset-y-0 left-0 h-full w-full border-r border-border sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 pr-8", className),
	...props
});
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("font-display text-2xl font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var company = {
	name: "Markwell International W.L.L.",
	shortName: "Markwell",
	legalName: "Markwell International W.L.L.",
	established: 2006,
	country: "Kingdom of Bahrain",
	tagline: "Pipes, fittings, flanges and valves — specified and stocked.",
	profile: "Markwell International is a leading industrial supplier in Bahrain, established in early 2006, for industrial and engineering products. We supply M.S, S.S, Brass and C.S valves and flanges, plus MS, SS, MI and GI pipes and fittings to contractors, plants and trading partners across the Kingdom.",
	lines: "M.S, S.S, Brass, C.S valves, flanges, MS / SS / MI / GI pipes and all fittings",
	emails: ["markwellinternational3@gmail.com", "jjjub@yahoo.com"],
	phone: {
		label: "Phone",
		display: "+973 17 233 856",
		href: "tel:+97317233856"
	},
	fax: {
		label: "Fax",
		display: "+973 17 233 859"
	},
	mobiles: [
		{
			display: "+973 34 417 641",
			href: "tel:+97334417641",
			wa: "https://wa.me/97334417641"
		},
		{
			display: "+973 39 722 669",
			href: "tel:+97339722669",
			wa: "https://wa.me/97339722669"
		},
		{
			display: "+973 39 263 681",
			href: "tel:+97339263681",
			wa: "https://wa.me/97339263681"
		}
	],
	cataloguePath: "/markwell-catalogue.pdf"
};
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/catalogue",
		label: "Catalogue"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var useQuoteStore = create()(persist((set, get) => ({
	items: [],
	hydrated: false,
	setHydrated: (v) => set({ hydrated: v }),
	add: (item) => {
		if (get().items.find((i) => i.slug === item.slug)) {
			set({ items: get().items.map((i) => i.slug === item.slug ? {
				...i,
				qty: item.qty || i.qty,
				size: item.size || i.size,
				notes: [i.notes, item.notes].filter(Boolean).join(" · "),
				name: item.name
			} : i) });
			return;
		}
		set({ items: [...get().items, item] });
	},
	remove: (slug) => set({ items: get().items.filter((i) => i.slug !== slug) }),
	update: (slug, patch) => set({ items: get().items.map((i) => i.slug === slug ? {
		...i,
		...patch
	} : i) }),
	clear: () => set({ items: [] })
}), {
	name: "markwell-quote",
	storage: createJSONStorage(() => localStorage),
	partialize: (s) => ({ items: s.items }),
	skipHydration: true
}));
function formatQuoteMessage(items, extra) {
	const lines = ["Quotation request — Markwell International W.L.L.", ""];
	if (extra?.name) lines.push(`Name: ${extra.name}`);
	if (extra?.company) lines.push(`Company: ${extra.company}`);
	if (extra?.phone) lines.push(`Phone: ${extra.phone}`);
	if (extra?.email) lines.push(`Email: ${extra.email}`);
	if (extra?.name || extra?.company) lines.push("");
	lines.push("Items:");
	if (items.length === 0) lines.push("— (no line items attached)");
	else items.forEach((item, i) => {
		lines.push(`${i + 1}. ${item.name}` + (item.size ? ` | Size: ${item.size}` : "") + (item.qty ? ` | Qty: ${item.qty}` : "") + (item.notes ? ` | Notes: ${item.notes}` : ""));
	});
	if (extra?.message) lines.push("", "Message:", extra.message);
	return lines.join("\n");
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-paper-raised px-3 py-2 text-base text-foreground shadow-none transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function QuoteDrawer({ children }) {
	const items = useQuoteStore((s) => s.items);
	const remove = useQuoteStore((s) => s.remove);
	const update = useQuoteStore((s) => s.update);
	const clear = useQuoteStore((s) => s.clear);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		className: "flex flex-col overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Quotation list" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Add sizes and quantities, then send the list by email or WhatsApp." })] }),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: "Your list is empty. Browse the catalogue and tap “Add to quotation”."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-col gap-4",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-paper p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$slug",
								params: { slug: item.slug },
								className: "font-medium leading-snug hover:underline",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => remove(item.slug),
								className: "rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
								"aria-label": `Remove ${item.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: item.size,
								placeholder: "Size",
								"aria-label": `Size for ${item.name}`,
								onChange: (e) => update(item.slug, { size: e.target.value })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: item.qty,
								placeholder: "Qty",
								"aria-label": `Quantity for ${item.name}`,
								onChange: (e) => update(item.slug, { qty: e.target.value })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-2",
							value: item.notes,
							placeholder: "Notes",
							"aria-label": `Notes for ${item.name}`,
							onChange: (e) => update(item.slug, { notes: e.target.value })
						})
					]
				}, item.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col gap-2 pt-6",
				children: [items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => clear(),
					children: "Clear list"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						children: "Send quotation request"
					})
				})]
			})
		]
	})] });
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const count = useQuoteStore((s) => s.items.length);
	const hydrated = useQuoteStore((s) => s.hydrated);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink/20 bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "Markwell International home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						inverted: true,
						compact: false
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors", active ? "bg-paper/10 text-paper" : "text-paper/70 hover:bg-paper/10 hover:text-paper"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.phone.href,
							className: "hidden items-center gap-2 rounded-md px-2 py-2 text-sm text-paper/80 hover:text-paper md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: company.phone.display
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDrawer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "default",
							size: "sm",
							className: "relative h-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "size-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Quotation"
								}),
								hydrated && count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-paper text-xs font-semibold leading-none text-ink",
									children: count
								}) : null
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {})
					]
				})
			]
		})]
	});
}
function MobileNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "text-paper hover:bg-paper/10 lg:hidden",
			"aria-label": "Open menu",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		side: "left",
		className: "bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
			className: "text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true })
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col gap-1",
			"aria-label": "Mobile",
			children: [navItems.map((item) => {
				const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: cn("rounded-md px-3 py-3 text-base font-medium", active ? "bg-paper/10 text-paper" : "text-paper/75 hover:bg-paper/10"),
					children: item.label
				}, item.to);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: company.phone.href,
				className: "mt-4 flex items-center gap-2 px-3 py-3 text-paper/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone.display]
			})]
		})]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-paper/70",
							children: [
								"Leading industrial supplier in Bahrain since ",
								company.established,
								". ",
								company.lines,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-display text-sm tracking-[0.2em] text-paper/50 uppercase",
							children: [
								"Est. ",
								company.established,
								" · ",
								company.country
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm tracking-[0.18em] text-paper/50 uppercase",
						children: "Site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-paper/80 hover:text-paper",
							children: item.label
						}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							className: "text-paper/80 hover:text-paper",
							children: "Request a quote"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm tracking-[0.18em] text-paper/50 uppercase",
						children: "Stock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: categories.slice(0, 6).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: { category: c.id },
							className: "text-paper/80 hover:text-paper",
							children: c.name
						}) }, c.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm tracking-[0.18em] text-paper/50 uppercase",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-paper/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.phone.href,
								className: "hover:text-paper",
								children: ["Ph ", company.phone.display]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Fax ", company.fax.display] }),
							company.mobiles.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: m.href,
								className: "hover:text-paper",
								children: ["Mob ", m.display]
							}) }, m.href)),
							company.emails.map((email) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${email}`,
								className: "break-all hover:text-paper",
								children: email
							}) }, email))
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Industrial & engineering products · ", company.country] })]
			})
		})]
	});
}
function QuoteHydration() {
	(0, import_react.useEffect)(() => {
		const result = useQuoteStore.persist.rehydrate();
		Promise.resolve(result).then(() => {
			useQuoteStore.getState().setHydrated(true);
		});
	}, []);
	return null;
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteHydration, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-DMFPY6UH.css";
var APP_NAME = "Markwell International";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Markwell International W.L.L. — industrial supplier in Bahrain since 2006. MS welding fittings, CS threaded fittings 1000–6000 psi, Sch 40 / Sch 80 / Class 150 pipes, flanges and valves."
			},
			{
				name: "theme-color",
				content: "#161411"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				richColors: true,
				position: "top-center"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-DXdl4tnb.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./about-CiabL7QK.mjs");
var Route$5 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "About — Markwell International" }] })
});
var $$splitComponentImporter$4 = () => import("./catalogue-Br_azPfy.mjs");
var Route$4 = createFileRoute("/catalogue")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Printed catalogue — Markwell International" }] })
});
var $$splitComponentImporter$3 = () => import("./contact-BDgy97Kz.mjs");
var Route$3 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Contact — Markwell International" }] })
});
var $$splitComponentImporter$2 = () => import("./products-836zhN-E.mjs");
var Route$2 = createFileRoute("/products")({
	validateSearch: (search) => ({
		category: typeof search.category === "string" ? search.category : void 0,
		q: typeof search.q === "string" ? search.q : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Products — Markwell International" }] })
});
var $$splitComponentImporter$1 = () => import("./quote-BS3UrO97.mjs");
var Route$1 = createFileRoute("/quote")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Request a quote — Markwell International" }] })
});
var $$splitComponentImporter = () => import("./products._slug-DfLQFjRb.mjs");
var Route = createFileRoute("/products/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		return { meta: [{ title: `${getProduct(params.slug)?.name ?? "Product"} — Markwell International` }] };
	}
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var CatalogueRoute = Route$4.update({
	id: "/catalogue",
	path: "/catalogue",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var ProductsRoute = Route$2.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$7
});
var QuoteRoute = Route$1.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$7
});
var ProductsRouteChildren = { ProductsSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CatalogueRoute,
	ContactRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	QuoteRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { formatQuoteMessage as a, categories as c, products as d, ratingChips as f, Input as i, getCategory as l, cn as m, Route as n, useQuoteStore as o, Button as p, Route$2 as r, company as s, router_exports as t, getProduct as u };
