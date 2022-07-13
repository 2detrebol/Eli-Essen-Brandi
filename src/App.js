import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página en construcción
        </p>
      </header>
    </div>
  );
}

export default App;
