import { NavLink, Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
// import { GrClose } from 'react-icons/gr'
import { navLinks } from '../../data'
import { useState, useEffect } from 'react'

import './navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarStyle = {
    backgroundColor: isScrolled ? '#000' : 'transparent',
    transition: 'background-color 0.5s ease',
    // other styles...
  }
  return (
    <nav style={navbarStyle}>
      <div className="container navContainer">
        <Link to="/" className="logo">
          <h2>Lighting</h2>
        </Link>
        {/* links */}
        <ul className={`nav_links ${isShowing ? 'showNav' : 'hideNav'}`}>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.href} className="" style={{ color: '#fff' }}>
                  {link.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="cart">
          <AiOutlineShoppingCart style={{ fontSize: '1.2rem' }} />
        </div>
        <button
          className="navBtn"
          onClick={() => setIsShowing((prev) => !prev)}
        >
          {isShowing ? (
            <AiOutlineMenu style={{ color: '#fff' }} />
          ) : (
            <AiOutlineMenu style={{ color: '#fff' }} />
          )}
        </button>
      </div>
    </nav>
  )
}
export default Navbar
