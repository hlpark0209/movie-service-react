import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Movie의 component가 해당 정보들을 parent component( Home.js )로부터 받아옴
function Movie( {title, genres, summary, image, id} ){
    return (
            <ul className='moviesWrap'><Link to={`/movie/${id}`}>
                <img src={image} alt={title} className="thumbnail"/ >
                {/* <div className='layer hide'>
                    <div className='layerText'>
                        <h2>{title}</h2>
                        <p>{summary}</p>
                    </div>
                </div> */}
                <h3 className='title'>{title}</h3>
                {/* <span>Genres: {genres}</span> */}
                {/* <p>{summary}</p> */}
            </Link></ul>
    );
}


{/* prop Types설정 */}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id : PropTypes.number.isRequired
}


export default Movie;

