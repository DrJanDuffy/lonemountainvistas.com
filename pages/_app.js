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
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
      </Head>

      {/* RealScout Widget Script - Loaded with lazy strategy to improve initial page load */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="lazyOnload"
        type="module"
      />
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #4a90e2;
          --rs-as-widget-width: 500px !important;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
