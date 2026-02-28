import {useParams} from 'react-router-dom'
import moviesData from '../data/movies'
import favoriteOff from "../assets/favorite-off-svgrepo-com.svg"
import favoriteOn from "../assets/favorite-svgrepo-com.svg"

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
        <div className='movie_details'>
            <button onClick={()=>handleFavorites() }>
            <img className="favorite on" src={isFavorite? favoriteOn:favoriteOff} 
                /> 
            </button >

            <h2>{movie.title}</h2>
        </div>
    )

}