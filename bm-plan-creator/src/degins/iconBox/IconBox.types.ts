import React from "react";

import type { SerializedStyles } from "@emotion/react";

type SizeTypes = "large" | "medium" | "small";

type ReactStandardProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

type EmotionCSSProps = {
  cx?: SerializedStyles;
};

type IconBoxOptions = {
  text?: string;
  size?: SizeTypes;
  gap?: number;
};

export type IconProps = {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  isIconOnly?: boolean;
  isIconAfter?: boolean;
};

export interface IconBoxProps
  extends ReactStandardProps,
    EmotionCSSProps,
    IconProps,
    IconBoxOptions {}
