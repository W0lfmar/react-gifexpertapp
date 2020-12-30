import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //desestructuracion cambiando el nombre del data
    // Llamando al customHook useFetchGifs
    const {data:images,loading}= useFetchGifs(category);



    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp">{category}</h3>

            {loading && <p className="animate__animated animate__flash" >Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            // ...img envia los atributos por separado
                            {...img}
                        />
                    ))
                }

            </div>

        </>
    )
}
