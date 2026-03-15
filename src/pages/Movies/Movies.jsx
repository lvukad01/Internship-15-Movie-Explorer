import {useEffect, useState, useRef,useMemo} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './Movies.module.css'
import useLocalStorage from '../../hooks/useLocalStorage'
import api from '../../api/axiosInstance'


export default function Movies(){
  
  const[search, setSearch]=useState("")
  const[searchInput,setSearchInput]=useState("")
  const [movies,setMovies]=useState([])
  const [loading, setLoading]=useState(true)
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("")
  const [error, setError]=useState("")
  const [sortBy, setSortBy]=useLocalStorage("sortBy","title")

  const searchRef=useRef(null)
  const debounceRef=useRef(null)

  const handleSearch = (e) => {
    setSearchInput(e.target.value)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setSearch(e.target.value)
    }, 300)
  }

  const navigate = useNavigate();

    const filteredAndSorted = useMemo(()=>{
        const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
      );
      const sorted=[...filtered]

        if (sortBy === "title") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        setSortBy("title")
        } else if (sortBy === "year") {
        sorted.sort((a, b) => b.year - a.year);
        setSortBy("year")
        } else if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
        setSortBy("rating")
    }
    return sorted
    },[movies,search,sortBy,setSortBy])

    useEffect(()=>{
      api.get('genres')
        .then(res=> setGenres(res.data))
        .catch(err=> console.error("Error loading genres",err))
    },[]);

  useEffect(()=>{
    const fetchMovies=async()=>{
      try{
        const response=await api.get('/movies', { params: { search, genre: selectedGenre } })

        setMovies(response.data)
        setLoading(false)
      }catch(err){
        console.error(err)
        setError("Failed to fetch movies from server")
        setLoading(false)
      }
    };
    fetchMovies();
  },[search,selectedGenre]);

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
          value={searchInput}
          onChange={handleSearch}/>

        <select value={selectedGenre} onChange={(e)=> setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map(g =>(
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>

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

        {filteredAndSorted.map((movie) => {
          const isFav = movie.isFavorite; 
          return (
            <div
              key={movie.id}
              className={`${style.movie} ${isFav ? style.favoriteMovie : ""}`}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <img src={movie.posterUrl} alt={movie.title} />
              <div className={style.title}>
                {movie.title} ({movie.year}) - Rating: {movie.rating}
              </div>
            </div>
          )
        })}
        </div>
    </div>
  ) 
}