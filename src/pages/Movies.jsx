import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import moviesData from '../data/movies'
import { Link } from 'react-router-dom'

export default function Movies({favorites}){

  
  const[search, setSearch]=useState("")
  const [movies,setMovies]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")
  const [sortBy, setSortBy]=useState("title")
  const navigate = useNavigate();

  useEffect(()=>{
    const timer=setTimeout(()=>{
        try{
            setMovies(moviesData)
            setLoading(false)
        }catch(err){
            setError("Something went wrong")
            setLoading(false)
        }
    },1000)
    return()=>clearTimeout(timer)
  },[])


  const filtered = movies.filter(movie =>
  movie.title.toLowerCase().includes(search.toLowerCase())
);
    const filteredAndSorted = [...filtered];

    if (sortBy === "title") {
        filteredAndSorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "year") {
        filteredAndSorted.sort((a, b) => b.year - a.year);
        } else if (sortBy === "rating") {
        filteredAndSorted.sort((a, b) => b.rating - a.rating);
    }

  if(loading)
    return <p>Loading movies...</p>

  if(error)
    return <p>{error}</p>

  return  (
    <div className='Movies-wrapper'>
        <input className='searchbar' type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
        </select>

        <div className='Movies'>
         {filteredAndSorted.length==0 && search!==" " && (
            <p>No movies found</p>
         )}

         {filteredAndSorted.map((movie)=>(
            <div className='movie'
                key={movie.id}
                onClick={()=>navigate(`/movies/${movie.id}`)}
                style={{cursor:"pointer"}}
                >
                {movie.title} ({movie.year}) - Rating: {movie.rating}
            </div>
         )
        )}
        </div>
    </div>
  ) 
}