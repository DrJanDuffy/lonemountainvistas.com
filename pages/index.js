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
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Find Your Dream Home in
                <span className="hero-title-accent"> Lone Mountain Vistas</span>
              </h1>
              <p className="hero-subtitle">
                Premier luxury real estate in northwest Las Vegas. Experience the perfect blend of mountain views, 
                modern amenities, and exceptional community living.
              </p>
              
              <div className="hero-cta-group">
                <Link href="/all-properties" className="hero-cta-primary">
                  Browse Properties
                </Link>
                <Link href="/contact" className="hero-cta-secondary">
                  Get Free Valuation
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$127M+</div>
                  <div className="stat-label">Total Sales</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="hero-agent-card">
              <div className="agent-card-header">
                <div className="agent-badge">Top Agent</div>
              </div>
              <div className="agent-card-content">
                <h3 className="agent-card-name">Dr. Jan Duffy</h3>
                <p className="agent-card-company">Berkshire Hathaway HomeServices</p>
                <p className="agent-card-role">Head of Lone Mountain Heights Team</p>
                <div className="agent-card-divider"></div>
                <div className="agent-card-contact">
                  <a href="tel:702-222-1964" className="agent-phone">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    702-222-1964
                  </a>
                  <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="agent-email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </a>
                </div>
                <p className="agent-card-tagline">Local Expert • Global Network</p>
              </div>
            </div>
          </div>

          {/* Search Widget Section */}
          <div className="hero-search-container">
            <h2 className="hero-search-title">Start Your Property Search</h2>
            <p className="hero-search-subtitle">Search by neighborhood, city, or school</p>
            <RealScoutAdvancedSearch className="hero-search-widget" />
          </div>
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
            <Link href="/buyers" className="nav-link">
              <span className="nav-link-title">Buyer's Guide</span>
              <span className="nav-link-desc">Home buying resources</span>
            </Link>
            <Link href="/sellers" className="nav-link">
              <span className="nav-link-title">Seller's Guide</span>
              <span className="nav-link-desc">Home selling resources</span>
            </Link>
            <Link href="/market-reports" className="nav-link">
              <span className="nav-link-title">Market Reports</span>
              <span className="nav-link-desc">Market trends & statistics</span>
            </Link>
            <Link href="/resources" className="nav-link">
              <span className="nav-link-title">Resources</span>
              <span className="nav-link-desc">Helpful tools & information</span>
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
          width: 100%;
          padding: 0;
          background: linear-gradient(to bottom, #f7f9fc, #ffffff);
        }
        main {
          width: 100%;
          max-width: 100%;
        }

        /* Hero Section Styles */
        .hero-section {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 1.5rem 3rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .hero-content {
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            align-items: start;
          }
        }

        .hero-text {
          text-align: center;
        }

        @media (min-width: 1024px) {
          .hero-text {
            text-align: left;
          }
        }

        .hero-title {
          font-size: 2.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: #0A2540;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        .hero-title-accent {
          color: #1E6BB8;
          display: block;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4B5563;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 1024px) {
          .hero-subtitle {
            margin-left: 0;
            margin-right: 0;
            font-size: 1.25rem;
          }
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .hero-cta-group {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .hero-cta-group {
            justify-content: flex-start;
          }
        }

        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          background: #1E6BB8;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .hero-cta-primary:hover {
          background: #155A94;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1E6BB8;
          background: white;
          border: 2px solid #1E6BB8;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        .hero-cta-secondary:hover {
          background: #1E6BB8;
          color: white;
          transform: translateY(-2px);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid #E5E7EB;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1E6BB8;
          margin-bottom: 0.25rem;
        }

        @media (min-width: 768px) {
          .stat-number {
            font-size: 2.5rem;
          }
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6B7280;
          font-weight: 500;
        }

        /* Agent Card Styles */
        .hero-agent-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          max-width: 400px;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .hero-agent-card {
            margin: 0;
            position: sticky;
            top: 6rem;
          }
        }

        .agent-card-header {
          background: linear-gradient(135deg, #1a365d 0%, #1E6BB8 100%);
          padding: 1.5rem;
          text-align: center;
        }

        .agent-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .agent-card-content {
          padding: 2rem;
        }

        .agent-card-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .agent-card-company {
          font-size: 1rem;
          color: #1E6BB8;
          font-weight: 600;
          margin-bottom: 0.25rem;
          text-align: center;
        }

        .agent-card-role {
          font-size: 0.875rem;
          color: #6B7280;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .agent-card-divider {
          height: 1px;
          background: #E5E7EB;
          margin: 1.5rem 0;
        }

        .agent-card-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .agent-phone,
        .agent-email {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.875rem 1.5rem;
          background: #F3F4F6;
          border-radius: 0.75rem;
          color: #1E6BB8;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
        }

        .agent-phone:hover,
        .agent-email:hover {
          background: #1E6BB8;
          color: white;
          transform: translateY(-2px);
        }

        .agent-card-tagline {
          text-align: center;
          font-size: 0.875rem;
          color: #059669;
          font-weight: 500;
        }

        /* Hero Search Container */
        .hero-search-container {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .hero-search-container {
            padding: 3rem;
          }
        }

        .hero-search-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .hero-search-title {
            font-size: 2.5rem;
          }
        }

        .hero-search-subtitle {
          font-size: 1.125rem;
          color: #6B7280;
          margin-bottom: 2rem;
          text-align: center;
        }

        .hero-search-widget {
          width: 100%;
          min-height: 200px;
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
