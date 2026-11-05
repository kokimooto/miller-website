"use client";

import {
  FacebookShareButton,
  ViberShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  XShareButton,
} from "react-share";
import type { ComponentType } from "react";
import { SITE_URL, site } from "@/lib/site";

type Network = {
  Btn: ComponentType<{
    url: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string;
  }>;
  label: string;
  color: string;
  glow: string;
  path: string;
};

const NETWORKS: Network[] = [
  {
    Btn: FacebookShareButton,
    label: "Сподели във Facebook",
    color: "#1877F2",
    glow: "rgba(24,119,242,0.55)",
    path: "M14.6 8.6H16V6h-2c-1.8 0-3 1.3-3 3v2H9v2.6h2V21h2.6v-5.4H16l.5-2.6h-3V9.3c0-.5.3-.7.7-.7Z",
  },
  {
    Btn: ViberShareButton,
    label: "Сподели във Viber",
    color: "#7360F2",
    glow: "rgba(115,96,242,0.55)",
    path: "M8.7 4.7c-.4-.9-1-1-1.9-.7-.8.3-2.1 1-2.5 2.6-.5 1.8.2 4.1 2.7 7.4 2.5 3.2 4.7 4.5 6.5 5 1.6.5 2.9-.4 3.4-1.1.6-.8.7-1.5.6-1.9-.1-.3-.4-.5-.8-.7l-2.3-1.1c-.4-.2-.8-.1-1 .2l-.8.9c-.1.2-.3.2-.5.1-.8-.3-1.7-1-2.4-1.9-.7-.8-1.1-1.7-1.3-2.3 0-.2 0-.4.2-.5l1-.7c.3-.2.4-.6.3-1L8.7 4.7Z",
  },
  {
    Btn: WhatsappShareButton,
    label: "Сподели в WhatsApp",
    color: "#25D366",
    glow: "rgba(37,211,102,0.55)",
    path: "M12 3.4a8.6 8.6 0 0 0-7.3 13.1L3.4 21l4.6-1.2A8.6 8.6 0 1 0 12 3.4Zm0 1.6a7 7 0 1 1-3.6 13l-.3-.2-2.2.6.6-2.1-.2-.3A7 7 0 0 1 12 5Zm-2.3 3.1c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.5 1 2.7c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.7 2.9.6.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.4-1.8-.8c-.2-.1-.4-.1-.6.1l-.7 1c-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.4-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5.3-.5c0-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.4Z",
  },
  {
    Btn: TelegramShareButton,
    label: "Сподели в Telegram",
    color: "#229ED9",
    glow: "rgba(34,158,217,0.55)",
    path: "M9.8 15.4 9.6 19c.4 0 .6-.2.8-.4l1.9-1.8 3.9 2.9c.7.4 1.2.2 1.4-.7l2.6-12.1c.3-1.1-.4-1.6-1.1-1.3L2.4 9.8c-1.1.4-1 1-.1 1.3l4.2 1.3 9.8-6.2c.5-.3.9-.1.5.2l-7 6.7Z",
  },
  {
    Btn: XShareButton,
    label: "Сподели в X",
    color: "#0f0f0f",
    glow: "rgba(0,0,0,0.5)",
    path: "M17.5 4h2.6l-5.6 6.4L21 20h-4.9l-3.7-4.9L8.1 20H5.5l6-6.9L4.4 4h5l3.3 4.5L17.5 4Zm-.9 14.4h1.4L8.8 5.5H7.3l9.3 12.9Z",
  },
];

export default function ShareRow() {
  const url = SITE_URL;
  const title = site.shareDescription;

  return (
    <div id="share" className="mx-auto mb-16 mt-20 max-w-2xl px-4">
      <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-b from-white to-cream-2 p-8 text-center shadow-xl sm:p-10">
        {/* corner glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-brand/15 blur-3xl" />

        <svg width="30" height="30" viewBox="0 0 24 24" className="mx-auto" aria-hidden="true">
          <path
            d="M12 3c3.4 3.8 2.6 6.2 1.5 7.9 1.7-.5 2.3-2.1 2.3-3.8 2.3 2.2 3 5.1 1.5 7.7C16.9 16.8 15 18 12.5 18S8 16.8 7 14.7c-1-2.1-.4-5.5 1.7-7.4-.2 1.7.2 2.8 1.1 3.6-1.1-2.3-.9-4.9 1.5-7.9Z"
            fill="#ff5a1c"
          />
        </svg>

        <h3 className="mt-3 font-neue text-sm font-bold uppercase tracking-[0.28em] text-char-3">
          Хареса ли ти?
        </h3>
        <p className="font-caveat text-5xl font-bold leading-none text-brand">
          Сподели с приятели!
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {NETWORKS.map(({ Btn, label, color, glow, path }, i) => (
            <Btn key={label} url={url} title={title} aria-label={label} className="rounded-full">
              <span
                className="share-icon flex h-12 w-12 items-center justify-center rounded-full text-white sm:h-14 sm:w-14"
                style={
                  {
                    backgroundColor: color,
                    "--glow": glow,
                    animation: `pop-in 0.45s cubic-bezier(0.2,0.7,0.2,1) ${0.06 * i}s both`,
                  } as React.CSSProperties
                }
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </span>
            </Btn>
          ))}
        </div>
      </div>
    </div>
  );
}
