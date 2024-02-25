import { memo } from 'react';

export const Small = memo( ({ value}) => {
        console.log('Se redibujo');
    return(
        <small>{ value }</small>
    )
})