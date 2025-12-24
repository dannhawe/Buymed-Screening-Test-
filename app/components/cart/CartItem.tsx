"use client";

import { CartItem as CartItemType } from "@/app/types/cart";
import { QuantityControl } from "@/app/components/product/QuantityControl";
import { formatCurrency } from "@/app/lib/utils/format-currency";
import { useCartStore } from "@/app/lib/store/cart-store";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { toast } = useToast();
  const subtotal = item.product.price * item.quantity;

  const handleQuantityChange = (newQuantity: number) => {
    const oldQuantity = item.quantity;
    updateQuantity(item.productId, newQuantity);
    
    if (newQuantity === 0) {
      toast({
        title: "Removed from cart",
        description: `${item.product.name} has been removed from your cart.`,
      });
    } else if (newQuantity !== oldQuantity) {
      toast({
        title: "Quantity updated",
        description: `${item.product.name} quantity updated to ${newQuantity}.`,
      });
    }
  };

  const handleRemove = () => {
    removeItem(item.productId);
    toast({
      title: "Removed from cart",
      description: `${item.product.name} has been removed from your cart.`,
    });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm sm:text-base leading-tight break-words">
            {item.product.name}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            {item.product.category}
          </p>
          <p className="text-sm font-medium text-primary mt-2">
            {formatCurrency(item.product.price)} each
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <label
            htmlFor={`cart-quantity-${item.productId}`}
            className="text-xs text-muted-foreground mb-2 block"
          >
            Quantity:
          </label>
          <QuantityControl
            value={item.quantity}
            onChange={handleQuantityChange}
            min={0}
            max={99}
            aria-label={`Quantity for ${item.product.name}`}
          />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">Subtotal:</p>
          <p className="text-base font-semibold">
            {formatCurrency(subtotal)}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-destructive hover:text-destructive h-10 sm:h-9 touch-manipulation min-h-[44px] sm:min-h-0"
          aria-label={`Remove ${item.product.name} from cart`}
        >
          <Trash2 className="h-4 w-4 mr-2" aria-hidden="true" />
          Remove
        </Button>
      </div>

      <Separator />
    </div>
  );
}
