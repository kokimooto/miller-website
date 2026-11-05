import { Suspense } from "react";
import Hero from "@/components/Hero";
import LunchMenu, { LunchMenuSkeleton } from "@/components/LunchMenu";
import ShareRow from "@/components/ShareRow";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="menu" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-14 text-center sm:py-20">
        <Reveal>
          <h2 className="section-title font-neue text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            Менюто за днес
          </h2>
        </Reveal>

        {/* Read from Google Sheets per request; the shell above prerenders. */}
        <Suspense fallback={<LunchMenuSkeleton />}>
          <LunchMenu />
        </Suspense>
      </section>

      <Reveal>
        <ShareRow />
      </Reveal>
    </>
  );
}
