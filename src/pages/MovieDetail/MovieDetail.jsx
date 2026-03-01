import {useParams} from 'react-router-dom'
import moviesData from '../../data/movies'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'
import getYouTubeEmbed from  '../../helper/getYouTubeEmbed.js'

export default function MovieDetail({favorites, setFavorites}){
    const {id}=useParams()
    const movie=moviesData.find((e)=>
    e.id==id)
    const isFavorite=favorites.includes(movie.id)
   const handleFavorites=()=>{
    if(isFavorite){
        setFavorites(favorites.filter((e)=>e !==movie.id))
    }
    else{
        setFavorites([...favorites,movie.id])
    }
   }
    const embedUrl = getYouTubeEmbed(movie.video);

  if (!embedUrl) return <p>Video not available</p>;
    return(
        
            <div className={style.movieDetail}
                key={movie.id}
                >
                <div className={style.favorites}>
                <button className={style.favoriteBtn} onClick={()=>handleFavorites() }>
                <img className={style.favorite} src={isFavorite? favoriteOn:favoriteOff} 
                    /> 
                </button >
                </div>
                <div className={style.title}>
                  <h1>{movie.title}  ({movie.year})</h1>
                </div>
                <div className={style.media}>
                      <iframe
                        width="560"
                        height="315"
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <img src={movie.img}/>
                    <div className={style.content}>
                        <h3>Genre: {movie.genre}</h3>
                        <p>{movie.info}</p>
                        <p>Rating: {movie.rating}/10</p>
                    </div>
                </div>

            </div>
    )

}