import logo from './img/logo.png';
import './App.css';
import Navbar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
