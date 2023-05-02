import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Product from './pages/product/Product'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Product />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
