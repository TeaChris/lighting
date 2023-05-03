import { BsFillPlayFill } from 'react-icons/bs'

import img1 from '../assets/header1.png'
import img2 from '../assets/header2.png'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        {/* header title */}
        <div className="headerTitle">
          <h1>
            Lighting that makes your
            <br /> home unique
          </h1>
        </div>
        <div className="headerDetails">
          <img src={img1} alt="light lamp" className="img1" />
          <img src={img2} alt="light lamp" />
          <div className="headerText">
            <p>
              Check out and explore more additional lighting for home lighting
              solutions from start to finish
            </p>
            <button className="btn">Explore Now</button>
            <div className="headerIcon">
              <BsFillPlayFill
                style={{
                  fontSize:'1rem',
                  display: 'grid',
                  placeItems: 'center',
                  width: '1.5rem',
                  height: '1.5rem',
                  border: '1px solid #f4511e',
                  borderRadius: '50%',
                }}
              />
              <p>watch now</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
