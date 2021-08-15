//Pagina donde se disponen todos los vinilos disponibles
//Material UI
//Imports
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';
import accounting from 'accounting';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import {Link} from 'react-router-dom';
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

export default function ItemList ({itemArray : id, name, category, price, image, description, stock}) {
  const classes = useStyles();
  const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () =>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{
      id: id,
      name: name,
      price: price,
      image:image,
      category: category,
      description: description,
      stock: stock,

      }      
    })

  }
//CardMedia --> Imagen del vinilo
//CardContent --> Breve descripcion del producto
//CardAction --> Botones para agregar al carrito  
return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography variant="h4" color="btextSecondary">
              {accounting.formatMoney (price, "$")}
          </Typography> 
        }
        
        title={name}
        />
      
      <CardContent>
        <Typography variant="h3" color="textSecondary">
      {name}                      
      <Link to={`/productos/${id}`}>{name}</Link>
        </Typography>
      </CardContent>


        
      <CardMedia
        image={image}
        title={name}>

      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {category}
        </Typography>
      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket} >
          <AddShoppingCart fontSize="large"/>
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalle del producto:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
