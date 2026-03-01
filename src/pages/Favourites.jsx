import {useParams} from 'react-router-dom'
import moviesData from '../data/movies'
import favoriteOff from "../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../assets/icon/favorite-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Favourites({favorites, setFavorites}){
    const [movies, setMovies]=useState([])
    const navigate=useNavigate();


   const handleFavorites=(movieId)=>{
    setFavorites(prev=>
        prev.filter(id=>id!==movieId)
    )
   }
   useEffect(()=>{
    const favMovies = moviesData.filter(movie =>
        favorites.includes(movie.id))
        setMovies(favMovies)

       },[favorites])

    return (
        
        <div className="favorites">
            {movies.length===0 &&(
                <p>No movies yet</p>
            )}
            {movies.map((movie)=>
            <div key={movie.id}>
             <div className='movie'
                key={movie.id}
                onClick={()=>navigate(`/movies/${movie.id}`)}
                style={{cursor:"pointer"}}
                >
                {movie.title} ({movie.year}) - Rating: {movie.rating}
             </div>
            <button className='unFavorite' onClick={()=>handleFavorites(movie.id) }>
            <img className="favorite on" src={favoriteOn} 
                /> 
            </button >
            </div>
                )}

        </div>
    )
}