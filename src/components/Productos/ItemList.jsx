//Pagina donde se disponen todos los vinilos disponibles
//Material UI
//Imports
import React, { useState } from 'react';
import './ItemList.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from  '../Loading/Loading';


//ItemList recive atributo de ItemListContainer
//Para usar loselementos que vienen del array de item --> item.nombreDelElemento
export default function ItemList ({item}) {
  
  //Loader
 const [loading,setLoading] = useState(false);
 const cambiarEstado = () => {
   setLoading(true);
   setTimeout(()=>{
    setLoading(false);
   },1000);
 }
 

  const [{basket}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  const [expanded, setExpanded] = React.useState(false);



  if(loading){
    return(
      <Loading/>
    )
  }
  else {
return (
  <div className="itemlist">

  <Link to={`/productos/${item.id}`} onClick={()=>cambiarEstado()} >
    
    <Card className="itemlist__1">

      
        <CardContent >
          <Typography variant="h6" color="textSecondary" className="itemlist__titulo">          
        <Link to={`/productos/${item.id}`} onClick={()=>cambiarEstado()}>{item.name}</Link>
          </Typography>
        </CardContent>

      
        <CardHeader 
          action={
            <Typography variant="p" color="btextSecondary">
                ${item.price}
            </Typography>  

          }       
          />
          <Typography variant="p" color="btextSecondary" className="itemlist__stock">
            Stock disponible: {item.stock}
            
          </Typography>

          <CardMedia className="itemlist__imagen">
            <img src={item.image}/>
          </CardMedia>

        <CardContent className="itemlist__categoria">
          <Typography variant="body2" color="textSecondary" component="p">
            {item.category}
          </Typography>
        </CardContent>


    </Card>
    </Link>
    </div>
  );
}}