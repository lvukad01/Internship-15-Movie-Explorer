import { useNavigate } from 'react-router-dom';
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg";
import style from './Favourites.module.css';
import api from '../../api/axiosInstance';
import useFetch from '../../hooks/useFetch';

export default function Favourites() {
    const navigate = useNavigate();

    const { data: allMovies, loading, error, setData } = useFetch('/movies');

    const movies = allMovies ? allMovies.filter(movie => movie.isFavorite) : [];

    const handleFavorites = async (movieId) => {
        try {
            await api.patch(`/movies/${movieId}`, {
                isFavorite: false
            });
            
            setData(prevMovies => 
                prevMovies.map(m => m.id === movieId ? { ...m, isFavorite: false } : m)
            );

        } catch (err) {
            console.error("Error occurred while removing from favorites:", err);
        }
    };

    if (loading) {
        return (
            <div className={style.favoritesWrapperEmpty}>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className={style.favoritesWrapperEmpty}>
                <h2>Error: {error}</h2>
            </div>
        );
    }

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
                        <img src={movie.posterUrl} alt={movie.title} />
                        <div className={style.title}>
                            {movie.title} ({movie.year}) - Rating: {movie.rating}
                        </div>
                    </div>
                    <button
                        className={style.unFavoriteBtn}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleFavorites(movie.id);
                        }}
                    >
                        <img className={style.favoriteIcon} src={favoriteOn} alt="unfavorite" />
                    </button>
                </div>
            ))}
        </div>
    );
}