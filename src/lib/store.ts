import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DenomId } from "./money";
import { DENOM_BY_ID } from "./money";

export type StackItem = {
  id: string;
  denom: DenomId;
  x: number;
  y: number;
  rot: number;
  z: number;
  at: number;
};

export type Goal = {
  name: string;
  targetCents: number;
};

type JarState = {
  goal: Goal | null;
  items: StackItem[];
  seq: number;
  add: (denom: DenomId) => void;
  undo: () => void;
  setGoal: (goal: Goal) => void;
  clearStack: () => void;
  resetAll: () => void;
};

function mulberry(seed: number) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function place(denom: DenomId, seed: number) {
  const kind = DENOM_BY_ID[denom].kind;
  const a = mulberry(seed);
  const b = mulberry(seed ^ 0x9e3779b9);
  const c = mulberry(seed ^ 0x85ebca6b);
  if (kind === "note") {
    return {
      x: 50 + (a - 0.5) * 34,
      y: 48 + (b - 0.5) * 30,
      rot: (c - 0.5) * 22,
    };
  }
  return {
    x: 50 + (a - 0.5) * 56,
    y: 52 + (b - 0.5) * 50,
    rot: (c - 0.5) * 50,
  };
}

function uid() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export const useJar = create<JarState>()(
  persist(
    (set, get) => ({
      goal: null,
      items: [],
      seq: 0,
      add: (denom) => {
        const seq = get().seq + 1;
        const id = uid();
        const pos = place(denom, seq * 9973);
        const item: StackItem = {
          id,
          denom,
          x: pos.x,
          y: pos.y,
          rot: pos.rot,
          z: seq,
          at: Date.now(),
        };
        set({ seq, items: [...get().items, item] });
      },
      undo: () => {
        const items = get().items;
        if (items.length === 0) return;
        set({ items: items.slice(0, -1) });
      },
      setGoal: (goal) => set({ goal }),
      clearStack: () => set({ items: [] }),
      resetAll: () => set({ goal: null, items: [], seq: 0 }),
    }),
    {
      name: "eurojar-v1",
      partialize: (s) => ({
        goal: s.goal,
        items: s.items,
        seq: s.seq,
      }),
    },
  ),
);

export function useJarTotalCents() {
  return useJar((s) => s.items.reduce((sum, it) => sum + DENOM_BY_ID[it.denom].cents, 0));
}
