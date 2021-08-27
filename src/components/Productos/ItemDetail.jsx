import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import { useParams} from 'react-router';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import Contador from '../Contador/Contador';
import { database} from '../../firebase/firebase';
import { Link } from 'react-router-dom';


export default function ItemDetail () {
    const {id} = useParams();
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
   
    const [expanded, setExpanded] = React.useState(false);
    const [item, setItem] = useState([]);

    const getItem= () => {
      return database.collection("vinilos");
    }
    useEffect(()=>{
      getItem().get()
      .then((product)=>
      setItem({...product.docs.find((item)=> item.id === id).data()}))
      ;
    });
   
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const [count, setCount] = useState(1);
   ;
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
        count: count,
        result: count * item.price,
  
        }      
      })
     // alert("Se agrego tu producto al carrito");
    }

    const result= count * item.price ;
 
  return (
    <div className="itemDetail">

      <div className="itemDetail__contenedor">
      
      <div className="itemDetail__parte1">
        <img src= {item.image} />
       </div>

    
      <div className="itemDetail__parte2">
        <h1> {item.name} </h1>
        
        <CardContent>
          <Typography variant="body2" color="white" component="p">
            {item.category}
          </Typography>
        </CardContent>

              
        <h3> $ {item.price} cada uno </h3>

        <Typography variant="p" color="btextSecondary" className="itemlist__stock">
            Stock disponible: {item.stock} 
         </Typography>
        
          <CardContent className="itemDetail__descripcion">
            <Typography paragraph>Detalle del producto:</Typography>
            <Typography paragraph>
              {item.description}
            </Typography>
            
          </CardContent>
          <h3> Total $ {result} </h3>
        <div>
            <Contador stock={item.stock} initial={1} count={count} setCount={setCount} />
        </div>

        <div className="buttonagregar">
          <button onClick={addToBasket} >
              AGRAGAR AL CARRITO
          </button>
          </div>
          <Link to="/productos">
          <div className="buttonagregarmas">
          <button >
              AGREGAR MÁS PRODUCTOS
          </button>
          </div>
          </Link>
    </div>
    </div>
      </div>
    );
  }
  