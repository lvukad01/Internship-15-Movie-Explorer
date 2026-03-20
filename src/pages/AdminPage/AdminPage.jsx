import { useState, useEffect } from 'react';
import api from '../../api/axiosInstance';
import style from './AdminPage.module.css';

export default function AdminPage() {
    const [movies, setMovies] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        posterUrl: '',
        year: '',
        rating: '',
        director: '',
        genres: []
    });

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const res = await api.get('/movies');
            setMovies(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditClick = (movie) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsEditing(movie.id);
        setFormData({
            title: movie.title,
            description: movie.description,
            posterUrl: movie.posterUrl,
            year: movie.year,
            rating: movie.rating,
            director: movie.director,
            genres: movie.genres ? movie.genres.map(g => String(g.id)) : []
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await api.delete(`/movies/${id}`);
                setMovies(movies.filter(m => m.id !== id));
            } catch (err) {
                alert("Error");
            }
        }
    };

    const resetForm = () => {
        setIsEditing(null);
        setFormData({ title: '', description: '', posterUrl: '', year: '', rating: '', director: '', genres: [] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            year: Number(formData.year),
            rating: Number(formData.rating),
            genres: formData.genres
        };

        try {
            if (isEditing) {
                await api.patch(`/movies/${isEditing}`, payload);
            } else {
                await api.post('/movies', payload);
            }
            resetForm();
            fetchMovies();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={style.adminContainer}>
            <h1>Movie Management</h1>
            
            <form onSubmit={handleSubmit} className={style.form}>
                <h2>{isEditing ? "Edit Movie" : "Add New Movie"}</h2>
                <input value={formData.title} placeholder="Title" onChange={e => setFormData({...formData, title: e.target.value})} required />
                <input value={formData.director} placeholder="Director" onChange={e => setFormData({...formData, director: e.target.value})} required />
                <input value={formData.year} type="number" placeholder="Year" onChange={e => setFormData({...formData, year: e.target.value})} required />
                <input value={formData.rating} type="number" step="0.1" placeholder="Rating" onChange={e => setFormData({...formData, rating: e.target.value})} required />
                <input value={formData.posterUrl} placeholder="Poster URL" onChange={e => setFormData({...formData, posterUrl: e.target.value})} required />
                <textarea value={formData.description} placeholder="Description" onChange={e => setFormData({...formData, description: e.target.value})} required />
                
                <div className={style.buttonGroup}>
                    <button type="submit" className={style.submitBtn}>
                        {isEditing ? "Update Movie" : "Save Movie"}
                    </button>
                    {isEditing && (
                        <button type="button" className={style.cancelBtn} onClick={resetForm}>Cancel</button>
                    )}
                </div>
            </form>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>
                                <button className={style.editBtn} onClick={() => handleEditClick(movie)}>Edit</button>
                                <button className={style.deleteBtn} onClick={() => handleDelete(movie.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}