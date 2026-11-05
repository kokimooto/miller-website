import CallButton from "./CallButton";
import Logo from "./Logo";
import { site } from "@/lib/site";

/**
 * Big hero with the logo on top. The background is a placeholder until the
 * real hero photo arrives — swap the gradient block for a `next/image` with
 * `fill priority` (see the TODO below).
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-char text-cream">
      {/* TODO: hero image — replace this placeholder with
          <Image src="/assets/img/hero.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" /> */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(110% 70% at 50% 92%, rgba(255,90,28,0.28) 0%, rgba(20,13,10,0) 55%), linear-gradient(180deg, #2c1c15 0%, #1f1410 50%, #140d0a 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-4 -z-10 flex items-end justify-end rounded-3xl border-2 border-dashed border-white/10 p-4 text-xs font-bold uppercase tracking-[0.3em] text-white/20 sm:inset-6"
      >
        Hero снимка
      </div>

      <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20">
        <Logo className="rise d1" />

        <h1 className="rise d2 mt-8 font-neue text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Кулинарен Магазин
          <br />
          <span className="text-fire">{site.name}</span>
        </h1>

        <p className="rise d3 mx-auto mt-6 max-w-xl text-base uppercase tracking-[0.25em] text-cream/70 sm:text-lg">
          {site.tagline} · {site.address.locality}
        </p>

        <div className="rise d4 mt-8 flex flex-wrap items-center justify-center gap-3">
          <CallButton label="Поръчай" />
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber px-6 py-2.5 text-base font-bold uppercase tracking-wide text-char shadow-lg shadow-amber/30 transition-all hover:-translate-y-0.5 hover:shadow-amber/50"
          >
            Виж менюто
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
