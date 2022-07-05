import './App.css';
import { Navbar } from './components/Navbar';
// import { CartWidget } from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='header-h3'>MultiBooks</h3>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
