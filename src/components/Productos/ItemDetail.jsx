import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import { useParams} from 'react-router';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Contador from '../Contador/Contador';
import itemArray from '../../vinilos';
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
  


export default function ItemDetail ({item}) {

    const {id} = useParams();



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
  






/*
const ItemDetail = () =>{

    const {id} = useParams();
  
//ITEMS ARRAY
const itemArray = [
    { 
      id: 0,
      name: "Vinilo Billie Elish",
      category: "Pop",
      price: 8000,
      image: "https://images-na.ssl-images-amazon.com/images/I/71laVfWEkCS._SL1400_.jpg",
      description: "Disco de musica en formato Vinilo sobre el album Happier than Ever",
      stock: 10,
  },
  
  {
      id: 1,
      name: "Vinilo Harry Styles",
      category: "Pop",
      price: 7500,
      image: "https://http2.mlstatic.com/D_NQ_NP_832207-MLA40089208872_122019-O.jpg",
      description: "Disco de musica en formato Vinilo sobre el album Watermelon Sugar",
      stock: 12,
  },
  
  
  {
      id: 2,
      name: "Vinilo Arctic Monkeys",
      category: "Rock",
      price: 5000,
      image: "https://contentv2.tap-commerce.com/cover/large/887828031719_1.jpg?id_com=1156",
      description: "Disco de musica en formato Vinilo sobre el album AM",
      stock: 14,
  },
  
  {
      id: 3,
      name: "Vinilo Queen",
      category: "Pop",
      price: 10000,
      image: "https://images-na.ssl-images-amazon.com/images/I/81vuN2n%2BvAL._SL1500_.jpg",
      description: "Disco de musica en formato Vinilo sobre el album Queen Deluxe",
      stock: 10,
  },
  
  {
      id: 4,
      name: "Vinilo Selena Gomez",
      category: "Pop",
      price: 7000,
      image: "https://images-na.ssl-images-amazon.com/images/I/51EsAJa3qsL._AC_SL1200_.jpg",
      description: "Disco de musica en formato Vinilo sobre el album Rare",
      stock: 12,
  },
  
  
  {
      id: 5,
      name: "Vinilo ABBA",
      category: "Pop",
      price: 6500,
      image: "https://falabella.scene7.com/is/image/Falabella/4746928_1?wid=800&hei=800&qlt=70",
      description: "Disco de musica en formato Vinilo sobre el album ABBA Gold",
      stock: 20,
  }
  
  ];


return (
<div className="ItemDetail">
<h1> {itemArray[id].name} </h1>
<p> {itemArray[id].price} </p>
<img src= {itemArray[id].image} />
</div>
)


};

export default ItemDetail;

*/