import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Movies from './pages/Movies/Movies';
import Favourites from './pages/Favourites/Favourites';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Admin from './pages/AdminPage/AdminPage'


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/auth/register" element={<Register/>} />
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
