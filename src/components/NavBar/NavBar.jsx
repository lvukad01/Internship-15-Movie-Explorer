import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
         MovieApp
      </div>
      <div className={style.links}>
        <NavLink 
          to="/movies" 
          className={({ isActive }) => isActive ? style.activeLink : style.link}>
          Movies
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => isActive ? style.activeLink : style.link}>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}