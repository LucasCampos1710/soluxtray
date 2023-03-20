import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'
import * as gtag from '../lib/gtag'
import * as fbq from '../lib/fpixel'

import 'tailwindcss/tailwind.css'
import './styles/global.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)

      fbq.pageview()

      const handleRouteChange = () => {
        fbq.pageview()
      }
    }
    router.events.on('routeChangeComplete', pageview, handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', pageview, handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
     {/* Meta Pixel Code */}
      <script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){ n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${fbq.FB_PIXEL_ID});
        fbq('track', 'PageView');
      </script>
     
        {/* End Meta Pixel Code */}
          `
        }}
      />
       
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
        async src={ `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}` }
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
      <Analytics />
    </>
  )
}

export default MyApp
