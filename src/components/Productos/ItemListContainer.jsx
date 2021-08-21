import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemList from '../../components/Productos/ItemList';
import { useState } from 'react';
import './ItemList.css'



//ESTILOS ITEM LIST CONTAINER
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));


// Definimos un  estado donde  guardamos todos los items que vamos a mostrar
const ItemListContainer = (props)=> {
  const [conjuntoItems, setDisplayItems] =useState([]); //se guardan dentro de este array vacio

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


// PROMESA
//Despues de un tiempo (2 segundos) muestran los productos en el array
const getItems = () => {
return new Promise ((resolve, reject)=> {
  setTimeout ( ()=> {resolve(itemArray);}, 2000); 
 // llamo al array       
  } 
  );  
};

//Llamo para que la promesa funcione y el .then es para cuando termine y se ejecute me devuelve lo indicado
getItems()
.then( (result) => {setDisplayItems(result)},
(err) => {console.log("Error: " + err)}
);

//Catch para cuando no se cumpla la promesa y agarre el error
//Mapeo y paso como atributo item donde ItemList lo recibe
return (
  <div>
    <Grid container spacing={3}>
      { 
      conjuntoItems.map
      (item =>(
              <Grid className="itemlistcontainer" item xs={12} sm={6} md={4} lg={3}> 
              <ItemList item={item}/>
              </Grid>
      ))
      }
  </Grid>
  </div>
);
    }
export default ItemListContainer;

  