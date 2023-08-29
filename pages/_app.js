import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

import { Noto_Sans } from "next/font/google";

const natoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <style jsx global>{`
          html {
            font-family: ${natoSans.style.fontFamily};
          }
        `}</style>

        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}
