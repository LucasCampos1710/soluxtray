import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'
import * as gtag from '../lib/gtag'

import 'tailwindcss/tailwind.css'
import './styles/global.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', pageview)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', pageview)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <!-- Google Tag Manager --> */ }
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={ {
          __html: `
        (function(w,d,s,l,i){ w[l] = w[l] || [];w[l].push({ 'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `,
        } }
      />
      {/* <!-- End Google Tag Manager --> */ }

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */ }
      <Script
        strategy="afterInteractive"
        src={ `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}` }
      />
      <Script
        id="gatg-init"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={ {
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
          `,
        } }
      />
      <Component { ...pageProps } />
    </>
  )
}

export default MyApp
