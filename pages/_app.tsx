import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <div>
  <Top />;
  <Component {...pageProps} />;
  <Footer />;
  </div> )
}

export default MyApp;
