import React, {useState, useEffect} from "react";
import { database } from "../../firebase/firebase";
import Form from "./Form";
import Comentario from "./Comentario";
import './Form.css';
import { Link } from 'react-router-dom';


const Container = () => {
    
    const [comentarios,setComentarios] = useState([]);
    
    const obtenerComentarios = async ()=> {
        let comentariosRemotos = database.collection("formulario");
        let comentariosFetcheados = await comentariosRemotos
        .get()
        .then((query) => 
        query.docs.map((item)=>({...item.data(),id: item.id})));

        setComentarios(comentariosFetcheados);

    };

    useEffect(()=> { //apenas se renderiza llamaa obtener comentarios
        obtenerComentarios();
    }, []);

    const agregarComentario =(nombre,apellido,comentario)=>{
        let comentarioNuevo={
            nombre:nombre,
            comentario: comentario,
            apellido: apellido,
            fecha: new Date ().toString(),
        };
        //conexion a base de datos
        let comentariosRemotos= database.collection("formulario") //devuelve promesa
        comentariosRemotos
        .add(comentarioNuevo) //pasamos objeto
        .then(()=> alert("COMPRA REALIZADA")) //promesa
        .catch((err)=>alert("Error: ", err)) //si hay un error
        .finally(()=>obtenerComentarios()); //luego obtiene los comentarios
    };
   
    
    const borrarTdodos = async () => {
        let comentariosRemotos = database.collection("formulario")
        const query =  await comentariosRemotos.get();
       const batch = database.batch() //libreta
        query.docs.forEach((comentario)=> batch.delete(comentario.ref))
        batch.commit(); //ejecute lo planteado
        obtenerComentarios();
       

    }
  
  
    return (
    
    <div className="container"> 
        <div className="container__form"> 
        <div className="container__titulo">
        <p> Completa los siguientes datos para finalizar la compra: </p>
        </div>
        
        <div className="container__form1">
        <Form agregarComentario= {agregarComentario}/>
        </div>
        <div className="espacio" >

        </div>

        <section className="container__comentarios">
            {comentarios.map((item) => <Comentario data={item} key={item.id}/>)}
        </section>
        <Link to="/">
        <button className="buttonseguir" onClick={ borrarTdodos}> SEGUIR COMPRANDO</button>
        </Link>
    </div>
    </div>

    );

    }



export default Container;