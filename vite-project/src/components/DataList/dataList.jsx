import React, { useEffect } from "react";
import { useState } from "react";

export function FetchingData() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/datos")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setDatos(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid">
      {datos.map((dataClean, index) => (
        <div className="cell has-background-black-bis box " key={index}>
          <h1 className="title">{dataClean.Nombre.toUpperCase()}</h1>
          <p>{dataClean.Categoria}</p>
          <p>{dataClean.Dimension}</p>
        </div>
      ))}
    </div>
  );
}
