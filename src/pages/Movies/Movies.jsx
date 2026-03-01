import {useEffect, useState, useRef,useMemo} from 'react'
import { useNavigate } from 'react-router-dom'
import moviesData from '../../data/movies'
import style from './Movies.module.css'

export default function Movies({favorites}){

  
  const[search, setSearch]=useState("")
  const [movies,setMovies]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")
  const [sortBy, setSortBy]=useState("title")

  const searchRef=useRef(null)

  const navigate = useNavigate();

    const filteredAndSorted = useMemo(()=>{
        const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
      );
      const sorted=[...filtered]

        if (sortBy === "title") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "year") {
        sorted.sort((a, b) => b.year - a.year);
        } else if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted
    },[movies,search,sortBy])

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
  useEffect(()=>{
    searchRef.current?.focus()

  })
  if(loading)
    return <p className={style.loading}>Loading movies...</p>

  if(error)
    return <p className={style.error}>{error}</p>



  return  (
    <div className={style.movieCard}>
      <h1>Movies</h1>
      <div className={style.searchbar}>
          <input
          ref={searchRef}
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
        </select>
      </div>
        <div className={style.movies}>
         {filteredAndSorted.length==0 && search!==" " && (
            <p>No movies found</p>
         )}

         {filteredAndSorted.map((movie)=>(
            <div className={style.movie}
                key={movie.id}
                onClick={()=>navigate(`/movies/${movie.id}`)}
                style={{cursor:"pointer"}}
                >
                  <img src={movie.img}/>
                <div className={style.title}>
                  {movie.title} ({movie.year}) - Rating: {movie.rating}
                </div>
            </div>
         )
        )}
        </div>
    </div>
  ) 
}