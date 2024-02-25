import { useRef } from 'react';

export const FocusScreen = () => {

    // creamos una referencia utilizando el hook useRef
    const inputRef = useRef();
    

    const onClick = () =>{
        // utilizamos la referencia creada, con el useRef y asignada en el elemento con ref
        // para ejecutar la función select() del elemento html 
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input
            // esta estructura asigna la referencia del elemento al inputRef
            ref = {inputRef} 
            type="text"
            placeholder ="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={onClick}
        >
            Set Focus
        </button>
    </>
    )
}