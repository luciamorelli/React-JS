import React from 'react';
import ItemList from '../../components/Productos/ItemList';
import { useState } from 'react';
import './ItemList.css';
import { database} from '../../firebase/firebase';


// Definimos un  estado donde  guardamos todos los items que vamos a mostrar
const ItemListContainer = (props)=> {
  const [vinilosAMostrar,setDisplayItems] = useState([]);

  const obtenerVinilos = ()=> {
  const itemArray = database.collection("vinilos");
  itemArray.get()
  .then((query)=> 
  setDisplayItems(
    query.docs.map(doc => {  //retorna data del objeto y el id
    return{...doc.data(), id: doc.id 
    };
  } ))
  );
 };
 



// PROMESA
//Despues de un tiempo (2 segundos) muestran los productos en el array
const getItems = () => {
return new Promise ((resolve, reject)=> {
  setTimeout ( ()=> {resolve(obtenerVinilos);}, 2000); 
 // llamo al array       
  } 
  );  
};

//Llamo para que la promesa funcione y el .then es para cuando termine y se ejecute me devuelve lo indicado
getItems()
.then( (result) => {setDisplayItems(result)},
(err) => {console.log("Error: " + err)}
);

//Catch para cuando no se cumpla la promesa y agarre el error
//Mapeo y paso como atributo item donde ItemList lo recibe
return (
  <div className="itemlistcontainer__contenedor">
    <div className="itemlistcontainer__contenedor1">
      {vinilosAMostrar?(
      vinilosAMostrar.map
      ((item)=>(
              <div className="itemlistcontainer"> 
              <ItemList className="itemlistcontainer__item" item={item}/>
              </div>
      )) 
      ) : (
        <h3> Cargando productos ...</h3>
      )
      }
  </div>
  </div>
);
    }
export default ItemListContainer;

  