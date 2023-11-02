import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning={true}>
      <Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Head>
    </Html>
  )
}
