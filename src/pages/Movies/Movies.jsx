import { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Movies.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import useFetch from '../../hooks/useFetch';

export default function Movies() {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useLocalStorage("sortBy", "title");

  const searchRef = useRef(null);
  const debounceRef = useRef(null);
  const navigate = useNavigate();

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch('/movies', { 
    search, 
    genre: selectedGenre 
  });

  const { data: genres } = useFetch('/genres');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 300);
  };

  const filteredAndSorted = useMemo(() => {
    if (!movies) return [];

    let sorted = [...movies];

    if (sortBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "year") {
      sorted.sort((a, b) => b.year - a.year);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [movies, sortBy]);

  useEffect(() => {
    searchRef.current?.focus();
  });

  if (moviesLoading) return <p className={style.loading}>Loading movies...</p>;
  if (moviesError) return <p className={style.error}>{moviesError}</p>;

  return (
    <div className={style.movieCard}>
      <h1>Movies</h1>
      <div className={style.searchbar}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search movies..."
          value={searchInput}
          onChange={handleSearch}
        />

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres?.map(g => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className={style.movies}>
        {filteredAndSorted.length === 0 && (
          <p>No movies found</p>
        )}

        {filteredAndSorted.map((movie) => (
          <div
            key={movie.id}
            className={`${style.movie} ${movie.isFavorite ? style.favoriteMovie : ""}`}
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <img src={movie.posterUrl} alt={movie.title} />
            <div className={style.title}>
              {movie.title} ({movie.year}) - Rating: {movie.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}