import App from 'next/app';
import Page from '../components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ParallaxProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ ParallaxProvider>
    );
  }
}

export default MyApp;
