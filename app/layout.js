import * as React from "react";

import './globals.css'
import Script from 'next/script';
import {Providers} from "./providers";

export const metadata = {
  title: 'Woodxel',
  description: 'Blocks Art',
  keywords: ['Pixel', 'Wood', 'Art'],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className='light'>
      <body>
      <head>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLSDKE3GEF"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLSDKE3GEF');
          `}
        </Script>
      </head>
      <body>
        <div id="myAppRoot">
          <Providers>
            {children}            
          </Providers>
          <Script src="woodxel-resources/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
          <Script src="woodxel-resources/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
          <Script src="woodxel-resources/js/owl.carousel.js" strategy="beforeInteractive" />
        </div>
      </body>  
        
      </body>
    </html>
  );
}
