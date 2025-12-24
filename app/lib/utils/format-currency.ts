/**
 * Format number as VND currency
 * @param amount - Amount in VND
 * @returns Formatted string (e.g., "15,000 ₫")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

/**
 * Format number as VND currency (alternative format with "đ")
 * @param amount - Amount in VND
 * @returns Formatted string (e.g., "15.000 đ")
 */
export function formatCurrencyAlt(amount: number): string {
  return `${amount.toLocaleString("vi-VN")} đ`;
}
