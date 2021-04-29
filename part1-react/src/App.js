import './App.css';
import Titulo from './Titulo.js'


//Componente simple
const Mensaje = () =>{
  return (
    <p>Hola Mundo</p>
  );
}
const App = () => {
  return (
    <div className="App">
      <Titulo color='red' msg='Este es un mensaje'/>
      <Titulo color='green' msg='Creado a partir'/>
      <Titulo color='yellow' msg='De props personalizados'/>
      <Mensaje /> {/*Esto es componente en uso */}
    </div> 
  );
}

export default App;
