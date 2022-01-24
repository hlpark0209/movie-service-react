import { useState, useEffect } from "react";
import Movie from '../components/Movie';


// MovieApp.js component 전체를 포함
// MovieApp.js의 코드가 Home.js로 이동
function Home(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    useEffect( () => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&sort_by=year")
        .then(response => response.json())
        .then(json => {
            setMovies(json.data.movies);
            setLoading(false);
        });
    },[]);
;
    // console.log(movie);
    

    return (
        <div className='wrap'>
            <header className='nav'>
                <div className="logo">
                    <a href='/'><img src='img/nav_logo.png' alt='nav_logo' /></a>
                </div>
                <ul className='navMenu'>
                    <li className='menu'><a href='/'>Home</a></li>
                    <li className='menu'><a href='/'>Romance</a></li>
                    <li className='menu'><a href='/'>Thrill</a></li>
                    <li className='menu'><a href='/'>Animation</a></li>
                </ul>
            </header>
            {loading ? <h4 className='loading'>Loading...</h4> : 
                <div className='container'>
                    {/* props으로써 Movie.js로 넘겨서 사용*/}
                    {movie.map( (item) => (
                        <Movie 
                            //react에서 map안에서 component들을 render할떄 사용
                            key={item.id}
                            id ={item.id}
                            title={item.title}
                            // genres={item.genres}
                            summary={item.summary}
                            image={item.medium_cover_image}
                        />
                    ))}
                </div>
                    
            }

        </div>
    );
}
export default Home;