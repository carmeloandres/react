import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar :(');
    return(
        <button
            className = "btn btn-primary"
            onClick={() => {
                // incrementamos de 5 en 5
                increment(5);
            }}
        >
        Incrementar
        </button>
    )
})