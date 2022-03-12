import Button from 'components/Button'
import { cartsState } from 'contexts'
import { FC } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { MinusIcon, PlusIcon } from 'styles/icons'
import tw, { styled, css } from 'twin.macro'

interface ISidebar {
  open: Boolean
  onClose: any
}

const SidebarStyled = styled.div(({ open }: { open: Boolean }) => [
  tw`flex flex-col space-y-3 p-5`,
  css`
    width: 340px;
    height: 100%;
    position: fixed;
    right: -100%;
    top: 0;
    transition: 350ms;
    background-color: var(--bg-secondary);
  `,
  open &&
    css`
      right: 0;
    `,
])

const Overlay = styled.div(({ open }: { open?: Boolean }) => [
  css`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 350ms;
    display: none;
  `,
  open &&
    css`
      opacity: 1;
      display: block;
    `,
])

const Sidebar: FC<ISidebar> = ({ open, onClose }) => {
  const [carts, setCarts] = useRecoilState(cartsState)

  const totalPrice = carts.reduce((a, item: any) => a + item.price * item.qty, 0)

  const incrementQty = (id: number) => {
    setCarts(
      carts.map(cart => {
        return cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart
      }),
    )
  }

  const decrementQty = (id: number) => {
    const existCart = carts.find(x => x.id === id)
    if (existCart?.qty === 1) {
      setCarts(carts.filter(x => x.id !== id))
      return toast.info('Cart Removed!', {
        theme: 'colored',
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      return setCarts(
        carts.map(cart => {
          return cart.id === id ? { ...cart, qty: cart.qty - 1 } : cart
        }),
      )
    }
  }

  const checkout = () => console.log(`your buy price is: ${totalPrice}`)

  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SidebarStyled open={open}>
        {carts.map(cart => (
          <div tw="flex space-x-5">
            <img tw="w-24 h-24" src={cart.url} />
            <div tw="flex space-y-1 flex-col">
              <h2 tw="text-base">{cart.name}</h2>
              <h2 tw="text-sm font-semibold">${cart.price}</h2>
              <div tw="flex justify-center space-x-3 items-center">
                <button
                  onClick={() => incrementQty(cart.id)}
                  tw="px-3 py-2 text-lg bg-gray-100 dark:bg-primary rounded"
                >
                  <PlusIcon />
                </button>
                <div>{cart.qty}</div>
                <button
                  onClick={() => decrementQty(cart.id)}
                  tw="px-3 py-2 text-lg bg-gray-100 dark:bg-primary rounded"
                >
                  <MinusIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2 tw="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
        <Button onClick={checkout}>Checkout</Button>
      </SidebarStyled>
    </>
  )
}

export default Sidebar
