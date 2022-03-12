import Button from 'components/Button'
import { NextPage } from 'next'
import tw from 'twin.macro'
import ProductStyled from './product.styled'
import { useRecoilState } from 'recoil'
import { cartsState } from 'contexts'
import { useEffect } from 'react'
import { ShopIcon } from 'styles/icons'
import { toast } from 'react-toastify'
interface IProductItem {
  product: {
    id: number
    name: string
    url: string
    price: number
  }
}

const ProductItem: NextPage<IProductItem> = ({ product }) => {
  const [carts, setCarts] = useRecoilState(cartsState)
  const addToCart = () => {
    const existCart = carts.find(cart => cart.id === product.id)
    if (existCart) {
      setCarts(
        carts.map(cart =>
          cart.id === product.id ? { ...existCart, qty: existCart.qty + 1 } : cart,
        ),
      )
    } else {
      toast.success('New Cart Added!', {
        theme: 'colored',
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setCarts(prev => [...prev, { ...product, qty: 1 }])
    }
  }

  return (
    <ProductStyled>
      <img tw="w-full" src={product.url} />
      <h2 tw="text-xl font-medium">{product.name}</h2>
      <p tw="font-semibold">${product.price}</p>
      <Button tw="flex items-center space-x-3" onClick={addToCart}>
        <span>Add To Cart</span>
        <ShopIcon />
      </Button>
    </ProductStyled>
  )
}

export default ProductItem
