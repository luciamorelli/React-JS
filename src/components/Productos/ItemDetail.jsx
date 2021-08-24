import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import { useParams} from 'react-router';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import Contador from '../Contador/Contador';
import itemArray from '../../vinilos';


export default function ItemDetail ({item}) {
    const {id} = useParams();
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const selectedItem = itemArray.filter((element)=> element.id == id);
      console.log(selectedItem);

    const addToBasket = () =>{
      
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        selectedItem:{
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        image: selectedItem.image,
        category: selectedItem.category,
        description: selectedItem.description,
        stock: selectedItem.stock,
  
        }      
      })
     // alert("Se agrego tu producto al carrito");
    }

    
    
  return (
    <div className="itemDetail">

      <div className="itemDetail__contenedor">
      
      <div className="itemDetail__parte1">
        <img src= {itemArray[id].image} />
       </div>

    
      <div className="itemDetail__parte2">
        <h1> {itemArray[id].name} </h1>
        
        <CardContent>
          <Typography variant="body2" color="white" component="p">
            {itemArray[id].category}
          </Typography>
        </CardContent>

              
        <h3> $ {itemArray[id].price}  </h3>

        <Typography variant="p" color="btextSecondary" className="itemlist__stock">
            Stock disponible: {itemArray[id].stock} 
         </Typography>
        
          <CardContent className="itemDetail__descripcion">
            <Typography paragraph>Detalle del producto:</Typography>
            <Typography paragraph>
              {itemArray[id].description}
            </Typography>
            
          </CardContent>
     
        <div>
            <Contador stock={itemArray[id].stock} initial={1}/>
        </div>

        <div className="buttonagregar">
          <button onClick={addToBasket} >
              AGRAGAR AL CARRITO
          </button>
          </div>

    </div>
    </div>
      </div>
    );
  }
  
