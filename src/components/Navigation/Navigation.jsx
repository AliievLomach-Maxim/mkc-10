import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const getActiveClassnames = ({ isActive }) => clsx(isActive && styles.active)

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={getActiveClassnames}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className={getActiveClassnames}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/articles' className={getActiveClassnames}>
            Articles
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
