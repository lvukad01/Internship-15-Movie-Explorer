import style from './SearchBar.module.css';

export default function SearchBar({ 
  searchInput, 
  handleSearch, 
  genres, 
  selectedGenre, 
  setSelectedGenre, 
  sortBy, 
  setSortBy, 
  searchRef 
}) {
  return (
    <div className={style.searchbar}>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search movies..."
        value={searchInput}
        onChange={handleSearch}/>

      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All genre</option>
        {genres?.map(g => (
          <option key={g.id} value={g.name}>{g.name}</option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Name (A-Z)</option>
        <option value="year">Year (Most recent)</option>
        <option value="rating">Rating (Highest)</option>
      </select>
    </div>
  );
}