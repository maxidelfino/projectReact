import './css/main.css';
import NavBar from './components/Navbar/Navbar';
<<<<<<< HEAD
import ItemListContainer from './containers/ItemListContainer';
=======
import ItemListContainer from './components/Pages/ItemListContainer';
import Header from './components/Header/Header';
>>>>>>> master


function App() {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <ItemListContainer />
=======
      <header>  
        <nav>
          <NavBar/>
          <Header/>
          <ItemListContainer/>
        </nav>
      </header>
>>>>>>> master
    </>
  );
}

export default App;
