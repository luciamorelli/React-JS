import React from 'react';
import ItemList from '../../components/Productos/ItemList';
import { useState } from 'react';
import './ItemList.css';
import { database} from '../../firebase/firebase';
import { useEffect } from 'react';
import { useParams} from 'react-router';


// Definimos un  estado donde  guardamos todos los items que vamos a mostrar
const ItemListContainer = (props)=> {

  //Categorias
let {categoryId} = useParams();


  const [vinilosAMostrar,setDisplayItems] = useState([]);

  const obtenerVinilos = ()=> {
 
  let itemArray = database.collection("vinilos");

  if(categoryId){
    itemArray = database.collection("vinilos").where("category", "==", categoryId)
}

  itemArray.get()
  .then((query)=> 
  setDisplayItems(
    query.docs.map(doc => {  //retorna data del objeto y el id
    return{...doc.data(), id: doc.id 
    };
  } ))
  );

 };
 
 useEffect(()=> {
  obtenerVinilos()
},[categoryId]);





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

  