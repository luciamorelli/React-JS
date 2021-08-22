import React, {useState} from 'react';
import './Contador.css'

export function Contador (props) {
    const [count, setCount] = useState(1);

    const  addProduct = () =>{
        if (count < props.stock){
        setCount(count + 1); //se suma 1 al estado 
        }
    };
    const  restProduct = () =>{
        if (count > props.initial){
        setCount(count - 1); //se resta 1 al estado 
        }
    };
    const reset = ()=> {
        setCount(0); //resetea todo a 1
    }

    return(
        <div className="button_contenedor">
        <div className="button">
      
        <button className="buttonmenos" onClick={restProduct}> - </button> 
        <h2 className="buttontexto"> Vinilos :{count} </h2>
        <button className="buttonmas" onClick={addProduct}> + </button>
        
        </div>
        <button className="buttonborrar"onClick= {reset}> BORRAR CONTADOR</button>  
        
        </div>
    )
}


export default Contador;