import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { withApollo } from '../components/WithApolloClient'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default withApollo({ ssr: true })(MyApp)
