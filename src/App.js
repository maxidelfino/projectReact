import './css/App.css';
import './css/main.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Pages/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>  
        <nav>
          <NavBar/>
          <ItemListContainer title='Basic' description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente' price={20}/> {/* precio total 100 */}
          <hr/>
          <ItemListContainer title='Standard' description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente' price={30}/> {/* precio total 150 */}
          <hr/>
          <ItemListContainer title='Premium' description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente' price={40}/> {/* precio total 200 */}
        </nav>
      </header>
    </div>
  );
}

export default App;
