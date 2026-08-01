"use client";

import { Logo } from "@/components/brand/logo";
import { CategoryGrid } from "@/components/home/category-grid";
import { MapPin } from "lucide-react";

export function HomeView() {
  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-6">
      <Logo
        variant="vertical"
        priority
        className="-mb-3 w-[200px] max-w-[65vw]"
      />

      <p className="mt-1 max-w-xs text-center text-sm leading-relaxed text-brand-brown/70">
        Hambúrgueres, pastéis, açaí e muito mais. Monte seu pedido e finalize pelo
        WhatsApp.
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm text-brand-brown/65 shadow-sm">
        <MapPin className="size-4 shrink-0 text-brand-orange" />
        <p>Céu Azul</p>
      </div>

      <div className="mt-6 w-full max-w-sm">
        <h2 className="mb-3 text-sm font-extrabold text-brand-brown">
          Categorias
        </h2>
        <CategoryGrid />
      </div>
    </div>
  );
}
