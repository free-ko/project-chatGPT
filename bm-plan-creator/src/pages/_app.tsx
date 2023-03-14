import type { AppProps } from "next/app";

import { GlobalLayout } from "~/degins/layout";
import { ToastContainer } from "~/features/toastContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalLayout />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
