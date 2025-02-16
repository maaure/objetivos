import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Delivery, Results } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateProgress(deliveries?: Delivery[]) {
  if (!deliveries || deliveries.length === 0) return 0;
  return Math.ceil(deliveries.reduce((sum, d) => sum + Number(d.value), 0) / deliveries.length);
}

export function calculateObjetivoProgress(resultKeys: Results[]) {
  if (!resultKeys || resultKeys.length === 0) return 0;
  const total = resultKeys.reduce((sum, rk) => sum + (rk.deliveries ? calculateProgress(rk.deliveries) : 0), 0);
  return Math.ceil(total / resultKeys.length);
}
