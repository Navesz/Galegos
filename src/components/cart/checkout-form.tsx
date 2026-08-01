"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CustomerInfo } from "@/types/customer";
import { PAYMENT_OPTIONS } from "@/types/customer";
import { fetchAddressByCep, formatCep, onlyDigits } from "@/lib/viacep";

type CheckoutFormProps = {
  customer: CustomerInfo;
  onChange: (patch: Partial<CustomerInfo>) => void;
  showErrors?: boolean;
};

function fieldClass(hasError: boolean) {
  return cn(
    "h-12 w-full rounded-xl border bg-brand-cream/50 px-4 text-sm text-brand-brown placeholder:text-brand-brown/35 outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20",
    hasError ? "border-red-400" : "border-brand-brown/10",
  );
}

export function CheckoutForm({
  customer,
  onChange,
  showErrors = false,
}: CheckoutFormProps) {
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState("");
  const lastFetchedCep = useRef("");

  const lookupCep = useCallback(
    async (cep: string) => {
      const digits = onlyDigits(cep);
      if (digits.length !== 8) return;
      if (digits === lastFetchedCep.current) return;

      setCepLoading(true);
      setCepError("");

      try {
        const data = await fetchAddressByCep(digits);

        if (!data) {
          setCepError("CEP não encontrado");
          lastFetchedCep.current = "";
          return;
        }

        lastFetchedCep.current = digits;
        onChange({
          street: data.logradouro || customer.street,
          neighborhood: data.bairro || customer.neighborhood,
          city: data.localidade || customer.city,
          state: data.uf || customer.state,
        });
      } catch {
        setCepError("Erro ao buscar CEP. Tente novamente.");
        lastFetchedCep.current = "";
      } finally {
        setCepLoading(false);
      }
    },
    [customer.street, customer.neighborhood, customer.city, customer.state, onChange],
  );

  useEffect(() => {
    const digits = onlyDigits(customer.cep);
    if (digits.length === 8) {
      lookupCep(digits);
    }
  }, [customer.cep, lookupCep]);

  const nameError = showErrors && customer.name.trim().length === 0;
  const cepErrorField = showErrors && onlyDigits(customer.cep).length !== 8;
  const streetError = showErrors && customer.street.trim().length === 0;
  const numberError = showErrors && customer.number.trim().length === 0;
  const neighborhoodError =
    showErrors && customer.neighborhood.trim().length === 0;
  const cityError = showErrors && customer.city.trim().length === 0;
  const stateError = showErrors && customer.state.trim().length !== 2;
  const paymentError = showErrors && customer.paymentMethod === "";

  return (
    <section className="mt-6 rounded-2xl border border-brand-brown/8 bg-white p-4 shadow-sm">
      <h2 className="text-base font-extrabold text-brand-brown">
        Dados para entrega
      </h2>
      <p className="mt-1 text-xs text-brand-brown/55">
        Seus dados ficam salvos neste aparelho
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="customer-name"
            className="mb-1.5 block text-xs font-semibold text-brand-brown"
          >
            Nome
          </label>
          <input
            id="customer-name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome completo"
            value={customer.name}
            onChange={(event) => onChange({ name: event.target.value })}
            className={fieldClass(nameError)}
          />
          {nameError && (
            <p className="mt-1 text-xs text-red-500">Informe seu nome</p>
          )}
        </div>

        <div>
          <label
            htmlFor="customer-cep"
            className="mb-1.5 block text-xs font-semibold text-brand-brown"
          >
            CEP
          </label>
          <div className="relative">
            <input
              id="customer-cep"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="00000-000"
              value={customer.cep}
              onChange={(event) => {
                setCepError("");
                lastFetchedCep.current = "";
                onChange({ cep: formatCep(event.target.value) });
              }}
              className={fieldClass(cepErrorField || Boolean(cepError))}
            />
            {cepLoading && (
              <Loader2 className="absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-brand-orange" />
            )}
          </div>
          {(cepErrorField || cepError) && (
            <p className="mt-1 text-xs text-red-500">
              {cepError || "Informe um CEP válido"}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="customer-street"
            className="mb-1.5 block text-xs font-semibold text-brand-brown"
          >
            Rua
          </label>
          <input
            id="customer-street"
            type="text"
            autoComplete="address-line1"
            placeholder="Logradouro"
            value={customer.street}
            onChange={(event) => onChange({ street: event.target.value })}
            className={fieldClass(streetError)}
          />
          {streetError && (
            <p className="mt-1 text-xs text-red-500">Informe a rua</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="customer-number"
              className="mb-1.5 block text-xs font-semibold text-brand-brown"
            >
              Número
            </label>
            <input
              id="customer-number"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="Nº"
              value={customer.number}
              onChange={(event) => onChange({ number: event.target.value })}
              className={fieldClass(numberError)}
            />
            {numberError && (
              <p className="mt-1 text-xs text-red-500">Informe o número</p>
            )}
          </div>

          <div>
            <label
              htmlFor="customer-complement"
              className="mb-1.5 block text-xs font-semibold text-brand-brown"
            >
              Complemento
            </label>
            <input
              id="customer-complement"
              type="text"
              autoComplete="address-line2"
              placeholder="Apto, bloco..."
              value={customer.complement}
              onChange={(event) => onChange({ complement: event.target.value })}
              className={fieldClass(false)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="customer-neighborhood"
            className="mb-1.5 block text-xs font-semibold text-brand-brown"
          >
            Bairro
          </label>
          <input
            id="customer-neighborhood"
            type="text"
            autoComplete="off"
            placeholder="Bairro"
            value={customer.neighborhood}
            onChange={(event) => onChange({ neighborhood: event.target.value })}
            className={fieldClass(neighborhoodError)}
          />
          {neighborhoodError && (
            <p className="mt-1 text-xs text-red-500">Informe o bairro</p>
          )}
        </div>

        <div className="grid grid-cols-[1fr_80px] gap-3">
          <div>
            <label
              htmlFor="customer-city"
              className="mb-1.5 block text-xs font-semibold text-brand-brown"
            >
              Cidade
            </label>
            <input
              id="customer-city"
              type="text"
              autoComplete="address-level2"
              placeholder="Cidade"
              value={customer.city}
              onChange={(event) => onChange({ city: event.target.value })}
              className={fieldClass(cityError)}
            />
            {cityError && (
              <p className="mt-1 text-xs text-red-500">Informe a cidade</p>
            )}
          </div>

          <div>
            <label
              htmlFor="customer-state"
              className="mb-1.5 block text-xs font-semibold text-brand-brown"
            >
              UF
            </label>
            <input
              id="customer-state"
              type="text"
              autoComplete="address-level1"
              placeholder="UF"
              maxLength={2}
              value={customer.state}
              onChange={(event) =>
                onChange({ state: event.target.value.toUpperCase().slice(0, 2) })
              }
              className={fieldClass(stateError)}
            />
            {stateError && (
              <p className="mt-1 text-xs text-red-500">UF</p>
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-brand-brown">
            Forma de pagamento
          </p>
          <div className="grid grid-cols-3 gap-2">
            {PAYMENT_OPTIONS.map((option) => {
              const selected = customer.paymentMethod === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onChange({ paymentMethod: option.id })}
                  className={cn(
                    "rounded-xl border py-3 text-xs font-bold transition-all active:scale-95",
                    selected
                      ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                      : "border-brand-brown/10 bg-brand-cream/50 text-brand-brown/70",
                    paymentError && !selected && "border-red-200",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {paymentError && (
            <p className="mt-1 text-xs text-red-500">
              Escolha a forma de pagamento
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
