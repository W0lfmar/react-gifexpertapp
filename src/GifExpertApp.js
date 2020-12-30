import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {


    //Utilizando hook del useState
const[categories,setCategories]=useState(['One Punch']);

// const handleAdd=()=>{
//     // HunterXHunter 
//     // usando operador express ... 
//     // De esta manera estoy manteniendo las categorias anteriores
//     // y agregando una nueva categoria
//    // setCategories([...categories,'Trigun']);
//    setCategories(cats=>[...cats,'Trigun']);
// }

return (
    //mandando setCategories
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                    <GifGrid
                    key={category} 
                    category={category} 
                    />
                    ))
                }
            </ol>
        </>

    );
}


export default GifExpertApp;