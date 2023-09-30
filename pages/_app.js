import { ThemeProvider } from "@/providers/theme-provider";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

import { Noto_Sans } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store";

const natoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <style jsx global>{`
          html {
            font-family: ${natoSans.style.fontFamily};
          }
        `}</style>

        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
