import { cartsState } from 'contexts'
import { useTheme } from 'next-themes'
import { FC, Fragment, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CartIcon, MoonIcon, SunIcon } from 'styles/icons'
import tw from 'twin.macro'
import Sidebar from './Sidebar'

const HeaderStyled = tw.header`bg-secondary my-3 rounded justify-between py-5 px-5 flex items-center`
const Navbar = tw.ul`flex space-x-5`
const NavItem = tw.li`font-semibold`

const Header: FC = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const carts = useRecoilValue(cartsState)
  const toggle = () => setOpen(prev => !prev)
  const changeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <Fragment>
      <HeaderStyled>
        <Navbar>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>Login</NavItem>
          <NavItem>Register</NavItem>
        </Navbar>
        <Navbar>
          <button onClick={changeTheme}>
          <SunIcon />
          </button>
          <button tw="flex space-x-2 items-center" onClick={() => carts.length && toggle()}>
            <CartIcon />
            <span>{carts.length}</span>
          </button>
        </Navbar>
      </HeaderStyled>
      <Sidebar open={open} onClose={toggle} />
    </Fragment>
  )
}

export default Header
