import Script from 'next/script'

export default function PerformanceScripts() {
  return (
    <>
      {/* Preload critical resources */}
      <Script
        id="resource-hints"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Resource hints for better performance
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'font';
            preloadLink.type = 'font/woff2';
            preloadLink.crossOrigin = 'anonymous';
            document.head.appendChild(preloadLink);
          `
        }}
      />
      
      {/* Critical Path CSS optimization */}
      <Script
        id="css-optimization"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Defer non-critical CSS
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
              if (!link.media || link.media === 'all') {
                link.media = 'print';
                link.onload = () => { link.media = 'all'; };
              }
            });
          `
        }}
      />
    </>
  )
}
