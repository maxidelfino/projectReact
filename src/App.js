import './css/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import Hero from './components/Header/Hero';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/category' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
