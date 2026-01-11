import React from 'react';

/**
 * RealScout Simple Search Widget Component
 * Embeds the RealScout simple search widget with custom styling
 */
export default function RealScoutSimpleSearch({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
  className = ""
}) {
  return (
    <div className={className} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <realscout-simple-search
        agent-encoded-id={agentEncodedId}
        style={{ width: '100%', minHeight: '200px' }}
      ></realscout-simple-search>
    </div>
  );
}
