
import './App.css'
import Home from './pages/Home/Home.jsx'
import Favourites from './pages/Favourites/Favourites.jsx'
import Movies from './pages/Movies/Movies.jsx'
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import useLocalStorage from '../src/hooks/useLocalStorage.js'


function App() {    

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MovieDetail />}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}

export default App
