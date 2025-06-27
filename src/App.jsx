import './App.css';
import'./components/NombreApellido';
import'./components/DatosPersonales';
import'./components/Estudios';
import './components/CursosRealizados';
import './components/HabilidadesBlandas';
import './components/HabilidadesTecnicas';
import './components/Contacto';
import NombreApellido from './components/NombreApellido';
import DatosPersonales from './components/DatosPersonales';
import Estudios from './components/Estudios';
import CursosRealizados from './components/CursosRealizados';
import HabilidadesBlandas from './components/HabilidadesBlandas';
import HabilidadesTecnicas from './components/HabilidadesTecnicas';
import Contacto from './components/Contacto';


function App(){
  return(
    <div>
      <NombreApellido/>
      <DatosPersonales/>
      <Estudios/>
      <CursosRealizados/>
      <HabilidadesBlandas/>
      <HabilidadesTecnicas/>
      <Contacto/>
    </div>
    
  );
}

export default App;