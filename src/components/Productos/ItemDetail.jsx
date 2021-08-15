import React,{useContext, useState, useRef} from 'react'
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import ItemList from './ItemList';



export default function ItemDetail({itemArray : id, name, category, price, image, description, stock}) {
 
  const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () =>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{
      id: id,
      name: name,
      price: price,
      image:image,
      category: category,
      description: description,
      stock: stock,

      }      
    })

  }  

    const details = ItemList.filter((item, index) =>{
        return item._id === id
    })

    return (
        <>
           {
               details.map(item =>(
                   <div className="details" key={id}>
                       <div className="img-container" >

                       </div>
                       
                       <div className="box-details">
                           <h2 title={name}>{name}</h2>
                           <h3>${price}</h3>
                           <p>{description}</p>
                           <p>{category}</p>
                        
                       </div>

                   </div>
               ))
           }
        </>
    )
}