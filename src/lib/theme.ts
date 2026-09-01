export type Theme = "light" | "dark";

export const THEME_KEY = "theme";

export function resolveStoredTheme(stored: string | null): Theme {
  return stored === "dark" ? "dark" : "light";
}
