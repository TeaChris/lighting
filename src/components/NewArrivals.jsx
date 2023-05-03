import { BsArrowRightShort } from 'react-icons/bs'

import img from '../assets/new1.png'
import img1 from '../assets/new2.png'
import img2 from '../assets/new3.png'

const NewArrivals = () => {
  return (
    <section>
      <div className="container newContainer">
        <div className="newTitle">
          <h2>New Arrivals</h2>
        </div>
        <div className="newImage">
          <div className="newImg">
            <img src={img} alt="product" />
            <img src={img1} alt="product one" />
            <img src={img2} alt="product two" />
          </div>
          <div className="newSee">
            <p>See all</p>
            <BsArrowRightShort
              style={{ color: '#f4511e', fontSize: '1.3rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default NewArrivals
