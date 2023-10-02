import { ThemeProvider } from "@/providers/theme-provider";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

import { Noto_Sans } from "next/font/google";
import { Provider, useDispatch } from "react-redux";
import store from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

const natoSans = Noto_Sans({
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
    <ThemeProvider attribute="class">
      <style jsx global>{`
        html {
          font-family: ${natoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <InnerApp Component={Component} pageProps={pageProps} />
  </Provider>
);

export default appWithTranslation(App);
