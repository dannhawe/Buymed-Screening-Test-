"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface QuantityControlProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export function QuantityControl({
  value,
  onChange,
  min = 0,
  max = 99,
  disabled = false,
  className,
}: QuantityControlProps) {
  const [localValue, setLocalValue] = useState(value.toString());

  // Sync local value when prop value changes
  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  const handleDecrement = () => {
    const newValue = Math.max(min, value - 1);
    onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + 1);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow empty input temporarily
    if (inputValue === "") {
      setLocalValue("");
      return;
    }

    // Only allow numbers
    if (!/^\d+$/.test(inputValue)) {
      return;
    }

    const numValue = parseInt(inputValue, 10);

    // Validate range
    if (numValue >= min && numValue <= max) {
      setLocalValue(inputValue);
      onChange(numValue);
    } else if (numValue > max) {
      setLocalValue(max.toString());
      onChange(max);
    } else if (numValue < min) {
      setLocalValue(min.toString());
      onChange(min);
    }
  };

  const handleInputBlur = () => {
    // If input is empty or invalid, reset to current value
    if (localValue === "" || parseInt(localValue, 10) < min) {
      setLocalValue(value.toString());
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="h-10 w-10 sm:h-9 sm:w-9 touch-manipulation"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="text"
        inputMode="numeric"
        value={localValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        disabled={disabled}
        className="h-10 w-16 sm:h-9 sm:w-16 text-center text-sm sm:text-base"
        min={min}
        max={max}
        aria-label="Quantity"
      />

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="h-10 w-10 sm:h-9 sm:w-9 touch-manipulation"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
