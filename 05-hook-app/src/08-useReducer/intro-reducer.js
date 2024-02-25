

// Creamos un estado inicial con la siguiente información
const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

// un reducer es una función pura que devuelve un nuevo estado
const todoReducer = (state = initialState, action= {}) =>{
        // esxplicación entendible tras leer hasta linea del const addTodoAction
    // //ahora dependiendo de la acción llevo a cabo una funcionalidad u otra,
    // //en esta caso '[TODO] add todo' añado el payload al estado y devuelvo un nuevo estado 
    if (action.type === '[TODO] add todo'){
        return[...state, action.payload];

    // hay que evitar utilizar el push, no se debe mutar el state
    //   state.push(action.payload)  
    }

    return state;
}

let todos = todoReducer();

// podriamos modificar el array de los todos, del siguiente modo, pero es algo
// que no debemos hacer, los use reducer modificam en su interior los estados y
// devuelven un nuevo estado.
// En react esta practica no redibuja nada, es mala practica
/*todos.push({
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false
}); */

// Para hacer una modificación al estado le mandamos una acción al reducer.

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

// la estructura de las acciones esta formada por un objeto con dos parametros, 
// el type, que es un string que define lo que se va ha hacer con el stado y
// habitualmente la información con la que vamos a modificar el estado llamada payload, 'carga'
// que no siempre existira, si la acción consiste en borrar algún elemento, no habra payload.
const addTodoAction ={
    type: '[TODO] add todo',
    payload: newTodo
}


todos = todoReducer(todos,addTodoAction);

console.log(todos);