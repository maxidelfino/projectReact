import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import Hero from './components/Header/Hero';


function App() {
  return (
    <>
      <header>  
        <nav>
          <NavBar/>
          <Hero/>
          <ItemListContainer/>
        </nav>
      </header>
    </>
  );
}

export default App;
