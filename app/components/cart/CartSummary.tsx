"use client";

import { useCartStore } from "@/app/lib/store/cart-store";
import { CartItem } from "./CartItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/app/lib/utils/format-currency";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const { items, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-muted-foreground">
            Your cart is empty
          </p>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Add some products to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Shopping Cart ({items.length} {items.length === 1 ? "item" : "items"})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4 max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-2 -mr-2">
          {items.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
        </div>

        <Separator />

        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Grand Total:</span>
            <span className="text-primary">{formatCurrency(totalPrice())}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
