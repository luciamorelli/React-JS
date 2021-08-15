
import React, {Component} from "react";
import './BestSeller.css';


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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta blanditiis, modi itaque facilis consequatur nam </p>
            </div>
            
            <div className="App__bestseller-vinilos-dos">
                <h2>Billie Ellish</h2>
                <img src="./img-home/BILLIE.png" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta blanditiis, modi itaque facilis consequatur nam </p>
            </div>

            <div className="App__bestseller-vinilos-tres">
                <h2>Arctic Monkeys</h2>
                <img src="./img-home/ARCTIC.png" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta blanditiis, modi itaque facilis consequatur nam </p>
            </div>
        
        </div>




        </div>


        )
    }
}
export default Bestseller;
