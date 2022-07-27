import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
/*PROBANDO RUTAS*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/NavBar";
import Cacerolas from './components/pages/Cacerolas';
import Sartenes from './components/pages/Sartenes';
import Complementos from './components/pages/Complementos';
import Recetas from './components/pages/Recetas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><ItemListContainer greeting='Bienvenidos a Eli Essen - Casero & Saludable' />
            <ItemCount stock={11} onAdd={handleOnAdd} /></>} />
          <Route path="/Cacerolas" element={<Cacerolas />} />
          <Route path="/Sartenes" element={<Sartenes />} />
          <Route path="/Complementos" element={<Complementos />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

