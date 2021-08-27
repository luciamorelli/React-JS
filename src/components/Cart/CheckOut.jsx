import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Parte1 from './Parte1';
import Parte2 from './Parte2';
import {useStateValue} from '../../StateProvider';
import './CheckOut.css';


const CheckOut = () => {
    
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  
    function FormRow(){ //solo retorna en la pagina checkOut lo agregado al carrito
        return(
            <React.Fragment>
                {basket?.map((item) =>(
                    <Grid className="itembasket" item xs={12} sm={8} md={6} lg={4}>
                        <Parte1 key={item} item={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }


    return(
        <div className="checkout">
            <Grid className="checkout__contenedor" container spacing ={3}>
               
               
                <Grid className="checkout__contenedor--titulo" item  xs={12}>
                    <Typography align="center" gutterBottom varian= 'h1'>
                        Shopping Cart
                    </Typography>
                </Grid>
            <div className="checkout__contenedor--columnas">
                <Grid  className="checkout__contenedor--derecha"item  xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                
                <Grid  className="checkout__contenedor--izquierda"item  xs={12} sm={4} md={3}>
                    
                    <div className="checkout__contenedor--total">
                    <Typography align="center" gutterBottom variant="h4">
                       <Parte2/>
                    </Typography>
                    </div>
                    <div className="checkout__contenedor--espacio">

                    </div>
                </Grid>
            </div>
            </Grid>
        </div>
    )

}

export default CheckOut;