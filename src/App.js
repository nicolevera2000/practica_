import logo from './logo.svg';
import { Saludo_, Boton } from './componente/persona';
import './App.css';


function App() {

  return (
    <div className="App">

       <Saludo_ clase="nicole" ubicacion="mujer.png" nombre="Nicolin" apellido="Chavez" edad="25"/>
       <Saludo_ clase="hercules" ubicacion="hombre.png" nombre="Hercules" apellido="Cruz" edad="45"/>
       <Saludo_ clase="alb" ubicacion="hombre.png"nombre="Alberto" apellido="Solis" edad="18"/>
       <Boton/>
      
    </div>
  );
}

export default App;
