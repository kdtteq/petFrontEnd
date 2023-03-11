import type { AppProps } from "next/app";

import "../styles/global.css";

import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <div className="font-gensen-rounded">
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
