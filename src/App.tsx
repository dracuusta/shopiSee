import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './routes/navbar'
import { Shop } from './pages/shop/shop'
import Product from './pages/product/product'
import { Cart } from './pages/cart/cart'
import { Sidebar } from './routes/sidebar'
function App() {

  return (
    <>
    <div className='App'>
      <Router>
          <Navbar/>
          <Sidebar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
