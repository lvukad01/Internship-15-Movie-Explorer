import { useEffect, useState, useRef, useMemo } from 'react';
import style from './Movies.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Movies() {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useLocalStorage("sortBy", "title_asc");

  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch('/movies', { 
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
    
    // 1. Filter by Title OR Year
    let result = movies.filter(movie => 
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.year.toString().includes(search)
    );

    // 2. Clearer Sort Logic
    switch (sortBy) {
      case "title_asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title_desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year_newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year_oldest":
        result.sort((a, b) => a.year - b.year);
        break;
      case "rating_highest":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "rating_lowest":
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        result.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return result;
  }, [movies, search, sortBy]);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  if (moviesLoading) return <div className={style.loading}>Loading movies...</div>;
  if (moviesError) return <div className={style.error}>{moviesError}</div>;

  return (
    <div className={style.container}>
      <h1>Movies</h1>
      <SearchBar 
        searchInput={searchInput}
        handleSearch={handleSearch}
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchRef={searchRef}
      />

      <div className={style.grid}>
        {filteredAndSorted.length === 0 ? (
          <p className={style.noResults}>No movies found matching your criteria.</p>
        ) : (
          filteredAndSorted.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}