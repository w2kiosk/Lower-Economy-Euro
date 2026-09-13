import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Pencil, i as RotateCcw, n as Undo2, o as History, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CosA4aeU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,box-shadow,opacity,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 pressable", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg shadow-card hover:bg-accent/90",
			secondary: "bg-surface text-fg shadow-card hover:shadow-card-hover",
			ghost: "text-fg hover:bg-fg/5",
			outline: "bg-transparent text-fg shadow-card hover:bg-surface",
			danger: "bg-danger text-accent-fg hover:bg-danger/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5",
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
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-fg/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-surface p-6 text-fg shadow-card", "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm text-muted opacity-80 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-semibold tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-base text-fg shadow-card", "placeholder:text-subtle", "transition-[box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-muted", className),
	...props
}));
Label.displayName = Root.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-fg/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-x-0 bottom-0 z-50 flex max-h-[85dvh] flex-col rounded-t-xl bg-surface p-5 text-fg shadow-card", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom duration-300", "sm:inset-y-0 sm:right-0 sm:left-auto sm:h-full sm:w-96 sm:rounded-t-none sm:rounded-l-xl sm:data-[state=closed]:slide-out-to-right sm:data-[state=open]:slide-in-from-right", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm text-muted opacity-80 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 pr-8", className),
		...props
	});
}
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-semibold tracking-tight", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var DENOMS = [
	{
		id: "c1",
		cents: 1,
		kind: "coin",
		label: "1 cent",
		short: "1 c",
		src: "/money/coin-1c.png",
		diameterMm: 16.25
	},
	{
		id: "c2",
		cents: 2,
		kind: "coin",
		label: "2 cent",
		short: "2 c",
		src: "/money/coin-2c.png",
		diameterMm: 18.75
	},
	{
		id: "c5",
		cents: 5,
		kind: "coin",
		label: "5 cent",
		short: "5 c",
		src: "/money/coin-5c.png",
		diameterMm: 21.25
	},
	{
		id: "c10",
		cents: 10,
		kind: "coin",
		label: "10 cent",
		short: "10 c",
		src: "/money/coin-10c.png",
		diameterMm: 19.75
	},
	{
		id: "c20",
		cents: 20,
		kind: "coin",
		label: "20 cent",
		short: "20 c",
		src: "/money/coin-20c.png",
		diameterMm: 22.25
	},
	{
		id: "c50",
		cents: 50,
		kind: "coin",
		label: "50 cent",
		short: "50 c",
		src: "/money/coin-50c.png",
		diameterMm: 24.25
	},
	{
		id: "e1",
		cents: 100,
		kind: "coin",
		label: "1 euro",
		short: "€1",
		src: "/money/coin-1e.png",
		diameterMm: 23.25
	},
	{
		id: "e2",
		cents: 200,
		kind: "coin",
		label: "2 euro",
		short: "€2",
		src: "/money/coin-2e.png",
		diameterMm: 25.75
	},
	{
		id: "n5",
		cents: 500,
		kind: "note",
		label: "5 euro",
		short: "€5",
		src: "/money/note-5.jpg",
		widthMm: 120,
		heightMm: 62
	},
	{
		id: "n10",
		cents: 1e3,
		kind: "note",
		label: "10 euro",
		short: "€10",
		src: "/money/note-10.jpg",
		widthMm: 127,
		heightMm: 67
	},
	{
		id: "n20",
		cents: 2e3,
		kind: "note",
		label: "20 euro",
		short: "€20",
		src: "/money/note-20.jpg",
		widthMm: 133,
		heightMm: 72
	},
	{
		id: "n50",
		cents: 5e3,
		kind: "note",
		label: "50 euro",
		short: "€50",
		src: "/money/note-50.jpg",
		widthMm: 140,
		heightMm: 77
	},
	{
		id: "n100",
		cents: 1e4,
		kind: "note",
		label: "100 euro",
		short: "€100",
		src: "/money/note-100.jpg",
		widthMm: 147,
		heightMm: 77
	},
	{
		id: "n200",
		cents: 2e4,
		kind: "note",
		label: "200 euro",
		short: "€200",
		src: "/money/note-200.jpg",
		widthMm: 153,
		heightMm: 77
	}
];
var DENOM_BY_ID = Object.fromEntries(DENOMS.map((d) => [d.id, d]));
var COINS = DENOMS.filter((d) => d.kind === "coin");
var NOTES = DENOMS.filter((d) => d.kind === "note");
var euroFmt = new Intl.NumberFormat("de-DE", {
	style: "currency",
	currency: "EUR"
});
function formatEuro(cents) {
	return euroFmt.format(cents / 100);
}
/** Accepts 12.5, 12,50, €12.50 */
function parseEurosToCents(raw) {
	const t = raw.trim().replace(/\s/g, "").replace(/^€/, "").replace(",", ".");
	if (!t) return null;
	const n = Number(t);
	if (!Number.isFinite(n) || n <= 0) return null;
	return Math.round(n * 100);
}
function tillCoinPx(diameterMm) {
	return Math.round(Math.max(40, 58 * diameterMm / 25.75));
}
function trayCoinPx(diameterMm) {
	return Math.round(Math.max(36, 52 * diameterMm / 25.75));
}
function noteAspect(widthMm, heightMm) {
	return widthMm / heightMm;
}
function mulberry(seed) {
	let t = seed + 1831565813;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function place(denom, seed) {
	const kind = DENOM_BY_ID[denom].kind;
	const a = mulberry(seed);
	const b = mulberry(seed ^ 2654435769);
	const c = mulberry(seed ^ 2246822507);
	if (kind === "note") return {
		x: 50 + (a - .5) * 34,
		y: 48 + (b - .5) * 30,
		rot: (c - .5) * 22
	};
	return {
		x: 50 + (a - .5) * 56,
		y: 52 + (b - .5) * 50,
		rot: (c - .5) * 50
	};
}
function uid() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
var useJar = create()(persist((set, get) => ({
	goal: null,
	items: [],
	seq: 0,
	add: (denom) => {
		const seq = get().seq + 1;
		const id = uid();
		const pos = place(denom, seq * 9973);
		const item = {
			id,
			denom,
			x: pos.x,
			y: pos.y,
			rot: pos.rot,
			z: seq,
			at: Date.now()
		};
		set({
			seq,
			items: [...get().items, item]
		});
	},
	undo: () => {
		const items = get().items;
		if (items.length === 0) return;
		set({ items: items.slice(0, -1) });
	},
	setGoal: (goal) => set({ goal }),
	clearStack: () => set({ items: [] }),
	resetAll: () => set({
		goal: null,
		items: [],
		seq: 0
	})
}), {
	name: "eurojar-v1",
	partialize: (s) => ({
		goal: s.goal,
		items: s.items,
		seq: s.seq
	})
}));
function useJarTotalCents() {
	return useJar((s) => s.items.reduce((sum, it) => sum + DENOM_BY_ID[it.denom].cents, 0));
}
var VISIBLE = 56;
function FeltTray({ emptyHint }) {
	const items = useJar((s) => s.items);
	const visible = items.length > VISIBLE ? items.slice(-56) : items;
	const hidden = items.length - visible.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex min-h-52 flex-1 flex-col",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto w-full max-w-3xl flex-1 px-3 sm:px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-full min-h-52 overflow-hidden rounded-xl bg-felt-rim p-2 sm:rounded-2xl sm:p-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "felt relative h-full min-h-48 overflow-hidden rounded-lg sm:rounded-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "felt-noise absolute inset-0" }),
						emptyHint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center text-sm text-accent-fg/55",
							children: "Tap a coin or bill below to start stacking."
						}) : null,
						hidden > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "absolute top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-felt-rim/70 px-3 py-1 text-xs text-accent-fg/80",
							children: ["Showing last ", VISIBLE]
						}) : null,
						visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piece, {
							item,
							freshly: Date.now() - item.at < 800
						}, item.id))
					]
				})
			})
		})
	});
}
function Piece({ item, freshly }) {
	const d = DENOM_BY_ID[item.denom];
	const style = {
		left: `${item.x}%`,
		top: `${item.y}%`,
		zIndex: item.z,
		["--rot"]: `${item.rot}deg`
	};
	if (d.kind === "coin") {
		const size = trayCoinPx(d.diameterMm ?? 20);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: d.src,
			alt: d.label,
			width: size,
			height: size,
			draggable: false,
			className: `coin-shadow coin-img pointer-events-none absolute ${freshly ? "land-in" : ""}`,
			style: {
				...style,
				width: size,
				height: size,
				transform: freshly ? void 0 : `translate(-50%, -50%) rotate(${item.rot}deg)`
			}
		});
	}
	const aspect = noteAspect(d.widthMm ?? 120, d.heightMm ?? 62);
	const width = Math.round(Math.min(168, 118 + d.cents / 2e4 * 50));
	const height = Math.round(width / aspect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: d.src,
		alt: d.label,
		width,
		height,
		draggable: false,
		className: `note-shadow money-img pointer-events-none absolute rounded-sm ${freshly ? "land-in" : ""}`,
		style: {
			...style,
			width,
			height,
			transform: freshly ? void 0 : `translate(-50%, -50%) rotate(${item.rot}deg)`
		}
	});
}
var PRESETS = [
	20,
	50,
	100,
	250,
	500,
	1e3
];
function GoalSetup() {
	const setGoal = useJar((s) => s.setGoal);
	const [name, setName] = (0, import_react.useState)("");
	const [amount, setAmount] = (0, import_react.useState)("100");
	const [error, setError] = (0, import_react.useState)(null);
	function submit(e) {
		e.preventDefault();
		const cents = parseEurosToCents(amount);
		const title = name.trim() || "My jar";
		if (!cents) {
			setError("Enter a goal larger than zero.");
			return;
		}
		setGoal({
			name: title,
			targetCents: cents
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper-noise absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stagger-in text-sm font-medium tracking-wide text-muted uppercase",
					children: "Eurojar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "stagger-in mt-3 font-display text-4xl leading-tight font-semibold tracking-tight text-fg sm:text-5xl",
					style: { animationDelay: "40ms" },
					children: "Stack real euros until you hit your goal."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stagger-in mt-4 max-w-sm text-muted",
					style: { animationDelay: "80ms" },
					children: "Tap coins and bills onto the felt. The jar remembers on this device."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "stagger-in mt-10 flex flex-col gap-6",
					style: { animationDelay: "120ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "goal-name",
								children: "What are you saving for?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "goal-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Weekend in Lisbon",
								autoComplete: "off",
								maxLength: 48
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "goal-amount",
									children: "Goal amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted",
										children: "€"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "goal-amount",
										inputMode: "decimal",
										value: amount,
										onChange: (e) => {
											setAmount(e.target.value);
											setError(null);
										},
										className: "pl-8 tabular-nums",
										placeholder: "100"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 pt-1",
									children: PRESETS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setAmount(String(n));
											setError(null);
										},
										className: cn("h-9 rounded-full px-3 text-sm shadow-card pressable", amount === String(n) ? "bg-accent text-accent-fg" : "bg-surface text-fg"),
										children: [n, " €"]
									}, n))
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-danger",
									children: error
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-2 w-full",
							children: "Open the jar"
						})
					]
				})
			]
		})]
	});
}
function Till() {
	const items = useJar((s) => s.items);
	const counts = /* @__PURE__ */ new Map();
	for (const it of items) counts.set(it.denom, (counts.get(it.denom) ?? 0) + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "till-safe border-t border-border bg-bg-warm/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-3xl flex-col gap-3 px-3 py-3 sm:px-5 sm:py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Coins",
				children: COINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoinKey, {
					denom: d,
					count: counts.get(d.id) ?? 0
				}, d.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Bills",
				children: NOTES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteKey, {
					denom: d,
					count: counts.get(d.id) ?? 0
				}, d.id))
			})]
		})
	});
}
function Row({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs font-medium tracking-wider text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end gap-1 overflow-x-auto pb-1 sm:gap-2",
		children
	})] });
}
function useHoldAdd(denomId) {
	const add = useJar((s) => s.add);
	const timeoutRef = (0, import_react.useRef)(null);
	const intervalRef = (0, import_react.useRef)(null);
	function clear() {
		if (timeoutRef.current != null) {
			window.clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (intervalRef.current != null) {
			window.clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}
	function onPointerDown(e) {
		if (e.button !== 0) return;
		e.preventDefault();
		e.currentTarget.setPointerCapture(e.pointerId);
		add(denomId);
		timeoutRef.current = window.setTimeout(() => {
			intervalRef.current = window.setInterval(() => add(denomId), 95);
		}, 420);
	}
	function onKeyDown(e) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			add(denomId);
		}
	}
	return {
		onPointerDown,
		onPointerUp: clear,
		onPointerCancel: clear,
		onLostPointerCapture: clear,
		onKeyDown,
		onContextMenu: (e) => e.preventDefault()
	};
}
function CoinKey({ denom, count }) {
	const handlers = useHoldAdd(denom.id);
	const size = tillCoinPx(denom.diameterMm ?? 20);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": `Add ${denom.label}`,
		className: "pressable relative flex min-w-11 flex-col items-center gap-1 rounded-md px-1 pt-1 pb-0.5 select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none",
		...handlers,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: denom.src,
				alt: "",
				width: size,
				height: size,
				draggable: false,
				className: "coin-shadow coin-img pointer-events-none",
				style: {
					width: size,
					height: size
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-muted tabular-nums",
				children: denom.short
			}),
			count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-0 right-0 rounded-full bg-accent px-1.5 text-xs leading-4 font-medium text-accent-fg tabular-nums",
				children: count
			}) : null
		]
	});
}
function NoteKey({ denom, count }) {
	const handlers = useHoldAdd(denom.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": `Add ${denom.label}`,
		className: "pressable relative flex min-w-16 flex-col items-center gap-1 rounded-md px-1 pt-1 pb-0.5 select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none",
		...handlers,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: denom.src,
				alt: "",
				draggable: false,
				className: "money-img pointer-events-none h-9 w-auto rounded-sm sm:h-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-muted tabular-nums",
				children: denom.short
			}),
			count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-0 right-0 rounded-full bg-accent px-1.5 text-xs leading-4 font-medium text-accent-fg tabular-nums",
				children: count
			}) : null
		]
	});
}
function EurojarApp() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const goal = useJar((s) => s.goal);
	(0, import_react.useEffect)(() => {
		const done = () => setHydrated(true);
		if (useJar.persist.hasHydrated()) done();
		return useJar.persist.onFinishHydration(done);
	}, []);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-muted",
			children: "Eurojar"
		})
	});
	if (!goal) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalSetup, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarScreen, {});
}
function JarScreen() {
	const goal = useJar((s) => s.goal);
	const items = useJar((s) => s.items);
	const undo = useJar((s) => s.undo);
	const total = useJarTotalCents();
	const remaining = Math.max(0, goal.targetCents - total);
	const over = Math.max(0, total - goal.targetCents);
	const pct = Math.min(100, total / goal.targetCents * 100);
	const reached = total >= goal.targetCents;
	const [historyOpen, setHistoryOpen] = (0, import_react.useState)(false);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [resetOpen, setResetOpen] = (0, import_react.useState)(false);
	const [flash, setFlash] = (0, import_react.useState)(total);
	(0, import_react.useEffect)(() => {
		setFlash(total);
	}, [total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper-noise pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 mx-auto flex w-full max-w-3xl items-start justify-between gap-3 px-4 pt-4 pb-2 sm:px-5 sm:pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wider text-muted uppercase",
						children: "Eurojar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 truncate font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl",
						children: goal.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Edit goal",
						onClick: () => setEditOpen(true),
						className: "size-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "History",
						onClick: () => setHistoryOpen(true),
						className: "size-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto w-full max-w-3xl px-4 pb-3 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "flash-amt font-display text-4xl leading-none font-semibold tracking-tight tabular-nums sm:text-5xl",
							children: formatEuro(total)
						}, flash), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pb-1 text-sm text-muted tabular-nums",
							children: ["of ", formatEuro(goal.targetCents)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 overflow-hidden rounded-full bg-bg-warm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
							style: { width: `${pct}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("tabular-nums", reached ? "text-accent" : "text-muted"),
							children: reached ? over > 0 ? `Goal reached · ${formatEuro(over)} over` : "Goal reached" : `${formatEuro(remaining)} to go`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted tabular-nums",
							children: [Math.round(pct), "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: undo,
							disabled: items.length === 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {}), "Undo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setResetOpen(true),
							disabled: items.length === 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Empty jar"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeltTray, { emptyHint: items.length === 0 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Till, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistorySheet, {
				open: historyOpen,
				onOpenChange: setHistoryOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditGoalDialog, {
				open: editOpen,
				onOpenChange: setEditOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetDialog, {
				open: resetOpen,
				onOpenChange: setResetOpen
			})
		]
	});
}
function HistorySheet({ open, onOpenChange }) {
	const items = useJar((s) => s.items);
	const reversed = [...items].reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Stack" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: items.length === 0 ? "Nothing in the jar yet." : `${items.length} piece${items.length === 1 ? "" : "s"}` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: reversed.map((it) => {
				const d = DENOM_BY_ID[it.denom];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.src,
							alt: "",
							className: cn("shrink-0 object-contain", d.kind === "coin" ? "size-9" : "h-7 w-12 rounded-sm money-img")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: d.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted tabular-nums",
								children: new Date(it.at).toLocaleTimeString(void 0, {
									hour: "2-digit",
									minute: "2-digit"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm tabular-nums",
							children: formatEuro(d.cents)
						})
					]
				}, it.id);
			})
		})] })
	});
}
function EditGoalDialog({ open, onOpenChange }) {
	const goal = useJar((s) => s.goal);
	const setGoal = useJar((s) => s.setGoal);
	const resetAll = useJar((s) => s.resetAll);
	const [name, setName] = (0, import_react.useState)(goal?.name ?? "");
	const [amount, setAmount] = (0, import_react.useState)(goal ? String(goal.targetCents / 100) : "");
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open && goal) {
			setName(goal.name);
			setAmount(String(goal.targetCents / 100));
			setError(null);
		}
	}, [open, goal]);
	function save() {
		const cents = parseEurosToCents(amount);
		if (!cents) {
			setError("Enter a goal larger than zero.");
			return;
		}
		setGoal({
			name: name.trim() || "My jar",
			targetCents: cents
		});
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit goal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "The stack stays. Only the target changes." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "edit-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "edit-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						maxLength: 48
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "edit-amount",
							children: "Amount"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted",
								children: "€"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-amount",
								inputMode: "decimal",
								value: amount,
								onChange: (e) => {
									setAmount(e.target.value);
									setError(null);
								},
								className: "pl-8 tabular-nums"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							children: error
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				onClick: () => {
					resetAll();
					onOpenChange(false);
				},
				children: "New goal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				onClick: save,
				children: "Save"
			})] })
		] })
	});
}
function ResetDialog({ open, onOpenChange }) {
	const clearStack = useJar((s) => s.clearStack);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Empty the jar?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "All coins and bills come out. The goal stays." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "secondary",
			onClick: () => onOpenChange(false),
			children: "Keep stacking"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "danger",
			onClick: () => {
				clearStack();
				onOpenChange(false);
			},
			children: "Empty jar"
		})] })] })
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EurojarApp, {});
}
//#endregion
export { Home as component };
