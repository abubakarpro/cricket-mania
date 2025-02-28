import "@/styles/globals.css";

import type { AppProps } from "next/app";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import CustomLayout from "@/components/core/CustomLayout/CustomLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <ToastContainer /> */}
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </div>
  );
}
