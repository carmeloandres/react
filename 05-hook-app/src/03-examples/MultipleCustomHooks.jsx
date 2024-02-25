// importamos el useCounter y el useFetch
import { useCounter, useFetch} from "../hooks"
import { LoadingQuote, Quote } from "./"

// creamos el functional component
export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);
    
    // desestructuramos la información de nuestro custom hook: useFetch
    const {data, isLoading, hasError} = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);

    // si la hay data, es diferente de null entonces desestructua data[0], el primer elemento del array
    // en caso contrario desestructurara 'false' lo que dará como resultado en author y quote con undefined.
    const {author, quote} = !!data && data[0];

    // mostramos por consola la información del useFecth
    console.log({data, isLoading, hasError, counter});
    

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                // utilizamos el condicional ternario porque son pocas lineas
                // de manera que si esta cargando se muestre el rotulo de cargando
                isLoading
                    ? <LoadingQuote />
                    // en caso de que ya se ha cargado se muestra el contenido
                    : <Quote quote={quote} author={author} />
            }

            <button 
                className="btn btn-primary" 
                disabled={ isLoading }
                onClick={() => {increment()}}>
                Next quote
            </button>
        </>
    )
}