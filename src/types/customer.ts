export type PaymentMethod = "dinheiro" | "pix" | "cartao";

export type CustomerInfo = {
  name: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod | "";
};

export const PAYMENT_OPTIONS: {
  id: PaymentMethod;
  label: string;
}[] = [
  { id: "dinheiro", label: "Dinheiro" },
  { id: "pix", label: "PIX" },
  { id: "cartao", label: "Cartão" },
];

export const EMPTY_CUSTOMER: CustomerInfo = {
  name: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  paymentMethod: "",
};
