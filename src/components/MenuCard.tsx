import Image from "next/image";
import type { MenuCategory } from "@/lib/sheets";

export default function MenuCard({ title, picture, unit, items }: MenuCategory) {
  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[url('/assets/img/stone.webp')] bg-cover bg-center shadow-xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-amber/50">
      {/* header image with title scrim */}
      <div className="relative h-40 overflow-hidden sm:h-44">
        <Image
          src={`/assets/img/${picture}`}
          alt={title}
          width={1080}
          height={566}
          sizes="(max-width: 640px) 100vw, 25rem"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 p-4 font-caveat text-4xl font-bold leading-none text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {title}
        </h3>
        {/* accent line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-flame via-amber to-flame" />
      </div>

      <ul className="flex-1 p-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-3 border-b border-white/10 py-2 last:border-b-0"
          >
            <p className="min-w-0 font-caveat text-2xl leading-tight text-cream">{item.name}</p>
            <div className="flex shrink-0 items-center gap-3">
              {item.quantity && (
                <span className="font-neue text-xs font-medium text-smoke">
                  {item.quantity} {unit}
                </span>
              )}
              <span className="font-neue text-xl font-bold tabular-nums text-amber-300">
                {item.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
