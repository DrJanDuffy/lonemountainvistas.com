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
    <realscout-simple-search
      agent-encoded-id={agentEncodedId}
      class={className}
    ></realscout-simple-search>
  );
}
