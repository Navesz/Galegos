"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types/menu";
import { getCartLineTotal, isOpcional } from "@/lib/menu";

function createCartId() {
  return crypto.randomUUID();
}

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  decrementProduct: (productId: string) => void;
  updateLineQuantity: (cartId: string, quantity: number) => void;
  updateExtraQuantity: (
    cartId: string,
    extraProduct: Product,
    quantity: number,
  ) => void;
  getQuantity: (productId: string) => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    if (isOpcional(product)) return;

    setItems((current) => {
      const mergeTarget = current.find(
        (item) =>
          item.product.id === product.id && item.extras.length === 0,
      );

      if (mergeTarget) {
        return current.map((item) =>
          item.cartId === mergeTarget.cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...current,
        {
          cartId: createCartId(),
          product,
          quantity: 1,
          extras: [],
        },
      ];
    });
  }, []);

  const decrementProduct = useCallback((productId: string) => {
    setItems((current) => {
      const candidates = current.filter((item) => item.product.id === productId);
      if (candidates.length === 0) return current;

      const target =
        [...candidates].reverse().find((item) => item.extras.length === 0) ??
        candidates[candidates.length - 1];

      if (target.quantity <= 1) {
        return current.filter((item) => item.cartId !== target.cartId);
      }

      return current.map((item) =>
        item.cartId === target.cartId
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  }, []);

  const updateLineQuantity = useCallback((cartId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.cartId !== cartId));
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const updateExtraQuantity = useCallback(
    (cartId: string, extraProduct: Product, quantity: number) => {
      setItems((current) =>
        current.map((item) => {
          if (item.cartId !== cartId) return item;

          if (quantity <= 0) {
            return {
              ...item,
              extras: item.extras.filter(
                (extra) => extra.product.id !== extraProduct.id,
              ),
            };
          }

          const existing = item.extras.find(
            (extra) => extra.product.id === extraProduct.id,
          );

          if (existing) {
            return {
              ...item,
              extras: item.extras.map((extra) =>
                extra.product.id === extraProduct.id
                  ? { ...extra, quantity }
                  : extra,
              ),
            };
          }

          return {
            ...item,
            extras: [...item.extras, { product: extraProduct, quantity }],
          };
        }),
      );
    },
    [],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getQuantity = useCallback(
    (productId: string) => {
      return items
        .filter((item) => item.product.id === productId)
        .reduce((sum, item) => sum + item.quantity, 0);
    },
    [items],
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + getCartLineTotal(item), 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      totalPrice,
      addItem,
      decrementProduct,
      updateLineQuantity,
      updateExtraQuantity,
      getQuantity,
      clearCart,
    }),
    [
      items,
      totalItems,
      totalPrice,
      addItem,
      decrementProduct,
      updateLineQuantity,
      updateExtraQuantity,
      getQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }

  return context;
}
