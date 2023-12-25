import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="http://fonts.googleapis.com" />
          <link rel="preconnect" href="http://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
