import React from 'react';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';
import {useHistory} from "react-router-dom";



//ESTILOS PARA EL NAVBAR
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket, user}, dispatch]= useStateValue();  //click en el boton del carrito, se ejecuta AddToBasket, y este hace un dispatch del item y lo mete en los datos/ reducer escucha el AddToBasket y cambia el estado anadiendo el item al array  
  const history = useHistory();


  const handleAuth= () =>{
    if (user){
      auth.signOut();
      //informar a firebase signout
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [], //vaciamos el basket
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null, //vaciamos el basket
      });
      history.push("/")

    }
  }
  
  
  return (
    <div >
      <AppBar position="static">
        <Toolbar className="navbar__contenedor">

            <div className="nav__izquierda">
            <ul className="titulo__lista">
           
            <Link to='/'>
                <IconButton edge="start" className="nav__titulo-button">
                  <h1 className="nav__titulo">Vinilos.com</h1>
                </IconButton>
                </Link>
        
              <Link to="/home">  
              <li className="titulo__lista--uno"> Home </li> 
              </Link>

              <Link to="/">
              <li className="titulo__lista--dos"> Productos </li> 
              </Link>

              <Link to="/bestseller">
                <li className="titulo__lista--tres"> Best Sellers </li> 
              </Link>
            </ul>
            </div>
          <div className= "nav__derecha">
                <Typography variant="h6" color="white" component="p">
                Hola {user? user.email:"Guest"} 
                </Typography>

                <div className="navbar__button">
                  <Link to="/signin" >
                   <Button onClick={handleAuth}> 
                   {user?"Sign Out":"Sign In"} </Button>
                  </Link>
                </div>
          
                <Link to='/checkout'>
                <div className="navbar__cart">
                    <IconButton aria-lebel="show cart items" color="inherit">
                        <Badge badgeContent={basket?.length} color= "secondary"> 
                        <ShoppingCart fontSize="large" color="primary"/> 
                        </Badge>
                      </IconButton>
                </div>
                </Link>

            </div>
  


                  
         </Toolbar>
      </AppBar>
    </div>
  );
}
