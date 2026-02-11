import React, { useEffect } from 'react';

const ElfsightInstagramWidget = ({ 
  appId = '0ffcf447-d365-4fc8-81b8-b44cbc7d93fd',
  className = '' 
}) => {
  useEffect(() => {
    // Dynamically load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.id = 'elfsight-platform-script';
    
    // Remove existing script if already loaded to prevent duplicates
    const existingScript = document.getElementById('elfsight-platform-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={`elfsight-app-${appId} data-elfsight-app-lazy ${className}`} style={{marginTop:'10px'}}>
      {/* Google Tag Manager noscript fallback - optional */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-T2L7T37B" 
          height="0" 
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="GTM"
        />
      </noscript>
    </div>
  );
};

export default ElfsightInstagramWidget;
