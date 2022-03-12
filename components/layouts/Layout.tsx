import { FC } from 'react'
import tw from 'twin.macro'
import Header from './Header'

const Container = tw.div`max-w-screen-lg px-5 mx-auto`

const Layout: FC = ({ children }) => {
  return <Container>
      <Header />
      <main>
      {children}
      </main>
  </Container>
}

export default Layout
