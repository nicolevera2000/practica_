import React from "react";
import  "../estilos/estilo_saludo.css"


export const Saludo_=(props)=>{

   

    return(
        <div class= {props.clase}>
            <img src={"../imagenes/hombre.png"}></img>
            <h2>Esto es Una Practica con {props.nombre}</h2>
            <p>Nombre: {props.nombre} </p>
            <p>Apellido: {props.apellido}</p>
            <p>Edad: {props.edad}</p>
        </div>
    )
}

export const Boton=()=>{
    


        const evento_boton=()=>alert ("Esto es un evento")
         

  return (
    <div>
      <button onClick={evento_boton}>
        De Click Aqui
      </button>
      
    </div>
  );

}