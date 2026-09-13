import { createFileRoute } from "@tanstack/react-router";
import { EurojarApp } from "@/components/eurojar/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <EurojarApp />;
}
