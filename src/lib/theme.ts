export type Theme = "light" | "dark";

export const THEME_KEY = "theme";

/** Light is the default on a first visit; an explicit choice always wins. */
export function resolveStoredTheme(stored: string | null): Theme {
  return stored === "dark" ? "dark" : "light";
}
