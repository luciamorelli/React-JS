import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import {useStateValue} from '../../StateProvider';
import { Link } from 'react-router-dom';
import './CheckOut.css';

const Parte2 = ({item}) => {
    
const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  const [total, setTotal] = useState(0)

  useEffect(()=>{
      let finalPrice = 0
      basket.forEach(item =>{
          finalPrice += item.price * item.count
      });
      setTotal(finalPrice)
  },[basket])

return (
<div className="parte2__contenedor">
<h5> Total compra:$ {total} </h5>

<Link to= "/Form">
<Button className="buttoncomprar" variant="contained"  > COMPRAR </Button>
</Link>
</div>
    )
}


export default Parte2;