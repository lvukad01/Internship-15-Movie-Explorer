import style from './Favourites.module.css';
import api from '../../api/axiosInstance';
import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function Favourites() {
  const { data: allMovies, loading, error, setData } = useFetch('/movies');

  const movies = allMovies ? allMovies.filter(movie => movie.isFavorite) : [];

  const handleRemoveFavorite = async (movieId) => {
    try {
      await api.patch(`/movies/${movieId}`, { isFavorite: false });
      setData(prev => prev.map(m => m.id === movieId ? { ...m, isFavorite: false } : m));
    } catch (err) {
      console.error("Greška pri uklanjanju:", err);
    }
  };

  if (loading) return <div className={style.empty}><h2>Učitavanje...</h2></div>;
  if (error) return <div className={style.empty}><h2>Greška: {error}</h2></div>;

  return (
    <div className={style.container}>
      <h1>Moji Favoriti</h1>
      {movies.length === 0 ? (
        <div className={style.empty}><h2>Nema omiljenih filmova.</h2></div>
      ) : (
        <div className={style.grid}>
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onFavoriteClick={handleRemoveFavorite}
              showRemoveBtn={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}