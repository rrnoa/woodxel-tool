// components/Analytics.js

import Script from 'next/script';

const GoogleAnalytics = () => {
  const GA_TRACKING_ID = 'G-CLSDKE3GEF'; // Sustituye con tu ID de Google Analytics

  return (
    <>
      {/* Script Global de Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
