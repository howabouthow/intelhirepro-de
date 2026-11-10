"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { getPixelIdForPath } from "@/lib/landing-config";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: unknown;
    __hireproMetaPixelsInitialized?: Record<string, boolean>;
    __hireproPageViewsSent?: Record<string, boolean>;
  }
}

export default function MetaPixel() {
  const pathname = usePathname() || "/";
  const pixelId = getPixelIdForPath(pathname);
  const pageViewKey = `${pixelId}:${pathname}`;

  if (!pixelId) return null;

  return (
    <Script
      id={`meta-pixel-${pixelId}-${pathname.replace(/[^a-zA-Z0-9]/g, "-")}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            if (!window.fbq) {
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            }

            window.__hireproMetaPixelsInitialized = window.__hireproMetaPixelsInitialized || {};
            window.__hireproPageViewsSent = window.__hireproPageViewsSent || {};

            if (!window.__hireproMetaPixelsInitialized['${pixelId}']) {
              fbq('init', '${pixelId}');
              window.__hireproMetaPixelsInitialized['${pixelId}'] = true;
            }

            if (!window.__hireproPageViewsSent['${pageViewKey}']) {
              fbq('trackSingle', '${pixelId}', 'PageView');
              window.__hireproPageViewsSent['${pageViewKey}'] = true;
            }
          })();
        `,
      }}
    />
  );
}
