import { useEffect } from 'react';

/**
 * RealScout Widget Component for Next.js
 * Embeds RealScout property search widgets on any page
 * 
 * @param {Object} props
 * @param {string} props.agentId - RealScout agent encoded ID
 * @param {string} props.searchType - Type of search: 'simple', 'advanced', 'home-value', 'your-listings', 'office-listings'
 * @param {string} props.defaultLocation - Default location filter (e.g., "Lone Mountain, Las Vegas, NV")
 * @param {string} props.primaryColor - Primary color hex code (e.g., "#1a365d")
 * @param {string} props.className - Additional CSS classes
 */
export default function RealScoutWidget({
  agentId = "QWdlbnQtMjI1MDUw", // Default agent ID from realscout-config.js
  searchType = 'advanced',
  defaultLocation = 'Lone Mountain, Las Vegas, NV 89129',
  primaryColor = '#1a365d',
  className = '',
  ...props
}) {
  useEffect(() => {
    // Ensure the script is loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="em.realscout.com/widgets"]')) {
      const script = document.createElement('script');
      script.src = `https://em.realscout.com/widgets/${agentId}.js`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [agentId]);

  // Determine the widget class name based on search type
  const widgetClass = 
    searchType === 'home-value' ? 'realscout-home-value' :
    searchType === 'your-listings' ? 'realscout-your-listings' :
    searchType === 'office-listings' ? 'realscout-office-listings' :
    'realscout-search';

  return (
    <div
      className={`${widgetClass} ${className}`}
      data-agent-encoded-id={agentId}
      data-search-type={searchType !== 'home-value' && searchType !== 'your-listings' && searchType !== 'office-listings' ? searchType : undefined}
      data-primary-color={primaryColor}
      data-default-location={defaultLocation}
      {...props}
    />
  );
}
