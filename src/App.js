import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import Hero from './components/Header/Hero';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <>
      <header>  
        <nav>
          <NavBar/>
          <Hero/>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </nav>
      </header>
    </>
  );
}

export default App;
