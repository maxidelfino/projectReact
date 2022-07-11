import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Pages/ItemListContainer';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <header>  
        <nav>
          <NavBar/>
          <Header/>
          <ItemListContainer/>
        </nav>
      </header>
    </>
  );
}

export default App;
