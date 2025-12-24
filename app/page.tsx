"use client";

import { SearchInput } from "@/app/components/product/SearchInput";
import { CategoryFilter } from "@/app/components/product/CategoryFilter";
import { ProductList } from "@/app/components/product/ProductList";
import { CartSummary } from "@/app/components/cart/CartSummary";
import { MobileCartSheet } from "@/app/components/cart/MobileCartSheet";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">BuyMed</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Product Search & Order
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />
              {/* Mobile Cart Button */}
              <div className="md:hidden">
                <MobileCartSheet />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Search and Filter Section */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <SearchInput placeholder="Search products by name..." />
            </div>
            <div className="w-full sm:w-auto">
              <CategoryFilter />
            </div>
          </div>
        </div>

        {/* Desktop: 2-column layout, Mobile: single column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Products Section */}
          <div className="md:col-span-2">
            <ProductList />
          </div>

          {/* Cart Section - Desktop only */}
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-20 lg:top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
