
import { useState } from "react";
export const useForm = (initialForm = {} ) => { // le pasamos la estructura de datos del formulario, mejor en formato de objeto
    
    const [formState,setFormState] = useState( initialForm ); // creamos el estado del formulario

    const onInputChange = ({target}) => { // icluimos la función para manejar los cambios en el input
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const onResetForm = () => { setFormState(initialForm)}

    return { // y ponemos a disposición, 
        ...formState,   // la desestructuración de los datos del formulario,
        formState,      // la estructura completa de datos del formulario
        onInputChange,   // la función para manejar el cambio de los input
        onResetForm 
    }
}