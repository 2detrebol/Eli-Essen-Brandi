import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Recetas from './components/pages/Recetas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './contexto/CartContex';

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
            <Route path="*" element={<div className='container404'>
              <img src="https://i.imgur.com/BirJ9jh.png" className="logo404 animate__animated animate__zoomIn animate__delay-2s" alt="logo" />
              <h3 className='titulo404 animate__animated animate__flipInX animate__delay-3s'> 404 - Página no encontrada </h3>
            </div>} />
          </Routes>
        </BrowserRouter >
      </CartContextProvider>
    </div>
  );
}

export default App;

