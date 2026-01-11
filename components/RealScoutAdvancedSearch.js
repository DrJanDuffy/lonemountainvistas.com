import { useEffect, useRef } from 'react';

/**
 * RealScout Advanced Search Widget Component
 * Displays an advanced property search widget
 */
export default function RealScoutAdvancedSearch({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
  className = ""
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Create the custom element
      const element = document.createElement('realscout-advanced-search');
      element.setAttribute('agent-encoded-id', agentEncodedId);
      if (className) {
        element.className = className;
      }

      // Clear and append
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(element);
    }
  }, [agentEncodedId, className]);

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
  );
}
