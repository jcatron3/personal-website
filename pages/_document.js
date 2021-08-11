import Document, { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Jake Catron'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Jake Catron's personal development website."
          />
          <meta name="title" content={siteTitle} />
          <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="../public/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument