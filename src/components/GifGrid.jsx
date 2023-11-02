import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h4>Cargando...</h4>)
            }
            
            <div className="card-grid">
                {
                    images.map((gif) => (
                        <GifItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}