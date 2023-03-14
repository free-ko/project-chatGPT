import { SerializedStyles } from "~/types";

export type FontWeightKey =
  | "extraBold"
  | "semibold"
  | "bold"
  | "medium"
  | "regular";

export type FontWeightTypes = Record<FontWeightKey, SerializedStyles>;
