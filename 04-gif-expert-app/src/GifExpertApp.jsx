// Despues de la versión 17 de react no es necesario importar React
//import React from "react";

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])
    
	// Modificamos la función onAddCategory para añadir la categoria que se nos pasa como parametro
    const onAddCategory = (newCategory) => {
        console.log (newCategory);
        if(categories.includes(newCategory)) return; // si newCategory ya esta en la lista, no hagas nada.
        // desestructuramos categories y añadimos el nuevo elemento
        setCategories([newCategory,...categories]);
    } 

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
             <button onClick={ onAddCategory }>Agregar</button>

                {categories.map((category) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                )) }
        </>
    )
}
