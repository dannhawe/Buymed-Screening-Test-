import { Product } from "./product";

/**
 * CartItem interface representing an item in the shopping cart
 */
export interface CartItem {
  /** Product ID */
  productId: number;
  /** Quantity of the product (0-99) */
  quantity: number;
  /** Full product information */
  product: Product;
}
