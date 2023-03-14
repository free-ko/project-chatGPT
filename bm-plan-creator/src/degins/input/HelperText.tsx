import React from "react";
import styled from "@emotion/styled";
import type { SerializedStyles } from "@emotion/react";

import { Color } from "~/degins/color";

type ChildrenProps<Children = React.ReactNode> = {
  children?: Children;
};

type EmotionCSSProps = {
  cx?: SerializedStyles;
};

type ReactStandardProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

type ColorType = "light" | "dark" | "gray" | "error";

type HelperOptions = {
  color?: ColorType;
};

type HelperProps = ChildrenProps &
  ReactStandardProps &
  EmotionCSSProps &
  HelperOptions;

const HelperTextColor = {
  light: Color.blue2,
  dark: Color.blue5,
  error: Color.coral6,
  gray: Color.naturalGray7,
};

const HelperTextWrapper = styled.span<{ $color: ColorType }>`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ $color }) => HelperTextColor[$color]};
`;

const Styled = {
  HelperTextWrapper,
};

export const HelperText = ({
  children,
  color = "gray",
  ...rest
}: HelperProps) => (
  <Styled.HelperTextWrapper $color={color} {...rest}>
    {children}
  </Styled.HelperTextWrapper>
);
