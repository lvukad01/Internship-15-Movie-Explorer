import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'
import getYouTubeEmbed from '../../helper/getYouTubeEmbed.js'
import api from '../../api/axiosInstance'
import useFetch from '../../hooks/useFetch'

export default function MovieDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const { data: movie, loading, error, setData } = useFetch(`/movies/${id}`);

    const handleFavorites = async () => {
        const newStatus = !movie.isFavorite;
        try {
            await api.patch(`/movies/${id}`, {
                isFavorite: newStatus
            });
            setData({ ...movie, isFavorite: newStatus });
        } catch (err) {
            console.error("Error updating favorites:", err);
        }
    }

    if (loading) return <p className={style.loading}>Loading movie details...</p>;
    if (error) return <p className={style.error}>{error}</p>;
    if (!movie) return <p>Movie not found.</p>;

    const embedUrl = getYouTubeEmbed(movie.video);

    return (
        <div className={style.movieDetail}>
            <div className={style.back}>
                <button onClick={() => navigate(-1)}>← Back</button>
            </div>
            
            <div className={style.favorites}>
                <button className={style.favoriteBtn} onClick={handleFavorites}>
                    <img 
                        className={style.favorite} 
                        src={movie.isFavorite ? favoriteOn : favoriteOff} 
                        alt="fav" 
                    />
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
                {embedUrl && (
                    <div className={style.video}>
                        <iframe 
                            src={embedUrl} 
                            title="trailer" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}