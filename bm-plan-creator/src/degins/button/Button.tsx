import React from "react";

import { IconBox } from "~/degins/iconBox";
import { Loading } from "~/degins/loading";

import type { ButtonProps } from "./Button.types";
import * as Styled from "./Button.styled";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text = "",
      size = "medium",
      variant = "primary",
      isBlock = false,
      loading = false,
      disabled = false,
      icon,
      isIconOnly = false,
      isIconAfter = false,
      style,
      children,
      onClick,
      ...rest
    },
    ref
  ) => (
    <Styled.ButtonWrapper
      {...rest}
      ref={ref}
      onClick={onClick}
      style={style}
      $variant={variant}
      $size={size}
      $isBlock={isBlock}
      $disabled={disabled}
    >
      {loading ? (
        <Loading kind={variant} />
      ) : (
        <IconBox
          text={text || (children as string)}
          isIconOnly={isIconOnly}
          isIconAfter={isIconAfter}
          icon={icon}
          size={size}
          gap={4}
        />
      )}
    </Styled.ButtonWrapper>
  )
);

Button.displayName = "Button";

export default React.memo(Button);
