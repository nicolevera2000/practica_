import logo from './logo.svg';
import { Saludo_, Boton } from './componente/persona';
import './App.css';


function App() {

  return (
    <div className="App">

       <Saludo_ nombre="Nicolin" apellido="Chavez" edad="25"/>
       <Saludo_ nombre="Hercules" apellido="Cruz" edad="45"/>
       <Saludo_ nombre="Alberto" apellido="Solis" edad="18"/>
       <Boton/>
    </div>
  );
}

export default App;
