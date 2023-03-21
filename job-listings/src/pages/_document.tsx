import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="icon" href="favicon-32x32.png"/>
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
  )
}
