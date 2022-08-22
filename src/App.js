import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Recetas from './components/pages/Recetas';
import NoEncontrada from './components/pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './contexto/CartContex';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Categoria/:category" element={<ItemListContainer />} />
            <Route path="/Recetas" element={<Recetas />} />
            <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </BrowserRouter >
      </CartContextProvider>
    </div>
  );
}

export default App;

