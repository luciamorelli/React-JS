import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemList from '../../components/Productos/ItemList';
import { useState } from 'react';



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
    id: 1,
    name: "Vinilo Billie Elish",
    category: "Pop",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Happier than Ever",
    stock: 2,
},

{
    id: 2,
    name: "Vinilo Harry Styles",
    category: "Pop",
    price: 1000,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Harry",
    stock: 2,
},


{
    id: 3,
    name: "Vinilo Arctic Monkeys",
    category: "Rock",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Arctic Monkeys",
    stock: 2,
},

{
    id: 4,
    name: "Vinilo Queen",
    category: "Pop",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Happier than Ever",
    stock: 2,
},

{
    id: 5,
    name: "Vinilo Selena Gomez",
    category: "Pop",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Harry",
    stock: 2,
},


{
    id: 6,
    name: "Vinilo ABBA",
    category: "Rock",
    price: 50,
    image: "https://http2.mlstatic.com/D_NQ_NP_693818-MLA47051080806_082021-O.webp",
    description: "Disco de musica en formato Vinilo sobre el album Arctic Monkeys",
    stock: 2,
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

return (
  <div>
    <Grid container spacing={3}>
      { 
      conjuntoItems.map
      (item =>(
              <Grid item xs={12} sm={6} md={4} lg={3}> 
              <ItemList item={item} key= {item.id} title= {item.title} image= {item.image} price= {item.price} category={item.category} description={item.description}  stock={item.stock}/>
              </Grid>
      ))
      }
  </Grid>
  </div>
);
    }
export default ItemListContainer;

  