import React from "react";
import './Form.css';
///Importamos tanto firebase como la base de datos


const Form = ({ agregarComentario}) => {
  const handleSubmit = (ev) => {
    ///Evitamos el comportamiento default de los forms
    ev.preventDefault();

    ///Capturamos la data del usuario
    let nombre= ev.target.nombre.value;
    let comentario=ev.target.comentario.value;
    let apellido=ev.target.apellido.value;

    agregarComentario(nombre,apellido, comentario);

    ev.target.reset(); //vacia todos los campos
    };

  return (

    <form className="form" onSubmit={handleSubmit}> 
      
      <lebel className="form__nombre">Nombre:</lebel>
      <input  className="form__nombre--input" type="text" placeholder="Tu nombre" id="nombre"/>

      <lebel className="form__apellido">Apellido:</lebel>
      <input  className="form__apellido--input" type="text" placeholder="Tu Apellido" id="apellido"/>


      <lebel className="form__comentario">Aclaraciones:</lebel>
      <textarea className="form__comentario--input" placeholder="Aclaraciones..." id="comentario"/>
      
      <button className="form__button"type="submit">COMPRAR</button>
    
    </form>
  );
};

export default Form;