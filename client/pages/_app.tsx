import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
