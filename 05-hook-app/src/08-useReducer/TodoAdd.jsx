import { useState } from "react";

export const TodoAdd = ({
    onNewTodo
}) => {

    const  [inputValue, setInputValue] = useState('');
 
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
 
        if (inputValue.length <= 1) return;

        const newData = {
            id : new Date().getTime(),
            description: inputValue,
            done: false,
        }

        onNewTodo(newData);
        setInputValue('');
    }

return(
    <>
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value={ inputValue}
                onChange={ onInputChange }
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >  
            Agregar
            </button>
        </form>
    </>
)
}