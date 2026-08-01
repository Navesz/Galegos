import { cn } from "@/lib/utils";
import { LogoIcon } from "./logo-icon";
import { LogoText } from "./logo-text";

type LogoVariant = "vertical" | "horizontal" | "icon";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  showSubtitle?: boolean;
};

export function Logo({
  variant = "horizontal",
  className,
  showSubtitle = true,
}: LogoProps) {
  if (variant === "icon") {
    return <LogoIcon className={cn("w-10", className)} />;
  }

  if (variant === "vertical") {
    return (
      <div
        className={cn("flex flex-col items-center gap-3", className)}
        aria-label="Gallegos Hambúrgueres"
      >
        <LogoIcon className="w-24 sm:w-28" />
        <LogoText showSubtitle={showSubtitle} />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-label="Gallegos Hambúrgueres"
    >
      <LogoIcon className="w-12 shrink-0 sm:w-14" />
      <LogoText showSubtitle={showSubtitle} compact />
    </div>
  );
}
