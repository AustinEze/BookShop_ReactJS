import './App.css';
import { Navbar } from './components/Navbar';
// import ItemCount  from './components/ItemsFolder/ItemCount';
// import Item from './components/ItemsFolder/ItemList';
import ItemListContainer from './components/ItemsFolder/ItemListContainer'

function App() {
  const onAdd = (param) => { console.log('La cantidad comprada es de: ' + param) }
  
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='header-h3'>MultiBooks</h3>
        <Navbar />
      </header>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;

