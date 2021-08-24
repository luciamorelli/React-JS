
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Productos/ItemListContainer';
import CheckOut from './components/Cart/CheckOut';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from './components/SingIn/SignIn';
import SignUp from './components/SingIn/SignUp';
import {useEffect} from 'react';
import { auth } from './firebase/firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Bestseller from './components/BestSellers/BestSeller';
import Home from './components/Home/Home';
import ItemDetail from './components/Productos/ItemDetail';


function App() {
 
  
const [{user}, dispatch] = useStateValue();

useEffect(()=> {
  auth.onAuthStateChanged((authUser)=> {          //listener para ver si cambio el usuario
console.log(authUser);
if (authUser){
  dispatch({
    type: actionTypes.SET_USER,
    user: authUser,
  })
}

  })

  }, [])



  return (
    <Router>
      <div className="App">


      <div className="App__header">
      <Navbar/>

    
      <Switch>

      <Route path= "/bestseller">
        <Bestseller/>
        </Route>

        <Route path= "/productos/:id">
        <ItemDetail/>
        </Route>
  


      <Route path= "/home">
        <Home/>
        </Route>

        
        <Route path= "/signin">
        <SignIn/>
        </Route>


        <Route path= "/signup">
        <SignUp/>
        </Route>


        <Route path= "/checkout">
        <CheckOut/>
        </Route>
        

        <Route path= "/">
        <ItemListContainer/>
        </Route>
      </Switch>

      </div>
         

    </div>
    
    </Router>
  );
}

export default App;
