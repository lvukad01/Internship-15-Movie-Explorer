import { useState, useEffect } from 'react';
import api from '../../api/axiosInstance';
import style from './AdminPage.module.css';
import { useNavigate } from 'react-router-dom';
import MovieForm from './MovieForm'; // Uvezi novu komponentu

export default function AdminPage() {
    const [movies, setMovies] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).role === 'ADMIN' : false;

    const [formData, setFormData] = useState({
        title: '', description: '', posterUrl: '', year: '', rating: '', director: '', genres: '', video: ''
    });

    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/login'); 
        else fetchMovies();
    }, [navigate]);

    const fetchMovies = async () => {
        try {
            const res = await api.get('/movies');
            setMovies(res.data);
        } catch (err) { console.error(err); }
    };

    const handleEditClick = (movie) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setError("");
        setIsEditing(movie.id);
        setFormData({
            ...movie,
            genres: Array.isArray(movie.genres) ? movie.genres.map(g => g.name || g).join(", ") : "",
            video: movie.video || ''
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await api.delete(`/movies/${id}`);
                setMovies(movies.filter(m => m.id !== id));
            } catch (err) { alert("Error deleting movie."); }
        }
    };

    const resetForm = () => {
        setIsEditing(null);
        setError("");
        setFormData({ title: '', description: '', posterUrl: '', year: '', rating: '', director: '', genres: '', video: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.posterUrl.startsWith("data:image")) return setError("Please use a direct Image URL.");
        
        const nameRegex = /^[a-zA-Z\s\.\-čćžšđČĆŽŠĐ]+$/;
        if (!nameRegex.test(formData.director)) return setError("Director name must contain only letters.");

        const payload = {
            ...formData,
            year: Number(formData.year),
            rating: Number(formData.rating),
            genres: typeof formData.genres === 'string' ? formData.genres.split(",").map(g => g.trim()).filter(Boolean) : formData.genres
        };

        try {
            if (isEditing) await api.patch(`/movies/${isEditing}`, payload);
            else await api.post('/movies', payload);
            resetForm();
            fetchMovies();
            alert("Success!");
        } catch (err) {
            const msg = err.response?.data?.message;
            setError(Array.isArray(msg) ? msg[0] : msg || "Error occurred.");
        }
    };

    return (
        <div className={style.adminContainer}>
            <h1>Movie Management</h1>
            
            {isAdmin && (
                <MovieForm 
                    formData={formData} 
                    setFormData={setFormData} 
                    onSubmit={handleSubmit} 
                    onCancel={resetForm} 
                    error={error} 
                    isEditing={isEditing} 
                />
            )}

            <table className={style.table}>
                <thead>
                    <tr><th>Title</th><th>Year</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>
                                {isAdmin ? (
                                    <>
                                        <button className={style.editBtn} onClick={() => handleEditClick(movie)}>Edit</button>
                                        <button className={style.deleteBtn} onClick={() => handleDelete(movie.id)}>Delete</button>
                                    </>
                                ) : "View Only"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}