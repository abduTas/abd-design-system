export const colors = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
  },
  neutral: {
    0: "#ffffff",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    500: "#6b7280",
    700: "#374151",
    900: "#111827",
  },
  semantic: {
    success: "#16a34a",
    warning: "#ca8a04",
    error: "#dc2626",
  },
} as const;

export type Colors = typeof colors;
