import { GridItem } from "../Components/GridItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../../Hooks/useFetchGifs";

export const GifGrid = ({ param }) => {

  const { data: images, loading } = useFetchGifs(param);

  return (
      loading 
      ? <div className="spinner"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
      : <ul className="cards">
        { images.map(({ id, title, url }) => {
          return <GridItem key={id} title={title} url={url} />;
        })}
      </ul>
  );
};

GifGrid.propTypes = {
  param: PropTypes.string.isRequired,
};
