import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer as Wrapper, Slide } from "react-toastify";

import { Color } from "~/degins/color";
import { FontSize } from "~/degins/font";
import { BREAK_POINT } from "~/degins/mediaQuery";
import { IconCheckDeselected, IconClose } from "~/degins/icon";

const GlobalStyle = css`
  :root {
    --toastify-toast-min-height: 56px;
  }
`;

const StyledContainer = styled(Wrapper)`
  &&&.Toastify__toast-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100000002;

    .Toastify__toast {
      width: 508px;
      min-height: 56px;
      display: flex;
      align-items: center;
      padding: 16px 16px 16px 20px;
      border-radius: 5px;
      background-color: ${Color.blueGray8};
      box-shadow: 0 5px 16px 0 hsla(0, 0%, 0%, 0.2);

      cursor: initial;

      @media (max-width: ${BREAK_POINT.medium}px) {
        width: 96vw;
        ${FontSize.p3};
      }

      @media (max-width: ${BREAK_POINT.small}px) {
        width: 320px;
        align-items: flex-start;
      }

      @media (max-width: 480px) {
        margin-top: 16px;
      }
    }

    .Toastify__toast--error {
      background-color: hsla(360, 100%, 67%, 1);
    }

    .Toastify__toast-icon {
      width: 24px;
    }

    .Toastify__toast-body {      
      ${FontSize.p1};
      padding: 0;
      color: ${Color.naturalGray0};
      
      @media (max-width: ${BREAK_POINT.small}px) {
        align-items: flex-start;
        margin-right: 13px;
      }
    }
`;

const CloseButton = ({
  closeToast,
}: {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
}) => (
  <button type="button" onClick={closeToast}>
    <IconClose color={Color.naturalGray0} />
  </button>
);

const ToastContainer = () => (
  <>
    <Global styles={GlobalStyle} />
    <StyledContainer
      transition={Slide}
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      icon={<IconCheckDeselected color={Color.naturalGray0} />}
      closeButton={CloseButton}
    />
  </>
);

export default ToastContainer;
