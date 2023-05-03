import { BsArrowRightShort } from 'react-icons/bs'

import img from '../assets/products.png'
import img1 from '../assets/products1.png'
import img2 from '../assets/products2.png'

const Products = () => {
  return (
    <section>
      <div className="container productContainer">
        <div className="productTitle">
          <h2>popular products</h2>
        </div>
        <div className="productImage">
          <div className="productsImg">
            <img src={img} alt="product" />
            <img src={img1} alt="product one" />
            <img src={img2} alt="product two" />
            <div className="productNext">
              <BsArrowRightShort />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Products
