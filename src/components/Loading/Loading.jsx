import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css';

function Loading(){
    return(
        <div className="Loader">
            <div className="Loader__contenedor">
            <Spinner type="grow" color="success"  />
            </div> 
        </div>
    )
};


export default Loading;

