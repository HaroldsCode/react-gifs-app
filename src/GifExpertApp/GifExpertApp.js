import { useState } from "react";
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from "./Containers/GifGrid";

export const GifExpertApp = ({categoryValue}) => {
    const [categories, setCategories] = useState(categoryValue);
    return (
        <>
            <div className="introduce">
                <h1 className="introduce__title">GifExpertApp</h1>
                <p className="introduce__copy">Bienvenido, en este sitio web encontraras gifs divertidos para pasar el rato.</p>
                <AddCategory setNumbers={setCategories}/>
            </div>
            {(categories !== '') && (
                <div className="group">
                    <GifGrid key={categories} category={categories}/>
                </div>
            )}
        </>
    )
}

GifExpertApp.defaultProps = {
    categoryValue: '',
}