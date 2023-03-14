import React from "react";
import { SerializedStyles } from "~/types";
import type { InputHTMLAttributes, FC, SVGProps } from "react";

type ReactStandardProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

type EmotionCSSProps = {
  cx?: SerializedStyles;
};

export interface InputOptions extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string;
  width?: string;
  inputSize?: "large" | "small";
  description?: string;
  innerLabel?: string;
  helperText?: string;
  errorText?: string;
  charLimit?: number;
  unitText?: string;
  mustInput?: boolean;
  isError?: boolean;
  textAlignRight?: boolean;
  disableEnterSubmit?: boolean;
  isSearch?: boolean;
  prefixIcon?: FC<SVGProps<SVGSVGElement>>;
  suffixIcon?: FC<SVGProps<SVGSVGElement>>;
}

export type InputProps = ReactStandardProps & EmotionCSSProps & InputOptions;
