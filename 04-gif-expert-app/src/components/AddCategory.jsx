import { useState } from "react"

// desestructuramos onNewCategory, que en realidad es una función para poderla ejecutar
// y realizar de ese modo el disparo del evento
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('New categorie');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // Cuando el valor recibido es el correcto ejecutamos onNewCategory
        // pasandole como parametro el valor, para que le componente padre 
        // reciba el nuevo valor y actualize la lista
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}