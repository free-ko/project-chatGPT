import type { AppProps } from "next/app";

import { GlobalLayout } from "~/degins/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalLayout />
      <Component {...pageProps} />
    </>
  );
}
