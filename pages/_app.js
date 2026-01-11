import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

// RealScout Agent ID - Update this with your actual RealScout agent encoded ID
const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* RealScout Widget Script - Loaded globally for all pages */}
      <Script
        src={`https://em.realscout.com/widgets/${REALSCOUT_AGENT_ID}.js`}
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
