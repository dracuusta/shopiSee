import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './routes/navbar'
import { Shop } from './pages/shop/shop'
import Product from './pages/product/product'
import { Cart } from './pages/cart/cart'
import { Sidebar } from './routes/sidebar'
import { SignIn } from './routes/signIn'
function App() {

  return (
    <>
    <div className='App'>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/product/:product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
