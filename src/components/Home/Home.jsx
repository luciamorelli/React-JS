
import React, {Component} from "react";
import './Home.css';

class Home extends Component{
    render(){
        return(
 <div className="home">
        
    <div className="App__home">
        <div className="App__home-contenedor">
        <img src="./img-home/VINILO2.png" />
        <img src="./img-home/VINILO1.png" />
        <img src="./img-home/VINILO2.png"  />
        </div>

<div className="App__home-textos">
<h1> ENCONTRÁ LOS MEJORES VINILOS </h1>
</div>

<div className="App__home-boton">
<button> VER PRODUCTOS </button>
</div>

<div className="App__home-galeria">
<h2> Nuestros Vinilos </h2>

<div className="App__home-galeria-contenedor">
<img src="./img-home/1.jpg" />
<img src="./img-home/2.jpg" />
<img src="./img-home/3.jpg"  />

</div>
</div>

</div>

  
        </div>



        )
    }
}


export default Home;