import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonWrapperProps } from "./Button.types";

import { Color } from "~/degins/color";
import { FontWeight, FontSize } from "~/degins/font";

const variantCSS = {
  primary: css`
    border-radius: 5px;

    color: ${Color.naturalGray0};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.blue6};
  `,

  secondary: css`
    border-radius: 5px;
    border: 1px solid ${Color.blue6};

    color: ${Color.blue6};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.naturalGray0};
  `,

  tertiary: css`
    border-radius: 5px;

    color: ${Color.naturalGray7};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.blueGray0};
  `,
};

const hoverVariantCSS = {
  primary: `
    &:hover {
      background-color: ${Color.blue7};
    }
  `,

  secondary: `
    &:hover {
      border: 1px solid ${Color.blue6};
      
      background-color: ${Color.blue0};
    }
  `,

  tertiary: `
    &:hover {
      background-color: ${Color.blueGray1};
    }
  `,
};

const sizeCSS = {
  large: `
    height: 48px;
    padding: 0 20px;
  `,

  medium: `
    height: 40px;
    padding: 0 16px;
  `,

  small: `
    height: 32px;
    padding: 0 12px;
  `,
};

const disabledCSS = {
  primary: `
    background-color: ${Color.blue2};
  `,

  secondary: `
    border: 1px solid ${Color.blue3};
    color: ${Color.blue3};
  `,

  tertiary: `
    color: ${Color.naturalGray3};
    background-color: ${Color.blueGray0};
  `,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({ $variant }) => variantCSS[$variant]};
  ${({ $isBlock }) => ($isBlock ? "width: 100%" : "width: fit-content")};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $size }) => sizeCSS[$size]};

  transition: all 0.2s ease-in-out;

  white-space: pre;

  ${({ $variant, $disabled }) =>
    !$disabled
      ? hoverVariantCSS[$variant]
      : `
          ${disabledCSS[$variant]}
          &:hover {
            cursor: not-allowed;
          }
        `};
`;
