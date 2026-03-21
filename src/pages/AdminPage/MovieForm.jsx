import style from './AdminPage.module.css';

export default function MovieForm({ formData, setFormData, onSubmit, onCancel, error, isEditing }) {
    return (
        <form onSubmit={onSubmit} className={style.form}>
            <h2>{isEditing ? "Edit Movie" : "Add New Movie"}</h2>
            
            {error && <p className={style.errorBanner}>{error}</p>}

            <div className={style.inputGroup}>
                <label>Movie Title</label>
                <input 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})} 
                    required 
                />
            </div>

            <div className={style.inputGroup}>
                <label>Director</label>
                <input 
                    value={formData.director} 
                    onChange={e => setFormData({...formData, director: e.target.value})} 
                    required 
                />
            </div>

            <div className={style.row}>
                <div className={style.inputGroup}>
                    <label>Release Year</label>
                    <input 
                        value={formData.year} 
                        type="number" min="1888" max="2030" 
                        onChange={e => setFormData({...formData, year: e.target.value})} 
                        required 
                    />
                </div>
                <div className={style.inputGroup}>
                    <label>Rating (0-10)</label>
                    <input 
                        value={formData.rating} 
                        type="number" step="0.1" min="0" max="10" 
                        onChange={e => setFormData({...formData, rating: e.target.value})} 
                        required 
                    />
                </div>
            </div>

            <div className={style.inputGroup}>
                <label>Poster URL</label>
                <input 
                    value={formData.posterUrl} 
                    onChange={e => setFormData({...formData, posterUrl: e.target.value})} 
                    required 
                />
            </div>

            <div className={style.inputGroup}>
                <label>Genres (comma separated)</label>
                <input 
                    value={formData.genres} 
                    onChange={e => setFormData({...formData, genres: e.target.value})} 
                    required 
                />
            </div>

            <div className={style.inputGroup}>
                <label>Trailer Video URL (Optional)</label>
                <input 
                    value={formData.video} 
                    type="url"
                    onChange={e => setFormData({...formData, video: e.target.value})} 
                />
            </div>

            <div className={style.inputGroup}>
                <label>Description</label>
                <textarea 
                    value={formData.description} 
                    onChange={e => setFormData({...formData, description: e.target.value})} 
                    required 
                />
            </div>

            <div className={style.buttonGroup}>
                <button type="submit" className={style.submitBtn}>
                    {isEditing ? "Update Movie" : "Save Movie"}
                </button>
                {isEditing && (
                    <button type="button" className={style.cancelBtn} onClick={onCancel}>Cancel</button>
                )}
            </div>
        </form>
    );
}