import Button from "components/Button";
import { NextPage } from "next";
import data from 'data.json'
import ProductList from "components/Product/ProductList";
import { ToastContainer } from "react-toastify";
const Home: NextPage = () => {
  return (
    <div>
      <ProductList products={data} />
      <ToastContainer />
    </div>
  )
}

export default Home;