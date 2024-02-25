import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    // Creamos un estado para alojar los datos y el estado de la petición
    const [state,setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    // esta es la función que realiza la petición fetch, que puede ser asincrona
    const getFetch = async () => {
        // al iniciar la petición se cambia el estado isLoading a true porque esta lleyendo
        setState({
            ...state,
            isLoading:true,
        });

        // a continuación se realiza la petición y se extrae la información
        const resp = await fetch(url);
        const data = await resp.json();

        // y ahora cambiamos el estado actualizando la data y poniendo isLoadin a false,porque ha terminado de leer
        setState({
            data,
            isLoading: false,
            hasError: null,
        });

        //console.log(data);

    }

    // Aqui tenemos el useFetch que llamara a la función getFecth cada vez que cambie la url
    useEffect(() => {

        getFetch();

    },[url])

    // el custom hook devuelve los siguientes datos, que se ponen de forma implicita para facilitar la lectura del codigo.

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}