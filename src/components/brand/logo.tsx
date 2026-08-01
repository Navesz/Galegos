import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "vertical" | "horizontal" | "icon";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "vertical",
  className,
  priority = false,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <img
        src="/logo/icon.svg"
        alt="Gallegos"
        width={48}
        height={48}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-10 w-10 object-contain", className)}
      />
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <img
          src="/logo/icon.svg"
          alt=""
          width={44}
          height={44}
          aria-hidden
          className="h-11 w-11 shrink-0 object-contain"
        />
        <img
          src="/logo/logo-vertical.svg"
          alt="Gallegos Hambúrgueres"
          width={160}
          height={48}
          loading={priority ? "eager" : "lazy"}
          className="h-10 w-auto max-w-[150px] object-contain object-left"
        />
      </div>
    );
  }

  return (
    <img
      src="/logo/logo-vertical.svg"
      alt="Gallegos Hambúrgueres"
      width={280}
      height={320}
      loading={priority ? "eager" : "lazy"}
      className={cn("h-auto w-[220px] max-w-[75vw] object-contain", className)}
    />
  );
}
