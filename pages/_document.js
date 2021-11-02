import Document, { Html, Head, Main, NextScript } from 'next/document'
class TheNiceMusicBlogDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
            {/* <link rel="icon" type="image/svg+xml" href="/focus.svg" />
            <link rel="alternate icon" href="/favicon.ico"></link>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#990000"></link> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}

export default TheNiceMusicBlogDocument;