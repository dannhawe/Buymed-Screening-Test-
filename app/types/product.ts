/**
 * Product interface representing a product in the store
 */
export interface Product {
  /** Unique identifier for the product */
  id: number;
  /** Product name */
  name: string;
  /** Price in VND (Vietnamese Dong) */
  price: number;
  /** Product category */
  category: string;
  /** Whether the product requires a prescription */
  isPrescription: boolean;
}
