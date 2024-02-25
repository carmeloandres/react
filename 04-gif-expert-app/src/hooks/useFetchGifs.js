import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState( true ); // cuando se inicia la carga se crea el hook con el valor true

    const getImages = async() => {
        const newImages = await getGifs( category );
            setImages( newImages );
    }

    useEffect( () => { 
        getImages();
        setIsLoading(false); // cuando la carga ha finalizado se establece el valor de isLoading a false
    }, [])


    return {
        images,
        isLoading
    }
}