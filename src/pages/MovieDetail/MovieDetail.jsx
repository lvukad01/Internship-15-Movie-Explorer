import {useParams} from 'react-router-dom'
import moviesData from '../../data/movies'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'

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
    return(
        
            <div className={style.movieDetail}
                key={movie.id}
                >
                <div className={style.title}>
                  <h1>{movie.title}  ({movie.year})</h1>
                </div>
                <img src={movie.img}/>

            </div>
    )

}