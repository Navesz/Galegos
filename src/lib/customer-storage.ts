import type { CustomerInfo } from "@/types/customer";
import { EMPTY_CUSTOMER } from "@/types/customer";
import { onlyDigits } from "@/lib/viacep";

const STORAGE_KEY = "galegos_customer";
const STORAGE_VERSION = 3;

type StoredCustomer = CustomerInfo & { _version?: number; address?: string };

export function formatFullAddress(customer: CustomerInfo) {
  const streetLine = [
    customer.street.trim(),
    customer.number.trim() && `nº ${customer.number.trim()}`,
    customer.complement.trim() && `— ${customer.complement.trim()}`,
  ]
    .filter(Boolean)
    .join(", ");

  const cityLine = [
    customer.neighborhood.trim(),
    customer.city.trim() &&
      customer.state.trim() &&
      `${customer.city.trim()}/${customer.state.trim()}`,
  ]
    .filter(Boolean)
    .join(" — ");

  const cepLine = customer.cep.trim() ? `CEP: ${customer.cep.trim()}` : "";

  return [streetLine, cityLine, cepLine].filter(Boolean).join("\n");
}

export function loadCustomer(): CustomerInfo {
  if (typeof window === "undefined") return EMPTY_CUSTOMER;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_CUSTOMER;

    const parsed: StoredCustomer = JSON.parse(raw);

    if (parsed._version !== STORAGE_VERSION) {
      return {
        ...EMPTY_CUSTOMER,
        name: parsed.name ?? "",
        cep: parsed.cep ?? "",
        street: parsed.street ?? "",
        number: parsed.number ?? "",
        complement: parsed.complement ?? "",
        neighborhood: parsed.neighborhood ?? "",
        city: parsed.city ?? "",
        state: parsed.state ?? "",
        paymentMethod: parsed.paymentMethod ?? "",
        notes: parsed.notes ?? "",
        orderType: parsed.orderType ?? "delivery",
      };
    }

    return { ...EMPTY_CUSTOMER, ...parsed };
  } catch {
    return EMPTY_CUSTOMER;
  }
}

export function saveCustomer(customer: CustomerInfo) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...customer, _version: STORAGE_VERSION }),
  );
}

export function isCustomerComplete(customer: CustomerInfo) {
  const hasName = customer.name.trim().length > 0;
  const hasPayment = customer.paymentMethod !== "";

  if (customer.orderType === "pickup") {
    return hasName;
  }

  return (
    hasName &&
    onlyDigits(customer.cep).length === 8 &&
    customer.street.trim().length > 0 &&
    customer.number.trim().length > 0 &&
    customer.neighborhood.trim().length > 0 &&
    customer.city.trim().length > 0 &&
    customer.state.trim().length === 2 &&
    hasPayment
  );
}
