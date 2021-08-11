export const GridItem = ({title, url}) => {
    return (
        <li className="card">
            <img className="card__img" src={url} alt={title} title={title}/>
        </li>
    );
}
