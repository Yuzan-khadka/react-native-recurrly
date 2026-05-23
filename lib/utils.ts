import dayjs from "dayjs";

export const formatCurrency = (
  value: number | string,
  currency: string = "USD",
): string => {
  try {
    const numValue = typeof value === "string" ? parseFloat(value) : value;

    if (isNaN(numValue)) {
      throw new Error("Invalid number value");
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numValue);
  } catch (error) {
    // Fallback: format as USD with $ symbol and two decimal places
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    const fallbackValue = isNaN(numValue) ? 0 : numValue;
    return `$${fallbackValue.toFixed(2)}`;
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
