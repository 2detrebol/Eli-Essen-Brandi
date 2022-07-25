import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './router/AppRouter';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }
  return (
    <div className="App">
      <AppRouter />
      <ItemListContainer greeting='Bienvenidos a Eli Essen - Casero & Saludable' />
      <ItemCount stock={8} onAdd={handleOnAdd} />
    </div>

  );
}

export default App;

