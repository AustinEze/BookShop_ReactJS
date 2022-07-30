import './App.css';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemsFolder/ItemListContainer'
import ItemDetailContainer from './components/ItemsFolder/ItemDetailContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Categorias from './components/Categorias'
import CartProvider from './components/CartContext'

function App() {
  const onAdd = (param) => { console.log('La cantidad comprada es de: ' + param) }
  
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <header className="App-header">
            <h3 className='header-h3'>MultiBooks</h3>
            <Navbar />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/categoria' element={<Categorias />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
          </Routes>
        </CartProvider>
        

        
      </BrowserRouter>
    </div>
      
      



  );
}

export default App;

