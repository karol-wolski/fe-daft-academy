import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './Navigation.module.css'
import menuIcon from '../../images/menu.svg'
import closeIcon from '../../images/close.svg'


const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false)
  return (
    <nav className={styles.navigation}>
      <button 
        className={styles.navigation__button} 
        onClick={() => setIsNavigationOpen(state => !state)}
        aria-labelledby="Menu"
        >
          {isNavigationOpen ? 
          <img src={closeIcon} alt='close menu icon' /> : 
          <img src={menuIcon} alt='hamburger menu icon' />}
      </button>
      <ul className={isNavigationOpen ? 
        `${styles.navigation__list} ${styles['navigation__list--open']}` : 
        styles.navigation__list}>
        <li className={styles.navigation__item}>
          <Link to="/" className={styles.navigation__link}>Home</Link>
        </li>
        <li className={styles.navigation__item}>
          <Link to="/about" className={styles.navigation__link}>About</Link>
        </li>
        <li className={styles.navigation__item}>
          <Link to="/contact" className={styles.navigation__link}>Contact</Link>
        </li>
        <li className={styles.navigation__item}>
          <Link to="/week-2" className={styles.navigation__link}>Week 2</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation