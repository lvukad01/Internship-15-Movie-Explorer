import { Link } from 'react-router-dom'
import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.heroWrapper}>
      <div className={style.home}>
        <div className={style.title}>
          <h1>Movie Explorer</h1>
          <p>Browse your favorite movies and manage your collection</p>
        </div>
        <div className={style.links}>
          <Link to="/movies" className={style.navBtn}>Explore Movies</Link>
          <Link to="/favorites" className={style.navBtnSecondary}>View Favorites</Link>
        </div>
      </div>
    </div>
  )
}