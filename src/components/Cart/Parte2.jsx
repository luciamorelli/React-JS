import React from 'react';
import accounting from 'accounting';
import { Button } from '@material-ui/core';
import { getBasketTotal } from '../../reducer';
import {useStateValue} from '../../StateProvider';


const Parte2 = () => {

    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  
    return (
<div>
<h5> Total items:{basket?.lenght} </h5>
<h5> {accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
<Button  variant="contained"> Check Out</Button>
</div>
    )
}


export default Parte2;