import { useNavigate } from 'react-router-dom';
import style from './MovieCard.module.css';
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg";

export default function MovieCard({ movie, onFavoriteClick, showRemoveBtn = false }) {
  const navigate = useNavigate();

  return (
    <div className={`${style.movieCard} ${movie.isFavorite ? style.favoriteMovie : ""}`}>
      <div className={style.clickable} onClick={() => navigate(`/movies/${movie.id}`)}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className={style.poster} 
        />
        <div className={style.info}>
          <span className={style.title}>{movie.title} ({movie.year})</span>
          <span className={style.rating}>⭐ {movie.rating}/10</span>
        </div>
      </div>
      
      {showRemoveBtn && (
        <button 
          className={style.unFavoriteBtn} 
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick(movie.id);
          }}>
          <img 
            className={style.favoriteIcon} 
            src={favoriteOn} 
            alt="unfavorite" 
          />
        </button>
      )}
    </div>
  );
}