"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "@/app/lib/data/products";
import { useFilterStore } from "@/app/lib/store/filter-store";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  className?: string;
}

export function CategoryFilter({ className }: CategoryFilterProps) {
  const { selectedCategory, setCategory } = useFilterStore();
  const categories = getCategories();

  return (
    <Select
      value={selectedCategory || "all"}
      onValueChange={(value) => setCategory(value === "all" ? null : value)}
    >
      <SelectTrigger
        className={cn("w-full sm:w-[180px]", className)}
        aria-label="Filter by category"
      >
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
