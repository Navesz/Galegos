export type Category =
  | "sanduiches"
  | "picanha"
  | "trios"
  | "dogs"
  | "batatas"
  | "acai"
  | "bebidas"
  | "opcionais";

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: Category;
};

export type CartExtra = {
  product: Product;
  quantity: number;
};

export type CartItem = {
  cartId: string;
  product: Product;
  quantity: number;
  extras: CartExtra[];
};

export type CategoryInfo = {
  id: Category;
  label: string;
  emoji: string;
};
