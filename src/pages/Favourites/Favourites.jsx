import moviesData from '../../data/movies'
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from './Favourites.module.css'
export default function Favourites({ favorites, setFavorites }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleFavorites = (movieId) => {
    setFavorites(prev => prev.filter(id => id !== movieId));
  }

  useEffect(() => {
    const favMovies = moviesData.filter(movie => favorites.includes(movie.id));
    setMovies(favMovies);
  }, [favorites]);

  if (movies.length === 0) {
    return (
      <div className={style.favoritesWrapperEmpty}>
        <h2>No favorite movies</h2>
      </div>
    );
  }

  return (
    <div className={style.favoritesWrapper}>
      {movies.map((movie) => (
        <div key={movie.id} className={style.favoriteCard}>
          <div
            className={style.movie}
            onClick={() => navigate(`/movies/${movie.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={movie.img} alt={movie.title} />
            <div className={style.title}>
              {movie.title} ({movie.year}) - Rating: {movie.rating}
            </div>
          </div>

          <button
            className={style.unFavoriteBtn}
            onClick={() => handleFavorites(movie.id)}
          >
            <img className={style.favoriteIcon} src={favoriteOn} alt="unfavorite" />
          </button>
        </div>
      ))}
    </div>
  );
}