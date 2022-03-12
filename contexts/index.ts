import { atom } from "recoil";

type CartType = {
    id: number
    name: string;
    price: number;
    url: string;
    qty: number;
}

const cartsState = atom({
    key: 'carts',
    default: [] as CartType[]
})

export {
    cartsState
}