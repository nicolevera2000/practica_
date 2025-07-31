import React from "react";


export const Saludo_=(props)=>{

   

    return(
        <div>

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