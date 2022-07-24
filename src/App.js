import './App.css';
import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import { BrowserRouter, Routes, Route } from 'react-router-dom';*/

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    /*<BrowserRouter>*/
    <div className="App">

      <Navbar />
      <ItemListContainer greeting='Bienvenidos a Eli Essen - Casero & Saludable' />
      <ItemCount stock={8} onAdd={handleOnAdd} />

    </div>
    /*</BrowserRouter >*/
  );
}

export default App;

