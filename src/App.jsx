
import './App.css'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Movies from './pages/Movies.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import useLocalStorage from '../src/hooks/useLocalStorage.js'


function App() {
    const [favorites,setFavorites]=useLocalStorage("favorites",[]);
    


  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies favorites={favorites}/>}/>
      <Route path="/movies/:id" element={<MovieDetail 
        favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route path="/favourites" element={<Favourites 
        favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}

export default App
