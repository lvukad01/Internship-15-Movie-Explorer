import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg";
import style from './Favourites.module.css';

export default function Favourites({ favorites, setFavorites }) {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

const handleFavorites = (movieId) => {
setFavorites(prev => prev.filter(id => id !== movieId));
};
useEffect(() => {
const fetchFavoriteMovies = async () => {
try {
setLoading(true);
const res = await axios.get('http://localhost:3000/movies');
const favMovies = res.data.filter(movie =>
favorites.map(Number).includes(Number(movie.id))
);
setMovies(favMovies);
} catch (err) {
console.error("Greška:", err);
} finally {
setLoading(false);
}
};
fetchFavoriteMovies();
}, [favorites]);
if (loading) return <div className={style.favoritesWrapperEmpty}><h2>Loading...</h2></div>;

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