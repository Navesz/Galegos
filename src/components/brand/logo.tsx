import Image from "next/image";
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
      <Image
        src="/logo/icon.png"
        alt="Gallegos"
        width={48}
        height={48}
        priority={priority}
        className={cn("h-10 w-10 object-contain", className)}
      />
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <Image
          src="/logo/icon.png"
          alt=""
          width={44}
          height={44}
          aria-hidden
          className="h-11 w-11 shrink-0 object-contain"
        />
        <Image
          src="/logo/logo.png"
          alt="Gallegos Hambúrgueres"
          width={160}
          height={48}
          priority={priority}
          className="h-10 w-auto max-w-[140px] object-contain object-left"
        />
      </div>
    );
  }

  return (
    <Image
      src="/logo/logo.png"
      alt="Gallegos Hambúrgueres"
      width={280}
      height={320}
      priority={priority}
      className={cn("h-auto w-[220px] max-w-[75vw] object-contain", className)}
    />
  );
}
