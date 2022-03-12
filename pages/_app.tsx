import Layout from 'components/layouts/Layout'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import GlobalStyled from 'styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css';


const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <ThemeProvider attribute="class">
    <GlobalStyled />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  </RecoilRoot>
)

export default App
