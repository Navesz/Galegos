export type Category = "hamburgueres" | "bebidas" | "acai" | "sorvete";

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: Category;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CategoryInfo = {
  id: Category;
  label: string;
  emoji: string;
};
