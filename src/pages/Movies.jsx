import {useEffect, useState} from 'react'
import moviesData from '../data/movies'


export default function Movies(){

  
  const[search, setSearch]=useState("")
  const [movies,setMovies]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")

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
        <div className='Movies'>
         {filteredMovies.length==0 && search!==" " && (
            <p>No movies found</p>
         )}

         {filteredMovies.map((movie)=>(
            <p key={movie.id}>{movie.title} ({movie.year})</p>
         )
        )}
        </div>
    </div>
  ) 
}