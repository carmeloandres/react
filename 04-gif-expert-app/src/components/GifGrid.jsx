//import { useState, useEffect } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs} from '../hooks/useFetchGifs';
//simport { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const { images, isloading } = useFetchGifs( category );

//    const [images, setImages] = useState([]);
//
//    const getImages = async() => {
//        const newImages = await getGifs( category );
//            setImages( newImages );
//    }
//
//    useEffect( () => { 
//        getImages();
//    }, [])


    return (
        <>
            <h3>{ category }</h3>
            {
                isloading && (<h2>Cargando...</h2>)   
            }
            <div className="card-grid">
                    { images.map((image) => (
                        <GifItem 
                            key={image.id}
                            { ...image } // esparcimos todas las propiedades del image
                        />  
                        ))
                    }   
            </div>
        </>
    )
}