import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Joias Raras</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
