import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RealScoutWidget from '../components/RealScoutWidget';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas</title>
        <meta name="description" content="Lone Mountain Vistas - Premier luxury real estate in northwest Las Vegas. Explore properties near Lone Mountain Regional Park, The Estates at Lone Mountain, and discover the Lone Mountain lifestyle." />
        <link rel="canonical" href="https://lonemountainvistas.com/" />
        <meta property="og:url" content="https://lonemountainvistas.com/" />
      </Head>
      <main>
        <h1>Lone Mountain Vistas</h1>
        <p className="tagline">Luxury Real Estate in Las Vegas</p>
        <div className="contact-info">
          <p className="agent-name">Dr. Jan Duffy</p>
          <p className="company-name">Berkshire Hathaway HomeServices</p>
          <p className="team-name">Head of Lone Mountain Heights Team</p>
          <p className="tagline-sub">Your Complete Real Estate Partner</p>
          <p className="expertise">Local Expert • Global Network</p>
          <div className="contact-details">
            <p>📞 <a href="tel:702-222-1964">702-222-1964</a></p>
            <p>✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com">DrDuffySells@LoneMountainVistas.com</a></p>
          </div>
        </div>

        <section className="search-section">
          <h2 className="search-title">Find Your Dream Home in Lone Mountain Vistas</h2>
          <RealScoutAdvancedSearch className="homepage-search-widget" />
        </section>

        <nav className="navigation">
          <h2 className="nav-title">Explore Lone Mountain</h2>
          <div className="nav-links">
            <Link href="/lone-mountain-park" className="nav-link">
              <span className="nav-link-title">Lone Mountain Regional Park</span>
              <span className="nav-link-desc">Hiking trails, summit views & desert vistas</span>
            </Link>
            <Link href="/estates-lone-mountain" className="nav-link">
              <span className="nav-link-title">The Estates at Lone Mountain</span>
              <span className="nav-link-desc">Luxury custom homes near the park</span>
            </Link>
            <Link href="/living-lone-mountain" className="nav-link">
              <span className="nav-link-title">Living in Lone Mountain</span>
              <span className="nav-link-desc">Community guide & lifestyle</span>
            </Link>
            <Link href="/lone-mountain-vista-v" className="nav-link">
              <span className="nav-link-title">Lone Mountain Vista V</span>
              <span className="nav-link-desc">Walkable neighborhood community</span>
            </Link>
            <Link href="/all-properties" className="nav-link">
              <span className="nav-link-title">All Properties</span>
              <span className="nav-link-desc">Browse available listings</span>
            </Link>
          </div>
        </nav>

        <nav className="navigation" style={{ marginTop: '2rem' }}>
          <h2 className="nav-title">Quick Links</h2>
          <div className="nav-links">
            <Link href="/about" className="nav-link">
              <span className="nav-link-title">About Dr. Jan Duffy</span>
              <span className="nav-link-desc">Meet your real estate expert</span>
            </Link>
            <Link href="/services" className="nav-link">
              <span className="nav-link-title">Our Services</span>
              <span className="nav-link-desc">Buyer & seller services</span>
            </Link>
            <Link href="/contact" className="nav-link">
              <span className="nav-link-title">Contact Us</span>
              <span className="nav-link-desc">Get in touch today</span>
            </Link>
          </div>
        </nav>

        <section className="office-listings-section">
          <h2 className="listings-title">Featured Properties</h2>
          <RealScoutOfficeListings />
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          background: linear-gradient(to bottom, #f7f9fc, #e3e8ef);
        }
        main {
          max-width: 800px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #0A2540;
        }
        .tagline {
          font-size: 1.5rem;
          color: #3A8DDE;
          margin-bottom: 2rem;
        }
        .contact-info {
          margin-top: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        .agent-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        .company-name {
          font-size: 1.1rem;
          color: #1E6BB8;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .team-name {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
        }
        .tagline-sub {
          font-size: 1.2rem;
          color: #0A2540;
          font-weight: 500;
          margin: 1rem 0 0.5rem 0;
        }
        .expertise {
          font-size: 1rem;
          color: #059669;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .contact-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid #e3e8ef;
        }
        .contact-details p {
          margin: 0.8rem 0;
          font-size: 1.1rem;
        }
        .contact-details a {
          color: #1E6BB8;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .contact-details a:hover {
          color: #155A94;
          text-decoration: underline;
        }
        .contact-details a:focus {
          outline: 2px solid #1E6BB8;
          outline-offset: 2px;
        }
        .navigation {
          margin-top: 3rem;
          width: 100%;
          max-width: 900px;
        }
        .nav-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .nav-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .nav-link {
          display: block;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .nav-link-title {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        .nav-link-desc {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }
        .search-section {
          margin-top: 3rem;
          width: 100%;
          max-width: 900px;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .search-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .homepage-search-widget {
          width: 100%;
          min-height: 200px;
        }
        .office-listings-section {
          margin-top: 3rem;
          width: 100%;
          max-width: 1200px;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .listings-title {
          font-size: 1.8rem;
          color: #0A2540;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .nav-links {
            grid-template-columns: 1fr;
          }
          .search-section {
            padding: 1.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
    </div>
  );
}
