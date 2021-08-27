
export const initialState = {
    basket: [], //array vacio
    user:null,
}

export const actionTypes = { 
    ADD_TO_BASKET: "ADD_TO_BASKET", //escucha esta accion
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET", 
};


const reducer = (state, action) => { //cuando hagamos el dispatch de ejecuta la accion cuando ocurre el addtoBasket
    console.log(action);
    switch(action.type){
        
        case "ADD_TO_BASKET": //ejecute esta accion
//IsInCart agarra del estado al item seleccionado, si se encuentra ahi, sino queda en undefined
        const isInCart = state && state.basket.filter((i)=> i.id === action.item.id)

        //Elimino el item actual en el carrito filtrandolo y agragarlo el nuevo item 
        const nuevoBasket = state.basket.filter((el)=>{return el.id !== action.item.id})
        console.log('nuevo item',nuevoBasket)
        if (isInCart) {
            return{
                ...state,
                basket:[...nuevoBasket, action.item]
            }
        }else{

        return{ 
        ...state, //retonar lo que esta dentro del basket mas lo agregado en la accion
        basket:[...state.basket, action.item],
        }
    };
    case "REMOVE_ITEM":
        //desaparece solo el producto clickeado no importa si es el mismo id
     const index = state.basket.findIndex((basketItem => basketItem.id === action.item.id)) //definimos un indice que es el que va a estar dentro del array
        //un basketItem tal que el id del item sea igual al pasado
        let newBasket = [...state.basket];
        if(index>=0){
            newBasket.splice(index, 1)
        }else {alert("No se puede remover el producto")}
        //sacamos una copia del nuevo basket y si encuentra el indice elimina 1 elemento a partir de ese indice (splice)
        return{
           ...state, //todo el estado + lo nuevo
            basket:newBasket,
           
        };
        
        case "SET_USER":
            return {
                ...state, 
                user: action.user

            }

            case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:action.basket
                }

    default: return state; // caso de falla retorne el estado
}
}
export default reducer;