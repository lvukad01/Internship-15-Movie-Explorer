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
  const [sortBy, setSortBy] = useLocalStorage("sortBy", "title");

  const searchRef = useRef(null);
  const debounceRef = useRef(null);

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
    if (sortBy === "title") sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "year") sorted.sort((a, b) => b.year - a.year);
    else if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [movies, sortBy]);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  if (moviesLoading) return <p className={style.loading}>Loading...</p>;
  if (moviesError) return <p className={style.error}>{moviesError}</p>;

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
        searchRef={searchRef}/>

      <div className={style.grid}>
        {filteredAndSorted.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredAndSorted.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}