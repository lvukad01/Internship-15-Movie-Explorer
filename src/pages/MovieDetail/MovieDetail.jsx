import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'
import getYouTubeEmbed from  '../../helper/getYouTubeEmbed.js'

export default function MovieDetail({favorites, setFavorites}){
    const navigate = useNavigate();
    const {id}=useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
    .then(res => setMovie(res.data))
    .catch(err => console.error(err))
    }, [id])

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
  if (!movie) return <p>Loading movie details...</p>
    return(
        
            <div className={style.movieDetail}
                key={movie.id}
                >
                <div className={style.back}>
                    <button onClick={() => navigate(-1)}>← Back</button>
                </div>
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
   
                    <img src={movie.posterUrl}/>
                    <div className={style.content}>
                        <h3>Genre: {movie.genre}</h3>
                        <p>{movie.info}</p>
                        <p>Rating: {movie.rating}/10</p>
                    </div>
                </div>

            </div>
    )

}