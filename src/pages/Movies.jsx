import {useEffect, useState} from 'react'
import moviesData from '../data/movies'


export default function Movies(){

  
  const[search, setSearch]=useState("")
  const [movies,setMovies]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")
  const [sortBy, setSortBy]=useState("title")

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

  const filteredMovies=movies.filter(movie=>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  const sortedMovies=[...movies]
  if(sortBy==="title")
  {
    sortedMovies.sort((a,b)=>a.title.localeCompare(b.title))
  }else if(sortBy==="year"){
    sortedMovies.sort((a,b)=>b.year-a.year);
  }else{
    sortedMovies.sort((a, b) => b.rating - a.rating);
  }
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
         {filteredMovies.length==0 && search!==" " && (
            <p>No movies found</p>
         )}

         {filteredAndSorted.map((movie)=>(
            <p key={movie.id}>{movie.title} ({movie.year})</p>
         )
        )}
        </div>
    </div>
  ) 
}