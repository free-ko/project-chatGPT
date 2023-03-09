type NaturalGrayColor =
  | "naturalGray0"
  | "naturalGray1"
  | "naturalGray2"
  | "naturalGray3"
  | "naturalGray4"
  | "naturalGray5"
  | "naturalGray6"
  | "naturalGray7"
  | "naturalGray8"
  | "naturalGray9";

type BlueGrayColor =
  | "blueGray0"
  | "blueGray1"
  | "blueGray2"
  | "blueGray3"
  | "blueGray4"
  | "blueGray5"
  | "blueGray6"
  | "blueGray7"
  | "blueGray8"
  | "blueGray9";

type BlueColor =
  | "blue0"
  | "blue1"
  | "blue2"
  | "blue3"
  | "blue4"
  | "blue5"
  | "blue6"
  | "blue7"
  | "blue8"
  | "blue9";

type CoralColor =
  | "coral0"
  | "coral1"
  | "coral2"
  | "coral3"
  | "coral4"
  | "coral5"
  | "coral6"
  | "coral7"
  | "coral8"
  | "coral9";

type YellowOrangeColor =
  | "yellowOrange0"
  | "yellowOrange1"
  | "yellowOrange2"
  | "yellowOrange3"
  | "yellowOrange4"
  | "yellowOrange5"
  | "yellowOrange6"
  | "yellowOrange7"
  | "yellowOrange8"
  | "yellowOrange9";

type GreenColor =
  | "green0"
  | "green1"
  | "green2"
  | "green3"
  | "green4"
  | "green5"
  | "green6"
  | "green7"
  | "green8"
  | "green9";

type LightPurpleColor = "lightPurple";
type CoolGrayColor = "coolGray";
type ShineBlueColor = "shineBlue";
type LightBlueColor = "lightBlue";
type OverlayColor = "overlay";
type SurfaceColor = "surface";

export type ColorKey =
  | NaturalGrayColor
  | BlueGrayColor
  | BlueColor
  | CoralColor
  | YellowOrangeColor
  | GreenColor
  | LightPurpleColor
  | CoolGrayColor
  | ShineBlueColor
  | LightBlueColor
  | OverlayColor
  | SurfaceColor;

export type ColorType = Record<ColorKey, string>;
