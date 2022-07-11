import './App.css';
import { Navbar } from './components/Navbar';
import ItemCount  from './components/ItemCount';

function App() {
  const onAdd = (param) => { console.log('La cantidad comprada es de: ' + param) }
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='header-h3'>MultiBooks</h3>
        <Navbar />
      </header>
      <div>
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default App;

