import './css/App.css';
import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <header>  
        <nav>
          <NavBar/>
          <Header/>
          <Main/>
        </nav>
      </header>
    </div>
  );
}

export default App;
