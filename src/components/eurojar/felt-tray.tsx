"use client";

import type { CSSProperties } from "react";
import { DENOM_BY_ID, noteAspect, trayCoinPx } from "@/lib/money";
import { useJar, type StackItem } from "@/lib/store";

const VISIBLE = 56;

export function FeltTray({ emptyHint }: { emptyHint: boolean }) {
  const items = useJar((s) => s.items);
  const visible = items.length > VISIBLE ? items.slice(-VISIBLE) : items;
  const hidden = items.length - visible.length;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div className="relative mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col px-3 pb-2 sm:px-5">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-felt-rim p-2 sm:rounded-2xl sm:p-2.5">
          <div className="felt relative h-full min-h-0 overflow-hidden rounded-lg sm:rounded-xl">
            <div className="felt-noise absolute inset-0" />
            {emptyHint ? (
              <p className="pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center text-sm text-accent-fg/55">
                Tap a coin or bill below to start stacking.
              </p>
            ) : null}
            {hidden > 0 ? (
              <p className="absolute top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-felt-rim/70 px-3 py-1 text-xs text-accent-fg/80">
                Showing last {VISIBLE}
              </p>
            ) : null}
            {visible.map((item) => (
              <Piece key={item.id} item={item} freshly={Date.now() - item.at < 800} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Piece({ item, freshly }: { item: StackItem; freshly: boolean }) {
  const d = DENOM_BY_ID[item.denom];
  const style = {
    left: `${item.x}%`,
    top: `${item.y}%`,
    zIndex: item.z,
    ["--rot" as string]: `${item.rot}deg`,
  } as CSSProperties;

  if (d.kind === "coin") {
    const size = trayCoinPx(d.diameterMm ?? 20);
    return (
      <img
        src={d.src}
        alt={d.label}
        width={size}
        height={size}
        draggable={false}
        className={`coin-shadow coin-img pointer-events-none absolute ${freshly ? "land-in" : ""}`}
        style={{
          ...style,
          width: size,
          height: size,
          transform: freshly ? undefined : `translate(-50%, -50%) rotate(${item.rot}deg)`,
        }}
      />
    );
  }

  const aspect = noteAspect(d.widthMm ?? 120, d.heightMm ?? 62);
  const width = Math.round(Math.min(210, 140 + (d.cents / 20000) * 70));
  const height = Math.round(width / aspect);

  return (
    <img
      src={d.src}
      alt={d.label}
      width={width}
      height={height}
      draggable={false}
      className={`note-shadow money-img pointer-events-none absolute rounded-sm ${freshly ? "land-in" : ""}`}
      style={{
        ...style,
        width,
        height,
        transform: freshly ? undefined : `translate(-50%, -50%) rotate(${item.rot}deg)`,
      }}
    />
  );
}
