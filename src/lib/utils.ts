import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Delivery, Objetivo } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateProgress(deliveries: Delivery[]) {
  if (!deliveries.length) return 0;
  return Math.ceil(deliveries.reduce((sum, d) => sum + Number(d.value), 0) / deliveries.length);
}

export function calculateObjetivoProgress(okr: Objetivo) {
  const total = okr.resultKeys.reduce((sum, rk) => sum + calculateProgress(rk.deliveries), 0);
  return Math.ceil(total / okr.resultKeys.length);
}
