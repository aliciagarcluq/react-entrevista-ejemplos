import React from "react";
const Padre = () => {

  return (
    <div>
      <h1>Ejemplo: Padre a Hijo</h1>
      <Hijo nombre = "Juan"/>
    </div>
  )
}

const Hijo = (props) => {
  return (
    <div>Nombre del hijo: {props.nombre}</div>
  )
}

export default Padre;
