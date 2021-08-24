import React, {useState} from 'react';
import './Contador.css'

export function Contador (props) {
    const [count, setCount] = useState(1);

    const  addProduct = () =>{
        if (props.count < props.stock){
        props.setCount(props.count + 1); //se suma 1 al estado 
        }
    };
    const  restProduct = () =>{
        if (props.count > props.initial){
            props.setCount(props.count - 1); //se resta 1 al estado 
        }
    };
    const reset = ()=> {
        props.setCount(1); //resetea todo a 1
    }

    return(
        <div className="button_contenedor">
        <div className="button">
      
        <button className="buttonmenos" onClick={restProduct}> - </button> 
        <h2 className="buttontexto"> Cantidad : {props.count} </h2>
        <button className="buttonmas" onClick={addProduct}> + </button>
        
        </div>
        <button className="buttonborrar"onClick= {reset}> BORRAR CONTADOR</button>  
        
        </div>
    )
}


export default Contador;