import './css/App.css';
import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <header>  
        <nav>
          <NavBar/>
          <Header/>
          <ItemListContainer/>
        </nav>
      </header>
    </div>
  );
}

export default App;
