import { create } from "zustand";
import { CartItem } from "@/app/types/cart";
import { Product } from "@/app/types/product";
import { getProductById } from "@/app/lib/data/products";

interface CartState {
  items: CartItem[];
  // Actions
  addItem: (productId: number, quantity?: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  // Computed values
  totalItems: () => number;
  totalPrice: () => number;
  getItem: (productId: number) => CartItem | undefined;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (productId: number, quantity: number = 1) => {
    const product = getProductById(productId);
    if (!product) return;

    const currentItems = get().items;
    const existingItem = currentItems.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      // Update existing item quantity
      const newQuantity = Math.min(99, existingItem.quantity + quantity);
      set({
        items: currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: newQuantity }
            : item
        ),
      });
    } else {
      // Add new item
      const newQuantity = Math.min(99, Math.max(0, quantity));
      if (newQuantity > 0) {
        set({
          items: [
            ...currentItems,
            {
              productId,
              quantity: newQuantity,
              product,
            },
          ],
        });
      }
    }
  },

  updateQuantity: (productId: number, quantity: number) => {
    // Enforce 0-99 range
    const clampedQuantity = Math.max(0, Math.min(99, quantity));

    if (clampedQuantity === 0) {
      // Remove item if quantity is 0
      get().removeItem(productId);
    } else {
      set({
        items: get().items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: clampedQuantity }
            : item
        ),
      });
    }
  },

  removeItem: (productId: number) => {
    set({
      items: get().items.filter((item) => item.productId !== productId),
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  totalItems: () => {
    const items = get().items;
    if (items.length === 0) return 0;
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  totalPrice: () => {
    const items = get().items;
    if (items.length === 0) return 0;
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },

  getItem: (productId: number) => {
    return get().items.find((item) => item.productId === productId);
  },
}));
