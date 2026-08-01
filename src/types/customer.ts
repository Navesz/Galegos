export type PaymentMethod = "dinheiro" | "pix" | "cartao";

export type OrderType = "delivery" | "pickup";

export type CustomerInfo = {
  orderType: OrderType;
  name: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod | "";
  notes: string;
};

export const ORDER_TYPE_OPTIONS: {
  id: OrderType;
  label: string;
}[] = [
  { id: "delivery", label: "Delivery" },
  { id: "pickup", label: "Retirada" },
];

export const PAYMENT_OPTIONS: {
  id: PaymentMethod;
  label: string;
}[] = [
  { id: "dinheiro", label: "Dinheiro" },
  { id: "pix", label: "PIX" },
  { id: "cartao", label: "Cartão" },
];

export const EMPTY_CUSTOMER: CustomerInfo = {
  orderType: "delivery",
  name: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  paymentMethod: "",
  notes: "",
};
