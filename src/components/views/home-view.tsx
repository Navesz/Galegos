"use client";

import { Logo } from "@/components/brand/logo";
import { MapPin } from "lucide-react";
import { useNavigation } from "@/lib/navigation-context";
import { Button } from "@/components/ui/button";

export function HomeView() {
  const { setActiveTab } = useNavigation();

  return (
    <div className="flex flex-col items-center px-4 pt-8 pb-6 text-center">
      <Logo variant="vertical" priority className="w-[240px]" />
      <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-brand-brown/70">
        Hambúrgueres artesanais, açaí, bebidas e muito mais. Monte seu pedido e
        finalize pelo WhatsApp.
      </p>

      <div className="mt-6 flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-left text-sm text-brand-brown/65 shadow-sm">
        <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" />
        <p>
          Gama/DF · Valparaíso de Goiás · Céu Azul · Novo Gama · Santa Maria
        </p>
      </div>

      <Button
        onClick={() => setActiveTab("cardapio")}
        className="mt-8 h-12 w-full max-w-xs rounded-2xl bg-brand-orange text-base font-bold text-white shadow-lg shadow-brand-orange/30 hover:bg-brand-orange/90"
      >
        Ver cardápio
      </Button>
    </div>
  );
}
