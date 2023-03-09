import { SerializedStyles } from "@emotion/react";

export type FontSizeKey =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5";

export type FontSizeTypes = Record<FontSizeKey, SerializedStyles>;
