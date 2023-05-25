export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "error";

  interface Palette {
    
  }

const ERROR = {
  light: "EF233C",
  main: "D90429",
  dark: "B40421",
};

const ORANGE = {};

export const palette = {
  error: ERROR,
} as const;
