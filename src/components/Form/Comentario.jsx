import React from "react";

import './Form.css';

const Comentario =({data:{nombre, comentario,apellido,fecha, id}
})=> { //desestuctura la data
    
    
    return (
    <article className="resultado">
        <h1 className="resultado__t"> GRACIAS POR TU COMPRA! </h1>
        <h2 className="resultado__titulo"> Datos del comprados: {nombre} : </h2>
        <p> Nombre: {nombre} </p>
        <p> Apellido: {apellido} </p>
        <p className="resultado__comentario"> Aclaraciones: {comentario} </p>
        <p>Transaccion realizada el dia: {fecha} </p>

        
    </article>
    
    );
};

export default Comentario;
