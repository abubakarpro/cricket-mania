import "@/styles/globals.css";

import type { AppProps } from "next/app";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import CustomLayout from "@/components/core/CustomLayout/CustomLayout";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </Provider>
    </div>
  );
}
