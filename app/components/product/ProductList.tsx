"use client";

import { getProducts } from "@/app/lib/data/products";
import { filterProducts } from "@/app/lib/utils/filter-products";
import { useFilterStore } from "@/app/lib/store/filter-store";
import { ProductCard } from "./ProductCard";
import { ProductListSkeleton } from "./ProductListSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { PackageSearch } from "lucide-react";
import { useState, useEffect } from "react";

export function ProductList() {
  const { searchQuery, selectedCategory } = useFilterStore();
  const [isLoading, setIsLoading] = useState(false);
  const allProducts = getProducts();
  const filteredProducts = filterProducts(
    allProducts,
    searchQuery,
    selectedCategory
  );

  // Simulate loading state when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  if (filteredProducts.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <PackageSearch className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-muted-foreground">
            No products found
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
