"use client";

import { useCallback, useEffect, useState } from "react";
import type { CustomerInfo } from "@/types/customer";
import { EMPTY_CUSTOMER } from "@/types/customer";
import {
  isCustomerComplete,
  loadCustomer,
  saveCustomer,
} from "@/lib/customer-storage";

export function useCustomerInfo() {
  const [customer, setCustomer] = useState<CustomerInfo>(EMPTY_CUSTOMER);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCustomer(loadCustomer());
    setLoaded(true);
  }, []);

  const updateCustomer = useCallback((patch: Partial<CustomerInfo>) => {
    setCustomer((current) => {
      const next = { ...current, ...patch };
      saveCustomer(next);
      return next;
    });
  }, []);

  return {
    customer,
    updateCustomer,
    isComplete: isCustomerComplete(customer),
    loaded,
  };
}
