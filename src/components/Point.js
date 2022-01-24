// Point component가 해당 정보들을 parent component( Detail.js )로부터 받아옴

function Point({ background_image, title, rating, runtime, genres, description_full, medium_cover_image }){
    return (
            <div className="detailWrap">
                <img src={background_image} className="detailWrapBg" />
                <div className='detailWrap__con'>
                    <div className='detailWrap__info'>
                    <h1>{title}</h1>
                        <div className='detailWrap__info_basic'>
                            <p>🌟{rating}</p>
                            <p>{runtime}M</p>
                            <p>{genres.map( index => <p className='genreIndex'>{index}</p> )}</p>
                        </div>
                        <p className='description'>{description_full}</p>
                    </div>
                    <div className='detailWrap__poster'>
                        <img src={medium_cover_image} />
                    </div>
                </div>
            </div>
    )
}



export default Point;