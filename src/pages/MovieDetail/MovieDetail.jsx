import { useParams, useNavigate } from 'react-router-dom'
import favoriteOff from "../../assets/icon/favorite-off-svgrepo-com.svg"
import favoriteOn from "../../assets/icon/favorite-svgrepo-com.svg"
import style from './MovieDetail.module.css'
import getYouTubeEmbed from '../../helper/getYouTubeEmbed.js'
import api from '../../api/axiosInstance'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'

export default function MovieDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    
    const { data: movie, loading, error, setData } = useFetch(`/movies/${id}?_expand=genre`);
    useEffect(()=>{
    const checkFavoriteStatus = async () => {
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('token');
                if (!userId || !token) return;

                try {
                    const res = await api.get(`/favorites?userId=${userId}`);
                    const found = res.data.some(fav => fav.movieId === Number(id));
                    setIsFavorite(found);
                } catch (err) {
                    console.error("Error checking favorite status:", err);
                }
            };

            checkFavoriteStatus();
        }, [id]);

    const handleFavorites = async () => {
        const token=localStorage.getItem('token')
        const userId=localStorage.getItem('userId')
        if(!token){
            alert("Sign in to favorite a movie")
            window.location.href='/auth/login'
            return;
        }
        try {
            if (isFavorite) {
                        await api.delete(`/favorites/${id}` );
                        setIsFavorite(false); 
                    } else {
                        await api.post(`/favorites`, { 
                            userId: Number(userId), 
                            movieId: Number(id) 
                        });
                        setIsFavorite(true);
                    }
            
        } catch (err) {
            console.error("Error updating favorites:", err);
        }
    }



    if (loading) return <div className={style.loading}>Loading...</div>;
    
    if (error || (!loading && !movie)) {
        return (
            <div className={style.errorContainer}>
                <h2>Movie not found.</h2>
                <button className={style.backBtn} onClick={() => navigate('/movies')}>Back</button>
            </div>
        );
    }

    const embedUrl = getYouTubeEmbed(movie.video);

    return (
        <div className={style.movieDetail}>
            <div className={style.header}>
                <button className={style.backBtn} onClick={() => navigate(-1)}>← Back</button>
                <div className={style.favorites}>
                    <button className={style.favoriteBtn} onClick={handleFavorites}>
                        <img 
                            className={style.favoriteIconDetail} 
                            src={isFavorite ? favoriteOn : favoriteOff} 
                            alt="fav" 
                        />
                    </button>
                </div>
            </div>
            
            <div className={style.title}>
                <h1>{movie.title} ({movie.year})</h1>
            </div>

            <div className={style.mediaRow}>
                <img src={movie.posterUrl} alt={movie.title} className={style.poster} />
                
                <div className={style.content}>
                <h3>
                    Genre: {movie.genres && movie.genres.length > 0 
                    ? movie.genres.map(g => g.name).join(', ') 
                    : 'No genres'}
                </h3>                    
                <p>{movie.description}</p>
                    <p className={style.rating}>Rating: ⭐ {movie.rating}/10</p>
                    <p>Producer: {movie.director}</p>
                </div>

                {embedUrl && (
                    <div className={style.videoWrapper}>
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