"use client";

import { useRef, type KeyboardEvent, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { COINS, NOTES, tillCoinPx, type Denom } from "@/lib/money";
import { useJar } from "@/lib/store";

export function Till() {
  const items = useJar((s) => s.items);
  const counts = new Map<string, number>();
  for (const it of items) counts.set(it.denom, (counts.get(it.denom) ?? 0) + 1);

  return (
    <div className="till-safe shrink-0 border-t border-border bg-bg-warm/80">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-3 py-3 sm:px-5 sm:py-4">
        <Row label="Coins">
          {COINS.map((d) => (
            <CoinKey key={d.id} denom={d} count={counts.get(d.id) ?? 0} />
          ))}
        </Row>
        <Row label="Bills">
          {NOTES.map((d) => (
            <NoteKey key={d.id} denom={d} count={counts.get(d.id) ?? 0} />
          ))}
        </Row>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium tracking-wider text-muted uppercase">{label}</p>
      <div className="flex items-end gap-1 overflow-x-auto pb-1 sm:gap-2">{children}</div>
    </div>
  );
}

function useHoldAdd(denomId: Denom["id"]) {
  const add = useJar((s) => s.add);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

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

  function onPointerDown(e: PointerEvent<HTMLButtonElement>) {
    if (e.button !== 0) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    add(denomId);
    timeoutRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => add(denomId), 95);
    }, 420);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
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
    onContextMenu: (e: MouseEvent) => e.preventDefault(),
  };
}

function CoinKey({ denom, count }: { denom: Denom; count: number }) {
  const handlers = useHoldAdd(denom.id);
  const size = tillCoinPx(denom.diameterMm ?? 20);
  return (
    <button
      type="button"
      aria-label={`Add ${denom.label}`}
      className="pressable relative flex min-w-11 flex-col items-center gap-1 rounded-md px-1 py-1 select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none"
      {...handlers}
    >
      <img
        src={denom.src}
        alt=""
        width={size}
        height={size}
        draggable={false}
        className="coin-shadow coin-img pointer-events-none"
        style={{ width: size, height: size }}
      />
      <span className="text-xs font-medium text-muted tabular-nums">
        {denom.short}
        {count > 0 ? <span className="text-fg"> · {count}</span> : null}
      </span>
    </button>
  );
}

function NoteKey({ denom, count }: { denom: Denom; count: number }) {
  const handlers = useHoldAdd(denom.id);
  return (
    <button
      type="button"
      aria-label={`Add ${denom.label}`}
      className="pressable relative flex min-w-16 flex-col items-center gap-1 rounded-md px-1 py-1 select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:outline-none"
      {...handlers}
    >
      <img
        src={denom.src}
        alt=""
        draggable={false}
        className="money-img pointer-events-none h-10 w-auto rounded-sm sm:h-11"
      />
      <span className="text-xs font-medium text-muted tabular-nums">
        {denom.short}
        {count > 0 ? <span className="text-fg"> · {count}</span> : null}
      </span>
    </button>
  );
}
