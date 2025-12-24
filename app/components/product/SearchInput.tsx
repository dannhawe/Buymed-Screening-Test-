"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useFilterStore } from "@/app/lib/store/filter-store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export function SearchInput({
  className,
  placeholder = "Search products...",
}: SearchInputProps) {
  const { searchQuery, setSearchQuery } = useFilterStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  // Sync with store when it changes externally
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        className="pl-10"
        aria-label="Search products"
      />
    </div>
  );
}
