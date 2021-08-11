import { useState } from "react"
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from "./Containers/GifGrid";

export const GifExpertApp = () => {
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState('One Punch');
    return (
        <>
            <div className="introduce">
                <h1 className="introduce__title">GifExpertApp</h1>
                <p className="introduce__copy">Bienvenido, en este sitio web encontraras gifs divertidos para pasar el rato.</p>
                <AddCategory setNumbers={setCategories}/>
            </div>
            <div className="group">
                {/* {categories.map(category => <GifGrid key={category} category={category}/>)} */}
                <GifGrid key={categories} category={categories}/>
            </div>
        </>
    )
}
