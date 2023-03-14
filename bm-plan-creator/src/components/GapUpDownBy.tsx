import styled from "@emotion/styled";

import { BREAK_POINT, mediaQuery } from "~/degins/mediaQuery";

type HeightsProps = {
  $height: [number, number?, number?] | number;
};

/**
 *  컴포넌트와 컴포넌트 사이의 위, 아래 간격을 만드는 UI 컴포넌트 입니다.
 *  [PC, Tablet, Mobile] 배열 안에 반응형에 맞게 원하는 간격 값을 넣을 수 있습니다.
 *  만약 반응형이 필요 없다면 그냥 number 타입을 사용하면 됩니다.
 * */
export const GapUpDownBy = styled.div<HeightsProps>`
  flex-shrink: 0;
  ${(p) => `height: ${Array.isArray(p.$height) ? p.$height[0] : p.$height}px`};

  ${mediaQuery(BREAK_POINT.medium)} {
    ${(p) =>
      Array.isArray(p.$height) && p.$height[1] && `height: ${p.$height[1]}px`};
  }

  ${mediaQuery(BREAK_POINT.small)} {
    ${(p) =>
      Array.isArray(p.$height) && p.$height[2] && `height: ${p.$height[2]}px`};
  }
`;

export default GapUpDownBy;
