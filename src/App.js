import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cervezas from './pages/Cervezas'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Events from './pages/Events'
import ProductsListContainer from './components/ProductsListContainer/ProductsListContainer'
import Cart from './pages/Cart'
import ThemeProvider from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    //JSX
    <div className="App">
      <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Cervezas' element={<Cervezas />}/>
            <Route path='/Events' element={<Events />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/product/:id' element={<Detail />}/>
            <Route path='/products/:categoryId' element={<ProductsListContainer />}/>
            <Route path='*' element={<h1>Página no encontrada</h1>}/>
            <Route path='/Cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
