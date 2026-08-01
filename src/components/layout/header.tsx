import { Logo } from "@/components/brand/logo";
import { CartSheet } from "@/components/cart/cart-sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-brown/10 bg-brand-cream/95 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo variant="horizontal" />
        <CartSheet />
      </div>
    </header>
  );
}
