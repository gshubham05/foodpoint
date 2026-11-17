"use client";

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "food-point-cart-v1";

function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return action.items;
    case "ADD": {
      const found = state.find((i) => i.id === action.item.id);
      if (found) {
        return state.map((i) => (i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      const { id, name, price, veg } = action.item;
      return [...state, { id, name, price, veg, qty: 1 }];
    }
    case "DEC":
      return state.flatMap((i) => {
        if (i.id !== action.id) return [i];
        return i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [];
      });
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Page load pe localStorage se cart wapas lao
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) dispatch({ type: "LOAD", items: JSON.parse(saved) });
    } catch (e) {}
    setHydrated(true);
  }, []);

  // Cart badle to save karo
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items, hydrated]);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return {
      items,
      count,
      subtotal,
      open,
      setOpen,
      getQty: (id) => items.find((i) => i.id === id)?.qty || 0,
      add: (item) => dispatch({ type: "ADD", item }),
      dec: (id) => dispatch({ type: "DEC", id }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart ko CartProvider ke andar use karo");
  return ctx;
}
