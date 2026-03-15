import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'
import getYouTubeEmbed from '../../helper/getYouTubeEmbed.js'

export default function MovieDetail() {
    const navigate = useNavigate();
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.error(err))
    }, [id])

    if (!movie) return <p className={style.loading}>Loading movie details...</p>;


    const handleFavorites = async() => {
        const newStatus = !movie.isFavorite;
        
        try {
            await axios.patch(`http://localhost:3000/movies/${id}`, {
                isFavorite: newStatus
            });
            setMovie({ ...movie, isFavorite: newStatus });
            
        } catch (err) {
            console.error("Error loading favorites:", err);
        }
    }

    const embedUrl = getYouTubeEmbed(movie.video);

    return (
        <div className={style.movieDetail} key={movie.id}>
            <div className={style.back}>
                <button onClick={() => navigate(-1)}>← Back</button>
            </div>
            
            <div className={style.favorites}>
                <button className={style.favoriteBtn} onClick={() => handleFavorites()}>
                    <img className={style.favorite} src={movie.isFavorite ? favoriteOn : favoriteOff} alt="fav" />
                </button>
            </div>

            <div className={style.title}>
                <h1>{movie.title} ({movie.year})</h1>
            </div>

            <div className={style.media}>
                <img src={movie.posterUrl} alt={movie.title} />
                <div className={style.content}>
                    <h3>Genre: {movie.genre}</h3>
                    <p>{movie.description}</p>
                    <p>Rating: {movie.rating}/10</p>
                    <p>Director: {movie.director}</p>
                </div>
            </div>

        {embedUrl && (
                <div className={style.video}>
                    <iframe src={embedUrl} title="trailer" frameBorder="0" allowFullScreen></iframe>
                </div>
           )}
        </div>
    )
}