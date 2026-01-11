import Head from 'next/head';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import RealScoutOfficeListings from '../components/RealScoutOfficeListings';

export default function About() {
  return (
    <>
      <Head>
        <title>About Dr. Jan Duffy | Lone Mountain Vistas Real Estate Expert</title>
        <meta name="description" content="Learn about Dr. Jan Duffy, Head of Lone Mountain Heights Team at Berkshire Hathaway HomeServices. 30+ years of real estate expertise in northwest Las Vegas." />
        <meta property="og:title" content="About Dr. Jan Duffy | Lone Mountain Vistas" />
        <meta property="og:description" content="Meet Dr. Jan Duffy, your trusted real estate partner in Lone Mountain, Las Vegas." />
        <meta property="og:url" content="https://lonemountainvistas.com/about" />
        <link rel="canonical" href="https://lonemountainvistas.com/about" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#1E6BB8] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">About</span>
        </nav>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            About Dr. Jan Duffy
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            With over 30 years of real estate expertise and a deep commitment to the Lone Mountain community, Dr. Jan Duffy brings unparalleled knowledge and personalized service to every transaction. As Head of the Lone Mountain Heights Team at Berkshire Hathaway HomeServices Nevada Properties, she combines local insight with global resources to help clients achieve their real estate goals.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E6BB8] p-6 my-8 rounded">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Information</h2>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Dr. Jan Duffy</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
                <p className="text-gray-700 mb-2">
                  Head of Lone Mountain Heights Team
                </p>
                <p className="text-gray-700 mb-2">
                  📞 <a href="tel:702-222-1964" className="text-[#1E6BB8] hover:underline">702-222-1964</a>
                </p>
                <p className="text-gray-700">
                  ✉️ <a href="mailto:DrDuffySells@LoneMountainVistas.com" className="text-[#1E6BB8] hover:underline">DrDuffySells@LoneMountainVistas.com</a>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            Experience & Expertise
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Dr. Jan Duffy has built a distinguished career in real estate, specializing in luxury properties and custom homes in northwest Las Vegas. Her extensive experience includes working with buyers and sellers in premier communities like The Estates at Lone Mountain, Lone Mountain Vista V, and other exclusive neighborhoods throughout the Lone Mountain area.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Local Market Knowledge
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Living and working in the Lone Mountain area for decades, Dr. Duffy has an intimate understanding of local market trends, neighborhood characteristics, and property values. This local expertise enables her to provide clients with accurate market assessments, strategic pricing guidance, and insights into the unique attributes of each community.
          </p>

          <h3 className="text-2xl font-semibold text-[#0A2540] mt-8 mb-4">
            Professional Services
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Free market analysis and home valuations</li>
            <li>Personalized home search assistance</li>
            <li>Expert negotiation on your behalf</li>
            <li>Comprehensive property research and due diligence</li>
            <li>Transaction management and coordination</li>
            <li>Post-sale support and referrals</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#0A2540] mt-12 mb-6">
            The Berkshire Hathaway Advantage
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            As part of Berkshire Hathaway HomeServices, one of the most trusted names in real estate, Dr. Duffy has access to extensive resources, marketing tools, and a global network of real estate professionals. This affiliation ensures clients receive top-tier service backed by a brand recognized for integrity, innovation, and results.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Search Homes in Lone Mountain</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <RealScoutAdvancedSearch className="about-search-widget" />
            </div>
          </div>
        </article>

        <section className="office-listings-section mt-12">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6 text-center">Featured Properties</h2>
          <RealScoutOfficeListings />
        </section>
      </main>
    </>
  );
}
