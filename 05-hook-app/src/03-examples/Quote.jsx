import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({
        quote,
        author
    }) => {

    // creamos una referencia para asignarla a parrafo
    const pRef = useRef();
    // creamos un estado para las dimensiones de la caja del parrabo
    const [boxSize,setBoxSize] = useState({width: 0, height: 0})

    // utilizamos el hook para mostrar las dimensiones de la caja
    useLayoutEffect( () => {
        // mostramos en consola las dimensiones de la caja
        console.log(pRef.current.getBoundingClientRect());
        // desestructuramos el alto y el ancho de las dimensiones de la caja
        const { height, width } = pRef.current.getBoundingClientRect();
        // establecemos las dimensione de la caja
        setBoxSize({ height, width });

    },[quote])    

    return (   
        <>
        <blockquote 
            className="blockquote text-end"
            style={{ display: 'flex' }}
        >
            
            <p ref={pRef /* Asignamos la referencia del parrafo a pRef*/ } className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>        
        </>    
    )
}