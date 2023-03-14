import React from "react";
import styled from "@emotion/styled";
import type { SerializedStyles } from "@emotion/react";

import { Color } from "~/degins/color";

type ReactStandardProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

type EmotionCSSProps = {
  cx?: SerializedStyles;
};

type AsteriskTypes = { text?: string };

type AsteriskProps = AsteriskTypes & ReactStandardProps & EmotionCSSProps;

const AsteriskWrapper = styled.span`
  color: ${Color.coral6};
`;

const Styled = {
  AsteriskWrapper,
};

export const Asterisk = ({ text = "", ...rest }: AsteriskProps) => (
  <Styled.AsteriskWrapper {...rest}>*{text}</Styled.AsteriskWrapper>
);

React.memo(Asterisk);
