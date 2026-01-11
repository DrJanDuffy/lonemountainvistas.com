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
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
        type="module"
      />
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
