import './App.css';
import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <ItemListContainer greeting='Bienvenidos a Eli Essen - Casero & Saludable' />
        <div className="containerLogoImg animate__animated animate__bounceIn animate__delay-1s">
          <img src="img/logo.png" className="App-logo" alt="logo" />
        </div>
        <p className="animate__animated animate__fadeIn animate__delay-2s">
          Página en construcción
        </p>
      </main>
    </div>
  );
}

export default App;
