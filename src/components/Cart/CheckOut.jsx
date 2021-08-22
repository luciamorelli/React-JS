import React from 'react';
import { makeStyles } from '@material-ui/core'; 
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Parte1 from './Parte1';
import Parte2 from './Parte2';
import {useStateValue} from '../../StateProvider';
import itemArray from '../../vinilos';

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckOut = () => {
    const classes = useStyles ();
    const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  
    function FormRow(){ //solo retorna en la pagina checkOut lo agregado al carrito
        return(
            <React.Fragment>
                {basket?.map((item) =>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Parte1 key={item.id} item={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return(
        <div>
            <Grid container spacing ={3}>
                <Grid item  xs={12}>
                    <Typography align="center" gutterBottom varian= 'h1'>
                        Shopping Cart
                    </Typography>
                </Grid>
            
                <Grid item  xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                
                <Grid item  xs={12} sm={4} md={3}>
                    <Typography align="center" gutterBottom variant="h4">
                       <Parte2/>
                    </Typography>
                </Grid>
            
            </Grid>
        </div>
    )

}

export default CheckOut;