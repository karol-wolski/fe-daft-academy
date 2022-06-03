import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './Navigation.module.css'
import menuIcon from '../../images/menu.svg'
import closeIcon from '../../images/close.svg'


const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => setIsNavigationOpen(state => !state)
  const closeMobileMenu = () => setIsNavigationOpen(false)

  return (
    <nav className={styles.navigation}>
      <button 
        className={styles.navigation__button} 
        onClick={toggleMobileMenu}
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
          <Link 
            to="/" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              Home
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link 
            to="/about" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              About
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link 
            to="/contact" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              Contact
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link 
            to="/week-2" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              Week 2
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link 
            to="/ram" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              Rick & Morty
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link 
            to="/airtable" 
            className={styles.navigation__link}
            onClick={closeMobileMenu}>
              AirTable
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation