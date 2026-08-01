import type { CategoryInfo, Product, CartItem } from "@/types/menu";

const ITEM_IMAGE = "/images/menu/hamburguer.png";

const IMG = {
  sanduiche: ITEM_IMAGE,
  picanha: ITEM_IMAGE,
  trio: ITEM_IMAGE,
  dog: ITEM_IMAGE,
  batata: ITEM_IMAGE,
  acai: ITEM_IMAGE,
  bebida: ITEM_IMAGE,
  opcional: ITEM_IMAGE,
} as const;

export const CATEGORIES: CategoryInfo[] = [
  { id: "sanduiches", label: "Sanduíches", emoji: "🍔" },
  { id: "picanha", label: "Linha Picanha", emoji: "🔥" },
  { id: "trios", label: "Trios", emoji: "🍟" },
  { id: "dogs", label: "Dogs", emoji: "🌭" },
  { id: "batatas", label: "Batatas", emoji: "🥔" },
  { id: "acai", label: "Açaí e Sucos", emoji: "🍇" },
  { id: "bebidas", label: "Bebidas", emoji: "🥤" },
];

export const PRODUCTS: Product[] = [
  // Sanduíches — servidos individualmente
  {
    id: "01-x-burguer",
    name: "X Burguer",
    description: "Pão, hambúrguer e queijo",
    price: 13.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "02-hamburguer",
    name: "Hambúrguer",
    description: "Pão, hambúrguer, alface e tomate",
    price: 13.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "03-x-salada-especial",
    name: "X Salada Especial",
    description: "Pão, hambúrguer, ovo, queijo, alface e tomate",
    price: 17.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "04-x-bacon",
    name: "X Bacon",
    description: "Pão, hambúrguer, queijo e bacon",
    price: 18.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "05-x-bacon-salada",
    name: "X Bacon Salada",
    description: "Pão, hambúrguer, bacon, queijo, alface e tomate",
    price: 19.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "06-x-tudo",
    name: "X Tudo",
    description:
      "Pão, hambúrguer, ovo, bacon, queijo, salsicha, milho, presunto, alface e tomate",
    price: 21.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "07-x-file-salada",
    name: "X Filé Salada",
    description: "Pão, filé mignon, queijo, alface e tomate",
    price: 20.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "08-x-frango-salada",
    name: "X Frango Salada",
    description: "Pão, filé de frango, queijo, alface e tomate",
    price: 19.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "09-x-file-bacon-salada",
    name: "X Filé Bacon Salada",
    description: "Pão, filé mignon, queijo, bacon, alface e tomate",
    price: 21.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "10-x-frango-bacon-salada",
    name: "X Frango Bacon Salada",
    description: "Pão, filé de frango, queijo, bacon, alface e tomate",
    price: 20.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "11-x-file-especial",
    name: "X Filé Especial",
    description: "Pão, filé mignon, bacon, queijo, ovo, alface e tomate",
    price: 22.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "12-x-frango-especial",
    name: "X Frango Especial",
    description: "Pão, filé de frango, bacon, queijo, ovo, alface e tomate",
    price: 21.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "13-x-salada",
    name: "X Salada",
    description: "Pão, hambúrguer, queijo, alface e tomate",
    price: 15.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "14-gostoso-pakas",
    name: "Gostoso Pakas",
    description: "Pão, hambúrguer, ovo, queijo, presunto, alface e tomate",
    price: 16.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "15-brutos",
    name: "Brutos",
    description:
      "Pão, 2 hambúrgueres, ovo, salsicha, milho, bacon, queijo, presunto, alface e tomate",
    price: 24.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },
  {
    id: "16-bomba",
    name: "Bomba",
    description:
      "Pão, hambúrguer, ovo, salsicha, queijo, presunto, alface e tomate",
    price: 16.99,
    image: IMG.sanduiche,
    category: "sanduiches",
  },

  // Linha Picanha — individual
  {
    id: "17-x-picanha-tradicional",
    name: "X Picanha Tradicional",
    description: "Hambúrguer sabor picanha, queijo, ovo e salada",
    price: 16.99,
    image: IMG.picanha,
    category: "picanha",
  },
  {
    id: "18-x-picanha-cheddar-bacon",
    name: "X Picanha Cheddar Bacon",
    description: "Hambúrguer sabor picanha, queijo, cheddar e bacon",
    price: 16.99,
    image: IMG.picanha,
    category: "picanha",
  },
  {
    id: "19-x-picanha-acebolado",
    name: "X Picanha Acebolado",
    description: "Hambúrguer sabor picanha, queijo, ovo e cebola",
    price: 16.99,
    image: IMG.picanha,
    category: "picanha",
  },

  // Trios Gourmet
  {
    id: "trio-01-x-burguer",
    name: "Trio X Burguer",
    description: "Pão, hambúrguer e queijo + batata e bebida",
    price: 23.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-02-hamburguer",
    name: "Trio Hambúrguer",
    description: "Pão, hambúrguer, alface e tomate + batata e bebida",
    price: 24.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-03-x-salada-especial",
    name: "Trio X Salada Especial",
    description:
      "Pão, hambúrguer, ovo, queijo, alface e tomate + batata e bebida",
    price: 25.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-04-x-bacon",
    name: "Trio X Bacon",
    description: "Pão, hambúrguer, queijo e bacon + batata e bebida",
    price: 27.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-05-x-bacon-salada",
    name: "Trio X Bacon Salada",
    description:
      "Pão, hambúrguer, bacon, queijo, alface e tomate + batata e bebida",
    price: 28.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-06-x-tudo",
    name: "Trio X Tudo",
    description:
      "Pão, hambúrguer, ovo, queijo, bacon, salsicha, milho, presunto, alface e tomate + batata e bebida",
    price: 29.99,
    image: IMG.trio,
    category: "trios",
  },

  // Trios Filé e Frango
  {
    id: "trio-07-x-file-salada",
    name: "Trio X Filé Salada",
    description: "Pão, filé mignon, queijo, alface e tomate + batata e bebida",
    price: 30.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-08-x-frango-salada",
    name: "Trio X Frango Salada",
    description:
      "Pão, filé de frango, queijo, alface e tomate + batata e bebida",
    price: 28.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-09-x-file-bacon-salada",
    name: "Trio X Filé Bacon Salada",
    description:
      "Pão, filé mignon, queijo, bacon, alface e tomate + batata e bebida",
    price: 31.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-10-x-frango-bacon-salada",
    name: "Trio X Frango Bacon Salada",
    description:
      "Pão, filé de frango, queijo, bacon, alface e tomate + batata e bebida",
    price: 29.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-11-x-file-especial",
    name: "Trio X Filé Especial",
    description:
      "Pão, filé mignon, bacon, queijo, ovo, alface e tomate + batata e bebida",
    price: 35.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-12-x-frango-especial",
    name: "Trio X Frango Especial",
    description:
      "Pão, filé de frango, bacon, queijo, ovo, alface e tomate + batata e bebida",
    price: 33.99,
    image: IMG.trio,
    category: "trios",
  },

  // Trios Clássicos
  {
    id: "trio-14-gostoso-pakas",
    name: "Trio Gostoso Pakas",
    description:
      "Pão, hambúrguer gourmet, ovo, salsicha, queijo, presunto, alface e tomate + batata e bebida",
    price: 23.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-15-brutos",
    name: "Trio Brutos",
    description:
      "Pão, 2 hambúrgueres, ovo, salsicha, milho, bacon, queijo, presunto, alface e tomate + batata e bebida",
    price: 32.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-16-bomba",
    name: "Trio Bomba",
    description:
      "Pão, hambúrguer, ovo, queijo, presunto, salsicha, alface e tomate + batata e bebida",
    price: 21.99,
    image: IMG.trio,
    category: "trios",
  },

  // Trios Linha Picanha
  {
    id: "trio-17-x-picanha-tradicional",
    name: "Trio X Picanha Tradicional",
    description:
      "Hambúrguer sabor picanha, queijo, ovo e salada + batata e bebida",
    price: 21.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-18-x-picanha-cheddar-bacon",
    name: "Trio X Picanha Cheddar Bacon",
    description:
      "Hambúrguer sabor picanha, queijo, cheddar e bacon + batata e bebida",
    price: 21.99,
    image: IMG.trio,
    category: "trios",
  },
  {
    id: "trio-19-x-picanha-acebolado",
    name: "Trio X Picanha Acebolado",
    description:
      "Hambúrguer sabor picanha, queijo, ovo e cebola + batata e bebida",
    price: 21.99,
    image: IMG.trio,
    category: "trios",
  },

  // Trio Dog
  {
    id: "trio-dog",
    name: "Trio Dog",
    description: "Dog na chapa com batata e bebida",
    price: 16.99,
    image: IMG.trio,
    category: "trios",
  },

  // Dogs
  {
    id: "dog-na-chapa",
    name: "Dog na Chapa",
    description: "Pão, salsicha, queijo, milho e batata palha",
    price: 11.99,
    image: IMG.dog,
    category: "dogs",
  },

  // Batatas
  {
    id: "batata-pequena",
    name: "Batata Pequena",
    price: 7.99,
    image: IMG.batata,
    category: "batatas",
  },
  {
    id: "batata-grande",
    name: "Batata Grande",
    price: 14.99,
    image: IMG.batata,
    category: "batatas",
  },
  {
    id: "batata-cheddar-bacon",
    name: "Batata com Cheddar e Bacon",
    price: 25.0,
    image: IMG.batata,
    category: "batatas",
  },

  // Açaí, cremes e sucos
  {
    id: "acai-morango-500",
    name: "Açaí Morango 500ml",
    description: "Granola, leite ninho, leite condensado e morango",
    price: 20.0,
    image: IMG.acai,
    category: "acai",
  },
  {
    id: "acai-banana-500",
    name: "Açaí Banana 500ml",
    description: "Granola, leite ninho, leite condensado e banana",
    price: 18.0,
    image: IMG.acai,
    category: "acai",
  },
  {
    id: "creme-500",
    name: "Creme 500ml",
    description: "Sabores: banana, cupuaçu, maracujá, morango ou laranja",
    price: 15.0,
    image: IMG.acai,
    category: "acai",
  },
  {
    id: "suco-500",
    name: "Suco 500ml",
    description: "Sabores: banana, cupuaçu, maracujá, morango ou laranja",
    price: 10.0,
    image: IMG.acai,
    category: "acai",
  },

  // Bebidas
  {
    id: "refri-lata",
    name: "Refrigerante Lata 310ml",
    price: 6.0,
    image: IMG.bebida,
    category: "bebidas",
  },
  {
    id: "refri-500",
    name: "Refrigerante 500/600ml",
    price: 8.0,
    image: IMG.bebida,
    category: "bebidas",
  },

  // Opcionais
  {
    id: "opc-bacon",
    name: "Bacon",
    price: 4.0,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-file-bovino",
    name: "Filé Bovino",
    price: 6.99,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-file-frango",
    name: "Filé Frango",
    price: 4.99,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-hamburguer",
    name: "Hambúrguer",
    price: 4.0,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-ovo",
    name: "Ovo",
    price: 2.0,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-milho",
    name: "Milho",
    price: 1.0,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-salada",
    name: "Salada",
    price: 1.0,
    image: IMG.opcional,
    category: "opcionais",
  },
  {
    id: "opc-salsicha",
    name: "Salsicha",
    price: 2.0,
    image: IMG.opcional,
    category: "opcionais",
  },
];

export const TRIO_PROMO_NOTE =
  "Nos trios: + R$ 4,00 para trocar o refri por Coca lata.";

export function getProductsByCategory(category: Product["category"]) {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getOpcionais() {
  return PRODUCTS.filter((product) => product.category === "opcionais");
}

export function isOpcional(product: Product) {
  return product.category === "opcionais";
}

export function supportsExtras(product: Product) {
  return ["sanduiches", "picanha", "trios", "dogs"].includes(product.category);
}

export function getCartLineTotal(item: CartItem) {
  const base = item.product.price * item.quantity;
  const extrasTotal = item.extras.reduce(
    (sum, extra) =>
      sum + extra.product.price * extra.quantity * item.quantity,
    0,
  );
  return base + extrasTotal;
}

export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
