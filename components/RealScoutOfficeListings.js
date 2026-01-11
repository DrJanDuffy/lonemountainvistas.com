import { useEffect, useRef } from 'react';

/**
 * RealScout Office Listings Widget Component
 * Displays office listings with customizable filters
 * Uses custom HTML element with kebab-case attributes
 */
export default function RealScoutOfficeListings({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  priceMin = "400000",
  priceMax = "700000",
  dividerColor = "#0e64c8",
  className = ""
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Create the custom element
      const element = document.createElement('realscout-office-listings');
      element.setAttribute('agent-encoded-id', agentEncodedId);
      element.setAttribute('sort-order', sortOrder);
      element.setAttribute('listing-status', listingStatus);
      element.setAttribute('property-types', propertyTypes);
      element.setAttribute('price-min', priceMin);
      element.setAttribute('price-max', priceMax);
      if (className) {
        element.className = className;
      }
      
      // Set CSS custom property for divider color
      element.style.setProperty('--rs-listing-divider-color', dividerColor);
      element.style.width = '100%';

      // Clear and append
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(element);
    }
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax, dividerColor, className]);

  return (
    <div ref={containerRef} style={{ width: '100%' }} />
  );
}
