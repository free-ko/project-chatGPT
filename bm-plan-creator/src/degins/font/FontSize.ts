import { css } from "@emotion/react";
import { FontSizeTypes } from "./FontSize.types";
/**
 * @desc font-size와 line-height가 정의된 객체입니다.
 * <hr/>
 * @description { h1 } font-size: 42px; line-height: 52px;
 * @description { h2 } font-size: 30px; line-height: 40px;
 * @description { h3 } font-size: 24px; line-height: 36px;
 * @description { h4 } font-size: 20px; line-height: 28px;
 * @description { h5 } font-size: 18px; line-height: 26px;
 * @description { p1 } font-size: 16px; line-height: 24px;
 * @description { p2 } font-size: 15px; line-height: 22px;
 * @description { p3 } font-size: 14px; line-height: 20px;
 * @description { p4 } font-size: 12px; line-height: 18px;
 * @description { p5 } font-size: 10px; line-height: 14px;
 */
export const FontSize: FontSizeTypes = {
  h1: css`
    font-size: 42px;
    line-height: 52px;
  `,

  h2: css`
    font-size: 30px;
    line-height: 40px;
  `,

  h3: css`
    font-size: 24px;
    line-height: 36px;
  `,

  h4: css`
    font-size: 20px;
    line-height: 28px;
  `,

  h5: css`
    font-size: 18px;
    line-height: 26px;
  `,

  p1: css`
    font-size: 16px;
    line-height: 24px;
  `,

  p2: css`
    font-size: 15px;
    line-height: 22px;
  `,

  p3: css`
    font-size: 14px;
    line-height: 20px;
  `,

  p4: css`
    font-size: 12px;
    line-height: 18px;
  `,

  p5: css`
    font-size: 10px;
    line-height: 14px;
  `,
};
