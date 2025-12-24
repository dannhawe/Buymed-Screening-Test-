"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/app/lib/store/cart-store";
import { CartSummary } from "./CartSummary";

export function MobileCartSheet() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCartStore();
  const itemCount = totalItems();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="relative h-11 w-11 sm:h-10 sm:w-10 touch-manipulation"
          aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ""}`}
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              aria-label={`${itemCount} items in cart`}
            >
              {itemCount > 99 ? "99+" : itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] max-h-[90vh] overflow-y-auto px-4 sm:px-6">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Review and manage your order items
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <CartSummary />
        </div>
      </SheetContent>
    </Sheet>
  );
}
