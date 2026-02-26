
import './App.css'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Movies from './pages/Movies.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'


function App() {
    const [favorites,setFavorites]=useState([]);


  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies favorites={favorites}/>}/>
      <Route path="/movies/:id" element={<MovieDetail 
        favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}

export default App
