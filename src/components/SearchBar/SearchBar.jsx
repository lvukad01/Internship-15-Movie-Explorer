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
    <div className={style.searchBar}>
      <div className={style.inputGroup}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search by title or year..."
          value={searchInput}
          onChange={handleSearch}
          className={style.searchInput}
        />
      </div>

      <div className={style.filterGroup}>
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className={style.select}
        >
          <option value="">All Genres</option>
          {genres?.map(g => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>

        <div className={style.sortGroup}>
          <label htmlFor="sort">Sort by:</label>
          <select 
            id="sort"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className={style.select}
          >
            <option value="title_asc">Title (A-Z)</option>
            <option value="title_desc">Title (Z-A)</option>
            <option value="year_newest">Year (Newest)</option>
            <option value="year_oldest">Year (Oldest)</option>
            <option value="rating_highest">Rating (Highest)</option>
            <option value="rating_lowest">Rating (Lowest)</option>
          </select>
        </div>
      </div>
    </div>
  );
}