"use client";

import { History, Pencil, RotateCcw, Undo2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DENOM_BY_ID, formatEuro, parseEurosToCents } from "@/lib/money";
import { useJar, useJarTotalCents } from "@/lib/store";
import { cn } from "@/lib/utils";
import { FeltTray } from "./felt-tray";
import { GoalSetup } from "./goal-setup";
import { Till } from "./till";

export function EurojarApp() {
  const [hydrated, setHydrated] = useState(false);
  const goal = useJar((s) => s.goal);

  useEffect(() => {
    const done = () => setHydrated(true);
    if (useJar.persist.hasHydrated()) done();
    const unsub = useJar.persist.onFinishHydration(done);
    return unsub;
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg">
        <p className="font-display text-lg text-muted">Eurojar</p>
      </div>
    );
  }

  if (!goal) return <GoalSetup />;
  return <JarScreen />;
}

function JarScreen() {
  const goal = useJar((s) => s.goal)!;
  const items = useJar((s) => s.items);
  const undo = useJar((s) => s.undo);
  const total = useJarTotalCents();
  const remaining = Math.max(0, goal.targetCents - total);
  const over = Math.max(0, total - goal.targetCents);
  const pct = Math.min(100, (total / goal.targetCents) * 100);
  const reached = total >= goal.targetCents;

  const [historyOpen, setHistoryOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [flash, setFlash] = useState(total);

  useEffect(() => {
    setFlash(total);
  }, [total]);

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-bg">
      <div className="paper-noise pointer-events-none absolute inset-0" />

      <header className="relative z-10 mx-auto flex w-full max-w-3xl shrink-0 items-start justify-between gap-3 px-4 pt-4 pb-2 sm:px-5 sm:pt-6">
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-wider text-muted uppercase">Eurojar</p>
          <h1 className="mt-1 truncate font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
            {goal.name}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Edit goal"
            onClick={() => setEditOpen(true)}
            className="size-10"
          >
            <Pencil />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="History"
            onClick={() => setHistoryOpen(true)}
            className="size-10"
          >
            <History />
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-3xl shrink-0 px-4 pb-3 sm:px-5">
        <div className="flex items-end justify-between gap-3">
          <p
            key={flash}
            className="flash-amt font-display text-4xl leading-none font-semibold tracking-tight tabular-nums sm:text-5xl"
          >
            {formatEuro(total)}
          </p>
          <p className="pb-1 text-sm text-muted tabular-nums">of {formatEuro(goal.targetCents)}</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg-warm">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between gap-3 text-sm">
          <p className={cn("tabular-nums", reached ? "text-accent" : "text-muted")}>
            {reached
              ? over > 0
                ? `Goal reached · ${formatEuro(over)} over`
                : "Goal reached"
              : `${formatEuro(remaining)} to go`}
          </p>
          <p className="text-muted tabular-nums">{Math.round(pct)}%</p>
        </div>
        <div className="mt-3 flex gap-2">
          <Button variant="secondary" size="sm" onClick={undo} disabled={items.length === 0}>
            <Undo2 />
            Undo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setResetOpen(true)}
            disabled={items.length === 0}
          >
            <RotateCcw />
            Empty jar
          </Button>
        </div>
      </section>

      <FeltTray emptyHint={items.length === 0} />
      <Till />

      <HistorySheet open={historyOpen} onOpenChange={setHistoryOpen} />
      <EditGoalDialog open={editOpen} onOpenChange={setEditOpen} />
      <ResetDialog open={resetOpen} onOpenChange={setResetOpen} />
    </div>
  );
}

function HistorySheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const items = useJar((s) => s.items);
  const reversed = [...items].reverse();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Stack</SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? "Nothing in the jar yet."
              : `${items.length} piece${items.length === 1 ? "" : "s"}`}
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {reversed.map((it) => {
            const d = DENOM_BY_ID[it.denom];
            return (
              <div key={it.id} className="flex items-center gap-3 border-b border-border py-2.5">
                <img
                  src={d.src}
                  alt=""
                  className={cn(
                    "shrink-0 object-contain",
                    d.kind === "coin" ? "size-9" : "h-7 w-12 rounded-sm money-img",
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{d.label}</p>
                  <p className="text-xs text-muted tabular-nums">
                    {new Date(it.at).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <p className="text-sm tabular-nums">{formatEuro(d.cents)}</p>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function EditGoalDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const goal = useJar((s) => s.goal);
  const setGoal = useJar((s) => s.setGoal);
  const resetAll = useJar((s) => s.resetAll);
  const [name, setName] = useState(goal?.name ?? "");
  const [amount, setAmount] = useState(goal ? String(goal.targetCents / 100) : "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    setGoal({ name: name.trim() || "My jar", targetCents: cents });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit goal</DialogTitle>
          <DialogDescription>The stack stays. Only the target changes.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-name">Name</Label>
            <Input id="edit-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={48} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-amount">Amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted">
                €
              </span>
              <Input
                id="edit-amount"
                inputMode="decimal"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError(null);
                }}
                className="pl-8 tabular-nums"
              />
            </div>
            {error ? <p className="text-sm text-danger">{error}</p> : null}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              resetAll();
              onOpenChange(false);
            }}
          >
            New goal
          </Button>
          <Button type="button" onClick={save}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ResetDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const clearStack = useJar((s) => s.clearStack);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Empty the jar?</DialogTitle>
          <DialogDescription>All coins and bills come out. The goal stays.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
            Keep stacking
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              clearStack();
              onOpenChange(false);
            }}
          >
            Empty jar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
