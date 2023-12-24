import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Provider, useDispatch } from "react-redux";
import store from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

function InnerApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: "ROUTE_CHANGED",
      payload: router.pathname,
    });
  }, [router.pathname]);

  return (
    <NextUIProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover user-scalable=no maximum-scale=1.0"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Provider store={store}>
      <SessionProvider session={session}>
        <InnerApp Component={Component} pageProps={pageProps} />
      </SessionProvider>
    </Provider>
  </>
);

export default appWithTranslation(App);
