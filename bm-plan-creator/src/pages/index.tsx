import Head from "next/head";

import Main from "~/templates/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Plan Creator</title>
        <meta name="description" content="Business Plan Creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
