import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import { useParams} from 'react-router';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import Contador from '../Contador/Contador';
import ItemList from './ItemList';
import { database} from '../../firebase/firebase';


export default function ItemDetail ({item}) {
    const {id} = useParams();
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
   
    const [expanded, setExpanded] = React.useState(false);

    //const itemArray = database.collection("vinilos");

  //  const selectedItem = itemArray.filter((element)=> element.id == id);
   // console.log(selectedItem);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const [count, setCount] = useState(1);

    const addToBasket = () =>{
      
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        item:{
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        description: item.description,
        stock: item.stock,
        count: item.count,
  
        }      
      })
     // alert("Se agrego tu producto al carrito");
    }

    const result= count * item[id].price ;
 
  return (
    <div className="itemDetail">

      <div className="itemDetail__contenedor">
      
      <div className="itemDetail__parte1">
        <img src= {item[id].image} />
       </div>

    
      <div className="itemDetail__parte2">
        <h1> {item[id].name} </h1>
        
        <CardContent>
          <Typography variant="body2" color="white" component="p">
            {item[id].category}
          </Typography>
        </CardContent>

              
        <h3> $ {item[id].price} cada uno </h3>

        <Typography variant="p" color="btextSecondary" className="itemlist__stock">
            Stock disponible: {item[id].stock} 
         </Typography>
        
          <CardContent className="itemDetail__descripcion">
            <Typography paragraph>Detalle del producto:</Typography>
            <Typography paragraph>
              {item[id].description}
            </Typography>
            
          </CardContent>
          <h3> Total $ {result} </h3>
        <div>
            <Contador stock={item[id].stock} initial={1} count={count} setCount={setCount} />
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
  
