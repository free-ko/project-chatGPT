import React from "react";

import type { SerializedStyles } from "@emotion/react";
import { IconProps } from "~/degins/iconBox/IconBox.types";

type ReactStandardProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

type EmotionCSSProps = {
  cx?: SerializedStyles;
};

type LoadingProps = {
  loading?: boolean;
};

type DisableProps = {
  disabled?: boolean;
};

type SizeTypes = "large" | "medium" | "small";
export type ButtonSize = SizeTypes;
export type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonOptions = {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isBlock?: boolean;
  href?: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ReactStandardProps,
    EmotionCSSProps,
    LoadingProps,
    DisableProps,
    IconProps,
    ButtonOptions {}

export type ButtonWrapperProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $isBlock: boolean;
  $disabled: boolean;
};
