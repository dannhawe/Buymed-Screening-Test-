import { Product } from "@/app/types/product";

/**
 * Sample product data as specified in requirements
 */
const productsData: Product[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 15000,
    category: "Pain Relief",
    isPrescription: false,
  },
  {
    id: 2,
    name: "Amoxicillin 500mg",
    price: 45000,
    category: "Antibiotic",
    isPrescription: true,
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    price: 30000,
    category: "Supplement",
    isPrescription: false,
  },
  {
    id: 4,
    name: "Cetirizine 10mg",
    price: 20000,
    category: "Allergy",
    isPrescription: false,
  },
];

/**
 * Get all products
 * @returns Array of all products
 */
export function getProducts(): Product[] {
  return productsData;
}

/**
 * Get a product by ID
 * @param id - Product ID
 * @returns Product if found, undefined otherwise
 */
export function getProductById(id: number): Product | undefined {
  return productsData.find((product) => product.id === id);
}

/**
 * Get unique categories from products
 * @returns Array of unique category names
 */
export function getCategories(): string[] {
  const categories = productsData.map((product) => product.category);
  return Array.from(new Set(categories)).sort();
}
