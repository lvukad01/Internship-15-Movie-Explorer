import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();
  
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');

    
    navigate('/login');
    window.location.reload(); 
  };

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

        {isLoggedIn ? (
          <>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Favorites
            </NavLink>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Admin
            </NavLink>
            <button onClick={handleLogout} className={style.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Login
            </NavLink>
            <NavLink 
              to="/register" 
              className={({ isActive }) => isActive ? style.activeLink : style.link}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}