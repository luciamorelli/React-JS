
import React, {Component} from "react";
import './BestSeller.css';
import { Link } from 'react-router-dom';


class Bestseller extends Component{
    render(){
        return(
        <div className="App__bestseller">
            <div className="App__bestseller-titulo">
                <h1>Nuestros Best Sellers</h1>
            </div>

        <div className="App__bestseller-vinilos">
            <div className="App__bestseller-vinilos-uno">
                <h2>Harry Styles</h2>
                <img src="./img-home/HARRY.png" />
                <Link to="/productos/TmYERdIxiCuO8cc0ZTdf">
                <button>COMPRAR</button>
                </Link>
                <p>Fine Line es un disco que habla sobre todo lo que rodea a las relaciones amorosas, desde el deseo hasta el arrepentimiento. Son las memorias de la vida amorosa de Harry Styles, un diario sobre todas sus experiencias y recuerdos.</p>
               
            </div>
            
            <div className="App__bestseller-vinilos-dos">
                <h2>Billie Ellish</h2>
                <img src="./img-home/BILLIE.png" />
                <Link to="/productos/yQc2NeW2EVawN4H6eWH6">
                <button>COMPRAR</button>
                </Link>
                <p>Happier Than Ever es el segundo álbum de estudio de la cantautora estadounidense Billie Eilish, cuyo lanzamiento tuvo lugar el 30 de julio de 2021. Sirve como continuación de When We All Fall Asleep, Where Do We Go? (2019). Eilish coescribió el álbum con su productor y hermano Finneas O'Connell .</p>
                
            </div>

            <div className="App__bestseller-vinilos-tres">
                <h2>Arctic Monkeys</h2>
                <img src="./img-home/ARCTIC.png" />
                <Link to="/productos/VY5GiQxt4rEjI25BKuOL">
                <button>COMPRAR</button>
                </Link>
                <p>“AM” es el quinto disco en estudio de los británicos Arctic Monkeys, un álbum con influencias blues rock, hard rock, funk, glam rock y textos en torno a ansias y dependencias sexuales-amorosas y/o correrías nocturnas varias. </p>
                
            </div>
        
        </div>




        </div>


        )
    }
}
export default Bestseller;
