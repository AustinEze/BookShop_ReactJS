import './App.css';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemsFolder/ItemListContainer'
import ItemDetailContainer from './components/ItemsFolder/ItemDetailContainer'

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
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;

