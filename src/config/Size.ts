export type ComponentSize = "default" | "large" | "small";

export const SidePaddings: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
};

export const Heights: { [key in ComponentSize]: number } = {
  large: 55,
  default: 45,
  small: 35,
};
