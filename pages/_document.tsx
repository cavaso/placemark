import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <!-- Google Tag Manager --> */}
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MKPS6FX5');</script>
          {/* <!-- End Google Tag Manager --> */}
          <meta name="application-name" content="Placemark" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://api.mapbox.com/" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {/* eslint-disable-next-line */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
          {/* <!-- Hotjar Tracking Code for Instant GIS --> */}
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5012147,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>

        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKPS6FX5"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
