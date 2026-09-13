"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseEurosToCents } from "@/lib/money";
import { useJar } from "@/lib/store";
import { cn } from "@/lib/utils";

const PRESETS = [20, 50, 100, 250, 500, 1000];

export function GoalSetup() {
  const setGoal = useJar((s) => s.setGoal);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("100");
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const cents = parseEurosToCents(amount);
    const title = name.trim() || "My jar";
    if (!cents) {
      setError("Enter a goal larger than zero.");
      return;
    }
    setGoal({ name: title, targetCents: cents });
  }

  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-12">
      <div className="paper-noise absolute inset-0" />
      <div className="relative">
        <p className="stagger-in text-sm font-medium tracking-wide text-muted uppercase">Eurojar</p>
        <h1
          className="stagger-in mt-3 font-display text-4xl leading-tight font-semibold tracking-tight text-fg sm:text-5xl"
          style={{ animationDelay: "40ms" }}
        >
          Stack real euros until you hit your goal.
        </h1>
        <p className="stagger-in mt-4 max-w-sm text-muted" style={{ animationDelay: "80ms" }}>
          Tap coins and bills onto the felt. The jar remembers on this device.
        </p>

        <form
          onSubmit={submit}
          className="stagger-in mt-10 flex flex-col gap-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="goal-name">What are you saving for?</Label>
            <Input
              id="goal-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Weekend in Lisbon"
              autoComplete="off"
              maxLength={48}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="goal-amount">Goal amount</Label>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted">
                €
              </span>
              <Input
                id="goal-amount"
                inputMode="decimal"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError(null);
                }}
                className="pl-8 tabular-nums"
                placeholder="100"
              />
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {PRESETS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setAmount(String(n));
                    setError(null);
                  }}
                  className={cn(
                    "h-9 rounded-full px-3 text-sm shadow-card pressable",
                    amount === String(n) ? "bg-accent text-accent-fg" : "bg-surface text-fg",
                  )}
                >
                  {n} €
                </button>
              ))}
            </div>
            {error ? <p className="text-sm text-danger">{error}</p> : null}
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full">
            Open the jar
          </Button>
        </form>
      </div>
    </div>
  );
}
