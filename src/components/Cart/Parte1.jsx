//Pagina donde se disponen todos los vinilos disponibles
//Material UI
//Imports
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStateValue} from '../../StateProvider';
import { actionTypes } from '../../reducer';
import CardContent from '@material-ui/core/CardContent';


//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Parte1({item}) {
  const classes = useStyles();
  const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({  // agarra el elemento por el id y lo elimina
    type: actionTypes.REMOVE_ITEM,
    item:{
      id: item.id,
      name: item.name,
      price: item.price,
      image:item.image,
      category: item.category,
      description: item.description,
      stock: item.stock,
      count: item.count,
      }      

  })
 

return (
    <Card className={classes.root}>
       
       <CardHeader 
          action={
            <Typography variant="p" color="btextSecondary">
                ${item.price}
            </Typography> 
          }
          
          />

        <CardMedia className="itemlist__imagen">
          <img src={item.image}/>
        </CardMedia>

        <CardContent className="itemlist__categoria">
          <Typography variant="body2" color="textSecondary" component="p">
            {item.category}
          </Typography>
        </CardContent>


      <CardActions disableSpacing>  
      <IconButton>
      <DeleteIcon fontSize="large" onClick={removeItem}/>
      </IconButton>
      </CardActions>
    
    </Card>
  );
}