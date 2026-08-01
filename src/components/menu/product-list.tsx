import { ProductRow } from "@/components/menu/product-row";
import type { Product } from "@/types/menu";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <p className="px-4 py-12 text-center text-sm text-brand-brown/50">
        Nenhum item nesta categoria.
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-brown/8 bg-white shadow-sm">
      {products.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  );
}
