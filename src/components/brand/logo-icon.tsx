import { cn } from "@/lib/utils";

const COLORS = {
  orange: "#E4511E",
  brown: "#3D2B1F",
  yellow: "#F6A01E",
  white: "#FFFFFF",
} as const;

type LogoIconProps = {
  className?: string;
};

export function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 110"
      fill="none"
      role="img"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <path
        fill={COLORS.orange}
        d="M50 4c-2 18-18 24-18 46 0 16 8 28 18 34 10-6 18-18 18-34 0-22-16-28-18-46z"
      />
      <path
        fill={COLORS.orange}
        d="M32 38c-6 8-10 18-10 28 0 14 8 24 18 28V38H32zm36 0v56c10-4 18-14 18-28 0-10-4-20-10-28H68z"
      />
      <ellipse cx="50" cy="52" rx="22" ry="8" fill={COLORS.orange} />
      <circle cx="42" cy="50" r="1.8" fill={COLORS.white} />
      <circle cx="50" cy="48" r="1.8" fill={COLORS.white} />
      <circle cx="58" cy="50" r="1.8" fill={COLORS.white} />
      <circle cx="46" cy="53" r="1.5" fill={COLORS.white} />
      <circle cx="54" cy="53" r="1.5" fill={COLORS.white} />
      <path fill={COLORS.yellow} d="M30 58h40l-6 6H36l-6-6z" />
      <rect x="28" y="64" width="44" height="10" rx="3" fill={COLORS.brown} />
      <path
        stroke={COLORS.white}
        strokeWidth="2.5"
        strokeLinecap="round"
        d="M32 76c6 4 12 4 18 0s12-4 18 0"
      />
      <ellipse cx="50" cy="84" rx="24" ry="9" fill={COLORS.orange} />
    </svg>
  );
}
