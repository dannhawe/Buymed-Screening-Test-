"use client";

import { Product } from "@/app/types/product";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuantityControl } from "./QuantityControl";
import { formatCurrency } from "@/app/lib/utils/format-currency";
import { useCartStore } from "@/app/lib/store/cart-store";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, getItem, updateQuantity } = useCartStore();
  const { toast } = useToast();
  const cartItem = getItem(product.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      // Remove from cart if quantity is 0
      updateQuantity(product.id, 0);
      toast({
        title: "Removed from cart",
        description: `${product.name} has been removed from your cart.`,
      });
    } else if (quantity === 0) {
      // Add to cart if not in cart
      addItem(product.id, newQuantity);
      toast({
        title: "Added to cart",
        description: `${product.name} (${newQuantity}) added to cart.`,
      });
    } else {
      // Update quantity
      const oldQuantity = quantity;
      updateQuantity(product.id, newQuantity);
      if (newQuantity > oldQuantity) {
        toast({
          title: "Quantity updated",
          description: `${product.name} quantity increased to ${newQuantity}.`,
        });
      } else {
        toast({
          title: "Quantity updated",
          description: `${product.name} quantity decreased to ${newQuantity}.`,
        });
      }
    }
  };

  const handleAddToCart = () => {
    addItem(product.id, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      action: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    });
  };

  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-md">
      <CardHeader className="pb-3 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base sm:text-lg leading-tight break-words flex-1 min-w-0">
            {product.name}
          </h3>
          {product.isPrescription && (
            <Badge variant="destructive" className="shrink-0 text-xs">
              Rx
            </Badge>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {product.category}
        </p>
      </CardHeader>

      <CardContent className="flex-1 px-4 sm:px-6">
        <p className="text-xl sm:text-2xl font-bold text-primary">
          {formatCurrency(product.price)}
        </p>
      </CardContent>

      <CardFooter className="pt-4 border-t p-4 sm:p-6">
        {quantity > 0 ? (
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor={`quantity-${product.id}`}
                className="text-sm text-muted-foreground"
              >
                Quantity:
              </label>
            </div>
            <QuantityControl
              value={quantity}
              onChange={handleQuantityChange}
              min={0}
              max={99}
              aria-label={`Quantity for ${product.name}`}
            />
          </div>
        ) : (
          <Button
            onClick={handleAddToCart}
            className="w-full h-11 sm:h-10 touch-manipulation"
            variant="default"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
