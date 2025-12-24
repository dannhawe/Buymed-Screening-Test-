import { Product } from "@/app/types/product";

/**
 * Filter products based on search query and category
 * @param products - Array of products to filter
 * @param searchQuery - Search query (case-insensitive name matching)
 * @param category - Category to filter by (null for all categories)
 * @returns Filtered array of products
 */
export function filterProducts(
  products: Product[],
  searchQuery: string,
  category: string | null
): Product[] {
  let filtered = products;

  // Filter by search query (case-insensitive)
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (category && category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  return filtered;
}
