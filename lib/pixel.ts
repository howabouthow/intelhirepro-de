import { getPixelIdForPath } from "@/lib/landing-config";

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function fbqTrack(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined" || !window.fbq) return;
  const pixelId = getPixelIdForPath(window.location.pathname);
  if (!pixelId) return;
  try {
    window.fbq("trackSingle", pixelId, event, params);
  } catch {}
}
