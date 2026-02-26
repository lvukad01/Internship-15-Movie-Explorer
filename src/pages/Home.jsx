import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <header>

    <div className='home'>
      <div className='title'>
        <h1>Movie Explorer</h1>
        <p>Pregledaj filmove i dodaj favorite</p>
      </div>
      <div className='links'>
        <Link to="/movies">Movies</Link>
        <Link to="/favourites"> Favourites</Link>
      </div>
    </div>
    </header>
  )
}
