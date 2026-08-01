"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";
import type { Product } from "@/types/menu";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  function handleAdd() {
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho`);
  }

  return (
    <Card className="overflow-hidden border-brand-brown/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="gap-1 pb-2">
        <CardTitle className="text-lg text-brand-brown">{product.name}</CardTitle>
        {product.description && (
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-xl font-bold text-brand-orange">
          {formatPrice(product.price)}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAdd}
          className="w-full bg-brand-orange text-white hover:bg-brand-orange/90"
        >
          <Plus className="size-4" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}
