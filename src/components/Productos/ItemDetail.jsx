import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import { useParams} from 'react-router';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Contador from '../Contador/Contador';
import itemArray from '../../vinilos';


export default function ItemDetail ({item}) {

    const {id} = useParams();
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const addToBasket = () =>{
     
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        item:{
        id: itemArray.id,
        name: itemArray.name,
        price: itemArray.price,
        image: itemArray.image,
        category: itemArray.category,
        description: itemArray.description,
        stock: itemArray.stock,
  
        }      
      })
      alert("Se agrego tu producto al carrito");
    }
  //CardMedia --> Imagen del vinilo
  //CardContent --> Breve descripcion del producto
  //CardAction --> Botones para agregar al carrito  
  return (
    <div className="itemDetail">
      <div className="itemDetail__parte1">

    <img src= {itemArray[id].image} />
  
    
    </div>

    <div className="itemDetail__parte2">
    <h1> {itemArray[id].name} </h1>
    <h3> $ {itemArray[id].price} </h3>
    <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {itemArray[id].category}
            
          </Typography>
        </CardContent>

          <CardContent>
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
    );
  }
  
