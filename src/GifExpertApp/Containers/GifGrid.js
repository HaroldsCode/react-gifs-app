import { GridItem } from "../Components/GridItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../../Hooks/useFetchGifs"

export const GifGrid = ({category}) => {
    const { data:images, loading } = useFetchGifs(category);
    return (
        <>
            <h2>Resultados de "{category}"</h2>
            <ul className="cards">
                {loading && <p>Loading Gifs...</p>}
                {images.map(({id, title, url}) => {
                    return <GridItem key={id} title={title} url={url}/>
                })}
            </ul>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}