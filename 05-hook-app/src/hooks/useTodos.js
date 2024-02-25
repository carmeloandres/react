import { useReducer, useEffect } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialState = [] ) => { // le pasamos la estructura de datos del formulario, mejor en formato de objeto
    

    const [todos, dispach] = useReducer(todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify( todos ) )
    },[todos]);

    const handleNewTodo = ( todo ) => {
        const action ={
            type: '[TODO] Add todo',
            payload: todo
        }

        dispach( action );
    }

    const handleDeleteTodo = (id) => {
        dispach({
            type: '[TODO] Remove todo',
            payload: id
        });
    } 

    const handleToggleTodo = (id) => {
        dispach({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
  

    return { // y ponemos a disposición, 
        todos,   // la desestructuración de los todos,
        handleDeleteTodo,      // la funcion para borrar todos
        handleToggleTodo,   // la función para alternar el campo done, tachado
        handleNewTodo       // la función para agregar un nuevo todo
    }
}