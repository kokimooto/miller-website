import { site } from "@/lib/site";

/**
 * Logo slot. Until the real logo arrives this renders a placeholder badge —
 * drop the file in /public/assets/img/logo.webp and replace the badge with:
 * <Image src="/assets/img/logo.webp" alt={site.name} width={160} height={160} priority />
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${site.name} — лого`}
      className={`flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-amber/50 bg-white/5 text-sm font-bold uppercase tracking-[0.2em] text-amber-300 sm:h-36 sm:w-36 ${className}`}
    >
      Лого
    </div>
  );
}
