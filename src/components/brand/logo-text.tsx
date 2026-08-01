import { cn } from "@/lib/utils";

const COLORS = {
  orange: "#E4511E",
  brown: "#3D2B1F",
  yellow: "#F6A01E",
} as const;

type LogoTextProps = {
  className?: string;
  showSubtitle?: boolean;
  compact?: boolean;
};

export function LogoText({
  className,
  showSubtitle = true,
  compact = false,
}: LogoTextProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 320 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Gallegos"
        className={cn("w-full", compact ? "max-w-[180px]" : "max-w-[280px]")}
      >
        <text
          x="160"
          y="42"
          textAnchor="middle"
          fill={COLORS.brown}
          fontFamily="var(--font-heading), Impact, Arial Black, sans-serif"
          fontSize="44"
          fontWeight="900"
          letterSpacing="2"
        >
          GALLEGOS
        </text>
        <rect x="118" y="18" width="8" height="22" rx="1" fill={COLORS.brown} />
        <path
          fill={COLORS.orange}
          d="M118 30c0-4 2-8 4-10-2 3-3 6-3 10v10h-1V30z"
        />
        <circle cx="248" cy="30" r="16" fill={COLORS.brown} />
        <rect x="232" y="28" width="32" height="4" rx="1" fill={COLORS.orange} />
        <rect x="248" y="28" width="16" height="4" rx="1" fill={COLORS.yellow} />
      </svg>

      {showSubtitle && (
        <div className="mt-1 flex w-full items-center justify-center gap-3">
          <span
            className="h-px flex-1 max-w-10"
            style={{ backgroundColor: COLORS.orange }}
          />
          <span
            className={cn(
              "font-semibold uppercase tracking-[0.2em]",
              compact ? "text-[10px]" : "text-xs sm:text-sm",
            )}
            style={{ color: COLORS.orange }}
          >
            Hambúrgueres
          </span>
          <span
            className="h-px flex-1 max-w-10"
            style={{ backgroundColor: COLORS.orange }}
          />
        </div>
      )}
    </div>
  );
}
