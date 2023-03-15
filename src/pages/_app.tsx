import type { AppProps } from "next/app";

import "../styles/global.css";

import { DropDownProvider } from "@/store/contexts/DropDownProvider";
import { PetFormProvider } from "@/store/contexts/PetFormProvider";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <PetFormProvider>
      <DropDownProvider>
        <div className="font-gensen-rounded">
          <Component {...pageProps}></Component>
        </div>
      </DropDownProvider>
    </PetFormProvider>
  );
}

export default MyApp;
