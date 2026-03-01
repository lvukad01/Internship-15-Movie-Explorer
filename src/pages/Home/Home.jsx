import {Link} from 'react-router-dom'
import style from './Home.module.css'

export default function Home() {
  return (
    <header>

    <div className='home'>
      <div className='title'>
        <h1>Movie Explorer</h1>
        <p>Pregledaj filmove i dodaj favorite</p>
      </div>
      <div className='links'>
        <button>
          <Link to="/movies">Movies</Link>
        </button>
        <button>
          <Link to="/favourites"> Favourites</Link>
        </button>
      </div>
    </div>
    </header>
  )
}
