import { connection } from "next/server";
import MenuCard from "@/components/MenuCard";
import { formatToday, getLunchMenu } from "@/lib/sheets";

const GRID = "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3";

/**
 * Today's lunch menu, read from the Google Sheet on every request. Render it
 * inside <Suspense> — the rest of the page is prerendered and streams first.
 */
export default async function LunchMenu() {
  // Request time only: the menu and the date must never be baked in at build.
  await connection();
  const categories = await getLunchMenu();

  return (
    <>
      <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-char-3/55">
        {formatToday()}
      </p>

      {categories.length > 0 ? (
        <div className={`mb-8 mt-10 ${GRID}`}>
          {categories.map((category, i) => (
            <div
              key={category.title}
              style={{ animation: `pop-in 0.5s cubic-bezier(0.2,0.7,0.2,1) ${i * 0.06}s both` }}
              className="w-full text-left"
            >
              <MenuCard {...category} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mx-auto mt-12 max-w-md rounded-2xl bg-char-3/5 px-6 py-10 font-caveat text-3xl text-char-3/60">
          Менюто за днес очаквайте съвсем скоро
        </p>
      )}
    </>
  );
}

export function LunchMenuSkeleton() {
  return (
    <>
      <p className="mx-auto mt-4 h-5 w-48 animate-pulse rounded bg-char-3/10" />
      <div className={`mb-8 mt-10 ${GRID}`} aria-busy="true" aria-label="Зареждане на менюто">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-2xl bg-char-3/10" />
        ))}
      </div>
    </>
  );
}
