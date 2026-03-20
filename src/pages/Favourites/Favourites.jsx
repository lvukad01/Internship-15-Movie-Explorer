import style from './Favourites.module.css';
import api from '../../api/axiosInstance';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useEffect,useState } from 'react';

export default function Favourites() {
  const [favorites,setFavorites]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const token=localStorage.getItem('token')

    if(!token){
      window.location.href='/auth/login';
      return;
    }

    const fetchFavorites=async()=>{
      try{
        const res=await api.get('/favorites');
        setFavorites(res.data);
      }catch(err){
        console.error("Error ", err)
      }finally{
        setLoading(false);
      }
    }
    fetchFavorites();
  },[])


  const handleRemoveFavorite = async (movieId) => {
    try {
      await api.delete(`/favorites/${movieId}`);
      setFavorites(prev=>prev.filter(fav=>fav.movieId!=movieId));
    } catch (err) {
      console.error("Error occurred while removing from favorites:", err);
    }
  };

  if (loading) return <div className={style.empty}><h2>Loading...</h2></div>;

  return (
    <div className={style.container}>
      <h1>My favorites</h1>
      {favorites.length === 0 ? (
        <div className={style.empty}><h2>No favorite movies.</h2></div>
      ) : (
        <div className={style.grid}>
          {favorites.map(fav => (
            <MovieCard 
              key={fav.id} 
              movie={fav.movie} 
              onFavoriteClick={handleRemoveFavorite}
              showRemoveBtn={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}