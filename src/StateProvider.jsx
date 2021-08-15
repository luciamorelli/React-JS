import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Creamos la capa que recopila todos los datos, un contexto

export const StateProvider = ({ reducer, initialState, children}) => ( //StateProvider brinda las herramientas para pasar la info de un componente a otro 
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); // StateValue permite consumir desde cualquier componente los cambios de estado de  InicialState