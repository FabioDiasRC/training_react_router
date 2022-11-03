import { Link, Outlet } from "react-router-dom";

function Product() {

  return (
    <>
      <h1>Product</h1>
      <Link to='/about'>About</Link>
    </>
    )
}

export default Product;