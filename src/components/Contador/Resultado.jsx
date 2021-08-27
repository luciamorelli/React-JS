import React, {useState} from 'react';


export function Resultado (props) {
    const [result, setResult] = useState(1);
    const [count, setCount] = useState(1);

    return(
    <div>
    <h2 className="buttontexto"> Total : {props.result} </h2>
        </div>
    )
}


export default Resultado;