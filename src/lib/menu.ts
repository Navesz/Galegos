import type { CategoryInfo, Product } from "@/types/menu";

export const CATEGORIES: CategoryInfo[] = [
  { id: "hamburgueres", label: "Hambúrgueres", emoji: "🍔" },
  { id: "bebidas", label: "Bebidas", emoji: "🥤" },
  { id: "acai", label: "Açaí", emoji: "🫐" },
  { id: "sorvete", label: "Sorvete", emoji: "🍦" },
];

export const PRODUCTS: Product[] = [
  {
    id: "x-classico",
    name: "X-Clássico",
    description: "Pão, hambúrguer 150g, queijo, alface e tomate",
    price: 28.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "x-bacon",
    name: "X-Bacon",
    description: "Hambúrguer 150g, bacon crocante, queijo e molho especial",
    price: 32.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "x-tudo",
    name: "X-Tudo",
    description: "Hambúrguer 180g, bacon, ovo, queijo, presunto e salada",
    price: 36.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "x-salada",
    name: "X-Salada",
    description: "Hambúrguer 150g, queijo, alface, tomate e maionese",
    price: 27.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "x-frango",
    name: "X-Frango",
    description: "Filé de frango grelhado, queijo, alface e molho da casa",
    price: 29.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "duplo-bacon",
    name: "Duplo Bacon",
    description: "Dois hambúrgueres 120g, bacon, cheddar e cebola caramelizada",
    price: 38.9,
    image: "/images/menu/hamburgueres.svg",
    category: "hamburgueres",
  },
  {
    id: "coca-350",
    name: "Coca-Cola 350ml",
    description: "Lata gelada",
    price: 6.0,
    image: "/images/menu/bebidas.svg",
    category: "bebidas",
  },
  {
    id: "guarana-350",
    name: "Guaraná 350ml",
    description: "Lata gelada",
    price: 5.5,
    image: "/images/menu/bebidas.svg",
    category: "bebidas",
  },
  {
    id: "suco-laranja",
    name: "Suco de Laranja 500ml",
    description: "Natural da casa",
    price: 10.0,
    image: "/images/menu/bebidas.svg",
    category: "bebidas",
  },
  {
    id: "agua-mineral",
    name: "Água Mineral 500ml",
    description: "Com ou sem gás",
    price: 4.0,
    image: "/images/menu/bebidas.svg",
    category: "bebidas",
  },
  {
    id: "acai-300",
    name: "Açaí 300ml",
    description: "Açaí puro com granola",
    price: 14.0,
    image: "/images/menu/acai.svg",
    category: "acai",
  },
  {
    id: "acai-500",
    name: "Açaí 500ml",
    description: "Açaí puro com granola e banana",
    price: 18.0,
    image: "/images/menu/acai.svg",
    category: "acai",
  },
  {
    id: "acai-700",
    name: "Açaí 700ml",
    description: "Açaí com granola, banana, leite em pó e mel",
    price: 24.0,
    image: "/images/menu/acai.svg",
    category: "acai",
  },
  {
    id: "sorvete-casquinha",
    name: "Casquinha",
    description: "1 bola — creme, chocolate ou morango",
    price: 8.0,
    image: "/images/menu/sorvete.svg",
    category: "sorvete",
  },
  {
    id: "sorvete-taca",
    name: "Taça 2 Bolas",
    description: "Escolha dois sabores",
    price: 14.0,
    image: "/images/menu/sorvete.svg",
    category: "sorvete",
  },
  {
    id: "sorvete-milkshake",
    name: "Milkshake 400ml",
    description: "Chocolate, morango ou ovomaltine",
    price: 16.0,
    image: "/images/menu/sorvete.svg",
    category: "sorvete",
  },
];

export function getProductsByCategory(category: Product["category"]) {
  return PRODUCTS.filter((product) => product.category === category);
}

export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
