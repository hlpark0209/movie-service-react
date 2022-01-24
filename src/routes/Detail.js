//id값을 가져오기 위해 useParams import
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Point from '../components/Point';


function Detail( ){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    
    // const getMovie = async () => {
    //     const json = await(
    //         await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
    //         console.log(json);
    // };


    // // 각 영화에 해당하는 id값을 호출
        useEffect( () => {
            fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then( response => response.json())
            .then(json => {
                setDatas(json.data.movie);
                setLoading(false);
            });
        }, []);
        console.log(datas);
            return (
                <div>
                    {loading ? <h4 className='loading'>Loading...</h4> :
                        <Point 
                            background_image = {datas.background_image}
                            title= {datas.title}
                            rating= {datas.rating}
                            runtime= {datas.runtime}
                            genres= {datas.genres}
                            description_full= {datas.description_full}
                            medium_cover_image= {datas.medium_cover_image}
                        />  
                    }
                </div>
            );
    }



export default Detail;