import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {ClerkProvider, UserButton} from "@clerk/nextjs";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <UserButton/>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}

export default CustomApp;
