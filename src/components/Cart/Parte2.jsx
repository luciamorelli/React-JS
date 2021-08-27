import React from 'react';
import { Button } from '@material-ui/core';
import { getBasketTotal } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import { Link } from 'react-router-dom';
import './CheckOut.css';

const Parte2 = ({item}) => {
    
const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  
return (
<div className="parte2__contenedor">
<h5> Total: {5} </h5>
<h5> ${getBasketTotal(basket)}</h5>

<Link to= "/Form">
<Button className="buttoncomprar" variant="contained"  > COMPRAR </Button>
</Link>
</div>
    )
}


export default Parte2;