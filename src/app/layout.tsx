import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "CleanNest - Webflow Ecommerce website template",
  description: "CleanNest is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
  openGraph: {
    title: "CleanNest - Webflow Ecommerce website template",
    description: "CleanNest is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6748bfdd5d0dc33607e972f3_Ophen%20GraphCleanNest.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanNest - Webflow Ecommerce website template",
    description: "CleanNest is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6748bfdd5d0dc33607e972f3_Ophen%20GraphCleanNest.webp"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
  generator: "Webflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-wf-domain="cleannest.webflow.io"
      data-wf-page="67318cb9b838c7d9b22e8805"
      data-wf-site="67318cb9b838c7d9b22e8814"
      lang="en"
      className="w-mod-js wf-instrumentsans-n4-active wf-instrumentsans-n5-active wf-instrumentsans-n6-active wf-instrumentsans-n7-active wf-inter-n4-active wf-inter-n5-active wf-inter-n6-active wf-inter-n7-active w-mod-ix wf-montserrat-n5-active wf-montserrat-n7-active wf-montserrat-n9-active wf-montserrat-n2-active wf-montserrat-n1-active wf-montserrat-n4-active wf-montserrat-n3-active wf-montserrat-n8-active wf-montserrat-n6-active wf-montserrat-i8-active wf-montserrat-i7-active wf-montserrat-i3-active wf-montserrat-i6-active wf-montserrat-i2-active wf-montserrat-i5-active wf-montserrat-i9-active wf-montserrat-i1-active wf-montserrat-i4-active wf-active"
    >
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/css/cleannest.webflow.shared.6ce17f684.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInstrument+Sans:regular,500,600,700%7CInter:regular,500,600,700"
          media="all"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Instrument Sans:regular,500,600,700", "Inter:regular,500,600,700"] } });`}
        </Script>
        <Script id="webflow-touch-detection" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
        <Script id="webflow-currency-settings" strategy="beforeInteractive">
          {`window.__WEBFLOW_CURRENCY_SETTINGS = { "currencyCode": "USD", "symbol": "$", "decimal": ".", "fractionDigits": 2, "group": ",", "template": "{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}", "hideDecimalForWholeNumbers": false };`}
        </Script>
      </head>
      <body>
        <div className="page-wrapper">
          <Nav />
          <main className="main-wrapper">
            {children}
          </main>
          <Footer />
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67318cb9b838c7d9b22e8814"
          type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
        <script src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/js/webflow.schunk.0e77e8610c42c2bf.js"
          type="text/javascript"></script>
        <script src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/js/webflow.schunk.da0c470c2b8523bd.js"
          type="text/javascript"></script>
        <script src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/js/webflow.schunk.3646b0bdbfc7a235.js"
          type="text/javascript"></script>
        <script src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/js/webflow.61cc5781.7f156fe885718579.js"
          type="text/javascript"></script>
      </body>
    </html>
  );
}
