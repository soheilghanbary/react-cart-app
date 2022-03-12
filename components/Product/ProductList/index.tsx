import { NextPage } from "next";
import ProductItem from "../ProductItem";
import ProductListStyled from "./productList.styled";

type ProductProps = {
    id: number;
    name: string;
    url: string;
    price: number;
}

interface IProductList {
    products: ProductProps[]
}

const ProductList: NextPage<IProductList> = ({ products }) => {
    return (
        <ProductListStyled>
            {products.map(item => (
                <ProductItem key={item.id} product={item} />
            ))}
        </ProductListStyled>
    )
}

export default ProductList