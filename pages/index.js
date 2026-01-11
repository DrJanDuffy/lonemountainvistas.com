import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas</title>
        <meta name="description" content="Lone Mountain Vistas - Premier luxury real estate in northwest Las Vegas. Explore properties near Lone Mountain Regional Park, The Estates at Lone Mountain, and discover the Lone Mountain lifestyle." />
      </Head>
      <main>
        <h1>Lone Mountain Vistas</h1>
        <p className="tagline">Luxury Real Estate in Las Vegas</p>
        <div className="contact-info">
          <p>📞 (555) 123-4567</p>
          <p>📧 info@lonemountainvistas.com</p>
        </div>
        
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
          font-size: 1.2rem;
          color: #666;
        }
        .contact-info p {
          margin: 0.5rem 0;
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
        @media (max-width: 768px) {
          .nav-links {
            grid-template-columns: 1fr;
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