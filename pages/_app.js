import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import { Detector } from "react-detect-offline";
import Head from "next/head";
import PageTransition from "../components/tools/PageTransition";

function MyApp({ Component, pageProps }) {
  // Loading component logic for next.js ---->

  // const [loading, setLoading] = useState(false);
  // Router.events.on("routeChangeStart", (url) => {
  //   setLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   setLoading(false);
  // });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Next tailwind starter" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Next tailwind starter" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Detector
        render={({ online }) => {
          return !online && <OfflineMessage />; *** Create a No internet popup ***
        }}
      /> */}

      <PageTransition>
        {/* {loading && <Loader />} *** Create a global Loader screen *** */}
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}

export default MyApp;
