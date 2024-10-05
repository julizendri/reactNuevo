import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Pages/Home';
import { Productos } from './Pages/Productos';
import { CategoriasProductos } from './Pages/CategoriasProductos';
import { DetalleProductos } from './Pages/DetalleProductos';
import { Cart } from './Pages/Cart';
import { Checkout } from './Pages/Checkout';
import { Error } from './Pages/Error';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <header>
                        <NavBar />
                    </header>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='productos' element={<Productos />} />
                        <Route path='productos/:categoriaId' element={<CategoriasProductos />} />
                        <Route path='productos/:categoriaId/:id' element={<DetalleProductos />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='checkout' element={<Checkout />} />
                        <Route path='*' element={<Error />}></Route>
                    </Routes>
                    <footer>
                        <Footer />
                    </footer>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;