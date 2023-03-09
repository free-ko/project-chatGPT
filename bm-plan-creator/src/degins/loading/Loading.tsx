import React from "react";

import { DefaultLoading, SecondaryLoading } from "./Loading.icons";
import type { LoadingProps } from "./Loading.types";

import * as Styled from "./Loading.styled";

const LoadingTheme = {
  primary: <DefaultLoading />,
  secondary: <SecondaryLoading />,
  tertiary: <DefaultLoading />,
};

const Loading = ({ kind = "primary" }: LoadingProps) => (
  <Styled.LoadingWrapper>{LoadingTheme[kind]}</Styled.LoadingWrapper>
);

export default Loading;
