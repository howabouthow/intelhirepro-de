export const HOME_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1615917750205764";

export const LANDING_PAGES = {
  De002: { slug: "De002", pixelId: "1145438844674496" },
  De003: { slug: "De003", pixelId: "1115162561371096" },
  De004: { slug: "De004", pixelId: "2054700951850488" },
} as const;

export type LandingSlug = keyof typeof LANDING_PAGES;

export function getPixelIdForPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return HOME_PIXEL_ID;

  const slug = parts[0] as LandingSlug;
  if (slug in LANDING_PAGES) return LANDING_PAGES[slug].pixelId;

  return "";
}

export function isLandingSlug(value: string): value is LandingSlug {
  return value in LANDING_PAGES;
}
