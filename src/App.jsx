import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Movies from './pages/Movies/Movies';
import Favourites from './pages/Favourites/Favourites';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
