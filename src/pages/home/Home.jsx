import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import NewArrivals from '../../components/NewArrivals'
import Products from '../../components/Products'
import UniqueLight from '../../components/UniqueLight'
import './home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <UniqueLight />
      <NewArrivals />
      <Hero />
      <Footer />
    </>
  )
}
export default Home
