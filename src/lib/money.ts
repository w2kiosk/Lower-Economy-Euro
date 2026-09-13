export type DenomId =
  | "c1"
  | "c2"
  | "c5"
  | "c10"
  | "c20"
  | "c50"
  | "e1"
  | "e2"
  | "n5"
  | "n10"
  | "n20"
  | "n50"
  | "n100"
  | "n200";

export type Denom = {
  id: DenomId;
  cents: number;
  kind: "coin" | "note";
  label: string;
  short: string;
  src: string;
  diameterMm?: number;
  widthMm?: number;
  heightMm?: number;
};

export const DENOMS: Denom[] = [
  { id: "c1", cents: 1, kind: "coin", label: "1 cent", short: "1 c", src: "/money/coin-1c.png", diameterMm: 16.25 },
  { id: "c2", cents: 2, kind: "coin", label: "2 cent", short: "2 c", src: "/money/coin-2c.png", diameterMm: 18.75 },
  { id: "c5", cents: 5, kind: "coin", label: "5 cent", short: "5 c", src: "/money/coin-5c.png", diameterMm: 21.25 },
  { id: "c10", cents: 10, kind: "coin", label: "10 cent", short: "10 c", src: "/money/coin-10c.png", diameterMm: 19.75 },
  { id: "c20", cents: 20, kind: "coin", label: "20 cent", short: "20 c", src: "/money/coin-20c.png", diameterMm: 22.25 },
  { id: "c50", cents: 50, kind: "coin", label: "50 cent", short: "50 c", src: "/money/coin-50c.png", diameterMm: 24.25 },
  { id: "e1", cents: 100, kind: "coin", label: "1 euro", short: "€1", src: "/money/coin-1e.png", diameterMm: 23.25 },
  { id: "e2", cents: 200, kind: "coin", label: "2 euro", short: "€2", src: "/money/coin-2e.png", diameterMm: 25.75 },
  { id: "n5", cents: 500, kind: "note", label: "5 euro", short: "€5", src: "/money/note-5.jpg", widthMm: 120, heightMm: 62 },
  { id: "n10", cents: 1000, kind: "note", label: "10 euro", short: "€10", src: "/money/note-10.jpg", widthMm: 127, heightMm: 67 },
  { id: "n20", cents: 2000, kind: "note", label: "20 euro", short: "€20", src: "/money/note-20.jpg", widthMm: 133, heightMm: 72 },
  { id: "n50", cents: 5000, kind: "note", label: "50 euro", short: "€50", src: "/money/note-50.jpg", widthMm: 140, heightMm: 77 },
  { id: "n100", cents: 10000, kind: "note", label: "100 euro", short: "€100", src: "/money/note-100.jpg", widthMm: 147, heightMm: 77 },
  { id: "n200", cents: 20000, kind: "note", label: "200 euro", short: "€200", src: "/money/note-200.jpg", widthMm: 153, heightMm: 77 },
];

export const DENOM_BY_ID: Record<DenomId, Denom> = Object.fromEntries(
  DENOMS.map((d) => [d.id, d]),
) as Record<DenomId, Denom>;

export const COINS = DENOMS.filter((d) => d.kind === "coin");
export const NOTES = DENOMS.filter((d) => d.kind === "note");

const euroFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export function formatEuro(cents: number): string {
  return euroFmt.format(cents / 100);
}

export function formatEuroPlain(cents: number): string {
  return euroFmt.format(cents / 100).replace(/\s/g, " ");
}

/** Accepts 12.5, 12,50, €12.50 */
export function parseEurosToCents(raw: string): number | null {
  const t = raw.trim().replace(/\s/g, "").replace(/^€/, "").replace(",", ".");
  if (!t) return null;
  const n = Number(t);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.round(n * 100);
}

export function tillCoinPx(diameterMm: number): number {
  return Math.round(Math.max(40, (58 * diameterMm) / 25.75));
}

export function trayCoinPx(diameterMm: number): number {
  return Math.round(Math.max(44, (70 * diameterMm) / 25.75));
}

export function noteAspect(widthMm: number, heightMm: number): number {
  return widthMm / heightMm;
}
