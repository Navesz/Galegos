import { Logo } from "@/components/brand/logo";
import { CategoryTabs } from "@/components/menu/category-tabs";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="mb-10 flex flex-col items-center text-center">
        <div className="mb-6 sm:hidden">
          <Logo variant="vertical" />
        </div>
        <h1 className="sr-only">Gallegos Cardápio Digital</h1>
        <p className="max-w-xl text-lg text-brand-brown/80">
          Escolha seus itens favoritos e finalize o pedido direto pelo WhatsApp.
        </p>
      </section>

      <CategoryTabs />
    </div>
  );
}
